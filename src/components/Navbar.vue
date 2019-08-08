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

    </div>
</template>

<script>
export default {
    
}
</script>

