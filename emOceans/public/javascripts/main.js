// color as class ========================================================>

class Palette{
    constructor(hue) {
        this.hue = hue;
        this.originalColor = hue;
        this.warm = null;
        this.cool = null;
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
        console.log(this.warm)
    }

    setCool(cool) {
        this.cool = cool;
        console.log(this.cool)
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
    desat() {
        this.hue = chroma(this.hue).desaturate(1)
        this.updateElement()
    }
    warmer() {
        this.hue = chroma.mix(this.hue, this.warm)
        this.updateElement()
    }
    cooler() {
        this.hue = chroma.mix(this.hue, this.cool)
        this.updateElement()
    }
    reset() {
        this.hue = this.originalColor
        this.updateElement()
        
    }
}

let colorPalette = new Palette('white')

class Color{
    constructor(hue, warm, cool, paletteToChange) {
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
        })
        document.querySelector('.swatchContainer').appendChild(this.element)
    }

    updateElement() {
        this.element.style.backgroundColor = this.hue;
    }
  
}

let reds = new Color('rgb(220, 20, 60)', 'rgb(139, 69, 19)', 'rgb(102, 51, 153)', colorPalette)
let oranges = new Color('rgb(255, 128, 0)', 'brown', 'blue', colorPalette)
let yellows = new Color('rgb(255, 215, 0)', 'orange', 'green', colorPalette)
let greens = new Color('rgb(0, 128, 0)', 'yellow', 'blue', colorPalette)
let turquoises = new Color('rgb(0, 139, 139)', 'yellow', 'blue', colorPalette)
let blues = new Color('rgb(0, 0, 255)', 'rebeccapurple', 'navy', colorPalette)
let purples = new Color('rgb(102, 51, 153)', 'red', 'blue', colorPalette)
let magentas = new Color('rgb(218, 112, 214)', 'red', 'blue', colorPalette)
let browns = new Color('rgb(139, 69, 19)', 'red', 'blue', colorPalette)
let whites = new Color('rgb(255, 255, 255)', 'burlywood', 'aliceblue', colorPalette)
let grays = new Color('rgb(169, 169, 169)', 'palevioletred', 'lightskyblue', colorPalette)
let blacks = new Color('rgb(0, 0, 0)', 'red', 'blue', colorPalette)


lightenButton.addEventListener('click', (event) => {
    colorPalette.lighten()

})

darkenButton.addEventListener('click', (event) => {
    colorPalette.darken()
})

satButton.addEventListener('click', (event) => {
    colorPalette.sat()
})

desatButton.addEventListener('click', (event) => {
    colorPalette.desat()
})

warmButton.addEventListener('click', (event) => {
    colorPalette.warmer()
})

coolButton.addEventListener('click', (event) => {
    colorPalette.cooler()
})

resetButton.addEventListener('click', (event) => {
    colorPalette.reset()
})


// console.log(bigCircle.style.backgroundColor, "test")
