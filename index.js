let count=0;
let value=document.querySelector('#value');
let inc=document.querySelector(".icn");
let dec=document.querySelector(".Dec");
let reset=document.querySelector(".reset");
inc.addEventListener("click",()=>{

    count ++;
    value.innerHTML=count;
});
dec.addEventListener("click",()=>{

    count --;
    value.innerHTML=count;
});
reset.addEventListener("click",()=>{

    count =0;
    value.innerHTML=count;
});
