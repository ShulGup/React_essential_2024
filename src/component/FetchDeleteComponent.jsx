import React, { useState, useEffect } from "react";
import { getData, deleteData } from "./http";
import { ErrorComponent } from "./ErrorComponent";

const DeleteComponent = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    // Fetch initial data or update the items whenever the component mounts or updates
    fetchData();
  }, []);

  const fetchData = () => {
    getData()
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleDelete = async (itemId) => {
    console.log(itemId);

    try {
      // Remove the deleted item from the local state
      const updatedData = items.filter((data) => data.id !== itemId);
      setItems(updatedData);

      // Make an API call to delete the item from the server
      await deleteData(itemId);
    } catch (error) {
      setError({
        message: error.message || "Failed to delete data",
        title: "Delete Data",
      });
    }
  };

  return (
    <div>
      {error && <ErrorComponent title={error.title} message={error.message} />}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteComponent;
