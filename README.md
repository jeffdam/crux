# Crux

[Live Demo](https://crux-fsp.herokuapp.com/#/)

Crux, a Mountain Project clone, is a web app that allows users to find rock climbing routes, photos, and guides throughout the world. It makes use of a Rails/PostgreSQL backend with React.js and Redux on the frontend.

The project was designed and built within a two-week timeframe, though I plan to continue adding improvements over time.

## Technologies

### Back end

* Ruby 2.5.1
* Rails 5.2.3
* PostgreSQL

### Front end

* React
* Redux
* Javascript/ES6

### Other tools

* AWS for image storage and uploading
* Webpack

## Features

### Homepage

Users are immediately taken to a list of climbing areas sorted by state. In the top navigation, users can navigate to the Route Finder, log in, or sign up. Each area in the list has the number of routes contained within them. A count of the total number of routes on the website is tracked next to the list header. These counts update themselves when a new route is created.

<img src="./app/assets/images/readme_img/crux_homepage.png" width="90%">

### User Auth and Protected Routes

Frontend to backend user authentication is secured using BCrypt. The log in and sign up forms are implemented with a modal for a smooth transition.

<img src="./app/assets/images/readme_img/user_auth.gif" width="80%">

Only logged in users can create areas and routes. When a user tries to create an area or route and they are not logged in, they will be promted with the login modal. Users who attempt view `/add/climb-area/areaId` or `/add/climb-route/areaId` directly while logged out will be redirected to the show page of the area they are attempting to add to.

<img src="./app/assets/images/readme_img/protected_route.gif" width="80%">

Only the author of the area or route can edit it. The link to edit the page will only appear if the user is logged in and is the author. Users who attempt view `/area/areaId/edit` or `/route/routeId/edit` directly while logged out and/or who is not the author will be redirected to the show page of the area or route they are attempting to add to.


### Areas

<img src="./app/assets/images/readme_img/area_show.png" width="80%">

Area show page sidebars will change based on if the area contains subareas, routes, or neither.

<img src="./app/assets/images/readme_img/area_show_sidebar_subareas.png" width="30%">
<img src="./app/assets/images/readme_img/area_show_sidebar_routes.png" width="30%">
<img src="./app/assets/images/readme_img/area_show_sidebar_new.png" width="30%">

### Routes

### Uploading Photos


### Route Finder


## Possible Future Features

In the future I would like to add:
* Area and route comments [In Progress]
* More robust route finder
* Allow users to add routes to a tick list (to-do list)
* Allow users to tick of routes (mark as complete)
* Allow users to rate routes
* User dashboard
* Photo information and comments
* Forum