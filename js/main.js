/**
 * @overview  Contains the main program logic.
 * @copyright James Duran 2013
 */

/**
 * The main application class.
 * @name PasswordGeneratorApplication
 * @public
 * @class
 * @returns {object} A collection of public methods.
 */
var PasswordGeneratorApplication = (function() {
    return {
        /**
         * The main function that's executed upon window loading.
         * @public
         * @function run
         */
        run: function() {
            alert('Hello World!');
        }
    };
})();

/**
 * Register an event handler to run the application upon page load.
 */
window.addEventListener('load', PasswordGeneratorApplication.run);
