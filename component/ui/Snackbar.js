import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

const CustomizeSnackbar = (props) => {
  const handleClose = () => {
    props.onHandleSnackbarClose();
  };

  return (
    <>
      <Snackbar
        open={props.SnackbarOpen}
        autoHideDuration={1000}
        onClose={handleClose}
        TransitionComponent={TransitionUp}
      >
        <Alert
          icon={props.icon}
          sx={{
            backgroundColor: "#E78A61",
            color: "white",
            width: "200px",
            display: "flex",
            position: 'flexed',
            justifyContent: "center",
            pl: 0,
          }}
        >
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomizeSnackbar;
