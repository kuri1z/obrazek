window.onload = function() {
    let count = 0;

    document.getElementById("add-image-btn").onclick = function() {
        const url = document.getElementById("image-url").value;
        const title = document.getElementById("image-title").value;

        if (!url || !title) {
            alert("Prosím, vyplňte všechny údaje.");
            return;
        }

        const img = new Image();
        img.src = url;

        img.onload = function() {
            document.getElementById("image-container").innerHTML = ''; document.getElementById("image-container").appendChild(img); 
        
            count++;
            const titleItem = document.createElement("li");
            titleItem.textContent = count + ". " + title; // Číslování názvu
            document.getElementById("title-list").appendChild(titleItem); document.getElementById("image-url").value = '';// Přidání do seznamu
        };

        img.onerror = function() {
            alert("Obrázek se nepodařilo načíst. Zkontrolujte URL.");
        };
    };
};
