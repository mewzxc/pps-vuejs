<template>
    <div>
        <h1 class="title">User</h1>
        <button @click="getUsers" class="button">Get Users</button>
        <!-- <p v-for="each in users" :key="each.id">{{ each.name }}</p> -->
        <table class="table">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website..</th>
            </tr>
            <tr v-for="each in users" :key="each.id">
                <td><RouterLink :to="'./user/' + each.id">{{ each.name }}</RouterLink></td>
                <td>{{ each.email }}</td>
                <td>{{ each.phone }}</td>
                <td>{{ each.website }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import { METHODS } from 'http';

const url = 'https://jsonplaceholder.typicode.com/users'

export default {
    data() {
        return {
            users: []
        }
    },
    methods: {
        getUsers() {
            axios.get(url).then(res => {
                console.log(res.data)
                this.users = res.data
            })
            console.log('OK')
        }
    }
}
</script>
