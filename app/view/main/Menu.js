/**
 * Created by fernando on 7/05/17.
 */
Ext.define('finalweb.app.view.main.Menu',{
    extend:'Ext.Panel',
    layout:'ux.center',
    initComponent : function(){
        var mygrid= Ext.create('app.view.main.gridmenu');
        Ext.apply(this, {

            items:[mygrid]

        });
        this.callParent();
    }
});