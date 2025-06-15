/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/assets/',
          publicPath: '/_next/static/assets/',
          name: '[name].[hash].[ext]',
        },
      },
    })

    return config
  },
  transpilePackages: ['antd', '@ant-design/icons'], // Even if you removed icons, if antd *still* tries to import it, this *might* help with internal resolution.
}

export default nextConfig
