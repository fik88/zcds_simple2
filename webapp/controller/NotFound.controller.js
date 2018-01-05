sap.ui.define([
		"cds2/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("cds2.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);