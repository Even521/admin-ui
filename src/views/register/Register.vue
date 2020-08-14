<template>
    <div>
        <label>手机号</label>
        <input v-model="userRequest.mobile" placeholder="手机号" ><br><br>
        <label>用户名字</label>
        <input v-model="userRequest.username" placeholder="用户名称"><br><br>
        <label>密码</label>
        <input v-model="userRequest.password" type="password" placeholder="输入密码"><br><br>
        <label>重复输入密码</label>
        <input  v-model="rePassword" type="password" placeholder="重复输入密码"><br><br>
        <button @click="registerSubmit">注册</button>
    </div>
</template>

<script>
    import {reactive,ref} from 'vue'
    import {register} from './../../api/api'
    export default {
        name: "Register",
        setup(){
            const rePassword=ref('');
            const userRequest=reactive({
                mobile:'',
                username:'',
                password:''
            });
            //console.log(1111111111);
            /**
             * 注册提交
             * @returns {Promise<void>}
             */
            console.log(userRequest)
           const  registerSubmit =async ()=>{
                // if (rePassword.value!=userRequest.password){
                //     alert("密码不一直");
                // }
                const data=register(userRequest);
                console.log(data)
            }

            return {userRequest,registerSubmit};
        }
    }
</script>

<style scoped>

</style>