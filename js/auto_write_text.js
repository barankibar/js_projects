const text = 'I am a auto write text ';

let index = 0;

function writeText(){
    document.getElementById("txt").innerHTML = text.slice(0,index);

    index++;

    if(index > text.length){
        index = 0;
    }
}

setInterval(writeText,100);