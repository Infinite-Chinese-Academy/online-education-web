# Online Education

Web client, developing using Next.js.

## Getting Started

```bash
npm install
npm run dev
```

## Functionality

### Task 1 _login_

- ~~Retrieve data from the form~~
  - ~~Encrypt the password~~
  - ~~Call the API endpoint using a POST request to api/login~~
    - ~~On success, save the user state information to localStorage~~
      - ~~Redirect to /dashboard~~
    - ~~On failure, notify the user that the username or password does not match~~

### Task 2 _dashboard interface_

- Layout
  - Sidebar
    - Logo
    - Menu
  - Header
    - Button to toggle the sidebar
    - Notifications
    - Logout
      - Logo
      - Features
        - Logout
          - Invalidate the user login state by calling the api/logout endpoint
          - Redirect to /login
- Student Data Display
  - Add table
  - Call the API

### Abstract Common Models

- Generic IResponse
  - LoginResponse
- LoginRequest
- Role

### Abstract Common Services for Decoupling View Layer and API Calls

- BaseApiService
  - Create a shared axios instance
    - Add common API endpoints
    - Add request interceptor to include authorization token in headers for non-login requests
    - Add response interceptor to handle error processing
    - Add common get, post methods
  - Add errorHandler
- Add user information storage service
- UserService
  - login method
  - logout method
- StudentService
