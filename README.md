# ITSchool News Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The project itself consists in forming a news portal with news sections and favorites section. [ITSchool News](https://github.com/cornelber/itschool-news-template) is the final project for the Web Development course at [ITSchool](https://www.itschool.ro/).

The news database is taken from the [Guardian API](https://open-platform.theguardian.com/documentation/) as endpoint was used Content and Single Item. The functionality itself is to offer the user the possibility to access different sections with particular news and the possibility to save the desired news in favorites.

[Demo Live](https://bcitschoolnews.netlify.app/)

## Table of contents

-   About project
-   Features
-   Languages and Tools

## About project

The free API from [The Guardian](https://open-platform.theguardian.com/documentation/) is used for data access.

The final project aimed to use the knowledge gained during the course, more precisely the React chapter. In the project code I used the following hooks: useState, useEffect, useParams, useContext, useNavigate (React Router) a custom useFetch hook has also been created. The data we receive it through useFetch we pass it through the created adapter, so we extract only the information that we still use in the project.

As for the stylization side, [React Bootstrap](https://react-bootstrap.github.io/) is used.

As a user you can access in particular any news from the categories present in the project you can also save them in favorites, and because they are also saved in localStorage this data is not forgotten after the end of the session.

## Features

Among the main features are:

-   Save to favorites and delete from favorites on the news page
-   Save in localStorage and delete respectively from localStorage
-   Alert notification when adding and deleting from Favorites
-   Display a maximum of 3 news from Favorites on the Home page
-   Scroll to Top Button on each page

## Languages and Tools

-   [ReactJS](https://reactjs.org/)
-   [React Router](https://reactrouter.com/)
-   [React Bootstrap](https://react-bootstrap.github.io/)
-   [Material Icons](https://fonts.google.com/icons)
