# React Router v6 useParams Hook Issue

This repository demonstrates a common error when using the `useParams` hook in React Router v6: receiving `undefined` values for route parameters.  The issue arises from using the hook outside of a component rendered within a route definition. The solution illustrates the correct usage, ensuring the hook is correctly placed within a routed component.

## Bug Description
The `useParams` hook in React Router v6 requires the routing context established by a `Route` component. When used outside this context, it returns undefined values for route parameters.  The example demonstrates this problem and its solution.

## How to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe that the initial component incorrectly displays 'undefined' parameters.
5. Navigate to a route;  the correct component will display the correct parameters.

## Solution
The solution ensures the `useParams` hook is within a component rendered by a route, enabling access to route parameters.