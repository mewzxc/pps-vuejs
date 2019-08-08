<template>
    <div>
        <h1 class="title">Navbar</h1>
            <RouterLink to="/">One</RouterLink>
            {{ '   |   ' }}
            <RouterLink to="/about">Two</RouterLink>
            {{ '   |   ' }}
            <RouterLink to="/contact">Three</RouterLink>
            {{ '   |   ' }}
            <RouterLink to="/user">User</RouterLink>
            {{ '   |   ' }}
            <RouterLink to="/form">PersonFrom</RouterLink>
            {{ '   |   ' }}
            <RouterLink to="/nested">Nested</RouterLink>
            {{ '   |   ' }}
            <RouterLink to="/Vuex">Vuex</RouterLink>
            {{ '      ' }}
            User: {{ $store.getters.userCount}}
            {{ '   |   ' }}
            <RouterLink to="/Chart">Chart</RouterLink>

    </div>
</template>

<script>
export default {
    
}
</script>

