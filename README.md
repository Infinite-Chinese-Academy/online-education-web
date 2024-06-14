# Online Education

Web client, developing using Next.js.

## Getting Started

```bash
npm install
npm run dev
```

## Functionality

### Login

- Retrieve data from the form
  - Encrypt the password
  - Call the API endpoint using a POST request to api/login
    - On success, save the user state information to localStorage
      - Redirect to /dashboard
    - On failure, notify the user that the username or password does not match

### Dashboard Interface

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
- Student data display
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

### Pagination, Add, Edit, Search Student Functions

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

### Student Details Page, Side Menu, Breadcrumb

- Menu and Submenu
  - Each menuItem in menuConfig should include route, key, icon, title or label, and subMenu.
    - Using route as key may cause duplicate key issues, which need resolution later.
  - Rendering:
    - Render subMenu if available; otherwise, render Menu.Item directly.
    - Determine defaultSelectedKeys and defaultOpenKeys based on current route.
      - For routes deeper than two levels:
        - Use the last-level route as defaultSelectedKeys.
        - Use the parent route of the last-level route as defaultOpenKeys.
- Student Details Page
  - Add routing to the specific student page based on ID.
  - Retrieve student ID from route query.
  - Fetch individual student data via API request.
  - Integrate relevant components to render student details.
- Breadcrumb
  - Obtain current route's pathname.
  - Match the corresponding breadcrumb array based on the pathname.
  - Render breadcrumb component using the array's map method.

### Breadcrumbs and Side Nav with Recursion

- User logs in and obtains role.
  - Redirect to corresponding route.
  - Render side navigation based on role.
    - Define keys for each menu item route.
    - For `defaultSelectedKeys` and `defaultOpenKeys`, after obtaining the path:
      - Remove `id` parameter.
- Render breadcrumb based on path.
  - Generate breadcrumb array.
  - Add "detail" to array for detail pages.
  - For non-detail pages, remove link from the last element.

### Add Courses Detail List Page

- Course Home Page
  - Create course model.
  - Write API call function.
  - Call API to fetch course list.
  - Render course list.
- Abstract common `useListEffect` function for code reuse and to reduce redundancy.
  - Types: request type, response type.
  - Parameters: `apiRequest` function.
  - Common function: `useEffect`.
  - Return values include:
    - `data` (students, courses, or others).
    - `loading` state.
    - `total` number of list items.
    - Methods to set state (e.g., `setPaginator`, `setTotal`).
- Course Details Page
  - Add a course model according to the API
  - Add `getCourseById` method
  - Add a route to the course page with the specified ID
  - Retrieve the course ID from the route query
  - Make a request to fetch the data of a single course
  - Add related components and render the data
