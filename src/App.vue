<template>
  <div class="font-sans">
    <div class="hidden">{{appVersion}}</div>
    <menu-nav></menu-nav>
    <router-view/>
    <footer-side></footer-side>
  </div>
</template>

<script>
import MenuNav from '@/components/layout/MenuNav.vue';
import FooterSide from '@/components/layout/FooterSide.vue';

export default {
  components: {
    FooterSide,
    MenuNav,
  },
  computed: {
    appVersion: () => process.env.version,
  },
};
</script>
