var parentDiv = document.createElement("div");
parentDiv.style.display = "flex";
document.body.appendChild(parentDiv);

var secondDiv = document.createElement("div");
document.body.appendChild(secondDiv);

fetch("https://jsonplaceholder.typicode.com/users")
    .then((result) => result.json())
    .then((data) => {
        for (let user of data) {
            var childDiv = document.createElement("div");
            childDiv.addEventListener("click", function () {
                send(user.id);
            });
            childDiv.classList.add("btn");
            parentDiv.appendChild(childDiv);
            childDiv.innerHTML = user.name;
        }
    })
    .catch((err) => {
        alert(err);
    });

function send(userId) {
    secondDiv.innerHTML = "";

    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then((result) => result.json())
        .then((data) => {
            var ul = document.createElement("ul");
            secondDiv.appendChild(ul);

            for (var post of data) {
                var li = document.createElement("li");
                li.innerHTML = post.title;
                ul.appendChild(li);
            }
        })
        .catch((err) => {
            alert(err);
        });
}
