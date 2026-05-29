# Movies Library Backend

## Stack
- Spring Boot (Java)
- Database: MySQL
- ORM/ODM: Jakarta
- JWT (Json Web Token)
- bcrypt (password hashing)

## Data Model
- User:
  - id (incremental)
  - name (string)
  - email (string, unique)
  - password (string, hashed)
  - role (string, enum: ['admin', 'user'])

- Movie:
  - id (incremental)
  - synopsis (string)
  - genre (string)
  - year (date)
  - posterURL (string)
  - rating (number)
  - averageRating (number)

- Review:
  - id (incremental)
  - userId (reference a User)
  - movieId (reference a Movie)
  - rating (number)
  - comment (string)

## API Endpoints
### Auth
- POST /auth/register --- Register a new user (regular user)
- POST /auth/login --- Authenticate a user and return a JWT token
- Middleware verifyToken --- Check user auth
- Middleware verifyAdmin --- Check role for admin routes
### Movies
- GET /movies --- get all movies (public)
- GET /movies/:id --- get movie by id (public)
- POST /movies --- create a new movie (admin)
- PUT /movies/:id --- update movie info (admin)
- DELETE /movies/id -- delete a movie (admin)

### Reviews
- POST /movies/:id/reviews --- add a review (auth)
- DELETE /movies/:id --- delete a own review (auth)

### Users
- GET /users --- list all users (admin)
- PUT /users/:id update role (admin)
- DELETE /users/:id delete an user (admin)
