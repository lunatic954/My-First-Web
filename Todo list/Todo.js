let titleElem = document.querySelector("#title-input");
let descElem = document.querySelector("#desc-input");
let dateElem = document.querySelector("#date-input");
let submitBtnElem = document.querySelector("#submit-btn");
let listElem = document.querySelector("#todo-list");

submitBtnElem.addEventListener("click", function () {
    let title = titleElem.value.trim();
    let desc = descElem.value.trim();
    let date = dateElem.value;

    if (title == "" || date == "") {
        alert("Enter a title and a date");
        return;
    }

    let liElem = document.createElement("li");
    liElem.className = "task-card";

    let headingElem = document.createElement("h3");
    headingElem.textContent = title;
    liElem.appendChild(headingElem);

    if (desc != "") {
        let descPElem = document.createElement("p");
        descPElem.textContent = desc;
        liElem.appendChild(descPElem);
    }

    let datePElem = document.createElement("p");
    datePElem.textContent = "Due: " + date;
    datePElem.className = "task-date";
    liElem.appendChild(datePElem);

    let deleteElem = document.createElement("button");
    deleteElem.textContent = "Delete";
    deleteElem.className = "delete-btn";
    liElem.appendChild(deleteElem);

    headingElem.addEventListener("click", function () {
        if (headingElem.style.textDecoration == "line-through") {
            headingElem.style.textDecoration = "none";
            headingElem.style.color = "#333";
        } else {
            headingElem.style.textDecoration = "line-through";
            headingElem.style.color = "#999";
        }
    });

    deleteElem.addEventListener("click", function () {
        liElem.remove();
    });

    listElem.appendChild(liElem);

    titleElem.value = "";
    descElem.value = "";
    dateElem.value = "";
});