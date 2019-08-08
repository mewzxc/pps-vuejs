<template>
  <div>
    <h2 class="title">{{ now }}</h2>
    <slot :now="now">Default Content</slot>
  </div>
</template>

<script>
export default {
    computed: {
      now() {
        return new Date()
      }
    }
}
</script>

