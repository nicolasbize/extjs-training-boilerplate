(function(){

    var NS = Ext.namespace('Qualys.window');
    var $cls = NS.LoginWindow = function(cfg) {

        $cls.superclass.constructor.call(this, Ext.apply({
            title: "Welcome to Qualys!",
            width: 300,
            height: 300,
            items: [
                new Qualys.button.LoginButton({})
            ]
        }, cfg));

    };

    Ext.extend($cls, Ext.Window, {

    });

})();