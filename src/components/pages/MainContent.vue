<template>
  <div class="hello">
    <div class="landing_intro">
        <img class="logo_banner" src="../../assets/images/mainLogo.png" alt="JSDC_2021">
        <div class="intro_content">JSDC 2021 開發者年會 10/23 將於線上舉行</div>
        <div class="sub_content">敬請期待</div>
    </div>
  </div>
</template>

<style lang="scss">
.landing_intro {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 60px);
  .logo_banner {
    max-width: 640px;
  }
  .intro_content, .sub_content{
    color: white;
    font-size: 2em;
    margin-top: 20px;
  }
}
</style>
