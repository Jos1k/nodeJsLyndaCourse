var saying = [
    "You may delay, but time will not.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "It takes many good deeds to build a good reputation, and only one bad one to lose it.",
    "Early to bed and early to rise make a man healthy, wealthy and wise.",
    "By failing to prepare, you are preparing to fail.",
    "An investment in knowledge pays the best interest.",
    "Well done is better than well said."
];

var interval = setInterval(function () {
    var i = Math.floor(Math.random() * saying.length);
    process.stdout.write(`${saying[i]} \n`);
}, 1000);

process.stdin.on('data',function(data){
    console.log(`Input DATA -> ${data.toString().trim()}`);
    clearInterval(interval);
    process.exit();
});