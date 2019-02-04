// Palette as class ====================================================================>

class Palette{
    constructor(hue) {
        this.hue = hue;
        this.originalColor = hue;
        this.warm = null;
        this.cool = null;
        this.name = null;
        this.element = document.querySelector('.palette')
        this.updateElement();
        this.resetElement();
    }
    setHue(hue) {
        this.hue = hue;
        this.updateElement();
    }
    setWarm(warm) {
        this.warm = warm;
    }
    setCool(cool) {
        this.cool = cool;
    }
    setName(name) {
        this.name = name;
    }
    setOriginalColor(hue){
        this.originalColor = hue;
    }
    updateElement() {
        this.element.style.backgroundColor = this.hue;
    }
    resetElement() {
        this.element.style.backgroundColor = this.originalColor;
    }
    lighten() {
        let total;
        if (typeof this.hue == 'object'){
            total = this.hue._rgb[0] + this.hue._rgb[1] + this.hue._rgb[2]
        }
        if (!total || total < 650){
            this.hue = chroma(this.hue).brighten(1)
            this.updateElement()
        }
    }
    darken() {
        let total;
        if (typeof this.hue == 'object') {
            total = this.hue._rgb[0] + this.hue._rgb[1] + this.hue._rgb[2]
        }
        if (!total || total > 100) {
            this.hue = chroma(this.hue).darken(1)
            this.updateElement()
        }
    }
    sat() {
        this.hue = chroma(this.hue).saturate(1)
        this.updateElement()
    }
// desat() needs logic to stop it before it's gray (r, g, b all equal)!!!!!!!!!!!!!!!!
// i tried converting to hsl but it didn't like that... with comparing values in an RGB array
// to see if they were the same, the decimals prevented that, and I could not floor the numbers,
// as that froze their numbers as they were when they were floored, and could not be further manipulated
// by chroma. HSL/HSV methods returned drastically different hues... can't use...
// THE ONLY THING I COULD THINK OF WAS DISABLING THE BUTTON AFTER ONE CLICK AND RE-ENABLING THE BUTTON ON RESET!
    desat() {
        this.hue = chroma(this.hue).desaturate(2)
        this.updateElement()
    }
    warmer() {
        this.hue = chroma.mix(this.hue, this.warm, 0.25)
        this.updateElement()
    }
    cooler() {
        this.hue = chroma.mix(this.hue, this.cool, 0.25)
        this.updateElement()
    }
    reset() {
        this.hue = this.originalColor
        this.updateElement()
        console.log(this.hue)    
    }
    sendToForm() {
        this.hue = formColor.value
    }
}

// Palette object declaration ==========================================================>

let colorPalette = new Palette('rbg(255, 255, 255)')

// Color as class ======================================================================>

class Color{
    constructor(name, hue, warm, cool, paletteToChange) {
        this.name = name;
        this.hue = hue;
        this.warm = warm;
        this.cool = cool;
        this.originalColor = hue;
        this.element = document.createElement('div')
        this.element.classList.add('swatch')
        this.updateElement();
        this.element.addEventListener('click',(event) => {
            paletteToChange.setHue(this.hue);
            paletteToChange.setCool(this.cool);
            paletteToChange.setWarm(this.warm);
            paletteToChange.setOriginalColor(this.hue);
            paletteToChange.setName(this.name)
            document.querySelector(".editorContainer").style.display = 'flex';
            document.querySelector(".paletteContainer").style.display = 'flex';
            document.querySelector(".swatchContainer").classList.add('mobileHide');
        })
        document.querySelector('.swatchContainer').appendChild(this.element)
    }
    updateElement() {
        this.element.style.backgroundColor = this.hue;
    }
}

// Color object declarations ==========================================================>
// These aren't final, we need to tweak color codes for hue esp, but also warm/cool,
// and adjust the ratio for .mix() to slow down the warming/cooling process

let reds = new Color('red','rgb(220, 20, 60)', 'rgb(139, 69, 19)', 'rgb(102, 51, 153)', colorPalette)
let oranges = new Color('orange', 'rgb(255, 128, 0)', 'brown', 'blue', colorPalette)
let yellows = new Color('yellow', 'rgb(255, 215, 0)', 'orange', 'green', colorPalette)
let greens = new Color('green', 'rgb(0, 128, 0)', 'yellow', 'blue', colorPalette)
let turquoises = new Color('turquoise', 'rgb(0, 139, 139)', 'yellow', 'blue', colorPalette)
let blues = new Color('blue', 'rgb(0, 0, 255)', 'rebeccapurple', 'navy', colorPalette)
let purples = new Color('purple', 'rgb(102, 51, 153)', 'red', 'blue', colorPalette)
let magentas = new Color('magaenta','rgb(218, 112, 214)', 'red', 'blue', colorPalette)
let browns = new Color('brown', 'rgb(139, 69, 19)', 'red', 'blue', colorPalette)
let whites = new Color('white', 'rgb(255, 255, 255)', 'burlywood', 'aliceblue', colorPalette)
let grays = new Color('gray', 'rgb(169, 169, 169)', 'palevioletred', 'lightskyblue', colorPalette)
let blacks = new Color('black', 'rgb(0, 0, 0)', 'red', 'blue', colorPalette)

// Event listeners for color adjust buttons ============================================>
// Work on putting into for loop!

lightenButton.addEventListener('click', (event) => {
    colorPalette.lighten()
})

darkenButton.addEventListener('click', (event) => {
    colorPalette.darken()
})

satButton.addEventListener('click', (event) => {
    colorPalette.sat()
    document.getElementById("desat").disabled = false;
})

desatButton.addEventListener('click', (event) => {
    colorPalette.desat()
    document.getElementById("desat").disabled = true;
})

warmButton.addEventListener('click', (event) => {
    colorPalette.warmer()
    
})

coolButton.addEventListener('click', (event) => {
    colorPalette.cooler()
})

resetButton.addEventListener('click', (event) => {
    colorPalette.reset()
    document.getElementById("desat").disabled = false;
})

// JS for getting color INTO FORM to be posted ============================>

// I'd rather NOT force them click a 'save color' button, but I can't think of another
// way to get that color code to the form... this works for the MVP tho...
saveButton.addEventListener('click', (event) => {
    let savedColor = palette.style.backgroundColor 
    formColor.value = savedColor
    document.querySelector('.swatchContainer').style.display = 'none';
    document.querySelector(".editorContainer").style.display = 'none'
    document.querySelector(".textContainer").style.display = 'flex';
    document.querySelector(".submitContainer").style.display = 'flex';
    document.querySelector("#today").valueAsDate = new Date();
})

