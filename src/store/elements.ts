import { action, makeAutoObservable } from 'mobx';

import { fetchElements } from '../globals/http';

/**
 * A store for the Elements entity
 */
export class ElementsStore {
  isFetching: boolean = false;
  elements: string[] = []; // Data
  savedSelected: string[] = []; // Saved selection
  selected: string[] = [...this.savedSelected]; // Temporary selection
  searchValue: string = '';
  filter: [number, number] = [0, this.elements.length];

  constructor() {
    makeAutoObservable(this);
  }

  // Elements with applied filters
  get filtered(): string[] {
    return this.elements
      .filter((element) => {
        // Split the search into separate words and match them
        const searchSections = this.searchValue.toLowerCase().split(' ');

        // This allows for smarter search queries
        // (e.g. 'ele 1', '43 elem', etc)
        return searchSections.every((section) =>
          element.toLowerCase().includes(section)
        );
      })
      .filter((element) => {
        const number = parseInt(element.split(' ')[1], 10);
        const [min, max] = this.filter;

        return number >= min && number <= max;
      });
  }

  // Checks if a maximum of selected elements was reached
  get isMaxSelected() {
    return this.selected.length >= 3;
  }

  /**
   * Fetches elements from the API
   */
  getData() {
    this.isFetching = true;

    fetchElements()
      .then(
        action((data) => {
          this.elements = data;
          this.filter = [0, data.length];
        })
      )
      .finally(action(() => (this.isFetching = false)));
  }

  /**
   * Add or removes an element from the selection
   *
   * @param   {string}   element  The element to add/remove
   * @param   {boolean}  persist  If true, makes the change in the savedSelection
   */
  toggleElement(element: string, persist?: boolean): void {
    let selection: 'savedSelected' | 'selected' = persist
      ? 'savedSelected'
      : 'selected';

    if (this[selection].includes(element)) {
      this[selection] = this[selection].filter((item) => item !== element);
    } else if (!this.isMaxSelected) {
      this[selection].push(element);
    }
  }

  /**
   * Set the search string
   *
   * @param   {string}  value  Search string
   */
  setSearch(value: string): void {
    this.searchValue = value;
  }

  /**
   * Sets the min/max filter
   *
   * @param   {[number, number]}  filter  Min/max array
   */
  setFilter(filter: [number, number]): void {
    this.filter = filter;
  }

  /**
   * Resets the search and range filters
   */
  resetFilters(): void {
    this.searchValue = '';
    this.filter = [0, this.elements.length];
  }

  /**
   * Saves the selection to a permanent state
   */
  saveSelection(): void {
    this.savedSelected = [...this.selected];
  }

  /**
   * Resets the temporary state to saved state
   */
  cancelSelection(): void {
    this.selected = [...this.savedSelected];
  }
}
