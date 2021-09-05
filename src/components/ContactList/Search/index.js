import React from "react";
import { SearchWrapper } from "./Styled";
import { ReactComponent as SearchIcon } from "../../../img/magnifying-glass.svg";

function Search({ search, setSearch }) {
  return (
    <SearchWrapper>
      <input
        placeholder="Search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon />
    </SearchWrapper>
  );
}

export default Search;
