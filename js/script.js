
let i = 1;
function Add(){
    let input = document.getElementById("input"); 
    let output = document.getElementById("output");
   
    console.log("Hodnota v inputu je: ", input);
    
    console.log("Hodnota v outputu je: ", output);

   
    output.innerHTML += i + ". " + input.value + "<br>"; 

    i++;
    const emojiButtons = document.querySelectorAll('.emojiBtn');

    
}
function pridatEmoji(emoji) {
    
    document.getElementById('output').textContent += emoji;
}

