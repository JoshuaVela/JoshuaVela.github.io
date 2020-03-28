const input = document.querySelector("#input");
const button = document.querySelector("#Adivina");
const Bo = document.getElementById("BODY");
let aleatorio = Math.round(Math.random()*100);
button.addEventListener("click", (e)=>{
        if(input.value < aleatorio)
    {
        alert("Mas Arriba");
    }
    else if(input.value > aleatorio)
    {
        alert("Mas abajo");
    }
    else
    {
        alert("Ganastee!!");
        Bo.style.backgroundColor = "Yellowgreen";
    }
});
const Rei = document.querySelector("#Reiniciar");
Rei.addEventListener("click", (e)=>{
    location.reload();
});
function ViewAraayInput(){
    let Num = Array();
    let inpValues = document.getElementsByClassName("VInputs")
    namesValues = [].map.call(inpValues, function(dataIn){
    Num.push(dataIn.value);
    });
    let Div = document.createElement("div");
    let Tex = document.createTextNode(Num);
    Div.appendChild(Tex);
    document.body.appendChild(Div);
}