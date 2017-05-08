/**
 * Created by vaio1 on 07/05/2017.
 */
Ext.define('app.controller.controllogin',{
    extend:'Ext.app.ViewController',

    alias:'controller.controllogin',

    aceptar: function(btn){
        //var panel=this.getView();
        var me=this;
        var forma=btn.up('form').getForm();


        //console.info(forma);
        if(forma.isValid()){
            console.log("valido");
                Ext.create('Ext.container.Viewport',{
                            layout: 'fit',
                            anchor:'100%',
                            scrollable:'vertical',
                            items:Ext.create('app.view.main.Menu'),
                            renderTo:Ext.getBody()
                        });
                    } else{
                        Ext.Msg.alert({
                            title:'Acceso denegado',
                            message:'El usuario o la contraseña son incorrectos',
                            icon: Ext.Msg.ERROR,
                            buttons:Ext.Msg.OK
                        });//MsgAlert
                    }//else
        }
});