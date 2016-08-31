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
                    emptyText: "Type your username",
                    listeners: {
                        scope: this,
                        keyup: this.validateForm
                    }
                }),
                this.passwordField = new Ext.form.TextField({
                    fieldLabel: "Password",
                    minLength: 4,
                    enableKeyEvents: true,
                    name: "password",
                    allowBlank: false,
                    inputType: "password",
                    listeners: {
                        scope: this,
                        keyup: this.validateForm
                    }
                }),
                this.termsField = new Ext.form.Checkbox({
                    boxLabel: "I agree to the terms",
                    listeners: {
                        scope: this,
                        check: this.validateForm
                    }
                }),
                this.loginButton = new Qualys.button.LoginButton({
                    disabled: true,
                    listeners: {
                        scope: this,
                        buttonclick: this.tryLogin
                    }
                })
            ]
        }, cfg));

        this.addEvents("loggedin");

    };

    Ext.extend($cls, Ext.Window, {
        validateForm: function() {
            if (this.usernameField.isValid(true) &&
                this.passwordField.isValid(true) &&
                this.termsField.getValue() === true) {
                this.loginButton.enable();
            } else {
                this.loginButton.disable();
            }
        },

        tryLogin: function() {
            Ext.Ajax.request({
                url: 'http://nicolasbize.com/ext/login.php',
                scope: this,
                success: function(contents) {
                    var json = JSON.parse(contents.responseText);
                    this.getEl().fadeOut();
                    this.close();
                    this.fireEvent("loggedin", this);
                },
                failure: function(contents) {
                    // debugger;
                },
                params: {
                    username: this.usernameField.getValue(),
                    password: this.passwordField.getValue()
                },
                method: 'GET'
            });
        }

    });

})();