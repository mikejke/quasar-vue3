<script setup lang="ts">
import { ref, watch } from 'vue';
import { QTableProps, useQuasar } from 'quasar';
import TestTable from '@/components/test-table/test-table.vue';
import TestButton from '@/components/buttons/test-button.vue';
import TestDrawerDialog from '@/components/dialogs/test-drawer-dialog.vue';
import TestInput from '@/components/inputs/test-input.vue';
import TestDatePicker from '@/components/inputs/test-date-picker.vue';

const columns: QTableProps['columns'] = [
  {
    label: 'Dessert',
    field: 'name',
    name: 'name',
    headerClasses: 'text-left',
    classes: 'text-left',
  },
  {
    label: 'Calories',
    field: 'calories',
    name: 'calories',
    headerClasses: 'text-right',
    classes: 'text-right',
  },
  {
    label: 'Fat (g)',
    field: 'fat',
    name: 'fat',
    headerClasses: 'text-right',
    classes: 'text-right',
  },
  {
    label: 'Carbs (g)',
    field: 'carbs',
    name: 'carbs',
    headerClasses: 'text-right',
    classes: 'text-right',
  },
  {
    label: 'Protein (g)',
    field: 'protein',
    name: 'protein',
    headerClasses: 'text-right',
    classes: 'text-right',
  },
  {
    label: 'Sodium (g)',
    field: 'sodium',
    name: 'sodium',
    headerClasses: 'text-right',
    classes: 'text-right',
  },
];

const desserts: Dessert[] = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
  },
];

const addUserModalDrawer = ref(false);
const secondDialog = ref(false);

const $q = useQuasar();

const name = ref<string>();
const age = ref<number>();
const accept = ref(false);

watch(addUserModalDrawer, () => {
  onReset();
});

function onSubmit() {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first',
    });
  } else {
    secondDialog.value = true;
  }
}

function onReset() {
  name.value = undefined;
  age.value = undefined;
  accept.value = false;
}
</script>

<template>
  <main class="home">
    <div class="home__header">
      <div class="row justify-between">
        <h1>Пользователи</h1>
        <test-button
          variant="secondary"
          icon-left="add"
          label="Добавить пользователя"
          :horizontal-padding="32"
          @click="addUserModalDrawer = true"
        />
      </div>
    </div>
    <div class="home__content q-pa-md">
      <test-table :columns="columns" :items="desserts" />
    </div>
  </main>
  <test-drawer-dialog v-model="addUserModalDrawer">
    <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
      <test-input
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[
          (val: string) => (val && val.length > 0) || 'Please type something',
        ]"
      />

      <test-input
        v-model="age"
        type="number"
        label="Your age *"
        lazy-rules
        :rules="[
          (val: number | string) =>
            (val !== null && val !== '') || 'Please type your age',
          (val: number | string) => (val > 0 && val < 100) || 'Please type a real age',
        ]"
      />

      <test-date-picker />

      <q-toggle
        v-model="accept"
        label="I accept the license and terms"
      />

      <div>
        <test-button
          label="Submit"
          type="submit"
          variant="secondary"
          :vertical-padding="16"
          :horizontal-padding="32"
        />
        <test-button
          label="Reset"
          type="reset"
          variant="outlined"
          :vertical-padding="16"
          :horizontal-padding="32"
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </test-drawer-dialog>

  <q-dialog
    v-model="secondDialog"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="bg-teal text-white" :style="{ width: '300px' }">
      <q-card-section>
        <div class="text-h6">Persistent</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Click/Tap on the backdrop.
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn
          v-close-popup
          flat
          label="OK"
          @click="
            $q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message: 'Submitted',
            })
          "
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<style lang="sass" scoped>
.home
  &__header
    padding: 16px 48px 32px
    h1
      margin: 0
      font-size: 3rem
      line-height: 3rem
</style>
