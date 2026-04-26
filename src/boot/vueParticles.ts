import { boot } from 'quasar/wrappers';
import Particles from '@tsparticles/vue3';
import { loadSlim } from '@tsparticles/slim';
import { Engine } from '@tsparticles/engine';

export default boot(({ app }) => {
  app.use(Particles, {
    init: async (engine: Engine) => {
      await loadSlim(engine); // Load the slim version of the library
    },
  });
});
