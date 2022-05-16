<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    label: string;
    size?: Size;
    type?: 'button' | 'submit' | 'reset';
    iconLeft?: string;
    iconRight?: string;
    horizontalPadding?: string | number;
    verticalPadding?: string | number;
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    iconLeft: undefined,
    iconRight: undefined,
    horizontalPadding: undefined,
    verticalPadding: undefined,
  },
);

const emit = defineEmits<{
  (e: 'click', event: Event): void;
}>();

const variantColors: {
  [key: Variant | string]: {
    color: string;
    textColor?: string;
    outline?: boolean;
  };
} = {
  primary: {
    color: 'primary',
    textColor: 'white',
  },
  secondary: {
    color: 'secondary',
    textColor: 'white',
  },
  outlined: {
    color: 'primary',
    outline: true,
  },
};

const computedPaddings = computed(() => {
  const vertical =
    typeof props.verticalPadding === 'number'
      ? `${props.verticalPadding}px`
      : props.verticalPadding;
  const horizontal =
    typeof props.horizontalPadding === 'number'
      ? `${props.horizontalPadding}px`
      : props.horizontalPadding;
  let padding: string | undefined;

  if (vertical && horizontal) {
    padding = `${vertical} ${horizontal}`;
  } else if (vertical) {
    padding = `${vertical} 0`;
  } else if (horizontal) {
    padding = `0 ${horizontal}`;
  }
  return padding;
});

const computedColors = computed(() => {
  return {
    color: variantColors[props.variant].color,
    textColor: variantColors[props.variant].textColor,
    outline: variantColors[props.variant].outline,
  };
});

const binds = computed(() => {
  return {
    label: props.label,
    size: props.size,
    type: props.type,
    iconLeft: props.iconLeft,
    iconRight: props.iconRight,
  };
});

function clickHandler(e: Event) {
  emit('click', e);
}
</script>

<template>
  <q-btn
    v-bind="{
      ...computedColors,
      ...binds,
    }"
    :padding="computedPaddings"
    unelevated
    rounded
    @click="clickHandler"
  />
</template>

<style lang="sass" scoped>
.q-btn
  font-size: .875rem
  line-height: 1.2
  font-weight: 400
  text-transform: initial
  &--rounded
    border-radius: 12px
</style>
