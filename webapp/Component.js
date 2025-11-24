sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
], (UIComponent, JSONModel, ResourceModel, HelloDialog) => {
    "use strict";

    return UIComponent.extend("sapui5.Component", {
        metadata: {
            manifest: "json"
        },
        init: function(){
            //call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            //set data model on the view
            var oData={
                recipient: {
                    name: "UI5"
                }
            };

            var oModel= new JSONModel(oData);
            this.setModel(oModel);

            //set dialog
            this._helloDialog= new HelloDialog(this.getRootControl());
        },

        exit: function(){
            this._helloDialog.destroy();
            delete this._helloDialog;
        },

        openHelloDialog: function(){
            this._helloDialog.open();
        }
    });
});