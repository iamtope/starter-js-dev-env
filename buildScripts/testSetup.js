require('babel-register');
// disable webapack feature that Mocha doesn't understand
require.extensions['.css'] = function() {}