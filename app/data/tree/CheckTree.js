Ext.define('Admin.data.tree.CheckTree', {
    extend: 'Admin.data.Simulated',

    "data" :[{
        "text": "To Do", 
        "cls": "folder",
        "checked": false,
        "expanded": true,
        "children": [{
            "text": "Go jogging",
            "leaf": true,
            "checked": true
        },{
            "text": "Take a nap",
            "leaf": true,
            "checked": false
        },{
            "text": "Climb Everest",
            "leaf": true,
            "checked": false
        }]
    },{
        "text": "Grocery List",
        "cls": "folder",
        "checked": false,
        "children": [{
            "text": "Bananas",
            "leaf": true,
            "checked": false
        },{
            "text": "Milk",
            "leaf": true,
            "checked": false
        },{
            "text": "Cereal",
            "leaf": true,
            "checked": false
        },{
            "text": "Energy foods",
            "cls": "folder",
            "checked": false,
            "children": [{
                "text": "Coffee",
                "leaf": true,
                "checked": false
            },{
                "text": "Red Bull",
                "leaf": true,
                "checked": false
            }]
        }]
    },{
        "text": "Remodel Project", 
        "cls": "folder",
        "checked": false,
        "children": [{
            "text": "Finish the budget",
            "leaf": true,
            "checked": false
        },{
            "text": "Call contractors",
            "leaf": true,
            "checked": false
        },{
            "text": "Choose design",
            "leaf": true,
            "checked": true
        }]
    }]
});
