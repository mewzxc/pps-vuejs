<template>
    <div class="box">
        <h1 class="title">Nested : {{ counter }}</h1>
        <!-- <p>
            <button class="button" @click="counter+=1">Update</button>
        </p>
        <One :doubleCounter="counter*2" /> -->
        <Three v-slot="xxx">
            <p>Current Time</p>
            <hr />
            <p>{{ xxx.now }}</p>
        </Three>

        <Three v-slot="xxx">
            <p>{{ xxx.now }}</p>
            <hr />
            <p>Current Time</p>
        </Three>
    </div>
</template>

<script>
import One from '@/components/One'
import Three from '@/components/Three'

export default {
    watch: {
        counter() {
            console.log('OK')
        }
    },
    components: {
        One,
        Three
    },
    data() {
        return {
            counter: 1
        }
    }
}
</script>
