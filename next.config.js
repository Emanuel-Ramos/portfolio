/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: `@import "src/styles/__variables.scss"; @import "src/styles/__mixins.scss";`,
      },
}

module.exports = nextConfig
