(function () {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.marginBottom = "50px";
  div.style.gap = "50px";
  div.className = "container";

  var profiles = [];

  const dropdownItemGenerateImage = document.createElement("button");
  const canvas = document.createElement("canvas");
  document.addEventListener("DOMContentLoaded", () => {
    if (
      [
        ...document
          .querySelectorAll(".dropdown-menu.dropdown-menu-right")[0]
          .querySelectorAll("div"),
      ].length === 4
    ) {
      dropdownItemGenerateImage.className = "dropdown-item";
      dropdownItemGenerateImage.innerHTML =
        '<i class="far fa-image menu-icon"></i>Generate Image';
      const dropdownMenu = document.querySelectorAll(
        ".dropdown-menu.dropdown-menu-right"
      )[0];
      dropdownMenu.insertBefore(
        dropdownItemGenerateImage,
        dropdownMenu.childNodes[17]
      );
    }

    try {
      [
        ...document
          .querySelectorAll(".dropdown-menu.dropdown-menu-right")[0]
          .querySelectorAll("div")[1]
          .querySelectorAll("a"),
      ].forEach((i) => {
        profiles.push({ name: i.innerText, image: i.firstChild.src });
      });

      var height = 120 * profiles.length + 1;

      if (profiles.length >= 10) {
        height = 1050;
      }

      canvas.width = 470 * Math.round(Math.ceil(profiles.length / 10));
      canvas.height = height;
      canvas.style.border = "solid 1px";
      canvas.style.borderRadius = "25px";
      canvas.id = "legonmc-footer-canvas";

      var offset = {
        text: { width: 120, height: 100 },
        image: { width: 50, height: 50 },
      };

      var context = canvas.getContext("2d");

      context.fillStyle = "#191927";
      context.fillRect(0, 0, canvas.width, canvas.height);

      function roundedImage(x, y, width, height, radius) {
        context.beginPath();
        context.moveTo(x + radius, y);
        context.lineTo(x + width - radius, y);
        context.quadraticCurveTo(x + width, y, x + width, y + radius);
        context.lineTo(x + width, y + height - radius);
        context.quadraticCurveTo(
          x + width,
          y + height,
          x + width - radius,
          y + height
        );
        context.lineTo(x + radius, y + height);
        context.quadraticCurveTo(x, y + height, x, y + height - radius);
        context.lineTo(x, y + radius);
        context.quadraticCurveTo(x, y, x + radius, y);
        context.closePath();
      }

      profiles.forEach((profile) => {
        var img = new window.Image();

        img.addEventListener("load", function () {
          context.save();
          roundedImage(offset.image.width, offset.image.height, 50, 50, 10);
          context.clip();
          context.drawImage(
            img,
            offset.image.width,
            offset.image.height,
            50,
            50
          );
          context.restore();
          if (offset.image.height > 900) {
            offset.image.width += 500;
            offset.image.height = 50;
          } else {
            offset.image.height += 100;
          }
        });
        img.setAttribute("src", profile.image);

        context.fillStyle = "white";
        context.textAlign = "left";
        context.shadowColor = "black";
        var textSize = 50;
        if (profile.name.length > 8) {
          textSize = 40;
        }
        context.font = `${textSize}px Helvetica`;
        context.fillText(profile.name, offset.text.width, offset.text.height);
        if (offset.text.height > 900) {
          offset.text.width += 500;
          offset.text.height = 100;
        } else {
          offset.text.height += 100;
        }
      });
    } catch (e) {
      if (e instanceof TypeError) {
        console.log(`An error occured: ${e}`);
      }
    }

    document.body.appendChild(div);

    const credits = document.querySelector("footer").querySelector("div");
    const creditsDiv = document.createElement("div");
    creditsDiv.className = "col-6 col-sm-4 col-lg py-1";
    const creditsText = document.createElement("small");
    creditsText.innerHTML =
      "<a href='https://github.com/i4g/LegoNMC'><b>LegoNMC</b></a> by <a href='https://github.com/i4g'>i4g</a>";
    creditsDiv.appendChild(creditsText);
    credits.appendChild(creditsDiv);
  });
  dropdownItemGenerateImage.addEventListener("click", () => {
    if (profiles.length > 0) {
      alert("Check bottom of the page");
      div.appendChild(canvas);
      let text = document.createElement("p");
      text.innerText = "Copy/Download image by right-clicking";
      text.style.textAlign = "center";
      div.appendChild(text);
    } else {
      alert("No profiles found :(");
    }
  });
})();
