import React, { useState } from "react";
import { useFeedPostStyles } from "../../styles";
import UserCard from "../shared/UserCard";
import {
  MoreIcon,
  UnlikeIcon,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SaveIcon,
  RemoveIcon,
} from "../../icons";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import { Hidden, Divider, TextField } from "@material-ui/core";

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const classes = useFeedPostStyles();
  const Icon = liked ? UnlikeIcon : LikeIcon;
  const className = liked ? classes.like : classes.liked;
  return (
    <Icon className={className} onClick={() => setLiked((prev) => !prev)} />
  );
}

function SaveButton() {
  const classes = useFeedPostStyles();
  const [saved, setSaved] = useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;
  return (
    <Icon
      className={classes.saveIcon}
      onClick={() => setSaved((prev) => !prev)}
    />
  );
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
          <UserCard user={user} />
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
  const classes = useFeedPostStyles();
  const [content, setContent] = useState("");
  return (
    <div className={classes.commentContainer}>
      <TextField
        className={classes.textField}
        fullWidth
        value={content}
        placeholder="Add a Comment..."
        multiline
        rowMax={2}
        row={1}
        onChange={(e) => setContent(e.target.value)}
        InputProps={{
          classes: {
            root: classes.root,
            underline: classes.underline,
          },
        }}
      />
    </div>
  );
}

export default FeedPost;
