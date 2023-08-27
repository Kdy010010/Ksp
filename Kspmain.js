function img(imgSrc) {
  var imgElement = document.createElement("img");
  imgElement.src = imgSrc;
function text(textContent) {
  var textElement = document.createElement("p");
  textElement.textContent = textContent;
function url(url,linktext)
  var linkElement = document.createElement("a");
  linkElement.href = "url";
  linkElement.textContent = "linktext";

  var containerElement = document.createElement("div");
  containerElement.appendChild(imgElement);
  containerElement.appendChild(textElement);
  containerElement.appendChild(linkElement);

  document.body.appendChild(containerElement);
}
