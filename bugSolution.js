```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //Correct way to update count. Use a cleanup function to prevent infinite loops.
    let id = setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <div>Count: {count}</div>;
}
```