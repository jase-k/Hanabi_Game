
const Utils = {
  reorderPlayers(array, name){
    var index = array.findIndex(player => player.name === name)
    var afterPlayerSection = array.splice(index)
    var orderArray = afterPlayerSection.concat(array)

    return orderArray
  },
  removePersonalNotes(cardIndex){
    const personalNotes = document.getElementsByClassName("player_notes")
    const element = personalNotes.item(cardIndex)
    console.log("HTML Collection", personalNotes)
    console.log("Element", element)

    element.innerHTML = ""
  }
}

module.exports = Utils
