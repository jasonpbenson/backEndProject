const colors = [
    {
        colorCode: "rgb(220, 20, 60)",
        colorName: "Red",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Love, romance, danger, attention, warmth, comfort, energy, excitement,
        intensity, passion, fire, life, blood.`]
    },

    {
        colorCode: "rgb(218, 112, 214)",
        colorName: "Pink",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Romance, love, gentleness, calm, tenderness, kindness, sweetness, charm, 
        playfulness, calm, optimism.`]
    },

    {
        colorCode: "rgb(245, 155, 6)",
        colorName: "Orange",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Happiness, energy, excitement, enthusiasm, warmth, prosperity, determination,
        change, stimulation, youthfulness.`]
    },

    {
        colorCode: "rgb(255, 215, 0)",
        colorName: "Yellow",
        textColor: "rgb(90, 87, 122)",
        attributes: [`Happiness, laughter, cheer, warmth, positivity, hunger, intensity, cowardice,
        sunshine, summer, levity.`]
    },

    {
        colorCode: "rgb(0, 128, 0)",
        colorName: "Green",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Nature, coolness, growth, transformation, renewal, money, health, envy,
        tranquility, harmony, calm, fertility, good luck.`]
    },

    {
        colorCode: "rgb(0, 139, 139)",
        colorName: "Turquoise",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Femininity, sophistication, energy, wisdom, serenity, wholeness, creativity, 
        balance, spirituality, tranquility, patience, intuition, friendship, and loyalty.`]
    },

    {
        colorCode: "rgb(0, 0, 255)",
        colorName: "Blue",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Stability, calm, serenity, sadness, cold, distance, wisdom, loyalty,
        truth, focus, intelligence, confidence, depth.`]
    },

    {
        colorCode: "rgb(102, 51, 153)",
        colorName: "Purple",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Creativity, royalty, wealth, sophistication, wisdom, exotica, spirituality,
        prosperity, respect, mystery, ambition.`]
    },

    {
        colorCode: "rgb(255, 255, 255)",
        colorName: "White",
        textColor: "rgb(90, 87, 122)",
        attributes: [`Purity, innocence, cleanliness, sense of space, neutrality, peace, surrender, quiet.`]
    },

    {
        colorCode: "rgb(169, 169, 169)",
        colorName: "Gray",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Neutrality, timelessness, practicality, boredom, sophistication, sleek, formal.`]
    },

    {
        colorCode: "rgb(0, 0, 0)",
        colorName: "Black",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Authority, power, strength, evil, intelligence, death, mourning, night,
        darkness, space, depth.`]
    },

    {
        colorCode: "rgb(139, 69, 19)",
        colorName: "Brown",
        textColor: "rgb(243, 242, 248)",
        attributes: [`Groundedness, reliability, earthy, friendship, warmth, comfort, security
        natural, organic.`]
    }

]

const aboutUs = [
    {
        name: 'Jason Benson',
        color: "If Jason were a color, he would be cool grey, the color of a cloud detached from the sky, finding its way to earth.",
        code: 'rgb(156, 164, 193)',
        profile: `<a href ="https://github.com/jasonpbenson" target="_blank">Github Profile</a>`,
    },

    {
        name: 'Katie Duane',
        color: "If Katie were a color, she would be dark green, like the color of a large magnolia leaf, though semi-translucent, amorphous.",
        code: 'rgb(32, 116, 24)',
        profile: `<a href ="https://github.com/jasonpbenson" target="_blank">Github Profile</a>`,
    },

    {
        name: 'Christopher Soltis',
        color: "If Chris were a color, he would be bright blue, like a sip of fresh air, breezy, boundless.",
        code: 'rgb(31, 132, 201)',
        profile: `<a href ="https://github.com/jasonpbenson" target="_blank">Github Profile</a>`,
    },
]


let colorData = document.getElementById('aboutColorWrapper');
let colorHTML = "";
for (let i = 0; i < colors.length; i++) {
    colorHTML += `
    <div class="aboutColor" style="background-color: ${colors[i].colorCode}; color: ${colors[i].textColor}"> ${colors[i].attributes}</div>
    `
    $(colorData).html(colorHTML);
} 

let aboutDevs = document.getElementById('devWrapper');
let aboutHTML = "";
for (let i = 0; i < aboutUs.length; i++) {
    aboutHTML += `<div class="devName" style="background-color: ${aboutUs[i].code}"> <div class="fullName">${aboutUs[i].name}</div>
        <div class="aboutEach"> ${aboutUs[i].color} </div>
        <div class="profile"> ${aboutUs[i].profile} </div>
        </div>`
    $(aboutDevs).html(aboutHTML)
}

