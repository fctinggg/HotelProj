import { Fragment } from "react";
import classes from "./AuthForm.module.css";
import CommonButton from "../ui/CommonButton";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import SuccessModal from "./Modal";

const signInBtn = {
  background: "#D0B8A8",
  fontSize: "1rem",
  "&:hover": {
    background: "#DFD3C3",
  },
};

const signUpBtn = {
  borderColor: "#7D6E83",
  color: "#7D6E83",
  fontSize: "1px",
  "&:hover": {
    borderColor: "black",
    background: "Pearl",
    opacity: 0.6,
  },
};

async function createUser(email, password, name) {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    body: JSON.stringify({ email, password, name }),
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

const AuthForm = () => {
  const router = useRouter();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState();
  const [showPassword, setShowPassword] = useState(false);
  

  const onSignUpClickHandler = () => {
    setIsSignUp((prevState) => !prevState);
    setIsError();
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredName = isSignUp ? nameInputRef.current.value : "";

    if (!isSignUp) {
      //signin logic
      const result = await signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      if (result.error) {
        setIsError(result.error);
      }
      if (!result.error) {
        console.log("you logged in!");
        router.replace("/");

        //check cart and update
      }
    } else {
      //signup logic
      try {
        // send req create new user
        const result = await createUser(
          enteredEmail,
          enteredPassword,
          enteredName
        );
        setIsError();
        setIsSuccess(true);
      } catch (error) {
        console.log(error);
        setIsError("Email exists already or unvalid password!");
      }
    }
  }
  const appendErrorMsg = isError;

  const formSize = isSignUp ? `${classes.SignUpForm}` : `${classes.SignInForm}`;

  return (
    <Fragment>
      {isSuccess && <SuccessModal></SuccessModal>}
      {!isSuccess && (
        <form onSubmit={submitHandler}>
          <div className={classes.container}>
            <div className={formSize}>
              <div className={classes.formTitle}>
                {isSignUp ? "Create a Account" : "Sign In"}
              </div>
              {isSignUp && (
                <div className={classes.inputItem}>
                  <label htmlFor="Name" className={classes.inputFont}>
                    Your UserName
                  </label>
                  <input
                    className={classes.inputBox_name}
                    ref={nameInputRef}
                    type="text"
                    required
                    id="UserName"
                    name="UserName"
                    placeholder="Please enter your Nickname"
                  />
                </div>
              )}
              <div className={classes.inputItem}>
                <label htmlFor="Email" className={classes.inputFont}>
                  {isSignUp ? "Your Email" : "User Email"}
                </label>
                <input
                  ref={emailInputRef}
                  className={classes.inputBox}
                  type="email"
                  required
                  id="UserEmail"
                  name="UserEmail"
                  placeholder="Please enter vaild Email"
                />
              </div>

              <div className={classes.inputItem}>
                <div className={classes.visibilityDiv}>
                  <label htmlFor="Password" className={classes.inputFont}>
                    {isSignUp ? "Set your password" : "Your Password"}
                  </label>
                  <IconButton
                    sx={{ py: 0, ml: 12, pb: 0.2 }}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </div>
                <input
                  ref={passwordInputRef}
                  className={classes.inputBox}
                  type={showPassword ? "text" : "password"}
                  required
                  id="UserPassword"
                  name="UserPassword"
                  placeholder="Please enter your Password"
                />
              </div>

              <div className={classes.submitBtn}>
                <CommonButton
                  color="secondary"
                  size="medium"
                  sx={signInBtn}
                  variant="contained"
                  type="submit"
                >
                  {isSignUp ? "Sign Up" : "Sign In"}
                </CommonButton>
              </div>
              {isError && (
                <div className={classes.errorMsg}>**{appendErrorMsg}</div>
              )}
              <div className={classes.reminder}>
                {!isSignUp && (
                  <Button
                    color="secondary"
                    size="small"
                    sx={signUpBtn}
                    variant="outlined"
                    onClick={onSignUpClickHandler}
                  >
                    Not a member yet? Click here to sign up!
                  </Button>
                )}
                {isSignUp && (
                  <Button
                    color="secondary"
                    size="small"
                    sx={signUpBtn}
                    variant="outlined"
                    onClick={onSignUpClickHandler}
                  >
                    Already have an account? Click here!
                  </Button>
                )}
              </div>
            </div>
          </div>
        </form>
      )}
    </Fragment>
  );
};

export default AuthForm;
