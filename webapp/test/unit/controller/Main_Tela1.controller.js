/*global QUnit*/

sap.ui.define([
	"consulta_produtos/controller/Main_Tela1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Main_Tela1 Controller");

	QUnit.test("I should test the Main_Tela1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
