(function(){

    var NS = Ext.namespace('Qualys.app');
    var $cls = NS.PresidentsGrid = function(cfg) {

        $cls.superclass.constructor.call(this, Ext.apply({
            store: new Ext.data.JsonStore({
                url: "http://nicolasbize.com/ext/get_presidents.php",
                root: "list",
                fields: [
                    "number",
                    "president",
                    "birth_year",
                    "death_year",
                    "took_office",
                    "left_office",
                    "party"
                ],
                autoLoad: true
            }),
            colModel: new Ext.grid.ColumnModel({
                columns: [
                    {dataIndex: 'number', hidden: true},
                    {header: "President Name", dataIndex: 'president'},
                    {header: "Birth", dataIndex: 'birth_year'},
                    {header: "Death", dataIndex: 'death_year'},
                    {header: "Took Office", dataIndex: 'took_office'},
                    {header: "Left Office", dataIndex: 'left_office'},
                    {header: "Party", dataIndex: 'party'}
                ]
            })
        }, cfg));

    };

    Ext.extend($cls, Ext.grid.GridPanel, {
        filter: function(partyName) {
            this.getStore().filter("party", partyName);
            this.getView().refresh();
        }
    });

    Ext.reg("presidentsgrid", Qualys.app.PresidentsGrid);

})();