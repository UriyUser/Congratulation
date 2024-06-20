let canvas = document.getElementById('cnv');
let ctx = canvas.getContext('2d');

let img = new Image();
img.src = 'image/k.png';
img.onload = function() {
    ctx.drawImage(img, -40, -10);


const t = 
[
    "\tЛюба!\n",
    "С днём рождения поздравляю!\n",
    "Счастья искренне желаю,\n",
    "Доброты, любви, тепла,\n",
    "Чтоб душа была чиста й добра.",
];

let timer;

let line = 0;
let count = 0;
let out = '';
let htmlOut = document.querySelector('.out');

function typeLine() {
    //
    let interval = setTimeout(function() {
        out += t[line][count];
        htmlOut.innerHTML = out + '|';
        count++;
        //
        //
        if (count >= t[line].length) {
            count = 0;
            line++;
            if (line == t.length) {
                clearTimeout(interval); //
            htmlOut.innerHTML = out;
            return true;
            }
        }
        typeLine();
    }, 200);
}
typeLine();

b.onclick = function() {
    if (!v.paused) {
        v.paused();
        clearInterval(timer);
    } else {
        v.play();
        timer = setInterval(function() {
            ctx.drawImage(v, 0, 0, 150, 150);
        }, 20);
    }
};
};