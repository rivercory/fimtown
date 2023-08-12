<template>
  <div class="d-flex flex-nowrap">
    <div class="if-desktop">
      <div style="flex: 1;">
        <SideMenu />
      </div>
    </div>
    <div style="flex: 7;">
      <NavMenu title="엔써타운" />
    </div>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu.vue";
import SideMenu from "@/components/SideMenu.vue";

export default {
  components: {SideMenu, NavMenu},
  mounted() {
  }
}
</script>

