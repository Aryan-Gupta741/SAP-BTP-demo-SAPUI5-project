sap.ui.define([], function () {
  "use strict";
  return {
    formatCurrency: function (price, currency) {
      if (!price || !currency) {
        return "";
      }
      return new sap.ui.model.type.Currency({
        showMeasure: false
      }).formatValue([price, currency], "string");
    },

    statusText: function(sStatus){
        const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
        switch(sStatus){
            case "A":
					return oResourceBundle.getText("invoiceStatusA");
			case "B":
					return oResourceBundle.getText("invoiceStatusB");
			case "C":
					return oResourceBundle.getText("invoiceStatusC");
			default:
					return sStatus;
        }
    }
  };
});
