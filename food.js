const add_cart=document.querySelector(".cart-add");
const off_canva=document.querySelector(".off-canva");
const closecanva=document.querySelector(".canva-close");

add_cart.addEventListener("click",()=>{
    off_canva.classList.add("off-canva-active");
});

closecanva.addEventListener("click",()=>{
    off_canva.classList.remove("off-canva-active");
});

document.addEventListener("DOMContentLoaded",loadfood);
function loadfood(){
    loadcantent();
}

// delete item from cart 
function loadcantent(){
let item_removed=document.querySelectorAll(".delete-icon");
item_removed.forEach((rbtn)=>{
    rbtn.addEventListener("click",removeitem);

});

let Quty=document.querySelectorAll(".quanty");
Quty.forEach((Qun)=>{
    Qun.addEventListener("change",Qunfun);
});
}
 function removeitem(){
    if(confirm("Are You sure Remove this item ?"))
    this.parentElement.remove();
 }
 // Change quenty

function Qunfun(){
if(isNaN(this.value) || this.value<1){
    this.value=1;
 }
}
// btn Filter


const butts=document.querySelectorAll(".btn");
const foood=document.querySelectorAll(".foods");

 butts.forEach((bt)=>{
    bt.addEventListener("click",(e)=>{
        e.preventDefault();
        setActivebtn(e);
        const btnfilter=e.target.dataset.filter;
        
        foood.forEach((foods)=>{
            if(btnfilter=="all"){
                foods.style.display="flex";
            }
            else{
                const foodfilter=foods.dataset.item;
                if(btnfilter==foodfilter){
                    foods.style.display="flex";
                    
                }else{
                    foods.style.display="none";
                }
                
            }
        });
    });
});

function setActivebtn(e){
    butts.forEach((bt)=>{
        bt.classList.remove("btn-clicked");
    });
    e.target.classList.add("btn-clicked"); 
}
//  change background

// function changebg(){
//     let change = document.getElementById("theme");
//         let bd= document.getElementById("bd");
//         let font=document.getElementById("headingf");
        
        
      
    
//     let select = change.value;
//     bd.style.backgroundColor = select;
//     font.style.color= select;
    
//     if(select === "White"){
//         bd.style.backgroundColor ="white";
//         font.style.color="black";
      
    
//     }
//     if(select === "Black") {
//         bd.style.backgroundColor="black";
//         font.style.color="white";
       
       
       
//     }
//     if(select === "Silver") {
//         bd.style.backgroundColor="silver";
//         font.style.color="black";
        
        
//     }

//     }