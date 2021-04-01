const clientButton = document.querySelector("#clientBtn");
const addClientForm = document.querySelector("#addClientForm");
const withdrawButton = document.querySelector("#withdrawBtn");
const withdrawSection = document.querySelector("#withdrawSection");
const showClientsButton = document.querySelector("#showClientsBtn");
const showClients = document.querySelector("#showClients");
const formData = document.querySelector("#addClientForm");

const addElement = function (parent, element, attributes, classes, txt) {
  // create element
  const ele = document.createElement(element);
  // add the element to parent
  parent.appendChild(ele);
  // add class to the element
  if (classes != "") ele.classList = classes;
  // add text to the element
  if (txt != "") ele.innerText = txt;

  attributesTypes = Object.keys(attributes);
  //console.log(attributes);

  attributesTypes.forEach((attr) => {
    ele.setAttribute(attr, attributes[attr]);
    //console.log("attr", attr, "attributes[attr]", attributes[attr]);
  });
  return ele;
};

clientButton.addEventListener("click", function (e) {
  this.innerText === "Add client form"
    ? (this.innerText = "Hide add client form")
    : (this.innerText = "Add client form");
  addClientForm.classList.toggle("d-none");
  withdrawSection.classList.add("d-none");
  showClients.classList.add("d-none");
});
withdrawButton.addEventListener("click", function (e) {
  withdrawSection.classList.toggle("d-none");
  addClientForm.classList.add("d-none");
  showClients.classList.add("d-none");
});
showClientsButton.addEventListener("click", function (e) {
  showClients.classList.toggle("d-none");
  addClientForm.classList.add("d-none");
  withdrawSection.classList.add("d-none");
});
const getClients = function () {
  clients = localStorage.getItem("clients") || "[]";
  return JSON.parse(clients);
};

const ShowClients = function () {
  clients = getClients();
  if (clients.length != 0) {
    // document.querySelector('#noTasks').classList.add('d-none')
    clients.forEach((client, i) => {
      showSingleClient(client, i);
    });
  }
};

formData.addEventListener("submit", function (e) {
  e.preventDefault();
  dt = { status: false, id: new Date().getTime() };
  taskHeads.forEach((head) => (task[head] = this.elements[head].value));
  tasks = getTasks();
  console.log(tasks);
  tasks.push(task);
  console.log(tasks);
  setTasks(tasks);
  this.reset();
  formButton.innerText = "show add form";
  formSection.classList.toggle("d-none");
  showSingleTask(task, tasks.length - 1);
});
ShowClients();
