In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component rendered by a route.  This results in `undefined` values for route parameters.  For example:

```javascript
// Incorrect Usage
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); // This will always be undefined if not inside a route component
  console.log(id); // Logs undefined
  return <div>My Component</div>;
}

export default MyComponent;
```

This happens because `useParams` relies on the routing context provided by the `Route` component. 