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
import { Typography, Button } from "@material-ui/core";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import { Hidden, Divider } from "@material-ui/core";

function LikeButton() {
  return <LikeIcon />;
}

function SaveButton() {
  return <SaveIcon />;
}

function FeedPost({ post }) {
  const [showCaption, setShowCaption] = useState(false);
  const { media, user, likes, caption, id, comments } = post;
  const classes = useFeedPostStyles();

  return (
    <>
      <article className={classes.article}>
        <div className={classes.postHeader}>
          <UserCard />
          <MoreIcon className={classes.moreIcon} />
        </div>
        <div>
          <img src={media} className={classes.image} alt="Feed Post" />
        </div>
        <div className={classes.postButtonsWrapper}>
          <div className={classes.postButtons}>
            <LikeButton />
            <Link to={`/p/${id}`}>
              <CommentIcon />
            </Link>
            <ShareIcon />
            <SaveButton />
          </div>
          <Typography className={classes.like} variant="subtitle2">
            <span>{likes === 1 ? "1 Like" : `${likes} Likes`}</span>
          </Typography>
          <div className={showCaption ? classes.expanded : classes.collapsed}>
            <Link to={`${user}`}>
              <Typography
                variant="subtitle2"
                component="span"
                className={classes.username}
              >
                {user.username}
              </Typography>
            </Link>
            {showCaption ? (
              <Typography
                variant="body2"
                component="span"
                dangerouslySetInnerHTML={{ __html: caption }}
              />
            ) : (
              <div className={classes.captionWrapper}>
                <HTMLEllipsis
                  unsafeHTML={caption}
                  className={classes.caption}
                  maxLine="0"
                  ellipsis="..."
                  basedOn="letters"
                />
                <Button
                  className={classes.moreButton}
                  onClick={() => setShowCaption(true)}
                >
                  More
                </Button>
              </div>
            )}
          </div>
          <Link to={`/p/${id}`}>
            <Typography
              className={classes.commentsLink}
              variant="body2"
              component="div"
            >
              View All Comments
            </Typography>
          </Link>
          {comments.map((comment) => (
            <div>
              <Link to={`${comment.user.username}`}>
                <Typography
                  variant="subtitle2"
                  component="span"
                  className={classes.commentUsername}
                >
                  {comment.user.username}
                </Typography>{" "}
                <Typography variant="body2" component="span">
                  {comment.content}
                </Typography>
              </Link>
            </div>
          ))}
          <Typography color="textSecondary" className={classes.datePosted}>
            5 DAYS AGO
          </Typography>
        </div>
        <Hidden xsDown>
          <Divider />
          <Comment />
        </Hidden>
      </article>
    </>
  );
}

function Comment() {
  return "comment";
}

export default FeedPost;
