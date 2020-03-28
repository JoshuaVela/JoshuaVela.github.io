let turno = true;
let enpartida = true;
/*alert("Ganaste");*/
const botones = document.querySelectorAll(".cuadro");
let h;
const Body = document.getElementById("gato");
for(let i = 0; i < botones.length; i++)
{
    botones[i].addEventListener("click", (e)=>
    {
        //alert("Esa no es prro");
        if(turno && e.target.innerHTML === "" && enpartida)
        {
            e.target.innerHTML = "O";
            turno = !turno;
            if(ganar() === 0)
            {
                document.querySelector("#rondawinerO").textContent = contadorO;
                document.querySelector("#Win").textContent = "Gano: O";
                contadorO++;
                Body.style.backgroundColor = "rgb(33, 98, 40)";
            }
        }
        else if(e.target.innerHTML === "" && enpartida)
        {
            e.target.innerHTML = "X";
            turno = !turno;
            if(ganar() === 1)
            {
                contadorX++;
                document.querySelector("#rondawinerX").textContent = contadorX;
                document.querySelector("#Win").textContent = "Gano: X";
                Body.style.backgroundColor = "rgb(13, 30, 92)";
            }
        }
        h = e.target.innerHTML;
        console.log(h);
    });
}
//boton1.addEventListener("click", (e)=>
//{
    /*alert("Esa no es prro");
    console.log(e);
    if(turno)
    {
        e.target.innerHTML = "O";
        turno = !turno;
    }
    else
    {
        e.target.innerHTML = "X";
        turno = !turno;
    }
    
})**/
const botonreinicio = document.querySelector("#reinicio");
botonreinicio.addEventListener("click", (e)=>
{
    location.reload();
});

const restart = document.querySelector("#reiniciar");
restart.addEventListener("click", (e)=>
{
    enpartida = true;
    for(let i=0; i<botones.length; i++)
    {
    botones[i].innerHTML = "";
    Body.style.backgroundColor = "rgb(38, 140, 131)";
    contador = 0;
    }
}
);
let contador = 0;
let contadorX = 0;
let contadorO = 0;

const List = [ [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,4,8],
                [2,4,6],
                [0,3,6],
                [1,4,7],
                [2,5,8]];

function ganar()
{
    contador++;
    for (let i =0; i<List.length; i++)
    {
        if(botones[List[i][0]].innerHTML === "O" && botones[List[i][1]].innerHTML === "O" && botones[List[i][2]].innerHTML === "O")
        {
            enpartida = false;
            return 0;
        }
        else if(botones[List[i][0]].innerHTML === "X" && botones[List[i][1]].innerHTML === "X" && botones[List[i][2]].innerHTML === "X")
        {
            enpartida = false;
            return 1;
        }
    }
    if (contador == 9)
    {
        alert("Nadie Gano");
        enpartida=false;
        return -1;
    }
};