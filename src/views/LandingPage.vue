<template>
  <div>
    <main-content></main-content>
  </div>
</template>

<script>
// @ is an alias to /src
import MainContent from '@/components/pages/MainContent.vue';

export default {
  name: 'Landing',
  components: {
    MainContent,
  },
};
</script>
