import type { NextConfig } from "next";
import { withGTConfig } from 'gt-next/config';

const nextConfig: NextConfig = {
  /* config options here */
};

export default withGTConfig(nextConfig, {
  locales: ['en', 'es'],
});
