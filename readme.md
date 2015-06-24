# requirejs babelbox 

An AMD loader plugin for babelbox that allows tokens to be loaded
directly into babelbox

Currently only tested in latest version of chrome!

## Docs

You can install this plugin via bower [babelbox](https://github.com/yasserf/babelbox)

```
bower install --save requirejs-babelbox babelbox
```

###Options

Options are to be set within requirejs config under babelbox.

```javascript
	{ 
		babelbox: {
			"babelboxpath": "info",
			"localeseperator": "-",
			"folders": false,
			"fileseperator": "_"
		}
	}
```

#### babelboxpath
	The modulename babelbox is defined as.
	Type: string
	Default: 'i18n'

#### localeseperator
	The seperator between the primary and secondary locals.
	Default: '-'
	For example: 'en-GB-YORK'

#### folders
	Allows languages to be added from a directory
	Type: boolean
	Default: false
	For example:
	```
		require('babelbox!./i18n')
			./i18n/en.json
			./i18n/en_GB.json
			./i18n/de.json
	```

#### fileseperator
	Which seperator to use to build paths to json files. Only used if folders is false.
	Type: string
	Default: '_'
	For example:

	```
		require('babelbox!./i18n')
			./i18n-en.json
			./i18n-en_GB.json
		./i18n-de.json
	```

Wish List
------------------------------
* Not have to requirejs timeout if a sublocal doesn't exist.
* Optimisation / base off a requirejs plugin template.

License
------------------------------

MIT.