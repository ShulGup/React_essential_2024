import React, { useState, useEffect } from "react";
import { postData } from "./http";
import { ErrorComponent } from "./ErrorComponent";

const PostComponent = () => {
  const [data, setData] = useState([]); // Change this line
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);

      try {
        const result = await postData({
          ...data,
          userId: Math.random(),
          id: Math.random(),
          title,
          body: description,
        });
        setData([...data, result]);
      } catch (error) {
        setError({
          message: error.message || "Post data failed",
          title: "Post to data",
        });
      } finally {
        setLoading(false);
      }
    };

    // Fetch data when the component mounts
    fetchDataAsync();
  }, [data, title, description]); // Empty dependency array means this effect runs once on mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postData({
        ...data,
        userId: Math.random(),
        id: Math.random(),
        title,
        body: description,
      });
      setData([...data, result]); // Change this line
      // Clear the input fields after successful submission
      setTitle("");
      setDescription("");
    } catch (error) {
      setError({
        message: error.message || "Post data failed",
        title: "Post to data",
      });
    }
  };

  const handleDisable = Boolean(title) && Boolean(description);

  return (
    <div>
      {error && <ErrorComponent title={error.title} message={error.message} />}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={handleSubmit} data-testid="form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            data-testid="title"
          />
          <textarea
            type="text"
            value={description}
            data-testid="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" disabled={!handleDisable}>
            Submit
          </button>
        </form>
      )}
      {/* Display the submitted data */}
      {data.length > 0 && ( // Change this line
        <ul>
          {data.map((item) => (
            <li key={item.id} type="none">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostComponent;
