var path = require("path")

export default{
    alias:{
        'utils': path.resolve(__dirname, 'src/library/utils/'),
        'components':  path.resolve(__dirname, 'src/library/components'),
    },
    theme: {
        "brand-primary": "#e7572f",
        "color-text-base": "#333"
    }
}
