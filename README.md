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

## Features

### User Auth and Protected Routes

* Secure frontend to backend user authentication using
BCrypt.
* Implemented modal with smooth transition for styling.
<img src="./app/assets/images/user_auth.gif" width="40%">
* Only logged in users can create areas and routes.
* Only the author of the area or route can edit it. 
* When a user tries to create an area or route, if they are not logged in, they will be promted with the login modal.
<img src="./app/assets/images/protected_route.gif" width="40%">

### Areas and Routes


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