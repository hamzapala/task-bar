import "../App.css"

const Main = () => {
const createTask = (taskText, timeText) => {
  return `
    <li class="list-group-item d-flex justify-content-between align-items-start mt-1 border-top-0 border-end-0 border-bottom-0">
      <div class="ms-2 me-auto">
        <div class="fw-bold">${taskText}</div>
        ${timeText}</div>
      <span class="badge rounded-pill">X</span>
    </li>`;
};
function handleClick1(e){
  e.target.parentElement.children[1].classList.toggle("close-show");
  e.target.classList.toggle("btn-danger");
  
  if (e.target.innerText === "Close Add Task Bar") {
    e.target.innerText = "Show Add Task Bar";
  }else{
    e.target.innerText = "Close Add Task Bar";
  }
}
function handleClick2(e){
  if (e.target.parentElement.firstElementChild.children[1].value.length < 3) {
    alert("Min 3 caracters for task!");
    e.preventDefault();
    return;
  }else if (e.target.parentElement.children[1].children[1].value.length < 3) {
    alert("Min 3 caracters for date!");
    e.preventDefault();
    return;
  }
    e.target.parentElement.parentElement.lastElementChild.innerHTML +=
      createTask(
        e.target.parentElement.firstElementChild.children[1].value,
        e.target.parentElement.children[1].children[1].value
      );
    e.target.parentElement.firstElementChild.children[1].value = "";
    e.target.parentElement.children[1].children[1].value = "";
}
function handleClick3(e){
  e.target.tagName === "SPAN" && e.target.parentElement.remove();
}
function handleDoubleClick(e){
  if (e.target.className === "fw-bold") {
    e.target.parentElement.parentElement.classList.toggle("border-5");
    e.target.parentElement.classList.toggle("text-decoration-line-through");
  } else if (e.target.className >= "ms-2") {
    e.target.parentElement.classList.toggle("border-5");
    e.target.classList.toggle("text-decoration-line-through");
  } else {
    e.target.classList.toggle("border-5");
    e.target.firstElementChild.classList.toggle("text-decoration-line-through");
  }
}
  return (
    <div className="mainContainer">
      <button
        type="button"
        className="btn btn-danger btn-primary btn-lg"
        onClick={handleClick1}
      >
        Close Add Task Bar
      </button>
      <div className="">
        <div className="mb-3 p-3">
          <label
            htmlFor="formGroupExampleInput"
            className="form-label text-start"
          >
            Task
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Add Task"
          ></input>
        </div>
        <div className="mb-3 pt-1 p-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Day & Time
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Add Day & Time"
          ></input>
        </div>
        <button className="btn alt mb-4" type="button" onClick={handleClick2}>
          Save Task
        </button>
      </div>
      <div className="description fw-bold">No Tasks to Show</div>
      <ul
        className="list-group list-group-flush"
        onClick={handleClick3}
        onDoubleClick={handleDoubleClick}
      >
        <li className="list-group-item d-flex justify-content-between align-items-start mt-1 border-top-0 border-end-0 border-bottom-0">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Study React Pre-Class Notes</div>
            December 12th at 12:30pm
          </div>
          <span className="badge rounded-pill">X</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start mt-1 border-5 border-top-0 border-end-0 border-bottom-0">
          <div className="ms-2 me-auto text-decoration-line-through">
            <div className="fw-bold">Feed The Dog</div>
            December 13th at 1:30pm
          </div>
          <span className="badge rounded-pill">X</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start mt-1 border-top-0 border-end-0 border-bottom-0">
          <div className="ms-2 me-auto">
            <div className="fw-bold">Attend In-Class</div>
            December 14th at 3:00pm
          </div>
          <span className="badge rounded-pill">X</span>
        </li>
      </ul>
    </div>
  );
};

export default Main;
