<template>
    <div>
        <h1 class="title">Person Form</h1>

        <div class="field">
            First Name
            <input 
                v-validate="'required|min:3'"
                v-model="person.firstName" 
                name="firstName" type="text" 
                :class="className('firstName')"
            />
            <p class="help is-danger">{{ errors.first('firstName') }}</p>
        </div>

        <div class="field">
            Last Name
            <input v-model="person.lastName" name="lastName" type="text" class="input">
        </div>

        <pre>{{ errors }}</pre>
    </div>
</template>

<script>
export default {
    methods: {
        className(field) {
            // this.errors.has(field)
            return this.errors.has(field) ? 'input is-danger animated bounce' : 'input'
        }
    },
    data() {
        return {
            person: {}
        }
    }
}
</script>
