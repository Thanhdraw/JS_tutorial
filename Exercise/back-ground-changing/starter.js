const button = document.querySelector(".change");

button.addEventListener("click",handleChangeColor);

const colors = ["#27374D","#526D82","#9DB2BF","#DDE6ED"];

function handleChangeColor(){
    //    document.body.setAttribute("style","background-color:red");

        const color = colors[Math.floor(Math.random()*colors.length)]

        document.body.style.background = color;
}