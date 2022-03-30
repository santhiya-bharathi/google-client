import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider.js";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const [searchinput, setSearchinput] = useState("");

  const search = (e) => {
    e.preventDefault();
    console.log("search!");
    // alert(searchinput)

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: searchinput,
    });

    history.push('/search');
  };


    return (
        <form className="search">
        <div className="search__input">
        <SearchIcon />
        <input value={searchinput} onChange={(e) => setSearchinput(e.target.value)} placeholder="Search Google or type URL"/>
        <MicIcon />
        </div>

        {!hideButtons ? (
        <div className="search__buttons">
          <Button onClick={search} type="submit" variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            onClick={search}
            type="submit"
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}

        
        </form>
        );
}

export default Search;