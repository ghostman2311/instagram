import React, { useState } from "react";
import { useNavbarStyles } from "../../styles";
import { Avatar, AppBar, Hidden, InputBase } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logo.png";
import {
  LoadingIcon,
  AddIcon,
  LikeIcon,
  LikeActiveIcon,
  ExploreIcon,
  ExploreActiveIcon,
  HomeIcon,
  HomeActiveIcon,
} from "../../icons";
import { defaultCurrentUser } from "../../data";

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

function Links({ path }) {
  const [showList, setShowList] = useState(false);
  const classes = useNavbarStyles();
  return (
    <div className={classes.linksContainer}>
      <div className={classes.linksWrapper}>
        <Hidden xsDown>
          <AddIcon />
        </Hidden>
        <Link to="/">{path === "/" ? <HomeActiveIcon /> : <HomeIcon />}</Link>
        <Link to="/explore">
          {path === "/explore" ? <ExploreActiveIcon /> : <ExploreIcon />}
        </Link>
        <div
          className={classes.notifications}
          onClick={() => setShowList((prev) => !prev)}
        >
          {showList ? <LikeActiveIcon /> : <LikeIcon />}
        </div>
        <Link to={`/${defaultCurrentUser.username}`}>
          <div
            className={
              path === defaultCurrentUser.username ? classes.profileActive : ""
            }
          />
          <Avatar
            src={defaultCurrentUser.profile_image}
            className={classes.profileImage}
          />
        </Link>
      </div>
    </div>
  );
}

function Navbar({ minimalNavbar }) {
  const history = useHistory();
  const path = history.location.pathname;
  const classes = useNavbarStyles();

  return (
    <AppBar className={classes.appBar}>
      <section className={classes.section}>
        <Logo />
        {!minimalNavbar && (
          <>
            <Search />
            <Links path={path} />
          </>
        )}
      </section>
    </AppBar>
  );
}

export default Navbar;
