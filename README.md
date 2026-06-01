# Movies library

## Stack

- Springboot Java
- Jakarta
- React
- Zustand
- Tailwindcss
- MySQL
- [tailwind-animations](https://tailwind-animations.com/)

## Design

[Design ](https://stitch.withgoogle.com/projects/13499831772853350764)

# Movies Library Frontend

## Public Pages

### Home Page

- Cards grid with poster, title, genre and stars rating (1-5).
- Searcher by title in real time.
- Filter by genre by dropdown menu or chips (The frontend developer prefers chips).
- Order by rating or release year.

### Movie Detail Modal

- Synopsis, genres, year, average rating.
- User's reviews list.
- If is logged in, a form to submit a review with rating and comment.

### User authentication

- Login and registration forms.
- Save cookie on localStorage or httpOnly cookie for session management.
- Redirect by user role (admin or regular user) to different pages.
- Logout button to clear session and redirect to login page.

## Admin Dashboard

### Routes protection

- PrivateRoute component that verifies JWT.
- Redirect to login page if user is not authenticated.
- Redirect to home page if user is authenticated but not admin.

### Movies Management

- Table with movies list, including title, genre, release year and rating.
- Form to add a new movie with fields for title, genre, release year, poster URL and synopsis.
- Modal to edit content.
- Delete button with confirmation.

### Users Management

- Table list with registered users.
- Change user role between admin and regular user.
- Delete user button with confirmation.

## Pulish

### Settings

- .env file with API URL.
- Error handling for API requests with user-friendly messages.

### UX

- Loading spinner when data is loading.
- Error and success messages on forms.
- Responsive design for mobile and desktop.

## Good practices for Directory Structure

src/
├── assets/
│ ├── fonts/
│ └── images/
│
├── components/
│ ├── ui/
│ │ ├── Button/
│ │ │ ├── Button.tsx
│ │ │ └── Button.module.css
│ │ └── Input/
│ └── layout/
│ ├── Navbar/
│ └── Footer/
│
├── pages/
│ ├── Home/
│ │ ├── Home.tsx
│ │ └── Home.module.css
│ └── NotFound/
│
├── hooks/
│ └── useMovies.ts
│
├── services/
│ └── movies.service.ts
│
├── store/
│ └── movies.store.ts
│
├── types/
│ └── movie.types.ts
│
├── utils/
│ └── formatDate.ts
│
├── constants/
│ └── routes.ts
│
├── css/
│ └── global.css
│
├── App.tsx
└── main.tsx

## TODO
[x] Add dynamic imports to lazy load components
