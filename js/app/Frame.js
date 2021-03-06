(function(){

    var NS = Ext.namespace('Qualys.app');
    var $cls = NS.Frame = function(cfg) {

        $cls.superclass.constructor.call(this, Ext.apply({
            cls: "qualys-viewport",
            layout: "border",
            items: [{
                xtype: "box",
                region: "north",
                border: false,
                cls: "qualys-header",
                html: "Presidents of the USA",
                height: 50
            }, {
                xtype: "quickfilters",
                region: "west",
                width: 300,
                listeners: {
                    scope: this,
                    filter: function(filter, party) {
                        this.grid.filter(party.get("name"));
                    }
                }
            }, {
                ref: "grid",
                xtype: "presidentsgrid",
                region: "center",
                title: "Presidents Grid"
            }]
        }, cfg));

    };

    Ext.extend($cls, Ext.Viewport, {

    });

})();