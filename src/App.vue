<template>
  <div class="font-sans">
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
import FooterSide from '@/components/layout/FooterSide.vue';

export default {
  components: {
    FooterSide,
  },
  computed: {
    appVersion: () => process.env.version,
  },
};
</script>
