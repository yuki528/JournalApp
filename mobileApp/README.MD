error Module not found: Error: Can't resolve 'react-native/Libraries/Utilities/codegenNativeCommands' in 'C:\Users\HP\journal\mobileApp\node_modules\react-native-screens\lib\module\fabric

Typically you can avoid this by using "react-native-dotenv" as your "moduleName


Module not found: Error: Can't resolve '@env' in 'C:\Users\HP\journal\mobileApp\src\services'
here are suggestion that can lead to a solution Create a types folder in your source folder.
Create a file named env.d.ts in the types folder.
Define your env variables as strings probably look at the paths property of the compilerOptions of your tsconfig file This will tell to typescript that @env point to the module and will stopped throwing errors about it. Otherwise it has no idea about the resolution of it and will only look for node_modules/@env

yarn add tsconfig-paths-webpack-plugin --dev