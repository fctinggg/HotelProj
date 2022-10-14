import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const AlertModal = (props) => {
  const passModalClose = () => {
    props.onHandleModalClose()
  }

  return (
    <div>
      <Modal
        open={props.selectAlert}
        onClose={passModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:'#43302E'}}>
            Hey
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, color:'#43302E' }}>
            you should select your travel days first!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default AlertModal;