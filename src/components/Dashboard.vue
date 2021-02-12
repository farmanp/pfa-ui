<template>
  <div>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style>
  .vertical-menu a {
    display: block;
    padding: 12px;
    text-decoration: none;
  }
</style>