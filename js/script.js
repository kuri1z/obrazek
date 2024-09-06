function Add(){
    let input = document.getElementById("input")
    let output = document.getElementById("output");
    console.log(input);
    document.getElementById("output").innerHTML = input.value;


document.getElementById("output").innerHTML = document.getElementById("input").innerHTML

    console.log("hodnota v inputu je:", input);

    console.log("hodnota v outputu je:", output);

    const i = 1;
    output.innerHTML = input.value + " ";
    i++;

}   