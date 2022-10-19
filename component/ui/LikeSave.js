import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";


const LikeSaveIcon = (props) => {
  const handleFavoriteChange = (event) => {
    if (event.target.value === "bookmark") {
      props.onSavedChangeHandler();
    }
    if (event.target.value === "like") {
      props.onLikedChangeHandler();
    }
  };


  return (
      <div>
        <Checkbox
          checked={props.liked}
          value="like"
          onClick={handleFavoriteChange}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "#7D6E83" }} />}
        />
        <Checkbox
          checked={props.saved}
          value="bookmark"
          onClick={handleFavoriteChange}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon sx={{ color: "#D0B8A8" }} />}
        />
      </div>
  );
};

export default LikeSaveIcon;
