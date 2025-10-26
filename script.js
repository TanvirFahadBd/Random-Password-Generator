

const passwordplace = document.getElementsByClassName("button1")[0];

passwordplace.addEventListener('click', ()=> {
    
    const generateButton = document.getElementById("password");
    
    
})



let myArr = [1,2,3,4,6,7,8,9,"A","b","f","y","r","6","7",];
let myArr2 = []

for (let index = 0; index < 12; index++) {
    
    let lengtht = Math.floor(Math.random()*myArr.length);
    myArr2.push(myArr[lengtht]);
    
    
}

console.log(myArr2.join(""));
