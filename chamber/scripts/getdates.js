const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = "Ultima modificación: " + lastModified;