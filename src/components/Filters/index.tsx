const Filters = () => {
  return (
    <div className="filters">
      <div className="filters-search">
        <input type="text" />
      </div>

      <div className="filters-range">
        <input type="range" min="0" max="100" value="50" />
        <input type="range" min="0" max="100" value="60" />
      </div>
    </div>
  );
};

export default Filters;
