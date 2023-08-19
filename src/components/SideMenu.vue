<template>
  <main class="d-flex flex-nowrap">
    <div class="d-flex flex-column flex-shrink-0 p-3 rounded-3 sidebar"
         style="width: 16rem; margin-left: 1rem; margin-top: 1rem; margin-bottom: 1rem;">
    </div>
  </main>
</template>

<style>
main {
  max-height: 87vh;
  height: 87vh;
}

.sidebar {
  background-color: var(--sidebar-background-color);
}

[data-theme="light"] {
  --sidebar-background-color: #e9ecef;
}

[data-theme="dark"] {
  --sidebar-background-color: #495057;
}
</style>