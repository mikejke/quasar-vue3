<script setup lang="ts">
import { ref } from 'vue';
const date = ref(null);
</script>

<template>
  <q-input
    v-model="date"
    class="test-input"
    outlined
    rounded
    mask="date"
    :rules="['date']"
  >
    <template #append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          cover
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date v-model="date">
            <div class="row items-center justify-end">
              <q-btn
                v-close-popup
                label="Close"
                color="primary"
                flat
              />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>
