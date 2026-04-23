import { useEffect, useState } from "react";
import "./App.css";
import PostCard from "./components/PostCard";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Gabim ne marrjen e te dhenave");
          }
          return response.json();
        })
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
      <div>
        <h1>Post Explorer</h1>

        {posts.map((post) => (
            <PostCard key={post.id} post={post} />
        ))}
      </div>
  );
}

export default App;