<template>
  <!-- Section: Design Block -->
  <section class="mb-40">
    <!-- Jumbotron -->
    <div
      class="relative overflow-hidden bg-cover bg-no-repeat"
      style="
        background-position: 50%;
        background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
        height: 500px;
      "
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.75)] bg-fixed"
      >
        <div class="flex h-full items-center justify-center">
          <div class="px-6 text-center text-white md:px-12">
            <h1
              class="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl"
            >
              {{ props.title }} <br /><span>{{ props.subtitle }}</span>
            </h1>
            <button
              type="button"
              class="rounded border-2 m-4 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              {{ props.ctaprimary }}
            </button>
            <button
              type="button"
              class="rounded border-2 m-4 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              {{ props.ctasecondary }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Jumbotron -->
  </section>
</template>
<script setup lang="ts">
const props = defineProps({
  title: { type: String, default: "The best offer on the market" },
  subtitle: { type: String, default: "for your business" },
  imageurl: {
    type: String,
    default: "'https://mdbcdn.b-cdn.net/img/new/slides/146.webp'",
  },
  ctaprimary: { type: String, default: "Get Started" },
  ctasecondary: { type: String, default: "Learn More" },
});
</script>
<style lang=""></style>
