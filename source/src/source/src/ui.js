export function el(html){
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

export function toast(msg){
  alert(msg);
}
