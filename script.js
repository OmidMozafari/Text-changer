let textArea = document.getElementById("textArea");
const UpperCasing = document.getElementById("UpperCasing");
const LowerCasing = document.getElementById("LowerCasing");
const Capitalizing = document.getElementById("Capitalizing");
const deleteSpaces = document.getElementById("deleteSpaces");
const wordCounter = document.getElementById("wordCounter");
const charcterCounter = document.getElementById("charcterCounter");
const reverseWords = document.getElementById("reverseWords");


// To upper case funciton
function upperCase(){
   textArea.value = textArea.value.toUpperCase()
    return;
}

// to lower case function
function lowerCase(){
    textArea.value = textArea.value.toLowerCase();
        return
    }

// to capitalize function
function capitalize(){
     textAreaArray = textArea.value.split(" ")
        let result = []
        for(let x of textAreaArray){
            let upper = x.charAt(0).toUpperCase()
            let lower = x.slice(1).toLowerCase()
            let fullWord = upper + lower
            result.push(fullWord)
        }
            textArea.value = result.join(" ")
            return 
            
        }

// delete additional spaces function
function deleteAdditionalSpaces(){
    let fullDeletion = []
    textArea.value = textArea.value.trim()
    let deleteTextAreaArray = textArea.value.split(" ")
    for (let y of deleteTextAreaArray){
        if(y === ""){
            continue
        }else{
            fullDeletion.push(y)
        }

    }
    textArea.value = fullDeletion.join(" ")    
    
    return
}
//word counter function
function countWords (){
    let count = 0
    deleteAdditionalSpaces()
    let secondTextAreaArray = textArea.value.split(" ")
    for(z of secondTextAreaArray){
        if(z === ""){
            continue
        }else{
            count++
        }
    }
    console.log(count);
    
    return 
}

UpperCasing.addEventListener("click", upperCase)
LowerCasing.addEventListener("click", lowerCase)
Capitalizing.addEventListener("click", capitalize)
deleteSpaces.addEventListener("click", deleteAdditionalSpaces)
wordCounter.addEventListener("click", countWords)

