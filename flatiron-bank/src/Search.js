import React from "react";

function Search({ handleSearch, search }) {
  function searchingHandler(event){
    handleSearch(event.target.value);
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={searchingHandler}
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;