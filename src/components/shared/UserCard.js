import React from "react";
import { useUserCardStyles } from "../../styles";
import { Avatar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function UserCard({
  user = {
    username: "Nikhil",
    profile_image:
      "https://reedbarger.nyc3.digitaloceanspaces.com/reactbootcamp/avatar.png",
    name: "Nikhil",
  },
}) {
  const classes = useUserCardStyles();

  const { username, profile_image, name } = user;
  console.log(user);
  return (
    <div className={classes.wrapper}>
      <Link to={`/${username}`}>
        <Avatar
          src={profile_image}
          alt="User Avatar"
          className={classes.avatar}
        />
      </Link>
      <div className={classes.nameWrapper}>
        <Link to={`/${username}`}>
          <Typography variant="subtitle2" className={classes.typography}>
            {username}
          </Typography>
        </Link>
        <Typography
          color="textSecondary"
          variant="body2"
          className={classes.typography}
        >
          {name}
        </Typography>
      </div>
    </div>
  );
}

export default UserCard;
