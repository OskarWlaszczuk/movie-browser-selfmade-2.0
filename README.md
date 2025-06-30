# 🎬 Movie Browser

**Movie Browser** is a web application for browsing movies and people related to the film industry. It uses data provided by [The Movie Database (TMDB)](https://developer.themoviedb.org/reference/intro/getting-started).

## 🧭 Features

- 🔍 Search for movies and people (actors, directors, etc.)
- 🎥 Browse lists of popular movies and people
- 📄 View detailed information:
  - For movies: description, release date, genres, cast and crew
  - For people: biography, filmography, birth date, etc.
- ⚙️ TMDB API integration

## 🗂 App Structure

The application is divided into two main feature pages:

1. **List Page** – displays a list of popular movies or people by default. When the user performs a search, the results replace the default list.
2. **Details Page** – displays detailed information about a selected movie or person, including credits: cast and crew sections.

## 🧱 Technologies Used

- **React** (v19)
- **Redux Toolkit**
- **Redux Saga**
- **React Router DOM**
- **Styled-components**
- **TanStack React Query**
- **Axios**
- **TMDB API**
- **GitHub Pages** – for deployment

## 🚀 How to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/OskarWlaszczuk/movie-browser-selfmade.git
   cd movie-browser-selfmade
