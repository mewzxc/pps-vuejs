<template>
    <div>
        <h1 class="title">Vuex</h1>
        <!-- <button @click="$store.dispatch('actionGetUsers')" class="button">Get User</button>
        <pre v-if="$store.state.waiting">Please Wait...</pre>
        <pre v-if="!$store.state.waiting">{{ $store.state.users }}</pre> -->

        <pre>{{ $store.state.user.users }}</pre>
        <p>Count: {{ $store.getters.userCount }}</p>
        <button @click="$store.commit('foo')" class="button">Foo</button>
    </div>
</template>

<script>
export default {

}
</script>
