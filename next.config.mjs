import withBundleAnalyzer from "@next/bundle-analyzer"
import withPlugins from "next-compose-plugins"
import { env } from "./env.mjs"

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({ enabled: env.ANALYZE })]], {
  reactStrictMode: false,
  experimental: { instrumentationHook: false },
  // rewrites() {
  //   return [
  //     { source: "/email", destination: "/api/basic-email" },
  //   ]
  // },
})

export default config
