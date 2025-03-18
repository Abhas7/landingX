function UserSearch({ searchTerm, onSearch }) {
  try {
    // Use debounce to prevent excessive searches while typing
    const debouncedSearch = React.useCallback(
      debounce((value) => {
        onSearch(value);
      }, 300),
      [onSearch]
    );
    
    const handleInputChange = (e) => {
      const value = e.target.value;
      // Update the input value immediately for UI responsiveness
      // but debounce the actual search operation
      debouncedSearch(value);
    };
    
    return (
      <div data-name="search-container" className="search-container">
        <div data-name="search-wrapper" className="relative w-full max-w-lg">
          <input
            data-name="search-input"
            type="text"
            placeholder="Search users by name, username or email..."
            className="search-input pl-12"
            defaultValue={searchTerm}
            onChange={handleInputChange}
          />
          <div data-name="search-icon" className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('UserSearch component error:', error);
    reportError(error);
    return null;
  }
}
