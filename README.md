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
- AuthService
  - login method
  - logout method
- StudentService

### pagination, add, edit, search student functions

- Implement pagination rendering
  - Add `paginator` and `total` state variables.
  - Include `pagination` parameter in the `table` component.
  - Use `useEffect` to call `getStudents` method inside, fetching the students list and set `paginator` as the dependency for `useEffect`.
- Implement join time description
  - Introduce `date-fns`.
  - Utilize `formatDistanceToNow` method.
- Implement student name sorting (current page)
  - Add a `sorter` function to the `name` element in the `columns` array, sorting based on the ASCII value of the first character of the name.
- Implement area name filtering
  - Add `filters` array and `onFilter` method to the `Area` element.
- Implement student type filtering
  - Add `filters` array and `onFilter` method to the `type` element.
- Implement students name fuzzy search
  - Integrate `Search` component.
  - Add API method with `name` parameter.
  - Implement `onSearch` function to directly query.
  - Implement `onChange` function using `lodash debounce` for 1-second delay.
- Implement add, edit student
  - Incorporate `modal` component.
  - Add form to `modal`.
  - Implement `add` and `update` API methods.
- Implement delete student
