<template>
  <div class="box">
    <h2 class="title">Two: {{ foo }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    foo: {
      required: true,
    }
  }
}
</script>