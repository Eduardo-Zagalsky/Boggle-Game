const ul = document.querySelector("ul");
let gbutton = document.getElementById("guess-button");
let allTd = document.querySelectorAll("td");
gbutton.addEventListener("click", async function (event) {
    event.preventDefault();
    let input = document.getElementById("word");
    let word = input.value;
    const sendGuess = await axios.get("/check_word", { params: { word: word } });
    let response = sendGuess.data.result;
    if (response == "not-on-board") {
        alert("Word not on Board");
    } else if (response == "not-word") {
        alert("Not a Real Word");
    } else if (response == "ok") {
        let li = document.createElement("li");
        li.innerText = word.toUpperCase();
        input.value = '';
        allTd.className = '';
        ul.append(li);
    }

});

for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
        allTd[x + (5 * y)].setAttribute("id", `${y}-${x}`);
    };
};

for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
        document.getElementById(`${y}-${x}`)
            .addEventListener("click", function (e) {
                e.target.setAttribute("class", "selected");
            });
    };
};