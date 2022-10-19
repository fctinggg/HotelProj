import { Fragment } from "react";
import MainNav from './MainNav';
import Footer from './Footer';
import classes from './Layout.module.css';
import { useContext, useEffect } from "react";
import { useSession } from "next-auth/client";
import CartContext from "../../store/cartContext";
import { actionType } from "../../store/actionType";
import useFetch from "../../hook/useFetch";
import FavouriteContext from "../../store/favouriteContext";

const Layout = (props) => {
  const [session, loading] = useSession();
  const cartCtx = useContext(CartContext);
  const favCtx = useContext(FavouriteContext);
  const { cartList } = cartCtx.cartStatus;
  const { sendRequest: sendFetchRequest } = useFetch();

  useEffect(() => {
    async function submitUserCartHandler() {
      if (cartList.length > 0) {
        if (session) {
          const result = await sendFetchRequest({
            url: "/api/userData",
            method: "PATCH",
            body: { cartList, userId: session.user.name._id },
            headers: { "Content-Type": "application/json" },
          });
        }
      }
      if (cartList.length === 0) {
        if (session) {
          const result = await sendFetchRequest({
            url: "/api/userData",
            method: "POST",
            body: { userId: session.user.name._id },
            headers: { "Content-Type": "application/json" },
          });
          const userCart = result.user.cart;
          const userSubscribed = result.user.liked;
          const userWish = result.user.saved;

          cartCtx.dispatchCart({
            type: actionType.DATA_INSERT,
            payload: { userCart },
          });

          favCtx.dispatchFavourite({
            type: actionType.DATA_INSERT,
            payload: { wishList: userWish, subscribedList: userSubscribed },
          });
        }
      }
    }
    submitUserCartHandler();
  }, [cartList, session]);

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