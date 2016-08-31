(function(){

    var NS = Ext.namespace('Qualys.app');
    var $cls = NS.QuickFilters = function(cfg) {

        $cls.superclass.constructor.call(this, Ext.apply({
            collapsible: true,
            title: "Quick Filters",
            items: [
                new Ext.DataView({
                    store: new Ext.data.ArrayStore({
                        fields: ['id', 'name'],
                        data: [
                            [1, 'Republican'],
                            [2, 'Democratic']
                        ]
                    }),
                    singleSelect: true,
                    itemSelector: "div.item",
                    selectedClass: "selected-item",
                    overClass: "hover-item",
                    tpl: new Ext.XTemplate(
                        '<tpl for=".">',
                            '<div class="item">{name}</div>',
                        "</tpl>"
                    ),
                    listeners: {
                        scope: this,
                        click: function(dv, index, node, e) {
                            var party = dv.getStore().getAt(index);
                            this.fireEvent("filter", this, party);
                        }
                    }
                })
            ]
        }, cfg));

    };

    Ext.extend($cls, Ext.Panel, {

    });

    Ext.reg("quickfilters", Qualys.app.QuickFilters);

})();