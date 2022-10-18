import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSession } from "next-auth/client";
import { useState } from "react";
import CustomizeSnackbar from "../ui/Snackbar";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import CartModalContext from "./CartModalContext";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 1,
  // mediaQuery set farn ho h w
  height: "580px",
  width: "500px",
  overflow: "hidden",
  overflowY: "auto",
  zIndex: 0
};

const steps = ["Select product", "Sign in/Sign up", "Payment Info"];

const CartModal = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const [session, loading] = useSession();

  const [open, setOpen] = useState(false);

  const passModalClose = () => {
    props.onHandleModalClose();
  };

  const handleSnackbarOpen = () => setOpen(true);

  const handleSnackbarClose = () => setOpen(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <CustomizeSnackbar
        icon={<PriorityHighIcon sx={{ color: "white" }} />}
        message="Prodect Deleted"
        SnackbarOpen={open}
        onHandleSnackbarClose={handleSnackbarClose}
      />
      <Modal
        open={props.open}
        onClose={passModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              pt: 2,
              pb: 1,
              px: 4,
              backgroundColor: "white",
              position: "sticky",
              top: 0,
              zIndex: 2,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center", pb: 2, color: "#43302E" }}
            >
              Your Cart
            </Typography>

            {/* stepper */}
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};

                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel
                        {...labelProps}
                        sx={{
                          "& .MuiStepIcon-root": {
                            color: "#D0B8A8",
                          },
                          "& .Mui-active": {
                            "& .MuiStepIcon-root": {
                              color: "#C48793",
                            },
                          },
                          "& .Mui-complete": {
                            "& .MuiStepIcon-root": {
                              color: "#C48793",
                            },
                          },
                        }}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
          </Box>
          <Typography sx={{ mt: 2, mb: 1, px: 4 }}>
            Step {activeStep + 1}
          </Typography>

          {/* context */}
          <Box sx={{ height: "400px", overflow: "hidden", overflowY: "auto" }}>
            <CartModalContext
              activeStep={activeStep}
              handleSnackbarOpen={handleSnackbarOpen}
              passModalClose={passModalClose}
            />
            {/* context finish*/}
          </Box>

          <Box
            sx={{
              width: "100%",
              py: 2,
              px: 4,
              backgroundColor: "white",
              justifyContent: "space-between",
              position: "fixed",
              bottom: "0px",
              boxShadow: 3,
              zIndex: 2,
            }}
          >
            <Box>
              {activeStep === steps.length ? (
                <>
                  <Typography sx={{ mt: 2, mb: 1 }}>
                    All steps completed
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button>Comfirm Payment</Button>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1, color: "#835C3B" }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />

                    {!session && activeStep === 1 ? (
                      " "
                    ) : (
                      <Button onClick={handleNext} sx={{ color: "#835C3B" }}>
                        {activeStep === steps.length - 1 ? "Completed" : "Next"}
                      </Button>
                    )}
                  </Box>
                </>
              )}
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CartModal;
