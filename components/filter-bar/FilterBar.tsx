export default function FilterBar() {
//   TODO: Get categories from API
  return (
    <div className="filter-bar">
      <h2 className="mb-4">Filter</h2>
      <div className="filter-options">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
        >
          <option value="">All</option>
          <option value="Indian">Indian</option>
          <option value="Asian">Asian</option>
          {/* Add more categories as needed */}
        </select>
      </div>
    </div>
  );
}
