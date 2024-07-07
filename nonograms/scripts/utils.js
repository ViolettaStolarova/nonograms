export function createElement({ elementName, className, inner, id }) {
  const element = document.createElement(elementName);
  element.innerHTML = inner ?? "";
  element.className = className ?? "";
  element.id = id ?? "";
  return element;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
