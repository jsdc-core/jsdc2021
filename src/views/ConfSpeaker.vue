<template>
  <article class="container">

    <help-tooling words="票" :url="redirectUrl"></help-tooling>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import HelpTooling from '@/components/layout/HelpTooling.vue';

const redirectUrl = ref('https://www.accupass.com/event/2109210508051383682446');
</script>

<style lang="scss">

</style>
