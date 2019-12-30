const messages = [
    "Carolina",
    "Leonardo",
    "Isabel",
    "Juan",
    "Oscar",
    "Ana",
    "Nicolay",
    "Diego",
    "Laura"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };