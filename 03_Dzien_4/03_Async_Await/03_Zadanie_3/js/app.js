const $picture = document.querySelector("img.card-img-top");
const $name = document.querySelector("h5.card-title");
const $email = document.querySelector("p.card-text");
const randomUser = async () => {
    let user
    try {
        user = await fetch("https://randomuser.me/api/");
        user = await user.json()
    } catch (error) {
        console.warn(error);
    }
    const {email, name, picture, dob} = user.results[0];
    console.log(email, name, picture.medium);
    $picture.src = picture.large;
    $name.innerText = name.first + " " + name.last + ", " + dob.age;
    $email.innerText = email;
}

randomUser();