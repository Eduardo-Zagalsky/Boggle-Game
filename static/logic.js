let gbutton = document.getElementById("guess-button");
gbutton.addEventListener("click", async function (event) {
    event.preventDefault();
    let guess = document.getElementById("guess").value;
    const sendGuess = await axios.get("/check_word", { params: { word: guess } });
    let response = sendGuess.result;
    // if(response == "")
});