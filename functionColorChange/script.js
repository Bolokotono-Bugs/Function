function changeColor(){
    const textColor = document.querySelector('#textColor');
    const fontColor = document.querySelector('#fontColor');
    document.body.style.background = textColor.value;
    document.body.style.color = fontColor.value;
}

function reset(){
    const textColor = document.querySelector('#textColor');
    const fontColor = document.querySelector('#fontColor');
    textColor.value = null;
    fontColor.value = "#000000";
    document.body.style.background = textColor.value;
    document.body.style.color = fontColor.value;

}