sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/model/json/JSONModel"
], (Controller, library, JSONModel) => {
    "use strict";

    var urlObject = library.URLHelper;

    return Controller.extend("consultaprodutos.controller.Main_Tela1", {
        onInit() {
            //Inicialização da tela com algo
            //alert("App Funcionando");
            let produto = {};
            let productModel = new JSONModel(produto);
            let view = this.getView();
            view.setModel(productModel, "ModeloProduto");
        },
        OnClickImage: function(oEvent){
           urlObject.redirect(oEvent.getSource().getSrc(), true );
        },

        onPressBuscar: function() {
            let input;
            input = this.byId("inpBusca");
            let valor = input.getValue();
            //alert(valor);

            let parameters = {
                url : "https://world.openfoodfacts.org/api/ve/product/" + valor,
                method : "GET",
                async : true,
                crossDomain : true
            };
           
            $.ajax(parameters).done(function(resposta){
            
                let oProdutoModel = this.getView().getModel("ModeloProduto");
                //Clear
                oProdutoModel.setData({});
                oProdutoModel.refresh();
                oProdutoModel.setData(resposta);
                oProdutoModel.refresh();

           }.bind(this) )   //sucesso

            .fail(function(){

            }.bind(this) );                    //erro=exception


             
        }
        
    });
});