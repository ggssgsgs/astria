<template>
    <div>
        <input v-model="userForm.username" @keyup.delete="keydelete" @keyup.tab="keyenter1" @keyup.enter="keyenter1"  placeholder="帳號"/>
        <br/>
        <input type="password" v-model="userForm.password" @keyup.delete="keydelete" @keyup.tab="keyenter1" @keyup.enter="keyenter1" @blur="keyenter1" placeholder="密碼"/>
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