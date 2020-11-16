document.getElementById("output").style.visibility = "hidden";
document.getElementById("kmInput").addEventListener("input", function(e){
    document.getElementById("output").style.visibility = "visible";
    let km = e.target.value;
    console.log(km)
    document.getElementById("metresOutput").innerHTML = 1000 * km;
    document.getElementById("smOutput").innerHTML = 1000 * 100 * km;
    document.getElementById("milimetrsOutut").innerHTML = 1000 * 1000 * 100 * km;
})
