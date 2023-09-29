const { override, addBundleVisualizer } = require('customize-cra')

module.exports = override(
    // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
    process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer()
)
