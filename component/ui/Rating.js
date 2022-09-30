import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import Tooltip from '@mui/material/Tooltip';

const RatingUI = (props) => {

  const rating = parseFloat(props.rating)

  return (
    <Tooltip title={`Total Rating: ${rating}`}>
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        "&:hover": {
        
        }
      }}
    >
      <Rating
        name="text-feedback"
        value={rating}
        readOnly
        precision={0.1}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
    </Tooltip>
  );
}

export default RatingUI;