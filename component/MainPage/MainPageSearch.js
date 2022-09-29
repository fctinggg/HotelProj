import classes from './MainPage.module.css';

const MainPageSearch = () => {
  return (
    <input
      className={classes.input}
      type="text"
      id="search"
      name="search"
      placeholder="Please enter region"
    ></input>
  );
};

export default MainPageSearch;
