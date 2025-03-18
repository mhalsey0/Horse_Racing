

function createListOfHorses() {
    const horses = document.getElementById("horses").value;
    const listOfHorses = document.getElementById("listOfHorses");

    listOfHorses.innerHTML = "";

    for(let i = 0; i < horses; i++) {
        let div = document.createElement("div");
        let horseSelector = document.createElement("input");
        horseSelector.type = "radio";
        horseSelector.name = "horseSelector";
        horseSelector.id = "horseSelector" + i.toString();
        horseSelector.value = i + 1;
        console.log(horseSelector.id);

        let horseLabel = document.createElement("label");
        horseLabel.htmlFor = horseSelector.id;
        horseLabel.textContent = `Horse number ${horseSelector.value}`;

        div.appendChild(horseSelector);
        div.appendChild(horseLabel);
        listOfHorses.appendChild(div);
    }
}
function unhideStartButton() {
    const buttonDiv = document.getElementById("raceButton");
    if (buttonDiv.style.display == "none") {
        buttonDiv.style.display = "block";
    }
}
  

function raceHorses() {
    const currentDiv = document.getElementById("raceButton");
    const pickedHorse = document.querySelector('input[name="horseSelector"]:checked');
    const numberOfHorses = document.getElementById("horses").value;
    const winningHorse = Math.floor(Math.random() * (numberOfHorses - 2) + 2);
    const resultsDiv = document.createElement("div");

    console.log(winningHorse);

    if (!pickedHorse) {
        alert("Please select a horse before racing!");
        return;
    }
    const pickedHorseValue = parseInt(pickedHorse.value);
    let resultsContent = document.createTextNode("");

    if (pickedHorseValue === winningHorse)
    {
        resultsContent.nodeValue = "YOU WON!!!";
    } else {
        resultsContent.nodeValue = "You lost and your horse was sent to the glue factory";
    }

    resultsDiv.appendChild(resultsContent);
    document.body.insertBefore(resultsDiv, currentDiv);
}
const selectElement = document.querySelector(".question");
const result = document.querySelector("#listOfHorses");

selectElement.addEventListener("change", (event) => {
    createListOfHorses();
    unhideStartButton();
});