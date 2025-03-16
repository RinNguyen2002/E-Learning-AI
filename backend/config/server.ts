export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      '540b91bee5217f5d60ab91c0f0651a0c0f7b34e2485b5fcd15757b4ba727e391',
      'b25450f1ec6b7e3eb3e00a0abfc31a3f4dc55a563554fb43b1fb4f6239398a96'
    ]),
  },
});
