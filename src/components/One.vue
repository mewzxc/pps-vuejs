<template>
  <div class="box">
    <h2 class="title">One: {{ doubleCounter }}</h2>
    <Two :foo="doubleCounter" />
  </div>
</template>

<script>
import Two from '@/components/Two'
export default {
  components: {
    Two
  },
  props: ['doubleCounter']
}
</script>
