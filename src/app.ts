Ext.onReady(() => {
    Ext.define('User', {
        extend: 'Ext.data.Model',
        fields: [
            { name: 'name', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'phone', type: 'string' },
        ]
    });

    Ext.define('MyView', {
        extend: 'Ext.grid.Panel',
        renderTo: 'main',
        height: 200,
        width: 400,
        title: 'Hello world',
        store: new Ext.data.Store({
            proxy: {
                type: 'ajax',
                url: 'http://127.0.0.1:9999/users.json',
                reader: {
                    type: 'json',
                }
            },
            autoLoad: true
        }),
        columns: [
            { text: 'Name', dataIndex: 'name' },
            { text: 'Email', dataIndex: 'email' },
            { text: 'Phone', dataIndex: 'phone' }
        ]
    } as Ext.grid.Panel.Cfg)

    new Ext.app.Application({
        name: 'hello',
        mainView: Ext.create('MyView'),
        launch: () => {
            console.log("### launch")
            return true;
        }
    });
})
