<template>
    <div>
        <label>手机号</label>
        <input v-model="loginRequest.mobile" placeholder="手机号" ><br><br>
        <label>密码</label>
        <input v-model="loginRequest.username" placeholder="密码"><br><br>
        <button @click="loginSubmit">登陆</button>
    </div>
</template>

<script>
    import {reactive,ref} from 'vue'
    import {login} from './../../api/api'
    export default {
        name: "Login",
        setup(){
            const loginRequest=reactive({
                mobile:'',
                username:'',
                password:''
            });
           const loginSubmit=async ()=>{
                await login(loginRequest)
            };
            return {loginRequest,loginSubmit}
        }
    }
</script>

<style scoped>

</style>