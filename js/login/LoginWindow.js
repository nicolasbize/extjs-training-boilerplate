(function(){

    var NS = Ext.namespace('Qualys.window');
    var $cls = NS.LoginWindow = function(cfg) {

        $cls.superclass.constructor.call(this, Ext.apply({
            title: "Welcome to Qualys!",
            width: 300,
            height: 200,
            layout: "form",
            cls: "login-window",
            items: [
                this.usernameField = new Ext.form.TextField({
                    fieldLabel: "Username",
                    minLength: 4,
                    enableKeyEvents: true,
                    maxLength: 10,
                    allowBlank: false,
                    name: "username",
                    emptyText: "Type your username"
                }),
                this.passwordField = new Ext.form.TextField({
                    fieldLabel: "Password",
                    minLength: 4,
                    enableKeyEvents: true,
                    name: "password",
                    allowBlank: false,
                    inputType: "password"
                }),
                this.termsField = new Ext.form.Checkbox({
                    boxLabel: "I agree to the terms"
                }),
                this.loginButton = new Qualys.button.LoginButton({
                })
            ]
        }, cfg));

    };

    Ext.extend($cls, Ext.Window, {


    });

})();