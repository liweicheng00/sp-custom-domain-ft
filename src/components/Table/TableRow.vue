<template>
  <tr>
    <td v-for="r in header" class="border-t whitespace-nowrap border-slate-600 overflow-auto p-2">
      <div v-if="r.key === 'action'" class="flex justify-center">
        <button
            @click="refreshDomain"
            class="px-1 mx-1 bg-blue-200 rounded flex items-center"
        >
          <svg v-show="showRefreshLoading" class="animate-spin inline  h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg><span v-show="!showRefreshLoading">Refresh</span>
        </button>
        <button
            @click="deleteDomain"
            class="px-1 mx-1 bg-red-400 rounded "
        >
          <svg v-show="showDeleteLoading" class="animate-spin inline  h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg><span v-show="!showDeleteLoading">Delete</span>
        </button>
      </div>
      <a v-else-if="r.key === 'domain_name'"
         :href="`https://${row[r.key]}`"
         class="underline text-sky-600"
         target="_blank">
        {{ row[r.key] }}
      </a>
      <div v-else>
        {{ row[r.key] }}
      </div>
    </td>
  </tr>
</template>


<script setup>
import {inject, reactive, ref} from "vue";

const props = defineProps(["index", 'row'])
const emit = defineEmits(['refresh-domain', 'delete-domain'])

const header = inject('header')
const showRefreshLoading = ref(false)
const showDeleteLoading = ref(false)

const refreshDomain = ()=> {
  console.log('refreshing domain')
  showRefreshLoading.value = true
  emit('refresh-domain', {index: props.index, showRefreshLoading})
}

function deleteDomain() {
  console.log('delete domain')
  showDeleteLoading.value = true
  emit('delete-domain', {index: props.index, showDeleteLoading})
}
</script>

<style scoped>

</style>
