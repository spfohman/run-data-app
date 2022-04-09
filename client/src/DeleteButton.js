import React from "react";

function DeleteButton({ handleDeleteRun, run }) {
  function deleteRun() {
    fetch(`/runs/${run.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    handleDeleteRun(run.id);
  }
  return <button onClick={deleteRun}>✖ </button>;
}
export default DeleteButton;
