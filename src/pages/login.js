import { useLoginPageStyles } from "../styles";
import Layout from "../components/shared/Layout";
import React from "react";
import {
  Card,
  CardHeader,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import FacebookBlueIcon from "../images/facebook-icon-blue.svg";
import FacebookWhiteIcon from "../images/facebook-icon-white.png";
import { Link } from "react-router-dom";

function LoginPage() {
  const classes = useLoginPageStyles();

  return (
    <>
      <section className={classes.section}>
        <article className={classes.article}>
          <Card className={classes.card}>
            <CardHeader className={classes.cardHeader}> </CardHeader>
            <form>
              <TextField
                variant="filled"
                fullWidth
                label="Username"
                margin="dense"
                className={classes.textField}
                autoComplete="username"
                type="text"
              />
              <TextField
                variant="filled"
                fullWidth
                label="Password"
                margin="dense"
                className={classes.textField}
                autoComplete="current-password"
                type="password"
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.button}
                type="submit"
              >
                Login
              </Button>
            </form>
            <div className={classes.orContainer}>
              <div className={classes.orLine}></div>
              <div>
                <Typography variant="body2" color="textSecondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine}></div>
            </div>
            <LoginWithFacebook color="secondary" iconColor="blue" />
            <Button color="secondary" fullWidth>
              <Typography variant="caption">Forgot Password?</Typography>
            </Button>
          </Card>
          <Card className={classes.signUpCard}>
            <Typography align="right" variant="body2">
              Don't have an Account?
            </Typography>
            <Link to="/accounts/email/signup">
              <Button color="primary" className={classes.signUpButton}>
                {" "}
                Sign up
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export function LoginWithFacebook({ color, iconColor, variant }) {
  const classes = useLoginPageStyles();
  const FacebookIcon =
    iconColor === "blue" ? FacebookBlueIcon : FacebookWhiteIcon;
  return (
    <Button fullWidth color={color} variant={variant}>
      <img
        src={FacebookIcon}
        alt="Facebook Icon"
        className={classes.facebookIcon}
      />
      Login With Facebook
    </Button>
  );
}

export default LoginPage;
