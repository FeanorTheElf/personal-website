import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";

function nextConfig(phase: any): NextConfig {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  return {
    output: 'export',
    reactStrictMode: true,
    assetPrefix: isDev ? undefined : "https://feanortheelf.github.io/personal-website/"
  };
}

export default (phase: any) => nextConfig(phase);
