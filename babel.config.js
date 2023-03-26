module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
				'module-resolver',
				{
					extensions: ['.js', '.jsx', '.ts', '.tsx', '.android.js', '.android.tsx', '.ios.js', '.ios.tsx'],
					root: ['./src'],
					alias: {
						'@components': './src/components',
						'@assets': './assets',
						'@styles': './src/styles',
						'@screens': './src/screens',
						'@routes': './src/routes',
						'@layouts': './src/layouts',
						'@hooks': './src/hooks',
						'@helpers': './src/helpers',
						'@state': './src/state',
						'@navigation': './src/navigation',
						'@src': './src'
					}
				}
			],
			'react-native-reanimated/plugin',
    ]
  }
}
