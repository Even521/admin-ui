<template>
    <Login/>
    <p>
    <router-link to='/register'>用户注册</router-link>
    </p>
</template>

<script>
    import Login from './login/Login.vue'
    export default {
        name: "index",
        components:{
            Login
        }
    }
</script>

<style scoped>

</style>