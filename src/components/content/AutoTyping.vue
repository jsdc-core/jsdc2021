<template>
  <div class="text-center">
    <h1 class="border-dashed text-4xl my-3 md:m-0">
      <a href="https://www.accupass.com/event/2109210508051383682446" title="講者招募中" target="_blank"
        class="button w-full max-w-xs bg-yellow-300 tracking-wide font-extrabold border-none rounded-full p-2">
        ＃熱烈售票中
      </a>
    </h1>
    <h3 class="intro_content">JSDC 2021 開發者年會
      <span class="text-yellow-500 tracking-widest">{{typeValue}}</span>
      <span class="cursor inline-block ml-1 w-1 bg-white" :class="{typing: typeStatus}">&nbsp;</span> 將於線上舉行
    </h3>
    <div class="sub_content">敬請期待</div>
  </div>
</template>

<style lang="scss" scoped>
.intro_content,
.sub_content {
  @apply text-base;
  @apply text-white;
  @apply mt-5;
  @media screen and (min-width: $tablet-size) {
    @apply text-3xl;
  }
  span.cursor {
    animation: cursorBlink 1s infinite;
    &.typing {
      animation: none;
    }
  }
}

.button {
  @apply pt-2;
  &:before {
    min-width: calc(240px + 12px);
    min-height: calc(60px + 12px);
    box-shadow: 0 0 60px rgba(204, 132, 8, .64);
  }
  &:after {
    content: '';
    @apply w-7;
    @apply h-7;
  }
}

@keyframes cursorBlink {
  49% { @apply bg-white; }
  50% { @apply bg-transparent; }
  99% { @apply bg-transparent; }
}
</style>

<script>
export default {
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['10/30', '30 Oct.'],
      typeArrayIdx: 0,
      typeingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      charIdx: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIdx < this.typeArray[this.typeArrayIdx].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIdx].charAt(this.charIdx);
        this.charIdx += 1;
        setTimeout(this.typeText, this.typeingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIdx > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIdx].substring(0, this.charIdx - 1);
        this.charIdx -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIdx += 1;
        if (this.typeArrayIdx >= this.typeArray.length) this.typeArrayIdx = 0;
        setTimeout(this.typeText, this.typeingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>
