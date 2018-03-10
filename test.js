function getWidth(pText, pFontSize, pStyle) {
    var lDiv = document.createElement('div');

    document.body.appendChild(lDiv);

    if (pStyle != null) {
        lDiv.style = pStyle;
    }
    lDiv.style.fontSize = "" + pFontSize + "px";
    lDiv.style.position = "absolute";
    lDiv.style.left = -1000;
    lDiv.style.top = -1000;

    lDiv.innerHTML = pText;

    var lResult = {
        width: lDiv.clientWidth,
        height: lDiv.clientHeight
    };

    document.body.removeChild(lDiv);
    lDiv = null;

    return lResult.width;
}

function renderSummaryQuestionText(questionText){
    //questionText without " ?" and splitting afterwards
    var title = questionText.substring(0, questionText.length);
    console.log("title", title);
    var words = title.split(" ");
    //console.log("words", words);
    var lineRef="", firstLine = "", textWidth=0, secondLine="", thirdLine="", fourthLine="", fifthLine="", sixthLine="";
    var p1=0, p2=0,p3=0, p4=0, p5=0, p6=0;
    //var W_REF = 285;
    for(var i=0; i<words.length; i++){
        lineRef += words[i]+" ";
        textWidth = this.getWidth(lineRef,  16, "font-family: AvenirNext-Heavy, Avenir Next;");
        var b1=true, b2=true, b3=true, b4=true, b5=true, b6=true;
        if(textWidth<=285){
            firstLine += words[i]+" "; p1=textWidth;
            b1=false;
        }

        //if(b1) textWidth=286+this.getWidth(words[i],  16, "font-family: AvenirNext-Heavy, Avenir Next;");
        if(textWidth>285 && textWidth<=285*2){
            secondLine += words[i]+" "; p2=textWidth; b2=false;
        }
        //if(b2) textWidth=285*2+1+this.getWidth(words[i],  16, "font-family: AvenirNext-Heavy, Avenir Next;");
        if(textWidth>285*2 && textWidth<=285*3){
            thirdLine += words[i]+" "; p3=textWidth; b3=false;
        }
        //if(b3) textWidth=285*3+1+this.getWidth(words[i],  16, "font-family: AvenirNext-Heavy, Avenir Next;");
        if(textWidth>285*3 && textWidth<=285*4){
            fourthLine += words[i]+" "; p4=textWidth; b4=false;
        }
        //if(b4) textWidth=285*4+1+this.getWidth(words[i],  16, "font-family: AvenirNext-Heavy, Avenir Next;");
        if(textWidth>285*4 && textWidth<=285*5){
            fifthLine += words[i]+" "; p5=textWidth; b5=false;
        }
        //if(b5) textWidth=285*5+1+this.getWidth(words[i],  16, "font-family: AvenirNext-Heavy, Avenir Next;");
        if(textWidth>285*5 && textWidth<=285*6){
            sixthLine += words[i]+" "; p6=textWidth; b6=false;
        }

    }
    return [textWidth, {p1, firstLine}, {p2, secondLine}, {p3, thirdLine}, {p4, fourthLine}, {p5, fifthLine}, {p6, sixthLine}];

}

function splitThroughPixel(string, width, size, style){

    var words = string.split(' ');
    var response = [];
    var current = '';

    for(var i=0; i<words.length; i++){

        var word = words[i];
        var temp = current + (current == '' ? '' : ' ') + word;

        if(getWidth(temp, size, style) > width){
            response.push(current.trim());
            current = '';
        }else{
            current = temp;
        }

    }

    return response;

}

function wrapText(text, maxWidth) {
    const words = text.split(' ');

    var el = document.createElement('div');
    document.body.appendChild(el);

    el.style.position = "absolute";
    var rows = [];
    var row = [];
    var usedIndex = 0;

    // loop through each word and check if clientWidth is surpassing maxWidth
    for(var i = 0; i < words.length; i++) {
        const word = words[i];
        el.innerHTML += word;
        if (el.clientWidth > maxWidth) {
            rows.push(el.innerHTML);
            usedIndex = i;
            el.innerHTML = "";
        } else {
            el.innerHTML += " ";
        }
    }

    // handle remaining words
    words.splice(0, usedIndex);
    rows = rows.concat(words.join(" "));

    document.body.removeChild(el);

    return rows;
}


var string ="Pourquoi parlons toujours de la France métropolitaine, en oubliant que la France a une frontière terrestre avec 11 pays et que le soleil ne se couche jamais sur ses départements ?";
var string2 = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s";
// console.log("renderSummaryQuestionText", getWidth(string2,  16, "font-family: AvenirNext-Heavy, Avenir Next;"));
// console.log(wrapText(string, 285));

console.log(wrapText(string, 270));