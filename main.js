const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")
const cashGivenLabel = document.querySelector("#cash-given-label")
const checkButton = document.querySelector("#check-button")
const message = document.querySelector("#error-message")
const returnTable = document.querySelector(".return-table")
const noOfNotes = document.querySelectorAll(".no-of-notes")
const nextButton = document.querySelector("#next-button")
const resetButton = document.querySelector("#reset-button")

const notes = [2000,500,100,20,10,5,1]

hideAllExceptBill()

nextButton.addEventListener("click", function validateBillAmount(){
    hideMessage()
    if(billAmount.value>0){
        nextButton.style.display = "none"
        cashGiven.style.display = "initial"
        cashGivenLabel.style.display = "block"
        checkButton.style.display = "block"
        
        checkButton.addEventListener("click", function validateCashAmount(){
            if(cashGiven.value>=billAmount.value){
                const amountToBeReturned = cashGiven.value - billAmount.value
                calculateChange(amountToBeReturned)
            }
            else{
                showMessage("Cash amount should be greater than or equal to bill amount")
                nextButton.style.display = "block"
                hideAllExceptBill()
            }
        })
    }
    else{
        showMessage("Bill amount should be greater than zero")
    }
})

resetButton.addEventListener("click", function(){
    location.reload()
})

function calculateChange(amountToBeReturned){
    returnTable.style.display = "table"
    for(let i=0;i<notes.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/notes[i])
        amountToBeReturned %= notes[i]
        noOfNotes[i].innerText = numberOfNotes
    }
}

function hideMessage(){
    message.style.display = "none"
}

function showMessage(msg){
    message.style.display = "block"
    message.innerText = msg
}

function hideAllExceptBill(){
    cashGiven.style.display = "none"
    cashGivenLabel.style.display = "none"
    checkButton.style.display = "none"
    returnTable.style.display = "none"
}
