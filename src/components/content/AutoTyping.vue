<template>
  <div class="text-center">
    <h1 class="border-dashed text-4xl my-3 md:m-0">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSehfUy_ZaaByP8ZaDV4YkAf7XvIraTAiBA3kBu5iRP1iC9FDw/viewform" title="講者招募中" target="_blank"
        class="button w-full max-w-xs bg-yellow-300 tracking-wide font-extrabold border-none rounded-full p-2">
        ＃講者強力招募中
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
  font-family: 'Nunito', sans-serif;
  background: linear-gradient(90deg, rgba(252, 211, 77, 1) 0%, rgba(245, 158, 11, 1) 100%);
  box-shadow: 12px 12px 24px rgba(245, 158, 11, .64);
  transition: all 0.3s ease-in-out 0s;
  @apply cursor-pointer;
  @apply outline-none;
  @apply relative;
  @apply pt-2;
  &:before {
    content: '';
    @apply rounded-full;
    @apply absolute;
    @apply opacity-0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: calc(300px + 12px);
    min-height: calc(60px + 12px);
    border: 6px solid rgba(245, 158, 11, 0.64);
    box-shadow: 0 0 60px rgba(204, 132, 8, .64);
    transition: all .3s ease-in-out 0s;
  }
  &:focus,
  &:hover {
    color: #313133;
    transform: translateY(-6px);
    &::before {
      @apply opacity-100;
    }
  }
  &:after {
    content: '';
    @apply w-7;
    @apply h-7;
    @apply absolute;
    border-radius: 100%;
    border: 6px solid rgba(245, 158, 11, .64);
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1s infinite;
  }
}

@keyframes cursorBlink {
  49% { @apply bg-white; }
  50% { @apply bg-transparent; }
  99% { @apply bg-transparent; }
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }
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
