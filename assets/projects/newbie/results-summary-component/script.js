const url = fetch("./data.json");

url.then((response) => {
  const data = response.json().then((data) => {
    // Category:
    const reaction = data[0].category;
    const memory = data[1].category;
    const verbal = data[2].category;
    const visual = data[3].category;
    document.getElementById("reaction").innerText = reaction;
    document.getElementById("memory").innerText = memory;
    document.getElementById("verbal").innerText = verbal;
    document.getElementById("visual").innerText = visual;

    // Score
    const score80 = data[0].score;
    const score92 = data[1].score;
    const score61 = data[2].score;
    const score72 = data[3].score;

    document.getElementById("score80").innerText = score80;
    document.getElementById("score92").innerText = score92;
    document.getElementById("score61").innerText = score61;
    document.getElementById("score72").innerText = score72;

    // svg path
    const icon00 = data[0].icon;
    const icon01 = data[1].icon;
    const icon02 = data[2].icon;
    const icon03 = data[3].icon;

    document.getElementById("icon00").src = icon00;
    document.getElementById("icon01").src = icon01;
    document.getElementById("icon02").src = icon02;
    document.getElementById("icon03").src = icon03;
  });
});
