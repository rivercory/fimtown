<template>
  <NavMenu title="홈" />
  <div class="d-flex flex-nowrap">
    <div class="if-desktop">
      <SideMenu />
    </div>
    <div class="content">
      <textarea class="border rounded-2" style="border: 0; resize: none; width: 100%; height: 20vh;" />
      <div class="article">
        <ul>
          <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import NavMenu from "@/components/NavMenu.vue";
import SideMenu from "@/components/SideMenu.vue";

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<style>
.content {
  padding: 1rem;
  width: 83rem;
}
</style>