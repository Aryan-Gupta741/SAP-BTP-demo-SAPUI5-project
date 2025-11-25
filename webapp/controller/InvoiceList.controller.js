sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("sapui5.controller.InvoiceList",{
        onInit: function(){
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view")
        },

        
        formatCurrency: function(price, currency) {
            if (!price || !currency) {
                return "";
            }
            return new sap.ui.model.type.Currency({
                showMeasure: false
            }).formatValue([price, currency], "string");
        }

    });
});