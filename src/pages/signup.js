import React from "react";
import { useSignUpPageStyles } from "../styles";
import { LoginWithFacebook } from "./login";
import { TextField, Button, Card, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import SEO from "../components/shared/Seo";

function SignUpPage() {
  const classes = useSignUpPageStyles();

  return (
    <>
      <SEO title="Sign Up" />
      <section className={classes.section}>
        <article>
          <Card className={classes.card}>
            <div className={classes.cardHeader} />
            <LoginWithFacebook
              color="primary"
              iconColor="white"
              variant="contained"
            />
            <div className={classes.orContainer}>
              <div className={classes.orLine} />
              <div>
                <Typography variant="body2" color="textSecondary">
                  OR
                </Typography>
                <div className={classes.orLine} />
              </div>
            </div>
            <form>
              <TextField
                variant="filled"
                fullWidth
                label="Mobile Number or Email"
                margin="dense"
                className={classes.textField}
                type="email"
              />
              <TextField
                variant="filled"
                fullWidth
                label="Full Name"
                margin="dense"
                className={classes.textField}
              />
              <TextField
                variant="filled"
                fullWidth
                label="Username"
                margin="dense"
                className={classes.textField}
              />
              <TextField
                variant="filled"
                fullWidth
                label="Password"
                margin="dense"
                className={classes.textField}
                type="password"
                autoComplete="new-password"
              />
              <Button
                variant="contained"
                fullWidth
                color="primary"
                className={classes.button}
                type="submit"
                disabled={true}
              >
                Sign Up
              </Button>
            </form>
          </Card>
          <Card className={classes.loginCard}>
            <Typography align="right" variant="body2">
              Have an acount?
            </Typography>
            <Link to="/accounts/login">
              <Button color="primary" className={classes.loginButton}>
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
