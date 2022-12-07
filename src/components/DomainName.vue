<template>
  <div>

    <Table :row-data="rowData" :table-header="tableHeader" @refresh-domain="refreshDomain"
           @delete-domain="deleteDomain"/>
    <div class="flex mt-5">

      <button @mouseenter="expandInput" class="px-1 bg-emerald-300 rounded">+Add Domain</button>
      <input type="text"
             placeholder="<something>.sp1.liweicheng00.link"
             v-model.trim="domainName"
             :class="`mx-3 px-2 rounded ${trans} transition-all ease-in-out  border  duration-1000`"/>
      <button @click="addDomain" class="px-1 bg-sky-300 rounded flex items-center">
        <svg v-show="showSendLoading" class="animate-spin inline  h-5 w-5 text-white"
             xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span v-show="!showSendLoading">Send</span>
      </button>
    </div>
  </div>
</template>

<script setup>

import Table from "./Table/Table.vue";
import {getCustomDomains, getCustomDomain, removeCustomDomain, setCustomDomain} from "../hook/api";
import {reactive, ref} from "vue";

const tableHeader = [
  {key: 'domain_name', name: "Domain Name"},
  {key: 'status', name: "Status"},
  {key: 'cloudfront_domain', name: "CloudFront Domain"},
  {key: 'cname_name', name: "CNAME Name"},
  {key: 'cname_value', name: "CNAME Value"},
  {key: 'action', name: "Action"},
]
const rowData = reactive([])
const trans = ref("w-0")
const showSendLoading = ref(false)
const domainName = ref("")

function rerenderAllDomains() {
  getCustomDomains().then(async res => {
    const domains = await res.json()
    rowData.splice(0, rowData.length)
    domains.forEach(d => {
      rowData.push(d)
    })
  })
}

rerenderAllDomains()

function expandInput() {
  trans.value = 'w-80'
}

function addDomain() {
  showSendLoading.value = true
  setCustomDomain(domainName.value).then(res => {
    showSendLoading.value = false
    rerenderAllDomains()
  })
}

function refreshDomain(event) {
  getCustomDomain(rowData[event.index]['domain_name']).then(async res => {
    event.showRefreshLoading.value = false
    rerenderAllDomains()
  })
}

function deleteDomain(event) {
  removeCustomDomain(rowData[event.index]['domain_name']).then(async res => {
    event.showDeleteLoading.value = false
    rerenderAllDomains()
  })
}
</script>

<style scoped>

</style>
