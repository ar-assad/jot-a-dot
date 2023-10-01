const canvas = document.querySelector('.canvas');

function renderCanvas(canvasSize = 400, pixelSize = 16) {
    const root = document.querySelector(':root');
    root.style.setProperty('--canvas-size', canvasSize + 'px');
    const truePixelSize = canvasSize / pixelSize;
    for (let i = 0; i < pixelSize ** 2; i++) {
        const pixel = document.createElement('div');
        pixel.style.height = pixel.style.width = truePixelSize + 'px';
        pixel.addEventListener('mouseenter', () => {
            pixel.style.backgroundColor = 'black';
        })
        canvas.appendChild(pixel);
    }
}

renderCanvas();

const btn = document.querySelector('button');
btn.addEventListener('click', ()=>{
    let newDensity = +prompt("Enter new density __ × __ : ");
    if (!Number.isInteger(newDensity) || newDensity == 0) return;
    canvas.innerHTML = "";
    if (newDensity > 128)
        newDensity = 128;
    renderCanvas(400, newDensity);
})