let text = "Happy Teddy Day, meri cutie pie! ❤️  Happy Teddy Day Kanika❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById('walking-text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
    }
}
typeWriter();
