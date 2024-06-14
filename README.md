# Online Education

Web client, developing using Next.js.

## Getting Started

``` bash
npm install
npm run dev
```

## Functionality

### Task 1 *login*

- ~~Retrieve data from the form~~
  - ~~Encrypt the password~~
  - ~~Call the API endpoint using a POST request to api/login~~
    - ~~On success, save the user state information to localStorage~~
      - ~~Redirect to /dashboard~~
    - ~~On failure, notify the user that the username or password does not match~~

### Task 2 *dashboard interface*
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
