const data=document.querySelector(".con-data")
const data2=document.querySelector(".con-data2")
const btn1=document.querySelector("#btn1")
const btn2=document.querySelector("#btn2")
btn1.addEventListener("click",()=>{
    data.style.display="none"
    data2.style.display="block"
})
btn2.addEventListener("mouseenter",()=>{
const length=window.innerWidth-btn2.offsetWidth;
const height=window.innerHeight-btn2.offsetHeight;
const x=Math.floor(Math.random()*length);
const y=Math.floor(Math.random()*height);
btn2.style.position="absolute";
btn2.style.left=x+"px";
btn2.style.top=y+"px";

})