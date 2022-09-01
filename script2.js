let textEl=document.getElementById('text');
let mainEl=document.getElementById('main');
let text="IAmProgrammingEngineer";
let colors=['#123','#523','#764','#183','#923','#164','#823','#233','#854','#181','#003','#222','#123','#523','#764','#183','#923','#164','#823','#233','#854','#181','#164','#823'];
let count=1;
console.log(text);
writeText()
function writeText(){
    textEl.innerText=text.slice(0,count);
    count++;
    if (count >text.length){
        count=1;
    }
    // mainEl.style.backgroundColor=colors[count];
    textEl.style.color=colors[count+1];
    setTimeout(writeText,300)
    
}