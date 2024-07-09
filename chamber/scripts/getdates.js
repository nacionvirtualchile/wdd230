const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = "Ultima modificación: " + lastModified;



document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const date = new Date();
    document.getElementById('timestamp').textContent = date;

    this.submit();
});



