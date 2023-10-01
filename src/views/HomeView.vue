<template>
  <NavMenu title="홈"/>
  <div class="content">
    <div class="container">
      <textarea class="border rounded-2" style="border: 0; resize: none; width: 100%; height: 20vh;"/>
      <button class="btn"
              style="background-color: #C2FF02; font-weight: bold; font-family: Pretendard-Regular; float: right; margin-bottom: 2rem;">
        보내기
      </button>
      <div class="article">
        <div style="clear: both;">
          <div class="border rounded-2" style="padding: 1rem; margin-bottom: 0.5rem;" v-for="country in countries"
               :key="country.id">{{ country.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
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
.content {
  padding-top: 1rem;
}
</style>