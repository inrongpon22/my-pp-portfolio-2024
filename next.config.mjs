/** @type {import('next').NextConfig} */
const nextConfig = {
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
        });
    
        return config;
      },
};

export default nextConfig;
