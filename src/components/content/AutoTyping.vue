<template>
  <div class="text-center">
    <h1 class="intro_content">JSDC 2021 開發者年會
      <span class="text-yellow-500 tracking-widest">{{typeValue}}</span>
      <span class="cursor inline-block ml-1 w-1 bg-white" :class="{typing: typeStatus}">&nbsp;</span> 將於線上舉行
    </h1>
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
      typeArray: ['10/30'],
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
