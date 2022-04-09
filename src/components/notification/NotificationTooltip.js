import { Typography } from "@material-ui/core";
import React from "react";
import { useNavbarStyles } from "../../styles";

function NotificationTooltip() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.tooltipContainer}>
      <div className={classes.tooltip}>
        <span className={classes.followers} aria-label="Followers" />
        <Typography>1</Typography>
      </div>
      <div className={classes.tooltip}>
        <span className={classes.likes} aria-label="Likes" />
        <Typography>1</Typography>
      </div>
    </div>
  );
}

export default NotificationTooltip;
