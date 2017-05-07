/**
 * Created by vaio1 on 07/05/2017.
 */
Ext.define('app.view.Login',{

    extend: 'Ext.Panel',
    xtype: 'login',
    //controller: 'login'

    //requires: [
    //  'Ext.plugin.Viewport'
    //],

    layout:'ux.center',
    initComponent : function(){

        var login = Ext.create('Ext.form.Text',{ //si lo manejas como panel estas variables deben ser propiedades
            name: 'login',
            fieldLabel: 'Nombre de usuario',
            labelWidth: 120,
            width: 300,
            maxLength: 12,
            minLength: 4,
            allowBlank: false,
            msgTarget: 'side'
        });
        var pass=Ext.create('Ext.form.Text',{
            inputType: 'password',
            name: 'password',
            fieldLabel: 'Contraseña',
            labelWidth: 120,
            width: 300,
            maxLength: 12,
            minLength: 4,
            allowBlank: false,
            msgTarget: 'side'

        });

        Ext.apply(this,{
            items:[{
                items: {

                    title: 'Ingreso al sistema',
                    width: 400,
                    bodyPadding: 10,
                    border: true,

                    items: [{
                        xtype: 'form',

                        items: [login,pass],
                        bbar: ['->',{
                            text: 'Aceptar',
                            handler: 'aceptar'
                        },{
                            text: 'Limpiar'
                        } ,'->' ]
                    }]
                }
            }]
        });

        this.callParent();

    }


});
