import { GiCheckMark } from 'react-icons/gi';

import './index.scss';

const List = () => (
  <ul className="list">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
      <li key={item} className="list-item">
        <span className="list-item-checkbox">
          {item % 2 === 0 && <GiCheckMark className="icon" />}
        </span>
        Element {item}
      </li>
    ))}
  </ul>
);

export default List;
