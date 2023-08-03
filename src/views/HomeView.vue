<template>
  <NavMenu title="엔써타운" />
  <div style="margin-left: 3rem; margin-right: 3rem;">
  <div class="container-fluid pb-3">
    <div class="d-grid gap-3" style="grid-template-columns: 1fr 1fr; height: 85vh;">
      <div class="bg-body-tertiary border rounded-3">
      </div>
      <div class="bg-body-tertiary border rounded-3">
      </div>
    </div>
  </div>
  <div class="container-fluid pb-3">
    <div class="d-grid gap-3" style="grid-template-columns: 1fr 1fr; height: 85vh;">
      <div class="bg-body-tertiary border rounded-3">
      </div>
      <div class="bg-body-tertiary border rounded-3">
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";

export default {
  components: {NavMenu},
  mounted() {
  }
}
</script>

