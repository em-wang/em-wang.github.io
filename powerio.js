function setupElement433739818427975384() {
	var elementRequire = require || _wAMD.require;
	elementRequire([
		'jquery',
		'underscore',
		'backbone',
		'util/platform/elements/PlatformElement',
		'util/platform/elements/PlatformElementSettings'
	], function(
		$,
		_,
		Backbone,
		PlatformElement,
		PlatformElementSettings
	) {
		var dependencies = null || [];
		var platform_element_id = "418880496304319090-1.0.0";

		if (typeof _W.loadedPlatformDependencies === 'undefined') {
			_W.loadedPlatformDependencies = [];
		}

		if (typeof _W.platformElements === 'undefined') {
			_W.platformElements = [];
		}

		if (typeof _W.platformElements[platform_element_id] === 'undefined') {
			_W.platformElements[platform_element_id] = {};
			_W.platformElements[platform_element_id].deferredObject = new $.Deferred();
			_W.platformElements[platform_element_id].deferredPromise = _W.platformElements[platform_element_id].deferredObject.promise();
		}

		if(_.intersection(_W.loadedPlatformDependencies, dependencies).length !== dependencies.length){
			_.reduce(dependencies, function(promise, nextScript){
				_W.loadedPlatformDependencies.push(nextScript);
				return promise.then(function(){
					return $.getScript(nextScript);
				});
			}, $().promise()).then(function(){
				_W.platformElements[platform_element_id].deferredObject.resolve();
			});
		}

		if (dependencies.length === 0){
			_W.platformElements[platform_element_id].deferredObject.resolve();
		}

		_W.platformElements[platform_element_id].deferredPromise.done(function(){
			var _Element = /**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function(){
	var debug_mode = false;
	var local_mode = false;
	function debug(){
	    if(debug_mode){
		    for (var i = 0; i < arguments.length; i++) {
		        if(window.console){
		            console.log(arguments[i]);
		        }
		    }
		}    
	}
	var MyElement = PlatformElement.extend({
		initialize: function(){
            console.log("In My Element Initialize");
			//Set the label
			var label = 'weebly_'+this.site_id+'_'+this.element_id; //Set label using element id
			jQuery('#element-'+this.element_id+' div').each(function(){
                var powr_class = jQuery(this).data('class'); //Get the class
                jQuery(this).attr('label',label).addClass(powr_class);
            });

			//Write script
	        var powr_token = 'weebly_'+this.site_id;
	        var js_url = (local_mode) ? 'https://localhost:3000/powr_local.js' : '//www.powr.io/powr.js';
	        d = document;
	        var js, id = 'powr-js', ref = d.getElementsByTagName('script')[0];
	        if (!d.getElementById(id)){
	          js = d.createElement('script'); js.id = id; js.async = true;
	          js.src = js_url;
	          js.setAttribute('powr-token',powr_token);
	          js.setAttribute('external-type','weebly-integrated');
	          ref.parentNode.insertBefore(js, ref);
	        }
	        //Load POWR
	        if( typeof loadPowr != 'undefined' ){
		      loadPowr();	        
            }
		}		
	});
	if (debug_mode){
		if(typeof POWR_ELEMENTS == 'undefined'){
			POWR_ELEMENTS = [];
		}
		POWR_ELEMENTS.push(MyElement);
	}
	return MyElement;
})();

;

			if (typeof _Element == 'undefined' || typeof _Element == 'null') {
				var _Element = PlatformElement.extend({});
			}

			_Element.prototype.settings = new PlatformElementSettings({"user_label":"Enter a Label"});
			_Element.prototype.settings.page_element_id = "433739818427975384";
			
			_Element.prototype.element_id = "2aa84f12-b2f8-40b4-ab91-9dd5877ab2a2";
			_Element.prototype.user_id = "63456263";
			_Element.prototype.site_id = "210826327133598622";
			_Element.prototype.assets_path = "//marketplace.editmysite.com/elements/418880496304319090-1.0.0/assets/";

			new _Element({
				el: '#element-2aa84f12-b2f8-40b4-ab91-9dd5877ab2a2'
			});
		});

	});
}

if (typeof document.documentElement.appReady == 'undefined') {
	document.documentElement.appReady = 0;
}

if (document.documentElement.appReady || (window.inEditor && window.inEditor())) {
	setupElement433739818427975384();
} else if (document.createEvent && document.addEventListener) {
	document.addEventListener('appReady', setupElement433739818427975384, false);
} else {
	document.documentElement.attachEvent('onpropertychange', function(event){
		if (event.propertyName == 'appReady') {
			setupElement433739818427975384();
		}
	});
}