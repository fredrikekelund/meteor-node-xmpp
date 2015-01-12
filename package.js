Package.describe({
	name: "fredrik:node-xmpp",
	summary: "Wrapper for the node-xmpp npm package",
	version: "1.0.0",
	git: "https://github.com/fredrikekelund/meteor-node-xmpp.git"
});

Npm.depends({"node-xmpp": "1.0.0-alpha2"});

Package.onUse(function(api) {
	api.addFiles("xmpp.js", "server");
	api.export("Xmpp");
});
