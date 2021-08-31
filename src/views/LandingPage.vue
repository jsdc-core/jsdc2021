<template>
  <main>
    <main-content></main-content>
  </main>
</template>

<script>
// @ is an alias to /src
import MainContent from '@/components/pages/MainContent.vue';

export default {
  name: 'main',
  components: {
    MainContent,
  },
};
</script>
