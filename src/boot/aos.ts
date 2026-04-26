import { onMounted } from 'vue';
import AOS from 'aos';

export default {
  async mount() {
    await import('aos/dist/aos.css');

    onMounted(() => {
      AOS.init({
        duration: 1000,
        once: true, // Animate only once
        offset: 100,
      });
    });
  },
};
