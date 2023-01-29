const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  console.log(memoInput.value)
  const card = document.createElement("div")
  card.textContent = memoInput.value
  memoContainer.append(card)
  memoInput.value = ""
}
