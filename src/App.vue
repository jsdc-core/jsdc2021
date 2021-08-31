<template>
  <div class="font-sans">
    <menu-nav></menu-nav>
    <div class="hidden">{{appVersion}}</div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
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
