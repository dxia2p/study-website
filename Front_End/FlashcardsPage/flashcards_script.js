const flashcardsList = document.getElementById("flashcards-list");
const addFlashcardButton = document.getElementById("add-flashcard-button");


addFlashcardButton.addEventListener("click", addFlashcard);

function addFlashcard(){
    para = document.createElement("p");
    node = document.createTextNode("This is new");
    para.appendChild(node);
    
    flashcardsList.appendChild(para);
}

