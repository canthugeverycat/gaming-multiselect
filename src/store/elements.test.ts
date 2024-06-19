import { ElementsStore } from './elements';

const mockElements = (length: number) =>
  Array.from({ length }, (_, i) => `Element ${i + 1}`);

describe('ElementsStore filters', () => {
  let elementsStore: ElementsStore;

  beforeEach(() => {
    elementsStore = new ElementsStore();
    elementsStore.elements = mockElements(10);
    elementsStore.selected = [];
    elementsStore.savedSelected = [];
  });

  it('filters elements correctly based on searchValue', () => {
    // Search for existing elements
    elementsStore.setSearch('Element 1');
    expect(elementsStore.filtered).toEqual(['Element 1', 'Element 10']);

    // Search for non existing string
    elementsStore.setSearch('Test');

    expect(elementsStore.filtered).toEqual([]);

    // No search
    elementsStore.setSearch('');

    expect(elementsStore.filtered.length).toBe(10);
  });

  it('filters elements correctly based on filter range', () => {
    elementsStore.setFilter([5, 7]);
    expect(elementsStore.filtered).toEqual([
      'Element 5',
      'Element 6',
      'Element 7',
    ]);
  });

  it('resets filters correctly', () => {
    elementsStore.setSearch('Element 1');
    elementsStore.setFilter([5, 9]);

    elementsStore.resetFilters();
    expect(elementsStore.searchValue).toBe('');
    expect(elementsStore.filter).toEqual([0, 10]);
  });
});

describe('ElementsStore selection', () => {
  let elementsStore: ElementsStore;

  beforeEach(() => {
    elementsStore = new ElementsStore();
    elementsStore.elements = mockElements(10);
    elementsStore.selected = [];
    elementsStore.savedSelected = [];
  });

  it('adds and removes elements from selected lists', () => {
    // Add to temporary selected list
    elementsStore.toggleElement('Element 11');
    expect(elementsStore.selected).toContain('Element 11');

    // Remove from temporary selected list
    elementsStore.toggleElement('Element 11');
    expect(elementsStore.selected).not.toContain('Element 11');

    // Add to permanent selected list
    elementsStore.toggleElement('Element 11', true);
    expect(elementsStore.savedSelected).toContain('Element 11');

    // Remove from permanent selected list
    elementsStore.toggleElement('Element 11', true);
    expect(elementsStore.savedSelected).not.toContain('Element 11');
  });

  it('ensures isMaxSelected returns true correctly', () => {
    elementsStore.selected = ['Element 1', 'Element 2', 'Element 3'];
    expect(elementsStore.isMaxSelected).toBe(true);

    elementsStore.selected = ['Element 1', 'Element 2'];
    expect(elementsStore.isMaxSelected).toBe(false);
  });

  it('saves selection correctly', () => {
    elementsStore.selected = ['Element 1', 'Element 2'];
    elementsStore.savedSelected = [];

    elementsStore.saveSelection();

    // Modify selected list after saving
    elementsStore.toggleElement('Element 3');

    // Ensure saved selection remains unchanged
    expect(elementsStore.savedSelected).toEqual(['Element 1', 'Element 2']);
  });

  it('cancels selection correctly', () => {
    elementsStore.selected = ['Element 1', 'Element 2'];
    elementsStore.savedSelected = ['Element 3'];
    elementsStore.cancelSelection();

    // Ensure selected list reverts to saved selection
    expect(elementsStore.selected).toEqual(['Element 3']);
  });
});
