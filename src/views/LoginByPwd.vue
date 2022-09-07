<template>
    <div>
        <input v-model="userForm.username" @keyup.delete="keydelete" @keyup.tab="keyenter1" @keyup.enter="keyenter1" placeholder="請輸入帳號"/>
        <br/>
        <input v-model="userForm.password" @keyup.delete="keydelete" @keyup.tab="keyenter1" @keyup.enter="keyenter1" @blur="keyenter1" placeholder="請輸入密碼"/>
    </div>
</template>

<script>
export default {
    name: 'LoginByPwd',
   data(){
    return{
         userForm:{
                 username: '',
                 password: '',
                 
            },
    }
   },
    methods: {
       keyenter1(){
            this.$emit('checked',this.userForm)
            
        },
        keydelete(){
            this.$emit('deleted',this.userForm)
        },
       
    },
}
</script>