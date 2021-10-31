const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const text = $('.text');
const iconclose = $('.icon-close');
const btn = $('.btn');
let x;
let y;

let ispain = false;
var ctx = text.getContext("2d");
text.addEventListener('mousedown', (e) => {
    if (ispain = true) {
        x = text.offsetX
        y = text.offsetY
    }

})
text.addEventListener('mouseup', (e) => {
    ispain = false
    x = undefined;
    y = undefined;

})
text.addEventListener('mousemove', (e) => {
    if (ispain) {
        const xclient = e.offsetX;
        const yclient = e.offsetY;
        handle(xclient, yclient)
        drawLine(x, y, xclient, yclient)
        x = xclient;
        y = yclient;
    }
})
iconclose.addEventListener('click', () => {
    close()
})
let size = 2;
function handle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fill()
}
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()//đặt nét vẽ
    ctx.moveTo(x1, y1)//đ bắt đầu
    ctx.lineTo(x2, y2)//đ kết thúc
    ctx.lineWidth = size * 2
    ctx.stroke()
}
function close() {
    ctx.clearRect(0, 0, text.width, text.height)
}
btn.addEventListener('click', () => {
    const body = $('body')
    body.classList.toggle('white');
})