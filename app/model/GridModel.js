Ext.define('finalweb.model.GridModel',{
    extend:'Ext.data.Model',
    
    fields:[
        {name:'Id',type:'int'},
        {name:'NomArt',type:'string'},
        {name:'PrecioVenta',type:'int'},
        {name:'Cantidad',type:'int'},
        {name:'Total',type:'int'}
    ]
});