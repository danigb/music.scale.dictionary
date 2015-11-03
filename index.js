'use strict'

var data = require('./dict/scales.json')
var aliases = require('./dict/aliases.json')
var harmonizer = require('music.harmonizer')
var pitchSet = require('music.pitchset')

var scale = {}
var NAME = /^([^\s]+)\s(.*)$/

/**
 * Get a scale from a name. If the name contains the tonic, an array of notes
 * is returned. Otherwise an array of intervals is returned.
 *
 * This function always return an array, even if its empty.
 *
 * @param {String} name - the scale name
 * @return {Array} a list of notes or intervals (or empty array if scale not found)
 *
 * @example
 * scale.get('C major') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
 * scale.get('phrygian') // => ['1P', '2m', '3m', '4P', '5P', '6m', '7m']
 */
scale.get = function (name) {
  var m = NAME.exec(name)
  var tonic = m ? m[1] : false
  var type = (m ? m[2] : name)
  type = type ? type.trim().toLowerCase() : type

  var intervals = data[type] || data[aliases[type]]
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
 * @example
 * scale.names() // => ['major', ...]
 */
scale.names = function (alias) {
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
scale.find = function (notes) {
  reverse = reverse || buildReverse(data)
  var binary = pitchSet.asBinary(notes)
  return reverse[binary]
}

module.exports = scale
