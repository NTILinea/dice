document.querySelector("button").addEventListener("click", showNr)

    /*document.getElementById("diceLog").innerHTML = alert ("test")*/

/*function runThis() {
    alert("Hello! I am an alert box!!")*/



function showNr() {
    //document.querySelector("p").innerHTML = nr
    let nr = Math.floor ((Math.random()*10)+1)
    document.querySelector("img").src = "DiceRolls/" + nr + ".png"
    console.log(nr)
}



