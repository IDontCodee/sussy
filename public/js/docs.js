async function fetchtext() {
let response = await fetch("https://sussy.player123456789.repl.co/DOCS.md")
let text = await response.text()
var converter = new showdown.Converter()
var html = converter.makeHtml(text);

var docspage = document.getElementById("docspage")
docspage.innerHTML = html
}

fetchtext()