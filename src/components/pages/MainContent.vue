<template>
  <main>
    <div class="landing_intro">
        <img class="logo_banner" src="../../assets/images/mainLogo.png" alt="JSDC_2021">
        <div class="intro_content">JSDC 2021 開發者年會 10/30 將於線上舉行</div>
        <div class="sub_content">敬請期待</div>
    </div>
  </main>
</template>

<style lang="scss">
.landing_intro {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 35px);
  .logo_banner {
    max-width: 640px;
    width: 100%;
  }
  .intro_content,
  .sub_content{
    @apply text-base;
    @apply text-white;
    @apply mt-5;
    @media screen and (min-width: $tablet-size) {
      @apply text-3xl;
    }
  }
}
</style>
