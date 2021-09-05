<template>
  <nav class="w-screen fixed bg-transparent">
    <div class="rounded bg-gray-700 px-8 py-1 m-2">
      <div class="inline-block">
        <a href="/" class="logo_wrapper inline-block align-middle overflow-hidden whitespace-nowrap">
          <img class="inline-block" src="@/assets/images/logo.svg" alt="JSDC 2021" title="JSDC 2021">
          <h2 class="inline-block">JSDC 2021 主年會</h2>
        </a>
      </div>
      <!-- Screen nav bar -->
      <div class="hidden md:inline-block float-right py-5">
        <router-link class="p-3 lg:p-4" to="/aboutus">
          <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
            關於JSDC
          </span>
        </router-link>
        <router-link class="p-3 lg:p-4" to="/speakers">
          <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
            講者介紹
          </span>
        </router-link>
        <router-link class="p-3 lg:p-4" to="/timesheets">
          <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
            大會議程
          </span>
        </router-link>
        <router-link class="p-3 lg:p-4" to="/sponsors">
          <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
            合作夥伴
          </span>
        </router-link>
        <router-link class="p-3 lg:p-4" to="/teammember">
          <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
            工作團隊
          </span>
        </router-link>
        <router-link class="p-3 lg:p-4" to="/conduct">
          <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
            行為準則
          </span>
        </router-link>
      </div>
      <!-- Mobile hamberger menu -->
      <div class="hamberger-container">
        <div></div>
      </div>
    </div>
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
</style>
