<script setup lang="ts">
import { QTableProps } from 'quasar';

const props = withDefaults(
  defineProps<{
    columns?: QTableProps['columns'];
    items?: object[];
    rowsPerPage?: number[];
  }>(),
  {
    columns: undefined,
    items: () => [] as object[],
    rowsPerPage: undefined,
  },
);
</script>

<template>
  <q-table
    :columns="props.columns"
    :rows="items"
    :rows-per-page-options="props.rowsPerPage"
  />
</template>
