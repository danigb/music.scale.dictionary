# music.scale.dictionary

[![Build Status](https://travis-ci.org/danigb/music.scale.dictionary.svg?branch=master)](https://travis-ci.org/danigb/music.scale.dictionary)
[![Code Climate](https://codeclimate.com/github/danigb/music.scale.dictionary/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.scale.dictionary)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.scale.dictionary.svg)](https://www.npmjs.com/package/music.scale.dictionary)
[![license](https://img.shields.io/npm/l/music.scale.dictionary.svg)](https://www.npmjs.com/package/music.scale.dictionary)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://www.npmjs.com/package/music.kit)

A dictionary of music scales:

```js
var scale = require('music.scale.dictionary')
scale.get('phrygian') // => [ '1P', '2m', '3m', '4P', '5P', '6m', '7m' ]
scale.get('Db phrygian') // => [ 'Db', 'Ebb', 'Fb', 'Gb', 'Ab', 'Bbb', 'Cb' ]
scale.get('Eb4 phrygian') // => [ 'Eb4', 'Fb4', 'Gb4', 'Ab4', 'Bb4', 'Cb5', 'Db5' ]
```

This is part of [music.kit](https://www.npmjs.com/package/music.kit)

## Features

- Build scales from names
- Get scale intervals
- Get all available names
- Find scale name by notes

## Install

Via npm: `npm i --save music.scale.dictionary` or grab the file (10kb minified) from [dist](https://raw.githubusercontent.com/danigb/music.scale.dictionary/master/dist/music.scale.dictionary.min.js) folder.

## Usage

#### Create scales using a scale name

The simplest usage is creating a scale from a name with tonic:

```js
scale.get('F altered') // => [ 'F', 'Gb', 'Ab', 'A', 'Cb', 'Db', 'Eb' ]
scale.get('Gb enigmatic') // => [ 'Gb', 'Abb', 'Bb', 'Dbb', 'Ebb', 'Fb', 'F' ]
```

#### Get scale intervals

You can get scale intervals if you don't specify the tonic:

```js
scale.get('bebop') // => [ '1P', '2M', '3M', '4P', '5P', '6M', '7m', '7M' ]
```

#### Get scale names

Use the `names` function to get scale names. Passing `true` as first argument return scale aliases names too:

```js
scale.names() // => ['major', ...] (89 names)
scale.names(true) // => ['major', ...] (108 names)
```

#### Find scale name

The `find` function get the scale name from a list of notes. All the notes of the scale must be inside the list and the first note of the list is considered the tonic:

```js
scale.find('c g a b e f b5 d') // => 'major'
scale.find('d c g a b e f b5 d') // => 'dorian'
```

## License

MIT License
