# User List Component Documentation

Documentation for the `UserList` component, which is responsible for fetching and displaying a list of users from an API endpoint.

## Component Functionality

The `UserList` component performs the following tasks:

1. **State Management**: Manages the state of the user data using the `useState` hook. The `users` state variable holds an array of user objects.

2. **Data Fetching**: Utilizes the `useEffect` hook to perform a side effect, which is fetching the user data from the API when the component mounts. The `fetchUsers` function, an asynchronous function, uses Axios to make a GET request to the API endpoint (`https://reqres.in/api/users?page=1&per_page=6`). Upon successful retrieval of the data, it updates the `users` state with the response data.

## Changes Made

### Cause of Api calling twice

As part of React Strict Mode, certain lifecycle functions will be ran twice, such as functions passed to useState, useMemo, or useReducer, or the whole body of a functional component, which might include your useEffect hook. This is done by intentionally double-invoking the following functions:

`Class component constructor, render, and shouldComponentUpdate methods Class component static getDerivedStateFromProps method Function component bodies State updater functions (the first argument to setState) Functions passed to useState, useMemo, or useReducer`

### Introducing Loading State

A loading state flag (`loading`) was introduced using the `useState` hook to indicate when an API call is in progress.

```jsx
const [loading, setLoading] = useState(true);