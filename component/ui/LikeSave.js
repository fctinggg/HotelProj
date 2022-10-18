import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import FavouriteContext from "../../store/favouriteContext";
import { actionType } from "../../store/actionType";

const LikeSaveIcon = (props) => {
  const [session, loading] = useSession();
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const favouriteCtx = useContext(FavouriteContext);
  const { savedList, likedList } = favouriteCtx.favouriteStatus;

  const selectedHotel = props.hotel;

  const handleFavoriteChange = () => {
    setLiked((prevState) => !prevState);
    if (session) {
      if (liked === false) {
        favouriteCtx.dispatchFavourite({
          type: actionType.ADD_FAVOURITE,
          payload: { selectedHotel, status: { saved: false } },
        });
      }
      if (liked === true) {
        favouriteCtx.dispatchFavourite({
          type: actionType.REMOVE_FAVOURITE,
          payload: { selectedId: selectedHotel.id, status: { saved: false } },
        });
      }
    }
  };

  const handleBookmarkChange = () => {
    setSaved((prevState) => !prevState);
    if (session) {
      if (saved === false) {
        favouriteCtx.dispatchFavourite({
          type: actionType.ADD_FAVOURITE,
          payload: { selectedHotel, status: { saved: true } },
        });
      }
      if (saved === true) {
        favouriteCtx.dispatchFavourite({
          type: actionType.REMOVE_FAVOURITE,
          payload: { selectedId: selectedHotel.id, status: { saved: true } },
        });
      }
    }
  };

  useEffect(() => {
    async function submitUserCartHandler() {
      if (session) {
        if (saved === true || liked === true) {
          const userId = session.user.name._id;
          const response = await fetch("/api/userSaved", {
            method: "PATCH",
            body: JSON.stringify({ savedList, likedList, userId }),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();

          console.log(data);
        }
      } else {
        return;
      }
    }
    submitUserCartHandler();
  }, [savedList, likedList]);

  console.log(savedList)
  return (
    <div>
      <Checkbox
        checked={liked}
        onClick={handleFavoriteChange}
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite sx={{ color: "#7D6E83" }} />}
      />
      <Checkbox
        checked={saved}
        onClick={handleBookmarkChange}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon sx={{ color: "#D0B8A8" }} />}
      />
    </div>
  );
};

export default LikeSaveIcon;
