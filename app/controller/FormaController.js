Ext.define('finalweb.controller.FormaController',{
    extend:'Ext.app.ViewController',
    alias:'controller.formacontroller',
    editar:function(view,rowIndex,ColIndex){
        var rec=view.getStore().getAt(rowIndex)
       
        var forma=Ext.create('app.view.Forma',{
            tipoOper:'editar'
        });
        forma.loadRecord(rec);
        
        var ventana=Ext.create('app.lib.Window',{
            title:'modificar registro',
            width:400,
            height: 300,
            items:forma
        });
    },
    
    
    borrar:function(view,rowIndes,colIndex){
        var rec=view.getStore().getAt(rowIndex)
        var forma= Ext.create('app.view.Forma',{
            tipoOper:'borrar'
        });
        
        forma.loadRecord(rec);
        
        var ventana=Ext.create('app.lib.Window',{
            title:'Eliminar Registro',
            width:400,
            height:300,
            items:forma
        });
    },
    
    agregar:function(btn){
        var forma=Ext.create('app.view.Forma',{
            tipoOper:'agregar'
        });
        var ventana=Ext.create('app.lib.Window',{
            title:'Registrar Producto',
            width:400,
            heigth:300,
            items:forma
        });
    },

    venta:function(btn){
        var ventaa=Ext.create('app.view.Venta',{
            tipoOper:'venta'
        });
    var ventana=Ext.create('app.lib.Window',{
            title:'Venta',
            width:400,
            heigth:300,
            items:forma
        });

    }

});