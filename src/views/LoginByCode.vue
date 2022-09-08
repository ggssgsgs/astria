<template>
    <div class="login-code">
        <input v-model="userForm.password" @keyup.delete="keydelete" @keyup.tab="keyenter1" @keyup.enter="keyenter1" placeholder="請輸入密碼"/>
        <br/>
        <input v-model="userForm.repassword" @keyup.delete="keydelete" @keyup.tab="keyenter1" @keyup.enter="keyenter1" @blur="keyenter1" placeholder="請重新輸入密碼"/>
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
    methods: {
        keyenter1(){
            this.$emit('pchecked',this.userForm)
            
        },
        keydelete(){
            this.$emit('pdeleted',this.userForm)
        },
        
    },
}
</script>

<style scoped>
.login-code {
    position:relative;
}
</style>