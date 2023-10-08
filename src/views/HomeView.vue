<template>
  <NavMenu title="엔써타운"/>
  <div class="content if-desktop">
    <div style="margin: 1rem;">
      <div class="d-grid gap-3" style="grid-template-columns: 1fr 1fr; height: 80vh;">
        <div class="home-card rounded-3">
        </div>
        <div class="home-card rounded-3">
        </div>
      </div>
    </div>
    <div style="margin: 1rem;">
      <div class="d-grid gap-3" style="grid-template-columns: 1fr 1fr; height: 80vh;">
        <div class="home-card rounded-3">
        </div>
        <div class="home-card rounded-3">
        </div>
      </div>
    </div>
    <div style="margin: 1rem;">
      <div class="d-grid gap-3" style="grid-template-columns: 1fr 1fr; height: 80vh;">
        <div class="home-card rounded-3">
        </div>
        <div class="home-card rounded-3">
        </div>
      </div>
    </div>
    <div style="margin: 1rem;">
      <div class="d-grid gap-3" style="grid-template-columns: 1fr 1fr; height: 80vh;">
        <div class="home-card rounded-3">
        </div>
        <div class="home-card rounded-3">
        </div>
      </div>
    </div>
  </div>
  <div class="if-mobile" style="margin: 0.5rem;">
    <div class="home-card rounded-3">
    </div>
  </div>
</template>

<script setup>
import NavMenu from "@/components/NavMenu.vue";
</script>

<style>
:root.lightmode {
  --post-background-color: #dee2e6;
  --home-card-background-color: #f4fce3;
}

:root.darkmode {
  --post-background-color: ;
  --home-card-background-color: ;
}

.home-card {
  background-color: var(--home-card-background-color);
}
</style>