<template>
  <tbody>
  <TableRow
      v-for="(row, index) in rowData"
      :key="index"
      :row="row"
      :index="index"
      @refresh-domain="$emit('refresh-domain', $event)"
      @delete-domain="$emit('delete-domain', $event)"
  />
  </tbody>
</template>

<script setup>
import TableRow from "./TableRow.vue";
import {inject} from "vue";

const rowData = inject('rowData')

</script>

<style scoped>

</style>
