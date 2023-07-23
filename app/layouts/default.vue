import { config } from '../functions/src/libs/configuration/src/lib/config';
<template >
    <div>
        <AppGatherly></AppGatherly>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
const config = useAppConfig();
useHead({
    link: [{ rel: 'stylesheet', href: `https://fonts.googleapis.com/css2?family=${config.customLabelfont}&display=swap` }]
})
</script>