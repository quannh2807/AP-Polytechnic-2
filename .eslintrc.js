module.exports = {
    root: true,
    extends: '@react-native-community',
    plugins: ['import'],
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                alias: {
                    _api: './src/api',
                    _assets: './src/assets',
                    _components: './src/components',
                    _atoms: './src/components/atoms',
                    _molecules: './src/components/molecules',
                    _organisms: './src/components/organisms',
                    _templates: './src/components/templates',
                    _navigations: './src/navigations',
                    _scenes: './src/scenes',
                    _services: './src/services',
                    _utils: './src/utils',
                    _constants: './src/constants',
                    _styles: './src/styles',
                },
            },
        },
    },
};
