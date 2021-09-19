<template>
  <article class="container">
    <h1 class="text-center text-white font-bold text-3xl mb-28">JSDC 工作人員</h1>
    <div class="member-card flex flex-wrap justify-between">
      <template v-for="pl in memberData">
        <figure class="text-white m-5" :key="pl.name">
          <img class="rounded-full mb-5" src="@/assets/images/member/logo.jpg" :alt="pl.name">
          <figcaption class="text-xl">{{pl.name}}</figcaption>
        </figure>
      </template>
    </div>
    <help-tooling words="徵"></help-tooling>
  </article>
</template>

<script>
import HelpTooling from '@/components/layout/HelpTooling.vue';

export default {
  data() {
    return {
      memberData: [{ name: 'Caesar', picPath: '' }, { name: '維元 (Wei)', picPath: '@/assets/images/member/weiyuan.jpg' },
        { name: 'Ma', picPath: '@/assets/images/member/ma.jpg' }, { name: 'Horken', picPath: '@/assets/images/member/horken.jpg' }],
      defaultImagePath: '@/assets/images/member/logo.jpg',
    };
  },
  components: {
    HelpTooling,
  },
};
</script>

<style lang="scss">
figure {
  flex: 0 0 25%;
}
</style>
