/**
 * Created by fernando on 7/05/17.
 */
Ext.define('finalweb.view.main.gridmenu',{
    extend: 'Ext.grid.Panel',

    controller: 'controllogin',
    title:'Realizar venta:',
    width:800,
    height:300,
    border:true,
    columnLines:true,
    rowLines:true,
    padding:'0 10 0 10',

    initComponent:function () {

        var btn=Ext.create('Ext.Button',{
            text:'Agregar',
            //icon:'/resources/icon/Agregar.png',
            //handler:'agregar',
            disabled:false
        });
        /*var btn1=Ext.create('Ext.Button',{
            text:'Registro Producto'
        });*/

        Ext.apply(this,{
            //store: Ext.create('app.store.GridStore'),
            columns: [{
                xtype:'rownumberer'
            },{
                text:'Id',
                flex:1,
                //dataIndex:'id',
                align:'left'
            },{
                text:'Producto',
                flex:2,
                //dataIndex:'producto',
                align:'left'
            },{
                text:'Precio Unitario',
                flex:2,
               // dataIndex:'preciou',
                align:'left'
            },{
                text:'Descuento',
                flex:2,
                aling:'left'
                //dataIndex:'desc'
            },{
                text:'Total',
                flex:2,
                //dataIndex:'Total',
                align:'left'
            },{
                xtype:'actioncolumn',
                text:'Editar',
                width:80,
                items:[{
                    icon:'/resources/icon/Edit.png'
                }]
                //,handler:'editar'
            },{
                xtype:'actioncolumn',
                text:'Borrar',
                width:80,
                items:[{
                    icon:'/resources/icon/Delete.png'
                }],
                handler:'borrar'
            }],



            dockedItems: [{
                xtype:'pagingtoolbar',
                //store: this.storegrid,
                dock: 'bottom',
                displayInfo:true

            }],

            tbar:['->',btn]

        });

        this.callParent(arguments);

    }

});