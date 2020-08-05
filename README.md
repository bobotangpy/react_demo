# Zora 2.0 built with ReactJS
## About This Website

Zora is an eCommerce fashion website which takes in users' zodiac sign and provides custom fashion recommendations based on their sign. The name of the website came from the Japanese word *Yozora*, which means night sky, wherein you could the constellations.

This is an updated version of a project I have done previously with 2 other group members when I was learning software engineering at a bootcamp.

At the time, we used jQuery, Bootstrap and Handlebars for frontend development, and Node.js for backend development. In this revisited version, I have changed the frontend almost entirely and I have also added some new features like the user's order history.

## Key Features

**Non-registered Users**
 1. For users who do not have a registered account, they could browse the general items.
 2. They would not be able to see the suggested items since it would require their zodiac sign.
 3. The *Add To Cart* feature would be disabled.

**Registered Users**
1. When a new user sign up, they would be asked to provide their birthday, and their horoscope would then be calculated.
2. Each zodiac sign would have their own custom background and clothing items.
3.  There would be different recommendations based on the user's horoscope.


## Run This Project

1. Clone this repository
2. Run `npm install` in the **Backend** folder and `yarn install` in the **Frontend** folder
3. Start PostgreSQL
4. Create `.env` file in **Backend** folder and add the following data:
	`DB_NAME=<database name>`
	`DB_USERNAME=<database username>`
	`DB_PASSWORD=<database password>`
5. Create the database in PostgreSQL and run the knex migration files and seed files.
6. Create `.env` file in **Frontend** folder and add the following data:
	`REACT_APP_API_SERVER=http://localhost:8080`
7. Now run the application

## Frontend Frameworks & Libraries
- JavaScript
- HTML
- CSS
- React
- Ant Design (UI library)


## Backend Frameworks & Libraries
- Node.js
- Express.js
- Bcrypt
- Knex.js (SQL query builder)
- PostgreSQL (RDBMS)
