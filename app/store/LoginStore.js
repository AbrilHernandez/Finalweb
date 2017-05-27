/**
 * Created by NandoLizola on 15/05/2017.
 */
Ext.define('finalweb.store.loginstore',{
    extend: 'Ext.data.Store',

    model: 'finalweb.model.loginmodel',
    autoLoad: true,
    proxy		:{
        type	: 'ajax',
        url		: '/server/Login',
        reader	: {
            type			: 'json',
            rootProperty	: 'data',
            totalProperty	: 'numFilas'
        }
    }
});