/**
 * Created by fernando on 7/05/17.
 */
Ext.define('finalweb.view.main.Menu',{
    extend:'Ext.Panel',
    layout:'ux.center',
    initComponent : function(){
        var mygrid= Ext.create('finalweb.view.main.gridmenu');
        Ext.apply(this, {

            items:[mygrid]

        });
        this.callParent();
    }
});