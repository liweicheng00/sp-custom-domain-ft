<template>
  <div>
    <table class="table-fixed w-full text-center border-collapse">
      <TableHead/>
      <TableBody
          @refresh-domain="$emit('refresh-domain', $event)"
          @delete-domain="$emit('delete-domain', $event)"
      />
    </table>
  </div>
</template>

<script setup>
import TableHead from "./TableHead.vue";
import TableBody from "./TableBody.vue";
import {provide} from "vue";

const props = defineProps(['rowData', 'tableHeader'])
provide('header', props.tableHeader)
provide('rowData', props.rowData)

</script>

<style scoped>

</style>
