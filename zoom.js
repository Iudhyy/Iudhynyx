const card1 = document.getElementById("card1");
const img = document.getElementById("img1");

card1.addEventListener("mousemove", (e) =>{
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;


    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2)";
    img.style.display = "inline";
}) 
card1.addEventListener("mouseleave", ()=>{
    img.style.transformOrigin ="center center";
    img.style.transform = "scale(1)"
})