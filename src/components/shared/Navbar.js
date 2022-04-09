import React, { useEffect, useState } from "react";
import { useNavbarStyles, WhiteTooltip, RedTooltip } from "../../styles";
import {
  Avatar,
  AppBar,
  Hidden,
  InputBase,
  Grid,
  Typography,
} from "@material-ui/core";
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
import { defaultCurrentUser, getDefaultUser } from "../../data";
import NotificationTooltip from "../notification/NotificationTooltip";

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

function Search({ history }) {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  let loading = false;
  const classes = useNavbarStyles();

  const hasResults = Boolean(query) && results.length > 0;

  useEffect(() => {
    if (!query.trim()) {
      return;
    }
    setResults(Array.from({ length: 5 }, () => getDefaultUser()));
  }, [query]);
  return (
    <Hidden xsDown>
      <WhiteTooltip
        arrow
        interactive
        TransitionComponent="Fade"
        open={hasResults}
        title={
          hasResults && (
            <Grid className={classes.resultContainer} container>
              {results.map((result) => (
                <Grid
                  className={classes.resultLink}
                  key={result.id}
                  item
                  onClick={() => {
                    history.push(`/${result.username}`);
                    setQuery("");
                  }}
                >
                  <div className={classes.resultWrapper}>
                    <div className={classes.avatarWrapper}>
                      <Avatar src={result.profile_image} />
                    </div>
                    <div className={classes.nameWrapper}>
                      <Typography varaint="body1">{result.username}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        {result.name}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          )
        }
      >
        <InputBase
          className={classes.input}
          startAdornment={<span className={classes.searchIcon} />}
          endAdornment={
            loading ? (
              <LoadingIcon />
            ) : (
              <span
                className={classes.clearIcon}
                onClick={() => setQuery("")}
              />
            )
          }
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </WhiteTooltip>
    </Hidden>
  );
}

function Links({ path }) {
  const [showList, setShowList] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const classes = useNavbarStyles();

  useEffect(() => {
    const timeout = setTimeout(handleHideTooltip, 5000);
    return () => {
      clearTimeout(timeout);
    };
  });

  const handleHideTooltip = () => {
    setShowTooltip(false);
  };
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
        <RedTooltip
          arrow
          open={showTooltip}
          onOpen={handleHideTooltip}
          TransitionComponent="Zoom"
          title={<NotificationTooltip />}
        >
          <div
            className={classes.notifications}
            onClick={() => setShowList((prev) => !prev)}
          >
            {showList ? <LikeActiveIcon /> : <LikeIcon />}
          </div>
        </RedTooltip>
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
            <Search history={history} />
            <Links path={path} />
          </>
        )}
      </section>
    </AppBar>
  );
}

export default Navbar;
