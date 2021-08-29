<template>
  <footer class="footer">
      © 2021 <a href="http://jsdc.tw" target="_blank">JSDC.tw</a> | 宅斯迪西股份有限公司 (JSDC Corp.)
  </footer>
</template>

<style lang="scss" scope>
.footer {
  text-align: center;
  padding: 20px 0;
  color: $white;
  background: $dark;
  will-change: color;
}
a {
  color: #ffffa4;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
}
</style>
