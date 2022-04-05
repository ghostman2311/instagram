import React, { useState } from "react";
import { useFeedPostStyles } from "../../styles";
import UserCard from "../shared/UserCard";
import {
  MoreIcon,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SaveIcon,
} from "../../icons";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

function FeedPost({ post }) {
  const [showCaption, setShowCaption] = useState(false);
  const { media, user, id, likes } = post;
  const classes = useFeedPostStyles();

  return (
    <>
      <article className={classes.article}>
        {/* POST HEADER */}
        <div className={classes.postHeader}>
          <UserCard />
          <MoreIcon className={classes.moreIcon} />
        </div>
        <div>
          <img src={media} alt="Post Media" className={classes.image} />
        </div>
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeIcon />
            <Link to={`/p/${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveIcon />
          </div>
          <Typography className={classes.like} variant="subtitle2">
            <span>{likes === 1 ? "1 Like" : `${likes} Likes`}</span>
          </Typography>
          <div className={showCaption ? classes.expanded : classes.collapsed}>
            <Link to={`/${user.username}`}>
              <Typography
                variant="subtitle2"
                component="span"
                className={classes.username}
              >
                {user.username}
              </Typography>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

export default FeedPost;
