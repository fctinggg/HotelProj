import classes from "./SearchBar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from "react";

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [enteredWord, setEnterWord] = useState("")
  const [modalHidden, setModalHidden] = useState(true)

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setEnterWord(searchWord);
    const newFilter = data.filter((value) => {
      return value.hotelName.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
      setModalHidden(false)
    }
  };

  const focusHandler = () => {
    document.getElementById("searchBox").focus()
  }

  const clearInput = () => {
    setFilteredData([]);
    setEnterWord("");
  }

  const lostFocusHandler = () => {
    setModalHidden(true)
  }

  const hiddenModal = filteredData.length === 0 || modalHidden ? classes.modal : ''

  return (
    <div className={classes.search}>
      <div className={classes.searchInput}>
        <input type="text" placeholder={placeholder} id="searchBox" value={enteredWord} onBlur={lostFocusHandler} onChange={handleFilter} />
        <div className={classes.searchIcon}>
         {filteredData.length === 0 ? <SearchIcon onClick={focusHandler}/> : <ClearIcon onClick={clearInput}/>}
        </div>
      </div>
      <div className={hiddenModal}>
        <div className={classes.dataResult}>
          {filteredData.slice(0, 10).map((value, key) => {
            return (
              <Link className={classes.dataItem} href={`/Hotel/${value._id}`}>
                <div className={classes.paragraph}><div>{value.hotelName}</div><div>{value.region}</div></div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
