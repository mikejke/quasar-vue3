<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: boolean;
  }>(),
  {},
);

const emit = defineEmits<{
  (e: 'update:modelValue', state: false): void;
}>();

function hideHandler() {
  emit('update:modelValue', false);
}
</script>

<template>
  <q-dialog
    :model-value="props.modelValue"
    class="test-drawer-dialog"
    full-height
    square
    position="right"
    @hide="hideHandler"
  >
    <q-card
      class="q-pa-md"
      :style="{ width: '640px', maxWidth: '80vw' }"
    >
      <slot />
    </q-card>
  </q-dialog>
</template>

<style lang="sass">
.test-drawer-dialog
  .q-dialog__inner
    padding: 0
</style>
