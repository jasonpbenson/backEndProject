// What can we do with the datamuse API?
const apiBaseUrl = `https://api.datamuse.com/words?ml=`
//add functionality for picking an ocean work to be combined with the
//word they input (calm, stormy, deep, cold, warm, etc...) will go into the url at somepoint
//be sure to select only those word objects with an "adj" for .tag

$('#word-form').submit((event) => {
    //stops the browser from going forward
    event.preventDefault();
    let wordSearch = $('#search-input').val()
    const wordSearchUrl = `${apiBaseUrl}${wordSearch}&max=30`
    let newHTML = '';
    $.getJSON(wordSearchUrl, (wordInfo) => {
        console.log(wordInfo)
        if (wordInfo.status == 404) {
            let newHTML = `<p> Didn't quite get that! </p>`;
        }
        else{
            newHTML += `<div class="results">`
            for (let i = 0; i < wordInfo.length; i++){
                if (i < wordInfo.length - 1) {
                    newHTML += `<span class="word">${wordInfo[i].word}, </span>`
                } else if (i == wordInfo.length -1) {
                    newHTML += `<span class="word">${wordInfo[i].word}</span>`
                }
            }
            newHTML += `</div>`
        }
        $('.word-info-box').html(newHTML)
    })
})






// let rgbToHex = function (rgb) {
//     let hex = Number(rgb).toString(16);
//     if (hex.length < 2) {
//         hex = "0" + hex;
//     }
//     return hex;
// };

// let fullColorHex = function (r, g, b) {
//     let red = rgbToHex(r);
//     let green = rgbToHex(g);
//     let blue = rgbToHex(b);
//     return red + green + blue;
// };

// console.log(fullColorHex(220, 20, 60))

