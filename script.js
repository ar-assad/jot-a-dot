function renderCanvas(canvasSize = 400, pixelSize = 16) {
    const root = document.querySelector(':root');
    root.style.setProperty('--canvas-size', canvasSize + 'px');
    const canvas = document.querySelector('.canvas');
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