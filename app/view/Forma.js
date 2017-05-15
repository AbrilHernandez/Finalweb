Ext.define("finalweb.view.Forma",{
    extend:'Ext.form.Panel',
    
    initComponent:function(){
        var me=this;
        
        Ext.apply(me,{
            defaultType:'textfield',

            fieldDefaults:{
                disabled:me.tipoOper=='borrar',
                allowBlank:false,
                labelWidth:100
            },
            
            items:[{
                    xtype:'textfield',
                    name:'Id',
                    fieldLabel:'Id',
                    labelWidth:100,
                    width:'100%',
                    allowBlank:false,
                    maxValue:40,
                    minValu:3
            },{
                xtype:'textfield',
                name:'Nombre',
                fieldLabel:'Nombre',
                labelWidth:100,
                width:'100%',
                allowBlank:false,
                maxLenght:40,
                minLength:3
            },{
                xtype:'textfield',
                name:'PrecioUnitario',
                fieldLabel:'PrecioUnitario',
                labelWidth:100,
                width:'100%',
                allowBlank:false,
                maxLenght:40,
                minLenght:1
            },{
                xtype:'textfield',
                name:'Cantidad',
                fieldLabel:'Cantidad',
                labelWidth:100,
                width:'100%',
                allowBlank:false,
                maxValue:1,
                minValue:3
            }


            ],
        bbar:[


            {
                text:'Aceptar',
                handler:function(){
                    
                }
            },
            {
                text:'Cancelar',
                handler:function(btn){
                    btn.up('window').close();
                }
            }
/*
           {
                text:'Cancelar',
                handler:function(btn){
                    btn.up('window').close();
                }
            },

            {
                text:'Aceptar',
                handler:function(){
                    
                }
            }
*/


            ]
        });
        me.callParent();
    }
});