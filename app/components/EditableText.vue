<template>
    <span v-show="!editMode" @click="handleEditionMode" v-bind="$attrs">
        {{ modelValue }}
    </span>
    <textarea ref="input" v-show="editMode" v-model="modelValue" aria-describedby="item-content" name="modelValue"
        type="text" tabindex="0" @focusout="editMode = false" @keydown.enter="editMode = false" />
</template>
<script setup>
const modelValue = defineModel()
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
