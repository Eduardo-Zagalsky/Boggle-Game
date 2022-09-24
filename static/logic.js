const ul = document.querySelector("ul");
let gbutton = document.getElementById("guess-button");
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
        ul.append(li);
    }

});
const allTd = document.querySelectorAll("td");


// click letters to highlight and add table for words that have already been used
// delete box when guess is done
