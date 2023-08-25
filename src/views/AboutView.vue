<template>
  <NavMenu title="소개"/>
  <div class="about rounded-3 border">
    <h4 style="font-weight: bold; font-family: LINESeedKR-Bd;">소개</h4>
  </div>
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import NavMenu from "@/components/NavMenu.vue";

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
.about {
  margin: 1rem;
  padding: 1rem;
}
</style>