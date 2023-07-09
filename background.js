var image = document.createElement("script");

image.src = chrome.runtime.getURL("./js/image.js");

image.onload = function () {
  this.remove();
};

(document.head || document.documentElement).appendChild(image);

var footer = document.createElement("script");

footer.src = chrome.runtime.getURL("./js/footer.js");

footer.onload = function () {
  this.remove();
};

(document.head || document.documentElement).appendChild(footer);
