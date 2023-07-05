<template>
    <span v-show="!editMode" @click="handleEditionMode" v-bind="$attrs" :style="customfont ? customstyle : ''">
        {{ content }}
    </span>
    <textarea ref="input" v-show="editMode" v-model="content" aria-describedby="item-content" name="content" type="text"
        tabindex="0" @focusout="editMode = false" @keydown.enter="editMode = false"
        :style="customfont ? customstyle : ''" />
    <UButton v-show="editMode" icon="i-heroicons-pencil-square" size="sm" color="orange" round variant="soft">
    </UButton>
</template>
<script setup>
const content = defineModel('content');
const customfont = defineModel('customfont');
useHead({
    link: [{ rel: 'stylesheet', href: `https://fonts.googleapis.com/css2?family=${customfont.value}&display=swap` }]
})
const customstyle = ref(`fontFamily: ${customfont.value}`);
const editMode = ref(false);
const input = ref(null);
const handleEditionMode = () => {
    editMode.value = true;
    nextTick(() => {
        if (input.value) {
            input.value.focus()
        }
    });
};
</script>