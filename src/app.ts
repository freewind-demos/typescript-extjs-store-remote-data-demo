Ext.onReady(() => {
    Ext.define('MyView', {
        extend: 'Ext.grid.Panel',
        renderTo: 'main',
        height: 200,
        width: 400,
        title: 'Hello world',
        store: new Ext.data.Store({
            fields: [
                'name', 'email', 'phone'
            ],
            data: [
                { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
                { name: 'Worf', email: "worf.moghsson@enterprise.com", phone: "555-222-2222" },
                { name: 'Deanna', email: "deanna.troi@enterprise.com", phone: "555-333-3333" },
                { name: 'Data', email: "mr.data@enterprise.com", phone: "555-444-4444" }
            ],
            proxy: {
                type: 'memory'
            }
        }),
        columns: [
            { text: 'Name', dataIndex: 'name' },
            { text: 'Email', dataIndex: 'email' },
            { text: 'Phone', dataIndex: 'phone' }
        ]
    })

    new Ext.app.Application({
        name: 'hello',
        mainView: Ext.create('MyView'),
        launch: () => {
            console.log("### launch")
            return true;
        }
    });
})
