/**
 * @class Qualys.button.LoginButton
 * @extends Ext.Component
 */
(function() {

    var NS = Ext.namespace('Qualys.button');
    var $cls = NS.LoginButton = function(cfg) {

        $cls.superclass.constructor.call(this, Ext.apply({
            html: "Login",
            cls: "qualys-base-button " + (cfg.disabled ? "" : "qualys-button"),
            disabled: false
        }, cfg));

        this.on("afterrender", function() {
            this.el.on("click", function() {
                if (!this.disabled) {
                    this.fireEvent("buttonclick", this);
                }
            }, this);
        }, this);

        this.addEvents("buttonclick");

    };

    Ext.extend($cls, Ext.Component, {

        // enable the component
        enable: function() {
            this.disabled = false;
            this.addClass("qualys-button");
        },

        disable: function() {
            this.disabled = true;
            this.removeClass("qualys-button");
        }

    });

})();