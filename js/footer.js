(function () {
  console.log("PENIS ");
  document.addEventListener("DOMContentLoaded", () => {
    const credits = document.querySelector("footer").querySelector("div");
    const creditsDiv = document.createElement("div");
    creditsDiv.className = "col-6 col-sm-4 col-lg py-1";
    const creditsText = document.createElement("small");
    creditsText.innerHTML =
      "<a href='https://github.com/i4g/LegoNMC'><b>LegoNMC</b></a> by <a href='https://github.com/i4g'>i4g</a>";
    creditsDiv.appendChild(creditsText);
    credits.appendChild(creditsDiv);
  });
});
