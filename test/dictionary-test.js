var vows = require('vows')
var assert = require('assert')
var scale = require('../')

vows.describe('scale').addBatch({
  'get scale': {
    'scale notes by name': function () {
      assert.deepEqual(scale.get('major', 'G'), ['G', 'A', 'B', 'C', 'D', 'E', 'F#'])
      assert.deepEqual(scale.get('chinese', 'Bb2'), ['Bb2', 'D3', 'E3', 'F3', 'A3'])
    },
    'scale intervals': function () {
      assert.deepEqual(scale.get('persian', false), ['1P', '2m', '3M', '4P', '5d', '6m', '7M'])
    },
    'partial applied': function () {
      var bebop = scale.get('bebop')
      assert.deepEqual(bebop('F#'), ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E', 'E#'])
    },
    'odd cases': function () {
      assert.deepEqual(scale.get(), [])
      assert.deepEqual(scale.get(null, 'C'), [])
      assert.deepEqual(scale.get('pentatonic', null), [null, null, null, null, null])
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
