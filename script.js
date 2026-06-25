function addJob() {

    let jobTitle = document.getElementById("jobTitle").value;
    let companyName = document.getElementById("companyName").value;

    if (jobTitle === "" || companyName === "") {
        alert("Please enter all details");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = "<b>" + jobTitle + "</b> - " + companyName;

    document.getElementById("jobList").appendChild(li);

    document.getElementById("jobTitle").value = "";
    document.getElementById("companyName").value = "";
}
