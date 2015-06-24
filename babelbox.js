( function() {

	/**
	* Config Options:
		folders: Allows languages to be added from a directory
			For example:
				req('babelbox!./i18n')
					./i18n/en.json
					./i18n/en_GB.json
					./i18n/de.json
		fileseperator: Which seperator to use to build paths to json files
			For example:
				req('babelbox!./i18n')
					./i18n-en.json
					./i18n-en_GB.json
					./i18n-de.json
	*/

	//Not using requirejs normalise api since it isn't async
	function normalise( name, locale, config ) {
		var normalisedName = name;
		if( config.folders ) {
			normalisedName = name + '/' + locale;
		} else if( config.fileseperator ) {
			normalisedName = name + config.fileseperator + locale;
		} else {
			normalisedName = name + '_' + locale;
		}
		return 'text!' + normalisedName + '.json';
	}

	//Main module definition.
	define( {
		load: function( name, req, onload, config ) {
			var babelboxconfig = config.babelbox ? config.babelbox : {};
			var babelboxpath = babelboxconfig.babelboxpath ? babelboxconfig.babelboxpath : 'i18n';
			var localeseperator = babelboxconfig.localeseperator ? babelboxconfig.localeseperator : '-';

			req( [ babelboxpath ], function( babelbox ) {
				var locale = babelbox.getLocale();
				var requires = [];

				for( var i = 1; i <= locale.length; i++ ) {
					requires.push( normalise( name, locale.slice( 0, i ).join( localeseperator ), babelboxconfig ) );
				}

				req( requires, function() {
					babelbox.addTokens( JSON.parse( arguments[ 0 ] ) );
					for( var i = 1; i < arguments.length; ++i ) {
						babelbox.addExtendedTokens( JSON.parse( arguments[ i ] ) );
					}
					onload();
				} );
			} );
		}
	} );
}() );
