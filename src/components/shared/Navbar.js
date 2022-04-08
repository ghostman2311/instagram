import React, { useState } from "react";
import { useNavbarStyles } from "../../styles";
import { AppBar, Hidden, InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { LoadingIcon } from "../../icons";

function Logo() {
  const classes = useNavbarStyles();
  return (
    <div className={classes.logoContainer}>
      <Link to="/">
        <div className={classes.logoWrapper}>
          <img src={logo} alt="Logo" className={classes.logo} />
        </div>
      </Link>
    </div>
  );
}

function Search() {
  const [query, setQuery] = useState("");
  let loading = false;
  const classes = useNavbarStyles();
  return (
    <Hidden xsDown>
      <InputBase
        className={classes.input}
        startAdornment={<span className={classes.searchIcon} />}
        endAdornment={
          loading ? (
            <LoadingIcon />
          ) : (
            <span className={classes.clearIcon} onClick={() => setQuery("")} />
          )
        }
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </Hidden>
  );
}

function Links() {
  return <>Links</>;
}

function Navbar({ minimalNavbar }) {
  const classes = useNavbarStyles();

  return (
    <AppBar className={classes.appBar}>
      <section className={classes.section}>
        <Logo />
        {!minimalNavbar && (
          <>
            <Search />
            <Links />
          </>
        )}
      </section>
    </AppBar>
  );
}

export default Navbar;
