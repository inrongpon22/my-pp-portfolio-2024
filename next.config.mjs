/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qavdigrfstszklsrdjsy.supabase.co",
        pathname: "/storage/v1/object/sign/**",
      },
      {
        protocol: "https",
        hostname: "emotion.sh",
        pathname: "/logo-96x96.png",
      },
      {
        protocol: "https",
        hostname: "day.js.org",
        pathname: "/img/logo.png",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: "file-loader",
        options: {
          outputPath: "static/assets/",
          publicPath: "/_next/static/assets/",
          name: "[name].[hash].[ext]",
        },
      },
    })

    return config
  },
}

export default nextConfig
