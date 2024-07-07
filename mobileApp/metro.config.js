const { getDefaultConfig } = require('metro-config');
const path = require('path');

module.exports = async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...sourceExts, 'jsx', 'js', 'ts', 'tsx', 'svg'],
      extraNodeModules: {
        'react-native': path.resolve(__dirname, 'node_modules/react-native-web'),
      },
      alias: {
        'react-native$': 'react-native-web',
        'react-native/Libraries/Renderer/shims/ReactNative': 'react-native-web/dist/exports/Renderer',
        'react-native/Libraries/Utilities/codegenNativeCommands': 'react-native-web/dist/exports/codegenNativeCommands',
        'react-native/Libraries/Utilities/codegenNativeComponent': 'react-native-web/dist/exports/codegenNativeComponent',
        // Add more aliases as needed
      },
    },
    server: {
      enhanceMiddleware: (middleware) => {
        return (req, res, next) => {
          // Enables gzip compression
          res.setHeader('Content-Encoding', 'gzip');
          return middleware(req, res, next);
        };
      },
    },
  };
};
