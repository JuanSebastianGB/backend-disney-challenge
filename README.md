# Disney API Challenge

The objective of this challenge is to develop an API to explore the world of Disney. The API should allow users to view and modify the characters that make it up, and understand which movies or series they were a part of. The API should return information that any frontend can consume.

## Technical Requirements

The data modeling can be implemented and extended according to the applicant's criteria, but it must contain at least the following entities (additional attributes can be added as deemed appropriate):

- Character: Must have at least an image, name, age, weight, history, and related movies or series (in which they participated).
- Movie or Series: Can have many associated characters, an image, title, creation date, rating (from 1 to 5), and genre.

The API must perform the following operations:

- User Authentication: To make requests to subsequent endpoints, the user must have a token obtained upon authentication. Therefore, registration and login endpoints must be developed to allow obtaining the token.
- List of Characters: The list must display only image and name.
- Creation, Editing, and Deletion of Characters: Basic operations of creation, editing, and deletion of characters must be available.
- Character Details: The details must list all character attributes, as well as related movies or series.
- Character Search: The API must allow searching by name and filtering by age, weight, or movies/series they participated in.
- List of Movies: The list must display only image, title, and creation date.
- Movie/Series Details with Associated Characters: All movie/series fields must be returned along with the associated characters.
- Creation, Editing, and Deletion of Movies/Series: Basic operations of creation, editing, and deletion of movies/series must be available.
- Movie/Series Search: The API must allow searching by title, filtering by genre, and sorting by creation date in ascending or descending order.

## Functional Requirements

- The API must be developed using Node.js and Express for the server and Sequelize as the ORM.
- The routes must follow the REST pattern.
- There is no need to create a frontend.
- Documenting the endpoints using a tool like Postman or Swagger is desirable.
- The data modeling can be extended according to the applicant's criteria based on the requested requirements.

## Evaluation Criteria

- Basic knowledge of Node.js.
- Data validation.
- Good coding practices.
- Good practices for naming routes.

## Tests

Optionally, tests can be added to verify possible error scenarios for different endpoints in the app, such as missing or invalid fields in the body of requests or access to nonexistent resources in detail endpoints. Tests can be done using Mocha + Chai or other tools deemed convenient.
