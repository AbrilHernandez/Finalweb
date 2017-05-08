/**
 * Created by vaio1 on 07/05/2017.
 */
Ext.define('finalweb.controller.controllogin',{
    extend:'Ext.app.ViewController',

    alias:'controller.controllogin',

    aceptar: function(btn){
        //var panel=this.getView();
        var me=this;
        var forma=btn.up('form').getForm();


        //console.info(forma);
        if(forma.isValid()){
            Ext.Ajax.request({
                url: '/server/Login',
                params: {
                    login: forma.findField('login').getValue(),
                    pass: forma.findField('password').getValue()
                },
                callback: function (request, success, response) {

                    var r = Ext.decode(response.responseText);
                    if (r.correcto){
                        me.getView().close();

                        //console.log("valido");
                    Ext.create('Ext.container.Viewport', {
                        layout: 'fit',
                        anchor: '100%',
                        scrollable: 'vertical',
                        items: Ext.create('finalweb.view.main.Menu'),
                        renderTo: Ext.getBody()
                    });
                        Ext.Msg.alert({
                            title: 'Todo bien',
                            message: 'Acceso Permitido',
                            icon: Ext.Msg.INFO,
                            buttons: Ext.Msg.OK
                        });
                } else{
                    Ext.Msg.alert({
                    title: 'Acceso denegado',
                    message: 'El usuario o la contraseña son incorrectos',
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });//MsgAlert
                }//else
            }//calback
        });//ajaxRequest

        }//if valid form
}// funcion aceptar
});//clase