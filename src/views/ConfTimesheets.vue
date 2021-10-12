<template>
  <article class="container">
    <div class="content_title">
      大會議程
    </div>
    <div class="timesheet">
      <div class="timesheet-col" v-for="(timeTable, idx) in timeSheet" :key="`no.${idx}`">
        <div class="timesheet-cate">
          <div class="topic-category text-sm" :class="{'text-lg': timeTable.category && timeTable.category.length < 11}">
            {{timeTable.category || 'JSDC 2021'}}
          </div>
          <div class="time">
            {{timeTable.time}}
          </div>
        </div>
        <div class="topic">
          <div v-for="(item, idx) in timeTable.topic" :key="`topic${idx}`">
            <h3 class="topic-title">{{item.topic}}</h3>
            <h2 v-if="item.speaker" class="topic-speaker">
              <a href="" target="_blank">
                {{item.speaker}}
                <img v-for="name in item.speaker" :src="require(`@/assets/images/speaker/${name.img}`)" :alt="name"
                :title="`JSDC 2021 - ${name}`" :key="name">
              </a>
            </h2>
            <div v-else>
              <img class="speker-icon" alt="JSDC 2021 - TBD" title="JSDC 2021 - TBD" src="@/assets/images/speaker/default.jpg">
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
const timeSheet = [
  {
    time: '08:30 - 08:40',
    category: null,
    topic: [
      {
        topic: 'JSDC 2021 開場',
        speaker: ['weiyuan.jpg'],
      },
    ],
  },
  {
    time: '08:40 - 10:00',
    category: '#跨平台整合',
    topic: [
      {
        topic: 'The Future of React: 18 and Beyond',
        // speaker: ['ctlin.jpeg'],
        speaker: null,
      },
      {
        topic: 'It\'s a good idea to learn JS from LINE Bot',
        speaker: null,
      },
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '【#跨平台整合 - JavaScript 無所不在】座談',
        speaker: null,
      },
    ],
  },
  {
    time: '10:00 - 10:10',
    category: '休息一下下，等等更精彩',
    topic: [{
      topic: '上午場休息 10 分鐘',
      speaker: null,
    }],
  },
  {
    time: '10:10 - 12:00',
    category: '#區塊鏈應用',
    topic: [
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '【用 JavaScript 玩轉 #區塊鏈應用】座談',
        speaker: null,
      },
    ],
  },
  {
    time: '12:00 - 12:30',
    category: '#技術社群',
    topic: [{
      topic: '【參與 #技術社群 教會你的事】座談',
      speaker: null,
    }],
  },
  {
    time: '12:30 - 13:50',
    category: '休息一下下，等等更精彩',
    topic: [{
      topic: '用餐時間，吃飽才有精神．',
      speaker: null,
    }],
  },
  {
    time: '13:50 - 15:10',
    category: '#前端開發與框架',
    topic: [
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '【後框架時代對前端開發者的影響】座談',
        speaker: null,
      },
    ],
  },
  {
    time: '15:10 - 15:20',
    category: '休息一下下，等等更精彩',
    topic: [{
      topic: '下午場休息 10 分鐘．',
      speaker: null,
    }],
  },
  {
    time: '15:20 - 17:00',
    category: '#語言特性與後端技術',
    topic: [
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '個人議程即將公佈，請再等等 ...',
        speaker: null,
      },
      {
        topic: '【回歸 JavaScript 本質與初心】座談',
        speaker: null,
      },
    ],
  },
  {
    time: '17:00 - 17:10',
    category: '休息一下下，等等更精彩',
    topic: [{
      topic: '下午場休息 10 分鐘．',
      speaker: null,
    }],
  },
  {
    time: '17:10 - 17:40',
    category: '#資深職涯發展',
    topic: [{
      topic: '【資深開發者的下一步？】座談',
      speaker: null,
    }],
  },
  {
    time: '17:40 - 17:50',
    category: null,
    topic: [{
      topic: 'JSDC 2021 閉幕',
      speaker: null,
    }],
  },
];
</script>

<style lang="scss">
.content_title {
  @apply text-white;
}
.timesheet {
  @apply text-gray-800;
  @apply bg-white;
  @apply bg-opacity-80;
  @apply px-5;
  @apply text-lg;
  @apply max-w-5xl;
  @apply m-auto;
  @apply rounded-md;
  @apply border-4;
  @apply border-yellow-500;
  @apply border-dashed;
  .timesheet-cate {
    @apply flex-1;
    @apply border-none;
    @apply items-center;
      .topic-category {
        @apply bg-blue-600;
        @apply bg-opacity-95;
        @apply rounded-lg;
        @apply text-white;
        @apply max-w-max;
        @apply px-2;
        @apply py-1;
        @apply m-auto;
      }
  }
  .timesheet-col {
    @apply flex;
    @apply items-center;
    &:not(:last-child) {
      @apply border-b-2;
      @apply border-dashed;
      @apply border-yellow-500;
    }
    .topic {
      @apply px-8;
      @apply py-4;
      @apply border-l-2;
      @apply border-dashed;
      @apply border-yellow-500;
      flex: 2 0 30%;
      .topic-title,
      .topic-speaker {
        @apply text-left;
        @apply pt-1;
      }
      .topic-title {
        @apply text-2xl;
      }
      .speker-icon {
        @apply rounded-full;
        max-width: 56px;
      }
    }
  }
}
</style>
