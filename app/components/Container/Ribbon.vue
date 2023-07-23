<template >
    <div class="relative h-96 flex-nowrap overflow-scroll-x flex justify-start content-center w-full">
        <img src="https://ik.imagekit.io/ztutmqiyjy/rsvp/beams.jpg" alt=""
            class="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" />
        <div
            class="absolute inset-0 bg-[url(/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        </div>
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
</script>
