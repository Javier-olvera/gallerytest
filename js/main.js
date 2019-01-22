window.app = window.app || {};


//strict mode wrapper function
(function defineApp(app) {
    'use strict';

    var DEFAULT_KEYS = {
            '13': 'Enter',
            '37': 'ArrowLeft',
            '38': 'ArrowUp',
            '39': 'ArrowRight',
            '40': 'ArrowDown',
            '10252':'MediaPlayPause'
        },
        /**
         * Reference to the HTML element that contains name of
         * pressed button.
         *
         * @memberof app
         * @private
         * @type {HTMLElement}
         */
        buttonNameEl = null,

        /**
         * Reference to the HTML element that stores code of
         * pressed button.
         *
         * @memberof app
         * @private
         * @type {HTMLElement}
         */
        buttonCodeEl = null,

        /**
         * Reference to the HTML element that displays waiting message.
         *
         * @memberof app
         * @private
         * @type {HTMLElement}
         */
        waitingEl = null,

        /**
         * Reference to the HTML element that displays information
         * about pressed button.
         *
         * @memberof app
         * @private
         * @type {HTMLElement}
         */
        pressedStatusEl = null;

    /**
     * Handles remote key press event.
     * Checks whether pressed button is registered or not and displays
     * information about it on the UI.
     *
     * @memberof app
     * @private
     * @param {KeyboardEvent} e
     */
    function onKeyDownPress(e) {
        
        if (DEFAULT_KEYS.hasOwnProperty(e.keyCode)) {
            //en el init buttonNameEl se convirtio en el html representado con id que indica buttonNameEl.innerText = DEFAULT_KEYS[e.keyCode];
            console.log("registrado2")
        } 
        

        //buttonCodeEl.innerText = e.keyCode;
        console.log(e.keyCode)
        
    }

    /**
     * Closes the application.
     *
     * @memberof app
     * @public
     */
    app.exit = function exit() {
        try {
            tizen.application.getCurrentApplication().exit();
        } catch (error) {
            console.error('Application exit failed.', error);
        }
    };

    /**
     * Handles hardware key press event.
     * Closes the application if back key was pressed.
     *
     * @memberof app
     * @private
     * @param {Event} event
     */
    function onDeviceHardwareKeyPress(event) {
        if (event.keyName === 'back') {
            app.exit();
        }
    }

    /**
     * Registers event listeners.
     *
     * @memberof app
     * @private
     */
    function bindEvents() {
        document.addEventListener('tizenhwkey', onDeviceHardwareKeyPress);
        window.addEventListener('keydown', onKeyDownPress);
    }

    /**
     * Initializes application.
     * Assigns important HTML elements.
     * Triggers registering keys and binding events.
     *
     * @memberof app
     * @private
     */
    function init() {
        buttonNameEl = document.getElementById('test');
        buttonCodeEl = document.getElementById('testi');
        pressedStatusEl = document.getElementById('pressed-status');

   
        bindEvents();
    }

    window.addEventListener('load', init);

})(window.app);
