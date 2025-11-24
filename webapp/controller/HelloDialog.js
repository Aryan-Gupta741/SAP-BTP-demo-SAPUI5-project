sap.ui.define([
    "sap/ui/base/ManageObject",
    "sap/ui/core/Fragment"
], (ManageObject, Fragment) => {
    "use strict";

    return ManageObject.extend("sapui5.controller.HelloDialog", {
        constructor: function(oView){
            this._oView = oView;
        },

        exit: function(){
            delete this._oView;
        },

        open: function (){
            var oView = this._oView;

            //create the dialog
            if(!oView.byId("helloDialog")){
                var oFragmentController = {
                    onCloseDialog: function(){
                        oView.byId("helloDialog").close();
                    }
                }
            }
        }
    })
}) 