Ext.define('app.store.GridStore',{
    extend:'Ext.data.Store',
    model:'app.model.GridModel',
    
    autoLoad:true,
    proxy:{
        type:'ajax',
        url:'/server/Datos2',
        reader:{
            type:'json',
            rootProperty:'data',
            totalProperty:'numFilas'
        }
    }
});