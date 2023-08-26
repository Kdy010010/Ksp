function showContent(imgSrc, textContent, linkURL) {
  var imgElement = document.createElement("img");
  imgElement.src = imgSrc;

  var textElement = document.createElement("p");
  textElement.textContent = textContent;

  var linkElement = document.createElement("a");
  linkElement.href = linkURL;
  linkElement.textContent = "링크를 클릭하세요";

  var containerElement = document.createElement("div");
  containerElement.appendChild(imgElement);
  containerElement.appendChild(textElement);
  containerElement.appendChild(linkElement);

  document.body.appendChild(containerElement);
}
