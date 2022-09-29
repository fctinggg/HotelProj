import Box from '@mui/material/Box';
import Link from "next/link";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CommonButton from "../ui/CommonButton";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  opacity: '0.8',
  boxShadow: 24,
  p: 4,
  textAlign:'center',
};

const styledBtn = {
  background: '#D0B8A8',
  color: 'white',
  fontSize: 15,
  margin: 2,
  '&:hover': {
    color: '#D0B8A8',
    background: 'white'
  }
}

const SuccessModal = ()  => {

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Account Created!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, mx: 3}} display='inline-block'>
            <CommonButton size='medium' sx={styledBtn} variant='contained'>
            <Link
              sx={{ my: 2, display: "block" }}
              href= '/'>
              Back to MainPage
            </Link>
            </CommonButton>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default SuccessModal;