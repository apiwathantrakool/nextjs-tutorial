const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  const env = {
    firebase_base_url:
      'https://training-e3776-default-rtdb.asia-southeast1.firebasedatabase.app/nextJS',
    base_url: 'http://localhost:3000',
  };

  return {
    reactStrictMode: true,
    images: {
      domains: ['drive.google.com'],
    },
    // TODO: This condition will be changed in the next lecture
    env: phase === PHASE_DEVELOPMENT_SERVER ? env : env,
  };
};
