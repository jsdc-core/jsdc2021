<template>
  <article class="container">
    <h1 class="text-center text-white font-bold text-3xl mb-28">JSDC 工作人員</h1>
    <div class="member-card flex flex-wrap justify-between">
      <template v-for="pl in memberData">
        <figure class="text-white m-5" :key="pl.name">
          <img class="rounded-full mb-5 w-full" :src="pl.picPath" :alt="pl.name" title="JSDC 工作人員">
          <figcaption class="text-xl">{{pl.name}}</figcaption>
        </figure>
      </template>
    </div>
    <help-tooling words="徵" :url="redirectUrl"></help-tooling>
  </article>
</template>

<script>
import HelpTooling from '@/components/layout/HelpTooling.vue';

const defaultImage = require('@/assets/images/member/logo.jpg');
const imgWei = require('@/assets/images/member/weiyuan.jpg');
const imgMa = require('@/assets/images/member/ma.jpg');
const imgHorken = require('@/assets/images/member/horken.jpg');

export default {
  data() {
    return {
      redirectUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSehfUy_ZaaByP8ZaDV4YkAf7XvIraTAiBA3kBu5iRP1iC9FDw/viewform',
      memberData: [
        { name: 'Caesar', picPath: defaultImage },
        { name: '維元 (Wei)', picPath: imgWei },
        { name: 'Ma', picPath: imgMa },
        { name: 'Horken', picPath: imgHorken },
      ],
    };
  },
  components: {
    HelpTooling,
  },
};
</script>

<style lang="scss">
figure {
  flex: 0 0 20%;
  max-width: 20%;
}
</style>
