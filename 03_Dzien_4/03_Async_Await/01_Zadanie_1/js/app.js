const $title = document.getElementById("title");
const $completed = document.getElementById("completed");
const $author = document.getElementById("author");
console.log($title)

const getTask = async () => {
    let task;
    let user;
    try {
        task = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        task = await task.json();

         user = await fetch(`https://jsonplaceholder.typicode.com/users/${task.userId}`);
         user = await user.json();
    } catch (error) {
        console.warn(error)
    }

    const {title, completed} = task;
    const {name} = user;
    $title.innerText = title;
    $completed.classList.add(completed ? "badge-success" : "badge-danger");
    $author.innerText = name;
}

getTask();