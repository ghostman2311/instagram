# instagram

## Routes

- / (feed page)

components:

- FeedPost
- FeedPostSkeleton
- FeedSideSuggestions

- /explore(explore page)

components:

- ExploreSuggestions
- ExploreGrid

- /p/:postID(Posts page)

components:

- Post
- PostModal
- MorePostsFromUser
- PostSkeleton

- navigation

components:

- NotificationList
- NotificationTooltip

- /:username (Profile Page)

components:

- ProfileTabs

- /accounts/edit/ (Edit Profile Page)
- /accounts/Login (Login Page)
- /accounts/email/signup (Sign up Page)
- - (Not Found Page)

## Shared Components

- Navbar
- FollowSuggestions
- FollowButton
- UserCard
- LoadingScreen
- OptionsDialog
- ProfilePicture
- Layout
- SEO
