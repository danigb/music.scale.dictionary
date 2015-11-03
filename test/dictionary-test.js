var vows = require('vows')
var assert = require('assert')
var scale = require('../')

vows.describe('scale').addBatch({
  'get scale': {
    'scale notes by name': function () {
      assert.deepEqual(scale.get('G major'), ['G', 'A', 'B', 'C', 'D', 'E', 'F#'])
      assert.deepEqual(scale.get('Bb2 chinese'), ['Bb2', 'D3', 'E3', 'F3', 'A3'])
      assert.deepEqual(scale.get('Eb7 minor pentatonic'), ['Eb7', 'Gb7', 'Ab7', 'Bb7', 'Db8'])
    },
    'scale intervals': function () {
      assert.deepEqual(scale.get('persian'), ['1P', '2m', '3M', '4P', '5d', '6m', '7M'])
      assert.deepEqual(scale.get('phrygian'), ['1P', '2m', '3m', '4P', '5P', '6m', '7m'])
    },
    'always lowercase': function () {
      assert.deepEqual(scale.get('C7   Major Pentatonic'), ['C7', 'D7', 'E7', 'G7', 'A7'])
    },
    'odd cases': function () {
      assert.deepEqual(scale.get(), [])
      assert.deepEqual(scale.get(null), [])
      assert.deepEqual(scale.get('fantasmagoric blah'), [])
    }
  },
  'scale names': function () {
    assert.deepEqual(scale.names().length, 89)
    assert.deepEqual(scale.names(true).length, 108)
  },
  'find scale': function () {
    assert.deepEqual(scale.find('C D E F G A B'), 'major')
    assert.deepEqual(scale.find('D E F G A B C'), 'dorian')
  }
}).export(module)
