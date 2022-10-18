// our-domain.com/
import MainPage from "../component/MainPage/MainPage";
import { getHotelData } from "./api/hotelData";
import { useContext, useEffect } from "react";
import { useSession } from "next-auth/client";
import CartContext from "../store/cartContext";
import { actionType } from "../store/actionType";

async function getUserDetail(userId) {
  const response = await fetch("/api/userCart", {
    method: "POST",
    body: JSON.stringify({ userId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }

  return data;
}

function HomePage(props) {
  const hotels = props.hotels;
  const [session, loading] = useSession();
  const cartCtx = useContext(CartContext);
  const { cartList } = cartCtx.cartStatus;

  useEffect(() => {
    async function submitUserCartHandler() {
      if (cartList.length > 0) {
        if (session) {
          console.log("update useContext list to userCart");
          const userId = session.user.name._id;
          const response = await fetch("/api/userCart", {
            method: "PATCH",
            body: JSON.stringify({ cartList, userId }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        }
      }
      if (cartList.length === 0) {
        if (session) {
          console.log("get userCart insert to useContext");
          const userId = session.user.name._id;
          const result = await getUserDetail(userId);

          const userCart = result.user.cart;
          console.log(userCart);

          cartCtx.dispatchCart({
            type: actionType.DATA_INSERT,
            payload: { userCart },
          });
        }
      }
    }
    submitUserCartHandler();
  }, [cartList, session]);

  return <MainPage hotelsData={hotels}></MainPage>;
}

export async function getStaticProps() {
  const hotels = await getHotelData();

  return {
    props: {
      hotels,
    },
    revalidate: 1,
  };
}

export default HomePage;
