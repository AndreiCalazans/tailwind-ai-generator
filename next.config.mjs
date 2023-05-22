import { withAxiom } from 'next-axiom';

/** @type {import('next').NextConfig} */
export default withAxiom({
  experimental: {
    serverActions: true,
  },
});

