const flashcardsList = document.getElementById("flashcards-list");
const addFlashcardButton = document.getElementById("add-flashcard-button");


addFlashcardButton.addEventListener("click", addFlashcard);

class Flashcard{
    static flashcardsArr = [];
    constructor(id, htmlElement){
        this.id = id;
        this.htmlElement = htmlElement;
        Flashcard.flashcardsArr.push(this);
    }
}

function addFlashcard(){
    termDefDiv = document.createElement("div");

    termText = document.createTextNode("Term: ");
    term = document.createElement("input");
    defText = document.createTextNode("Definition: ");
    def = document.createElement("input"); // def stands for definition
    deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    termDefDiv.appendChild(termText);
    termDefDiv.appendChild(term);
    termDefDiv.appendChild(defText);
    termDefDiv.appendChild(def);
    termDefDiv.appendChild(deleteButton);
    
    flashcardsList.appendChild(termDefDiv);
}

