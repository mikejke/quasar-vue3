<script setup lang="ts">
import { ValidationRule } from 'quasar';
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    label?: string;
    type?: 'text' | 'number' | 'url' | 'tel' | 'password' | 'search';
    url?: string;
    rules?: ValidationRule[];
    lazyRules?: boolean;
  }>(),
  {
    modelValue: '',
    label: '',
    url: undefined,
    type: 'text',
    rules: () => [],
    lazyRules: false,
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: typeof props.modelValue): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: typeof props.modelValue) {
    emit('update:modelValue', value);
  },
});

const binds = computed(() => {
  return {
    label: props.label,
    type: props.type,
    url: props.url,
    rules: props.rules,
    lazyRules: props.lazyRules,
  };
});
</script>

<template>
  <q-input
    v-model="value"
    class="test-input"
    outlined
    rounded
    v-bind="binds"
  />
</template>

<style lang="sass">
.test-input
  &.q-field
    .q-field__control
      background: #f8f8f8
      &:before,
      &:after
        border-color: #f8f8f8
      .q-field__label
        color: #a7a7a7
    &:hover
      .q-field__control
        background: #efefef
        &:before,
        &:after
          border-color: #efefef
  &.q-field--outlined
    &.q-field--rounded
      .q-field__control
        border-radius: 12px
  &.q-field--focused
    &,
    &:hover
      .q-field__control
        background: #fff
        &:before,
        &:after
          border-color: #a7a7a7
  &.q-field--highlighted
    &.q-field--outlined
      .q-field__control
        &:before,
        &:after
          border-width: 1px
      &.q-field--error
        .q-field__control,
        .q-field__control:hover
          &:before,
          &:after
            border-color: $negative
    .q-field__label
        color: #a7a7a7
</style>
