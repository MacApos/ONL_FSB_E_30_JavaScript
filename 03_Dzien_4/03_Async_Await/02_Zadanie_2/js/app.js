const $randomValue = document.getElementById("random-value");
const $message = document.getElementById("message");

const asyncAction = () => {
    return new Promise((resolve, reject) => {
        const random = Math.floor(Math.random() * 100) + 1;

        setTimeout(() => {
            if (random <= 50) {
                resolve({
                    value: random,
                    status: "OK"
                });
            } else {
                reject({
                    value: random,
                    status: "ERROR",
                    errorMsg: "Value is greater then 50"
                });
            }
        }, 1250);
    });
};

const asyncFunction = async () => {
    try {
       const result = await asyncAction();
       $randomValue.innerText = result.value;
    } catch (error) {
        console.warn(error);
        $message.innerText = error.errorMsg;
    }
}

asyncFunction();