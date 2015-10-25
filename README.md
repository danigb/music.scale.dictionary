# music.scales

[![Build Status](https://travis-ci.org/danigb/music.scales.svg?branch=master)](https://travis-ci.org/danigb/music.scales)
[![Code Climate](https://codeclimate.com/github/danigb/music.scales/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.scales)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.scales.svg)](https://www.npmjs.com/package/music.scales)
[![license](https://img.shields.io/npm/l/music.scales.svg)](https://www.npmjs.com/package/music.scales)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://www.npmjs.com/package/music.kit)

A dictionary of music scales:

```js
var scales = require('music.scales')
var phrygian = scales('phrygian')
phrygian('C') // => [ 'C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb' ]
phrygian('Db') // => [ 'Db', 'Ebb', 'Fb', 'Gb', 'Ab', 'Bbb', 'Cb' ]
```

This is part of [music.kit](https://www.npmjs.com/package/music.kit)

## Features

- Build scales from names
- Get scale intervals
- Get all available names
- Find scale name by notes

## Install

Via npm: `npm i --save music.scales` or grab the file (10kb minified) from [dist](https://raw.githubusercontent.com/danigb/music.scales/master/dist/music.scales.min.js) folder.

## Usage

#### Create scales using a scale name

The simplest usage is creating a scale from a name:

```js
scales('altered', 'F') // => [ 'F', 'Gb', 'Ab', 'A', 'Cb', 'Db', 'Eb' ]
scales('enigmatic', 'Gb') // => [ 'Gb', 'Abb', 'Bb', 'Dbb', 'Ebb', 'Fb', 'F' ]
```

The `scales` function can be partially applied:

```js
var bebop = scales('bebop')
bebop('E') // => [ 'E', 'F#', 'G#', 'A', 'B', 'C#', 'D', 'D#' ]
```

#### Get scale intervals

You can get scale intervals by passing `false` as tonic:

```js
bebop(false) // => [ '1P', '2M', '3M', '4P', '5P', '6M', '7m', '7M' ]
```

#### Get scale names

Use the `names` function to get scale names. Passing `true` as first argument return scale aliases names too:

```js
scales.names() // => ['major', ...] (89 names)
scales.names(true) // => ['major', ...] (108 names)
```

#### Find scale name

The `find` function get the scale name from a list of notes. All the notes of the scale must be inside the list and the first note of the list is considered the tonic:

```js
scales.find('c g a b e f b5 d') // => 'major'
scales.find('d c g a b e f b5 d') // => 'dorian'
```

## License

MIT License
