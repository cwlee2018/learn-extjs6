Ext.define('Admin.view.user.UserListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userList',

    requires: [
    ],

    onBeforeCheckChange: function(record, checkedState, e) {
        if (record.get('text') === 'Take a nap' && !checkedState) {
            Ext.toast('No rest for the weary!', null, 't');
            return false;
        }
    },

    onCheckedNodesClick: function() {
        var records = this.getView().getChecked(),
            names = [];

        Ext.Array.each(records, function(rec){
            names.push(rec.get('text'));
        });

        Ext.MessageBox.show({
            title: 'Selected Nodes',
            msg: names.join('<br />'),
            icon: Ext.MessageBox.INFO
        });
    }
});
