import React, { useState } from "react";
import { postData, putData } from "./http";
import { ErrorComponent } from "./ErrorComponent";

const PutComponent = () => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingPostId, setEditingPostId] = useState(null);

  //   useEffect(() => {
  //     const fetchDataAsync = async () => {
  //       try {
  //         setLoading(true);
  //         const result = await postData({
  //           userId: Math.random(),
  //           id: Math.random(),
  //           title,
  //           body: description,
  //         });
  //         setData([result]);
  //       } catch (error) {
  //         setError({
  //           message: error.message || "Post data failed",
  //           title: "Post to data",
  //         });
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     // Fetch data when the component mounts
  //     fetchDataAsync();
  //   }, [title, description]);

  const handleEdit = (postId, title, body) => {
    setEditingPostId(postId);
    setTitle(title);
    setDescription(body);
  };

  const handleUpdate = async (editingPostId) => {
    try {
      if (!editingPostId) {
        console.error("Editing post ID is missing.");
        return;
      }

      const result = await putData(editingPostId, {
        id: editingPostId,
        title,
        body: description,
      });

      if (!result) {
        console.error("Update result is missing.");
        return;
      }

      const updatedData = data.map((item) =>
        item.id === editingPostId ? result : item
      );

      setData(updatedData); // Corrected line
      setEditingPostId(null);
      // Clear the input fields after a successful update
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Update failed:", error);
      setError({
        message: error.message || "Update data failed",
        title: "Update data",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingPostId) {
      handleUpdate(editingPostId);
    } else {
      try {
        const result = await postData({
          userId: Math.random(),
          id: Math.random(),
          title,
          body: description,
        });
        setData([...data, result]);
        // Clear the input fields after successful submission
        setTitle("");
        setDescription("");
      } catch (error) {
        setError({
          message: error.message || "Post data failed",
          title: "Post to data",
        });
      }
    }
  };

  const handleDisable = Boolean(title) && Boolean(description);

  return (
    <div>
      {error && <ErrorComponent title={error.title} message={error.message} />}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" disabled={!handleDisable}>
          {editingPostId ? "Update" : "Submit"}
        </button>
      </form>

      {/* Display the submitted data */}
      {data.length > 0 && (
        <div>
          <ul>
            {data.map((item) => (
              <li key={item.id} type="none">
                <p>{item.title}</p>
                <p>{item.body}</p>
                {item.title && item.body && (
                  <button
                    onClick={() => handleEdit(item.id, item.title, item.body)}
                  >
                    Edit
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PutComponent;
