import { Fragment } from "react";
import MainNav from './MainNav';
import Footer from './Footer';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <Fragment>
    <div className={classes.indexBgContainer}>
    <MainNav></MainNav>
    {props.children}
    <Footer></Footer>
    </div>
    </Fragment>
  )
};

export default Layout;