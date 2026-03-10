let textArea = document.getElementById("textArea")
const UpperCasing = document.getElementById("UpperCasing")
const LowerCasing = document.getElementById("LowerCasing")
const Capitalizing = document.getElementById("Capitalizing")
const deleteSpaces = document.getElementById("deleteSpaces")



// To upper case funciton
function upperCase(){
   textArea.value = textArea.value.toUpperCase()
    return
}

// to lower case function
function lowerCase(){
    textArea.value = textArea.value.toLowerCase();
        return
    }
    function capitalize(){
            textAreaArray = textArea.value.split(" ")
            let result = []
            for(x of textAreaArray){
                let upper = x.charAt(0).toUpperCase()
                let lower = x.slice(1).toLowerCase()
                let fullWord = upper + lower
                result.push(fullWord)
            }
            textArea.value = result.join(" ")
            return 
            
        }
        // function deleteAdditionalSpaces(){
            
        // }

UpperCasing.addEventListener("click", upperCase)
LowerCasing.addEventListener("click", lowerCase)
Capitalizing.addEventListener("click", capitalize)


