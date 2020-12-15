let input = document.getElementById("value");
let array = [];
let flag = false;

document.getElementById("submitValue").addEventListener("click", function (){
    array.push(input.value);
    input.value = ""

    if (array.length >= 10){
        document.getElementById("randomValue").innerHTML = array[Math.trunc(Math.random()*array.length)];
    }

    if (array.length > 5){
        document.getElementById("cinqieme").innerHTML = array[5];
    }

});

document.getElementById("random").addEventListener("click", function (){

    document.getElementById("divRandom").innerHTML = array[Math.trunc(Math.random()*array.length)];
});

document.getElementById("allElement").addEventListener("click", function (){
    let nbr = 0;
    for (let i of array) {
        document.getElementById("divAllEllement").innerHTML += "["+nbr+"]"+"- "+i + "<br>";
        nbr++;
    }
    flag = true;
});

document.getElementById("deleteLast").addEventListener("click", function (){
    array.pop();
    document.getElementById("divAllEllement").innerHTML = "";
    if (flag) {
        let nbr = 0;
        for (let i of array) {
            document.getElementById("divAllEllement").innerHTML += "[" + nbr + "]" + "- " + i + "<br>";
            nbr++;
        }
    }
});

document.getElementById("deleteAll").addEventListener("click", function (){
    array = [];
    if (flag) {
        document.getElementById("divAllEllement").innerHTML = "";
    }
});