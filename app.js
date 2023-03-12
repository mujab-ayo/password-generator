const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let output = document.getElementById('output');


function random(value) {
    return Math.floor(Math.random() * value);
}

function generator() {
    let range = document.getElementById('output-length').value;
    document.querySelector('.output-length-btn').textContent = range
    const charLength = characters.length;


    let str = '';

    for (i = 0; i < range; i++) {
        let randomNum = random(charLength);
        str += characters.charAt(randomNum)
    }
    console.log(str)
    output.value = str;
}


function copyText() {
    output.select();

    document.execCommand('copy');

    alert('password copied!!')

}

generator()