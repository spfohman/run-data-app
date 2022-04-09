import React from "react";

function DeleteButton({ handleDeleteRun, run }) {
  function deleteRun() {
    fetch(`/runs/${run.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    handleDeleteRun(run.id);
    //   .then((response) => response.json())

    //   .then((data) => {
    //     console.log(data);
    //     handleDeleteRun(data);
    //   }
    //   );
  }
  return <button onClick={deleteRun}>✖ </button>;
}
export default DeleteButton;
