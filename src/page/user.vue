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
                <th>Website</th>
                <th>State</th>
            </tr>
            <UserListItem :key="each.id" v-for="each in users" :user="each" />
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import { METHODS } from 'http';
import UserListItem from '@/page/userListItem'

const url = 'https://jsonplaceholder.typicode.com/users'

export default {
    components: {
        UserListItem
    },
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
