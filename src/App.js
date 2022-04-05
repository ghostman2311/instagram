import React from "react";
import FeedPage from "./pages/feed";
import ExplorePage from "./pages/explore";
import EditProfilePage from "./pages/edit-profile";
import LoginPage from "./pages/login";
import NotFoundPage from "./pages/not-found";
import PostPage from "./pages/post";
import ProfilePage from "./pages/profile";
import SignUpPage from "./pages/signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route path="/explore" component={ExplorePage} />
        <Route exact path="/:username" component={ProfilePage} />
        <Route path="/accounts/edit" component={EditProfilePage} />
        <Route path="/accounts/login" component={LoginPage} />
        <Route path="/accounts/email/signup" component={SignUpPage} />
        <Route path="/p/:postId" component={PostPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
