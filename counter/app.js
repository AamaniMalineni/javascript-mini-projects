let count=0;
const buttons=document.querySelectorAll(".btn");
console.log(buttons);
const value=document.querySelector("#value");
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(e){
        const styles=e.currentTarget.classList;
        if(styles.contains('increase')){
            count+=1;
            if(count>0)
            value.style.color="green";
        }
        else if(styles.contains('decrease')){
            count-=1;
            if(count<0){
                value.style.color="red";
            }
        }
        else{
            count=0;
        }
        value.textContent=count;
    })

}