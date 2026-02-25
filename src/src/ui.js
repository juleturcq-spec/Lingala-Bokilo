export function el(html){
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstChild;
}

export function toast(message){
  alert(message);
}
