'use strict'

var data = require('./dict/scales.json')
var aliases = require('./dict/aliases.json')
var harmonizer = require('music.harmonizer')
var pitchSet = require('music.pitchset')

/**
 * Get a scale from a name and a tonic
 *
 * This function always return an array, even if its empty. This function is
 * currified so it can be partially applied (see examples)
 *
 * @param {String} name - the scale name
 * @param {String|Array} tonic - the tonic of the scale (or false to get intervals)
 * @return {Array} a list of notes or intervals (or empty array if scale not found)
 *
 * @example
 * scales('major', 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
 * var phrygian = scales('phrygian')
 * phrygian('C') // => [ 'C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb' ]
 */
function scales (name, tonic) {
  if (arguments.length === 1) return function (t) { return scales(name, t) }

  var intervals = data[name] || data[aliases[name]]
  return harmonizer(intervals, tonic)
}

/**
 * Get all available names
 *
 * @name names
 * @function
 * @param {Boolean} aliases - if true return aliases names
 * @return {Array} an array of scale names
 *
 */
scales.names = function (alias) {
  return alias ? Object.keys(data).concat(Object.keys(aliases)) : Object.keys(data)
}

var reverse = null
function buildReverse (data) {
  return Object.keys(data).reduce(function (rev, name) {
    rev[pitchSet.asBinary(data[name])] = name
    return rev
  }, {})
}
/**
 * Find a scale name by notes
 *
 * @name find
 * @function
 * @param {String|Array} notes - the scale notes
 * @return {String} the scale name
 */
scales.find = function (notes) {
  reverse = reverse || buildReverse(data)
  var binary = pitchSet.asBinary(notes)
  return reverse[binary]
}

module.exports = scales
