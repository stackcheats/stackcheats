const path = require('path')

module.exports = {
	createPages: require('./src/gatsby/node/create-pages'),
	onCreateNode: require('./src/gatsby/node/on-create-node'),
	onCreateWebpackConfig: (onCreateWebpackConfig = ({ stage, actions }) => {
		actions.setWebpackConfig({
			resolve: {
				modules: [path.resolve(__dirname, 'src'), 'node_modules']
			}
		})
	})
}
