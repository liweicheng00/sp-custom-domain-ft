<template>
  <thead>
  <tr>
    <th v-for="h in header" class="border-b-2 border-slate-600">{{ h.name }}</th>
  </tr>
  </thead>
</template>

<script setup>
import {inject} from "vue";
const header = inject('header')
</script>

<style scoped>

</style>
