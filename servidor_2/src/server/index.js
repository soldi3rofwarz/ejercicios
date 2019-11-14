require('ignore-styles');

require('@babel/register')({
    ignore: [/(node_modules)/],
    presets: ['@babel/presets-env', '@babel/presets-react'],
});

require('asset-require-hook')({

    extensions: [
        'jpg',
        'png',
        'gif',
    ],
    name: '/aseets/resources/[name].[ext]',
});

require('./server.js');
