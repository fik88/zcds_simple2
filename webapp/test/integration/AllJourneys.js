jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"cds2/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"cds2/test/integration/pages/Worklist",
		"cds2/test/integration/pages/Object",
		"cds2/test/integration/pages/NotFound",
		"cds2/test/integration/pages/Browser",
		"cds2/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "cds2.view."
	});

	sap.ui.require([
		"cds2/test/integration/WorklistJourney",
		"cds2/test/integration/ObjectJourney",
		"cds2/test/integration/NavigationJourney",
		"cds2/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});