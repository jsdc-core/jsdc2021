<template>
  <div class="tooling">
    <div class="button circle text-4xl font-black">
      <a class="inline-block leading-9 pt-3 text-white" href="https://docs.google.com/forms/d/e/1FAIpQLSehfUy_ZaaByP8ZaDV4YkAf7XvIraTAiBA3kBu5iRP1iC9FDw/viewform" title="講者強力招募中">
        {{words}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tooling',
  props: ['words'],
};
</script>

<style lang="scss">
  .tooling {
    @apply fixed;
    @apply bottom-8;
    @apply right-5;
    a {
      animation: color-change 1s infinite;
    }
  }

  .circle {
    @apply w-16;
    @apply h-16;
    @apply text-center;
    @apply rounded-full;
  }

  .button {
    &:before{
      min-height: calc(64px + 10px);
      min-width: calc(64px + 10px);
    }
  }

  @keyframes color-change {
    0% { @apply text-white; }
    25% { @apply text-gray-300; }
    50% { @apply text-gray-700; }
    75% { @apply text-gray-300; }
    100% { @apply text-white; }
  }
</style>
