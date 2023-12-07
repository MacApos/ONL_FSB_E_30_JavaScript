randomize = (param1, param2, fn) => {
    if (typeof fn !== "function") {
        console.error("Not a function.");
        return;
    }
    fn(Math.floor(Math.random() * (param2 - param1 + 1) + param1));
};
randomize(1, 10, (arg) => console.log(arg));
