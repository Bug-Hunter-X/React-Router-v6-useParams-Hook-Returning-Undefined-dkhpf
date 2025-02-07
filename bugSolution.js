```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); // Correct usage within the Route
  return (
    <div>
      <h1>My Component</h1>
      <p>ID: {id}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<MyComponent />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

This corrected example shows `useParams` correctly used within a component that's a child of a `Route` component.  The route parameters are now correctly accessible.