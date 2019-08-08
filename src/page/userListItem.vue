<template>
    <tr>
        <td><RouterLink :to="'./user/' + user.id">{{ user.name }}</RouterLink></td>
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.website }}</td>
        <td>{{ counter }}</td>
    </tr>
</template>

<script>
import { mapState } from 'vuex'

// console.log({...mapState(['counter'])})
// mapState({['counter']})

export default {
    props: {
        user: {
            requred: true
        }
    },
    // computed: {
    //     ...mapState(['counter'])
    // }
    computed: mapState(['counter', 'foo'])
}
</script>
