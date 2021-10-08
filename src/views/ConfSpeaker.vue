<template>
  <article class="container">
    <water-full :gap="45" :items="speaker">
      <template #default="{ item }">
        <div class="speaker m-2 lg:m-auto">
          <figure class="speaker-photo">
            <img class="block m-auto" :src="require(`@/assets/images/speaker/${item.img}`)" :alt="item.name">
          </figure>
          <h2 class="speaker-name">{{item.name}}</h2>
          <h4 class="speaker-organ">{{item.organ}}</h4>
          <h4 class="speaker-social mt-2">
            <a v-if="item.repo" :href="item.repo" class="inline-block mr-3">
              <img class="w-7" src="@/assets/images/common/github.svg" :alt="`${item.name} github repo`" :title="item.name">
            </a>
            <a v-if="item.social" :href="item.social" class="inline-block">
              <img class="w-7" src="@/assets/images/common/other.svg" :alt="`${item.name} social media site`" :title="item.name">
            </a>
          </h4>
          <h4 class="speaker-desc">{{item.desc}}</h4>
        </div>
      </template>
    </water-full>
    <help-tooling words="票" :url="redirectUrl"></help-tooling>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import HelpTooling from '@/components/layout/HelpTooling.vue';
import WaterFull from '@/components/layout/WaterFull.vue';

const redirectUrl = ref('https://www.accupass.com/event/2109210508051383682446');
const speaker = [{
  name: 'Paipo',
  img: 'paipo.jpg',
  organ: '',
  repo: 'http://github.com/pptang',
  social: 'https://webhack.connpass.com/',
  desc: 'Paipo 是一個前端工程師，目前旅居日本。對程式語言、型別系統、編譯器、瀏覽器運作有興趣，喜歡做工作以外的工作，也喜歡學習後做技術輸出。',
},
{
  name: '李婷婷',
  img: 'ting.jpeg',
  organ: 'The Z Institute/Founder',
  repo: 'https://github.com/tina1998612',
  social: 'https://www.facebook.com/lee.ting.ting.tina',
  desc: `李婷婷從 18 歲開始自學程式與區塊鏈，現為 The Z Institute 區塊鏈線上學院創辦人、加密貨幣私募基金恆新資本研究員、與區塊鏈資安審計公司 Certik 工程師，曾共同創辦圖靈鏈科技擔任技術長，與加州柏克萊大學區塊鏈研究院受邀學者，任金馬獎入圍
        SELFPICK 電影技術指導，於微軟亞太區人工智能部門擔任顧問，並發表過三篇區塊鏈論文於權威論壇ACM與IEEE，並在德國慕尼黑MobiSys獲頒全球最佳論文。此外，也是知名 Medium 專欄作者筆括密碼貨幣與區塊鏈，為全球前 20 大中文Medium作家，逾
        5000 位全球訂閱者，亦開設台灣銷量第一的中文區塊鏈線上課程，吸引逾 1600 位購課學員。曾獲香港科技大學年度傑出研究獎、香港區工程學院年度卓越獎學金等數十項學術獎項，與擔任 JP Morgan, Deloitt, HTC, Acer, KPMG,
        中華電信等知名企業特聘內訓講師。報導於商業周刊、天下雜誌、遠見雜誌封面、數位時代封面、電子時報等各大媒體均有刊出。`,
},
{
  name: '莫力全 Kyle Mo',
  img: 'kyle.jpeg',
  organ: 'OneDegree/Software Engineer',
  repo: 'https://github.com/kylemocode',
  social: 'https://medium.com/@oldmo860617',
  desc: '剛步入職場不久的菜雞，熱愛 Web 開發相關技術。在 StarBugs Weekly 擔任專欄寫手並擔任 BESG Web 技術分享會發起人，希望可以將自己的熱血傳染給其他人。',
},
{
  name: '愷開（Kalan）',
  img: 'kalan.png',
  organ: 'LINE Fukuoka',
  repo: 'https://github.com/kjj6198',
  social: 'https://twitter.com/kalanyei',
  desc: '平時喜歡從不同角度切入，探索其他領域可以如何和前端整合。最近致力於推廣 Svelte，許多個人小專案也都使用 Svelte 撰寫。創辦 Facebook 社團 Svelte.js Taiwan，希望透過持續分享的方式讓 Svelte 在台灣可以帶來更多討論。',
},
{
  name: 'Wolke Lin , 林建宏',
  img: 'wolke.jpg',
  organ: 'SOHO',
  repo: 'https://github.com/Wolke',
  social: 'https://www.line-community.me/ja/apiexpert/detail/60adb082851f7443b473e751 ',
  desc: 'LAE , GDE , 程式中一個迷途小書僮',
},
{
  name: 'Kuan',
  img: 'kuan.jpg',
  organ: '方格子 vocus',
  repo: '',
  social: 'https://vocus.cc/user/@kuan',
  desc: '方格子 vocus 前端工程師， 熱愛教學、歷史、搖滾樂。現在的目標是和團隊一起打造出人人都可以舒適閱讀的環境。',
},
{
  name: 'Lucien Lee / 鹿尋',
  img: 'lucien.jpg',
  organ: 'Pelith/CEO',
  repo: 'https://github.com/LucienLee',
  social: 'https://www.facebook.com/lucienlee.deer',
  desc: '前美商 Scalable, Tech Lead / Cofacts 真的假的, Cofounder ，一路與 JS 相伴打滾過不少新創公司，相信科技與知識的共享能引發革命。',
},
{
  name: 'PJCHENder',
  img: 'chen.jpeg',
  organ: 'OneDegree',
  repo: 'https://github.com/pjchender',
  social: 'https://www.facebook.com/pjchender/',
  desc: '光看著編輯器配色就覺得開心，一天不敲鍵就覺得不對勁。對資訊科技充滿熱情，喜歡學習 Know-How，致力於透過資訊科技的力量，帶給人們更幸福與便利的生活。',
},
{
  name: 'Mujing',
  img: 'mujing.jpeg',
  organ: 'Snapask',
  repo: 'https://github.com/moojing',
  social: 'https://www.facebook.com/mujing/',
  desc: '前端工程師、非軟體本科系的自學者、喜好爵士樂的技術人。因想更靠近產品的使用者，所以決定從原來硬體科系跨足至網頁前端領域，現擁有三年前端相關的開發經驗。樂於藉由寫文章來分享知識，希望能將各種複雜抽象的知識化為具體單純的概念並以此幫助更多人。',
},
{
  name: 'C. T. Lin',
  img: 'ctlin.jpeg',
  organ: '',
  repo: 'https://github.com/chentsulin',
  social: 'https://www.facebook.com/chentsulin',
  desc: `JavaScript 全端架構師，特別專注於 React、Node.js 與 GraphQL 等領域。對軟體的架構演進非常感興趣，前端從多年前開始獨鍾 React，看著 React 一路從 React.createClass 來到 Function Component 以及
        Hook，而依然期待後續的發展。GraphQL Taiwan 社群的 Co-founder，希望能藉由多年 GraphQL 經驗，在台灣推廣 GraphQL 技術。熱愛 Open Source 專案與貢獻，時常對大大小小的專案發出 Pull Request，自己比較知名的專案則為
        Electron React Boilerplate、Awesome GraphQL、Bottender。`,
}];
</script>

<style lang="scss">
.speaker {
  @apply flex;
  @apply flex-col;
  @apply items-center;
  @apply bg-white;
  @apply rounded-3xl;
  @apply bg-opacity-80;
  @apply p-5;
  @apply text-gray-800;
  .speaker-photo {
    @apply rounded-full;
    @apply overflow-hidden;
    @apply object-fill;
    max-width: 200px;
    height: 200px
  }
  .speaker-name {
    @apply font-bold;
    @apply text-2xl;
    @apply mt-3;
  }
  .speaker-desc {
    @apply mt-2;
    @apply px-4;
    @apply py-1;
    @apply max-h-40;
    @apply text-justify;
    @apply overflow-y-auto;
    @apply border-2;
    @apply border-dashed;
    @apply border-yellow-500;
    @apply rounded-lg;
  }
}
</style>
