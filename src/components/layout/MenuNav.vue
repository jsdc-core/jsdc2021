<template>
  <nav class="w-screen fixed bg-transparent z-50">
    <div class="rounded bg-white px-8 py-1 m-2" :class="{'rounded-b-none': menuToggle}">
      <div class="inline-block">
        <a href="/" class="logo_wrapper inline-block align-middle overflow-hidden whitespace-nowrap">
          <img class="inline-block" src="@/assets/images/common/logo.svg" alt="JSDC 2021" title="JSDC 2021">
          <h2 class="inline-block">JSDC 2021 主年會</h2>
        </a>
      </div>
      <!-- Screen nav bar -->
      <div class="hidden md:inline-block float-right py-5">
        <template v-for="(item, index) in menuData">
          <router-link class="p-3 lg:p-4" :to="item.path" :key="`no.${index}`">
            <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-black"
              @click="menuToggle=false" >
              {{item.name}}
            </span>
          </router-link>
        </template>
      </div>
      <!-- Mobile hamberger menu -->
      <div class="hamberger-container inline-block md:hidden align-middle float-right py-2.5">
        <button class="outline-none mobile-menu" @click="switchMenu()">
          <img class=" w-9 h-9" src="@/assets/images/common/menu.svg" alt="jsdc menu" title="jsdc menu">
        </button>
      </div>
    </div>
    <transition name="fadeHeight" mode="out-in">
      <ul class="mobile_menu bg-white rounded-b mx-2 mb-2 -mt-2" v-if="menuToggle">
        <template v-for="(item, index) in menuData">
          <router-link class="p-3 lg:p-4" tag="li" :to="item.path" :key="`no${index}`">
            <span class="pb-2 transition-colors duration-200 border-transparent text-black"
              @click="menuToggle=false">
              {{item.name}}
            </span>
          </router-link>
        </template>
      </ul>
    </transition>
  </nav>
</template>

<style lang="scss">
.logo_wrapper {
  width: 100px;
}
a:hover span,
.link_active span {
  @apply border-b-4;
  @apply border-solid;
  @apply border-yellow-600;
  @apply text-yellow-600;
}
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  @apply transition-mx-height;
  @apply max-h-64;
}
.fadeHeight-enter,
.fadeHeight-leave-to
{
  @apply opacity-0;
  @apply max-h-0;
}
</style>

<script>
export default {
  data() {
    return {
      menuData: [{ name: '關於JSDC', path: '/aboutus' }, { name: '講者介紹', path: '/speakers' }, { name: '大會議程', path: '/timesheets' },
        { name: '合作夥伴', path: '/sponsors' }, { name: '工作團隊', path: '/teammember' }, { name: '行為準則', path: '/conduct' }],
      menuToggle: false,
    };
  },
  methods: {
    switchMenu() {
      this.menuToggle = !this.menuToggle;
    },
  },
};
</script>
