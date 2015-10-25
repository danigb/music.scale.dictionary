# API


<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="degrees"><span class="type-signature"></span>degrees<span class="signature">(degrees, notes)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the degrees of a scale</p>
<p>The resulting array will contain the notes in the same order as degrees.
If a given degree is not present in the scale, the result will contain a
null in that position.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>degrees</code></td>
<td class="type">
<span class="param-type">Array</span>
|
<span class="param-type">String</span>
</td>
<td class="description last"><p>the degrees numbers</p></td>
</tr>
<tr>
<td class="name"><code>notes</code></td>
<td class="type">
<span class="param-type">Array</span>
|
<span class="param-type">String</span>
</td>
<td class="description last"><p>the scale notes</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/degrees.js">tmp/degrees.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/degrees.js#L12">lineno 12</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the notes of the given degrees (or null if not present)</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>scale.degrees('1 3 5', 'C D E F G A B') // => [ 'C', 'E', 'G' ]
scale.degrees('1 5 2 6', 'C D E F G A B') // => [ 'C', 'G', 'D', 'A' ]
scale.degrees('1 2 6', 'C D E F G') // => [ 'C', 'D', null ]</code></pre>
</dd>
<dt>
<h4 class="name" id="dictionary"><span class="type-signature"></span>dictionary<span class="signature">(data, aliases)</span><span class="type-signature"> &rarr; {function}</span></h4>
</dt>
<dd>
<div class="description">
<p>Create a scale builder function from a hash of data</p>
<p>A scale builder is a function that given a names and a tonic, returns
a scale (array). It can be partially applied.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>data</code></td>
<td class="type">
<span class="param-type">Hash</span>
</td>
<td class="description last"><p>the data (maps names to intervals or notes)</p></td>
</tr>
<tr>
<td class="name"><code>aliases</code></td>
<td class="type">
<span class="param-type">Hash</span>
</td>
<td class="description last"><p>(Optional) maps names to names in the data hash</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/dictionary.js">tmp/dictionary.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/dictionary.js#L14">lineno 14</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>a function to create scales</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">function</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var scales = dictionary({ major: '1 2 3 4 5 6 7', minor: '1 2 3b 4 5 6b 7b' }, {eolian: 'minor'})
scales('major', 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
scales('aeolian', 'A') // => ['A', 'B', 'C', 'D', 'E', 'F', 'G']
var minor = scales('minor')
minor('D') // => ['D', 'E', 'F', 'G', 'A', 'Bb', 'C']</code></pre>
</dd>
<dt>
<h4 class="name" id="find"><span class="type-signature"></span>find<span class="signature">(notes)</span><span class="type-signature"> &rarr; {String}</span></h4>
</dt>
<dd>
<div class="description">
<p>Find a scale name by notes</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>notes</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the scale notes</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.scales/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.scales/blob/master/index.js#L50">lineno 50</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the scale name</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">String</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="fromName"><span class="type-signature"></span>fromName<span class="signature">(name, tonic)</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Build a scale using a name and a tonic</p>
<p>It uses a dictionary of scales (see dict directory)</p>
<p>Can be partially applied (see example)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>name</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the name of the scale</p></td>
</tr>
<tr>
<td class="name"><code>tonic</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the tonic of the scale</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/fromName.js">tmp/fromName.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/fromName.js#L5">lineno 5</a>
</li>
</ul></dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>scale.fromName('bebop locrian', 'C') // => [ 'C', 'Db', 'Eb', 'F', 'Gb', 'G', 'Ab', 'Bb' ]
var kumoi = scale.fromName('kumoi')
kumoi('G') // => ['G', 'A', 'Bb', 'D', 'E']</code></pre>
</dd>
<dt>
<h4 class="name" id="nameOf"><span class="type-signature"></span>nameOf<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Get the name of a scale</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/nameOf.js">tmp/nameOf.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/nameOf.js#L16">lineno 16</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="names"><span class="type-signature"></span>names<span class="signature">(aliases)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get all available names</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>aliases</code></td>
<td class="type">
<span class="param-type">Boolean</span>
</td>
<td class="description last"><p>if true return aliases names</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.scales/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.scales/blob/master/index.js#L30">lineno 30</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>an array of scale names</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="names"><span class="type-signature"></span>names<span class="signature">(withAliases)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get all scale names available</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>withAliases</code></td>
<td class="type">
<span class="param-type">Boolean</span>
</td>
<td class="description last"><p>set to <code>true</code> to get aliases names</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/names.js">tmp/names.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/names.js#L6">lineno 6</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the list of all scale names</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;String></span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>scale.names() // => ['major', 'minor', ...]</code></pre>
</dd>
<dt>
<h4 class="name" id="scale"><span class="type-signature"></span>scale<span class="signature">(source, tonic)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Build a scale from a source and a tonic. A scale is an array of notes (or
intervals if tonic is null) ordered by frequency</p>
<p>A source can be a list of intervals or notes. The tonic must be
a pitch (with or without octave) or null to get the scale intervals</p>
<p>This function is currified, so you can partially apply the function passing
one parameter instead of two (see example)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the list of intervals or notes</p></td>
</tr>
<tr>
<td class="name"><code>tonic</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the tonic of the scale</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/scale.js">tmp/scale.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.scales/blob/master/tmp/scale.js#L25">lineno 25</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the list of notes</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>scale('1 2 3 5 6', 'G') // => ['G', 'A', 'B', 'D', 'E']
var dorian = scale('D E F G A B C')
dorian('C4')</code></pre>
</dd>
<dt>
<h4 class="name" id="scales"><span class="type-signature"></span>scales<span class="signature">(name, tonic)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get a scale from a name and a tonic</p>
<p>This function always return an array, even if its empty. This function is
currified so it can be partially applied (see examples)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>name</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the scale name</p></td>
</tr>
<tr>
<td class="name"><code>tonic</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the tonic of the scale (or false to get intervals)</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music.scales/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/danigb/music.scales/blob/master/index.js#L23">lineno 23</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>a list of notes or intervals (or empty array if scale not found)</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>scales('major', 'C') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
var phrygian = scales('phrygian')
phrygian('C') // => [ 'C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb' ]</code></pre>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->
