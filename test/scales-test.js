var vows = require('vows')
var assert = require('assert')
var scales = require('../')

vows.describe('scales').addBatch({
  'scales function': {
    'scale notes by name': function () {
      assert.deepEqual(scales('major', 'G'), ['G', 'A', 'B', 'C', 'D', 'E', 'F#'])
      assert.deepEqual(scales('chinese', 'Bb2'), ['Bb2', 'D3', 'E3', 'F3', 'A3'])
    },
    'scale intervals': function () {
      assert.deepEqual(scales('persian', false), ['1P', '2m', '3M', '4P', '5d', '6m', '7M'])
    },
    'partial applied': function () {
      var bebop = scales('bebop')
      assert.deepEqual(bebop('F#'), ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E', 'E#'])
    },
    'odd cases': function () {
      assert.deepEqual(scales(), [])
      assert.deepEqual(scales(null, 'C'), [])
      assert.deepEqual(scales('pentatonic', null), [null, null, null, null, null])
    }
  },
  'scale names': function () {
    assert.deepEqual(scales.names().length, 89)
    assert.deepEqual(scales.names(true).length, 108)
  },
  'find scale': function () {
    assert.deepEqual(scales.find('C D E F G A B'), 'major')
    assert.deepEqual(scales.find('D E F G A B C'), 'dorian')
  }
}).export(module)
