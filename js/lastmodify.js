const lastmodify = "Last modified:";

let oLastModif = new Date(document.lastModified);

const text = `${ lastmodify} ${oLastModif }`;

document.getElementById("updatetime").innerHTML = text; 