<template>
    <div class="login-code">
        <input v-model="userForm.password"  placeholder="請輸入密碼"/>
        <br/>
        <input v-model="userForm.repassword" placeholder="請重新輸入密碼" type="password"/>
    </div>
</template>

<script>

export default {
    name: 'LoginByCode',
    data(){
        return{
            userForm:{
                 password: '',
                 repassword: '',
                 
            }

        }
    },
}
</script>

<style scoped>
.login-code {
    position:relative;
}
</style>