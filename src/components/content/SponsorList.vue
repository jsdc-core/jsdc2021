<template>
  <section class="container text-white">
    <div class="text-5xl">特別感謝</div>
    <div class="sponser-list">
      <figure v-for="(company, idx) in sponserList" :key="`company${idx}`">
        <a :href="company.url" :title="company.title" target="_blank">
          <img v-if="company.img" :src="require(`@/assets/images/sponser/${company.img}`)" :alt="company.desc" :title="company.desc">
          <img v-else src="@/assets/images/speaker/default.jpg" alt="JSDC 2021" title="JSDC 2021">
        </a>
        <figcaption>{{company.title}}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style lang="scss">
section.container {
  @apply pt-10;
}
.sponser-list {
  @apply flex;
  @apply justify-center;
  @apply mt-10;
  @apply flex-wrap;
  @apply gap-5;
  figure {
    @apply flex;
    @apply flex-col;
    @apply rounded-full;
    @apply overflow-hidden;
    @apply max-w-xs;
    @apply border-yellow-500;
    @apply border-4;
    @apply border-solid;
    @apply relative;
    @apply bg-white;
  }
  img {
    @apply w-full;
  }
  figcaption {
    @apply absolute;
    @apply bottom-8;
    @apply bg-yellow-500;
    @apply text-white;
    @apply font-black;
    @apply leading-10;
    @apply h-10;
    @apply px-1;
    @apply w-full;
    @apply align-middle;
    @apply break-words;
  }

  @media screen and (min-width: $tablet-size) {
    @apply justify-start;
    figure {
      @apply max-w-xs;
      @apply border-8;
      flex: 1 0 250px;
    }
  }
}
</style>

<script setup>
const sponserList = [
  {
    desc: '最專業的繁體中文 IT 媒體',
    img: 'ithome.png',
    title: 'iThome',
    url: 'https://www.ithome.com.tw/',
  },
  {
    desc: '流暢、簡潔的線上協作筆記，增強團隊生產力！',
    img: 'hackmd.png',
    title: 'HackMD',
    url: ' https://hackmd.io/home',
  },
  {
    desc: 'MOPCON 目前已是南台灣最大技術社群研討會，成立宗旨為連結產業與資訊工程技術，以培養更多資訊科技人才',
    img: 'mopcon.png',
    title: 'MOPCON',
    url: 'https://mopcon.org/2021/schedule',
  },
  {
    desc: '亞洲最完整 JavaScript 全端開發課程',
    img: 'alphacamp.png',
    title: 'ALPHA Camp',
    url: 'https://tw.alphacamp.co/curriculum',
  },
];
</script>
