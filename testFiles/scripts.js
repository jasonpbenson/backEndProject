

const aboutUs = [
    {
        name: 'Jason Benson',
        color: "If Jason were a color, he would be...",
        profile: `<a href ="https://github.com/jasonpbenson" target="_blank">Github Profile</a>`,
    },

    {
        name: 'Katie Duane',
        color: "If Katie were a color, she would be dark green, like the color of a large magnolia leaf or the needles on a sitka spruce, though semi-translucent, amorphous.",
        profile: `<a href ="https://github.com/jasonpbenson" target="_blank">Github Profile</a>`,
    },

    {
        name: 'Christopher Soltis',
        color: "If Chris were a color, he would be...",
        profile: `<a href ="https://github.com/jasonpbenson" target="_blank">Github Profile</a>`,
    },
]

const colors = [
    {
        colorCode: "rgb(220, 20, 60)",
        colorName: "Red",
        attributes: [`Love, romance, danger, attention, warmth, comfort, energy, excitement,
        intensity, life, blood.`]
    },

    {
        colorCode: "rgb(255, 128, 0)",
        colorName: "Pink",
        attributes: [`Romance, love, gentleness, calm, tenderness.`]
    },

    {
        colorCode: "rgb(255, 215, 0)",
        colorName: "Orange",
        attributes: [`Happiness, energy, excitement, enthusiasm, warmth, prosperity,
        change, stimulation, youthfulness.`]
    },

    {
        colorCode: "rgb(255, 215, 0)",
        colorName: "Yellow",
        attributes: [`Happiness, laughter, cheer, warmth, optimism, hunger, intensity,
        sun, summer, levity.`]
    },

    {
        colorCode: "rgb(0, 128, 0)",
        colorName: "Green",
        attributes: [`Nature, coolness, growth, transformation, renewal, money, health, envy,
        tranquility, harmony, calm, fertility, good luck.`]
    },

    {
        colorCode: "rgb(0, 139, 139)",
        colorName: "Turquoise",
        attributes: [`Femininity, sophistication, energy, wisdom, serenity, wholeness, creativity, 
        balance, spirituality, tranquility, patience, intuition, friendship, and loyalty.`]
    },

    {
        colorCode: "rgb(0, 0, 255)",
        colorName: "Blue",
        attributes: [`Stability, calm, serenity, sadness, cold, distance, wisdom, loyalty,
        truth, focus.`]
    },

    {
        colorCode: "rgb(102, 51, 153)",
        colorName: "Purple",
        attributes: [`Creativity, royalty, wealth, sophistication, wisdom, exotica, spirituality,
                prosperity, respect, mystery.`]
    },

    {
        colorCode: "rgb(255, 255, 255)",
        colorName: "White",
        attributes: [`Purity, innocence, cleanliness, sense of space, neutrality, peace, surrender, quiet.`]
    },

    {
        colorCode: "rgb(169, 169, 169)",
        colorName: "Gray",
        attributes: [`Neutrality, timelessness, practicality, boredom.`]
    },

    {
        colorCode: "rgb(0, 0, 0)",
        colorName: "Black",
        attributes: [`Authority, power, strength, evil, intelligence, death, mourning, night,
        darkness, space, depth.`]
    },

    {
        colorCode: "rgb(139, 69, 19)",
        colorName: "Brown",
        attributes: [`Groundedness, reliability, earthy, friendship, warmth, comfort, security
        natural, organic.`]
    }

]

// let aboutDevs = document.getElementById('devWrapper');
// let aboutHTML = "";
// for (let i = 0; i <= aboutUs.length; i++) {
//     aboutHTML += `<div class="name"> ${aboutUs[i].name} </div>
//         <div class="about"> ${aboutUs[i].color} </div>
//         <div class="profile"> ${aboutUs[i].profile} </div>`
//     $(aboutDevs).html(aboutHTML)
// }

let colorData = document.getElementById('aboutColorWrapper');
let colorHTML = "";
for (let i = 0; i < colors.length; i++) {
    colorHTML += `<div class="colorExample> ${colors[i].colorCode} </div>
        <div class="colorName"> ${colors[i].colorName}</div>
        <div class="aboutColor"> ${colors[i].attributes}</div>
        `
    $(colorData).html(colorHTML);
}

for (let i = 0; i < colors.length; i++ ) {
    document.querySelector(".colorExample").style.background = colors[i].colorCode
}

