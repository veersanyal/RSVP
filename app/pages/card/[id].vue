<template>
    <div class="flex justify-center">
        <Card :id="pageId">
        </Card>
    </div>
</template>
<script setup lang="ts">
const route = useRoute()
const pageId: string = route.params.id as string;
</script>
