<template>
  <nav class="w-screen fixed bg-transparent">
    <div class="rounded bg-black px-8 py-2 inline-block">
      <a href="/">
        <div>
          <img src="@/assets/images/logo.svg" alt="JSDC 2021" title="JSDC 2021">
        </div>
      </a>
    </div>
    <div class="inline-block float-right py-6">
      <router-link class="p-4" to="/jsdc">
        <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
          JSDC介紹
        </span>
      </router-link>
      <router-link class="p-4" to="/aboutus">
        <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
          關於我們
        </span>
      </router-link>
      <router-link class="p-4" to="/speakers">
        <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
          講者介紹
        </span>
      </router-link>
      <router-link class="p-4" to="/timesheets">
        <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
          大會議程
        </span>
      </router-link>
      <router-link class="p-4" to="/sponsors">
        <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
          合作夥伴
        </span>
      </router-link>
      <router-link class="p-4" to="/teammember">
        <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
          工作團隊
        </span>
      </router-link>
      <router-link class="p-4" to="/conduct">
        <span class="pb-2 transition-colors ease-in-out duration-200 border-transparent text-white">
          行為準則
        </span>
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss">
a:hover span,
.link_active span {
  @apply border-b-4;
  @apply border-solid;
  @apply border-yellow-600;
  @apply text-yellow-600;
}
</style>
