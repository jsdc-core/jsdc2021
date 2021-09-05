<template>
  <div>
    <div class="conference_intro w-full flex flex-col items-center justify-center">
      <img class="w-full max-w-2xl" src="@/assets/images/mainLogo.png" alt="JSDC_2021" title="JSDC_2021" />
      <h1 class="intro_content">JSDC 2021 開發者年會 10/30 將於線上舉行</h1>
      <div class="sub_content">敬請期待</div>
    </div>
  </div>
</template>

<style lang="scss">
.conference_intro {
  min-height: calc(100vh - 35px);
}
.intro_content,
.sub_content {
  @apply text-base;
  @apply text-white;
  @apply mt-5;
  @media screen and (min-width: $tablet-size) {
    @apply text-3xl;
  }
}
</style>
