import React from "react";

function Transaction({ date, description, category, amount, onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button className="ui tiny inverted red button" onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;