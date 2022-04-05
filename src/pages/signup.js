import React from "react";
import { useSignUpPageStyles } from "../styles";
import { Card, Button, TextField, Typography } from "@material-ui/core";
import { LoginWithFacebook } from "./login";
import { Link } from "react-router-dom";

function SignUpPage() {
  const classes = useSignUpPageStyles();

  return (
    <>
      <section className={classes.section}>
        <article className={classes.article}>
          <Card className={classes.card}>
            <div className={classes.cardHeader}></div>
            <Typography className={classes.cardHeaderSubHeader}>
              Sign up to see photos and videos from your friends.
            </Typography>
            <LoginWithFacebook
              color="primary"
              iconColor="white"
              variant="contained"
            />
            <div className={classes.orContainer}>
              <div className={classes.orLine}></div>
              <div>
                <Typography variant="body2" color="textSecondary">
                  OR
                </Typography>
              </div>
              <div className={classes.orLine}></div>
            </div>
            <form>
              <TextField
                variant="filled"
                fullWidth
                label="Email"
                margin="dense"
                className={classes.textField}
                type="email"
              />
              <TextField
                variant="filled"
                fullWidth
                label="Username"
                margin="dense"
                className={classes.textField}
                type="text"
              />

              <TextField
                variant="filled"
                fullWidth
                label="Full Name"
                margin="dense"
                className={classes.textField}
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

              <TextField
                variant="filled"
                fullWidth
                label="Confirm Password"
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
                Signup
              </Button>
            </form>
          </Card>
          <Card className={classes.loginCard}>
            <Typography align="right" variant="body2">
              Have an Account?
            </Typography>
            <Link to="/accounts/login">
              <Button color="primary" className={classes.loginButton}>
                {" "}
                Login
              </Button>
            </Link>
          </Card>
        </article>
      </section>
    </>
  );
}

export default SignUpPage;
