Ext.create('Ext.data.Store', {
    storeId:'simpsonsStore',
    fields:['name', 'email', 'phone'],
    data:[
        { 'name': '10Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
        { 'name': '11Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
        { 'name': '12Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
        { 'name': '13Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  },
    ],
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            pageSize: 5
        }
    }
});

Ext.define('Admin.view.user.UserList', {
    extend: 'Ext.container.Container',
    xtype: 'userList',

    requires: [
    	Ext.tree.Panel,
    	Admin.view.user.UserListController,
    	Admin.store.CheckTree
    	
    ],

    layout: {
    	type: 'vbox'
    },

    defaults: {
        xtype: 'container'
    },

    title: 'User',
    items: [
    	{
    		xtype: 'panel',
    		html: 'Company & User >  User'
    	},
    	{
    		title: 'userList',
    		store: Ext.data.StoreManager.lookup('simpsonsStore'),
    		xtype: 'gridpanel',
    		width: '100%',
    		padding: 5,
    		columns: [
    	        { text: 'Name', dataIndex: 'name' },
    	        { text: 'Email', dataIndex: 'email', flex: 1 },
    	        { text: 'Phone', dataIndex: 'phone' }
    	    ],
    	    
    	    bbar : {
    	    	xtype : 'pagingtoolbar',
    	    	plugins : 'ux-slidingpager',
    	    	displayInfo : true
    	    }
    	},
    	{
    		
    		xtype: 'treepanel',
//    		checkPropagation: 'both',
//    	    rootVisible: false,
//    	    store: 'CheckTree',
    	    useArrows: true,
//    	    frame: true,
    	    title: 'Check Tree',
    	    width: 280,
    	    height: 300,
    	    store: {
    	    	root: {
        	    	text: '루트패널',
        	    	expanded: true
        	    },
	
        	    proxy: {
        	    	type: 'ajax',
        	    	url: 'data/checknodes.json',
        	    	reader: {
        	    		type: 'json'
        	    	}
        	    }
    	    }
    	
    	
//    	    bufferedRenderer: false,
//    	    animate: true,
//    	    listeners: {
//    	        beforecheckchange: 'onBeforeCheckChange'
//    	    },
//    	    tbar: [{
//    	        text: 'Get checked nodes',
//    	        handler: 'onCheckedNodesClick'
//    	    }]
    		
    	}
    ]
});
