const assert = require('chai').assert

//import Modules
const Utils = require('../src/utils/utils')

describe('Utils', () => {
  describe('.reorderPlayers', () => {
    it('should reorder the player array so the matching name is index 0 (player 3)', function(){
      const playerArray = [
        {name: "Legolas"},
        {name: "Aragon"},
        {name: "Gimli"},
        {name: "Gandalf"},
      ]
      const name = 'Gimli'

      const expectedOutput = [
          {name: "Gimli"},
          {name: "Gandalf"},
          {name: "Legolas"},
          {name: "Aragon"},
      ]

      let results = Utils.reorderPlayers(playerArray, name)

      assert.deepEqual(results, expectedOutput)
    })
    it('should reorder the player array so the matching name is index 0(player 1)', function(){
      const playerArray = [
        {name: "Legolas"},
        {name: "Gimli"},
        {name: "Aragon"},
        {name: "Gandalf"},
      ]
      const name = 'Legolas'

      const expectedOutput = [
          {name: "Legolas"},
          {name: "Gimli"},
          {name: "Aragon"},
          {name: "Gandalf"},
      ]

      let results = Utils.reorderPlayers(playerArray, name)

      assert.deepEqual(results, expectedOutput)
    })
  })
})
