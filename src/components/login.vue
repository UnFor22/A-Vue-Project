<template>
  <div>
    <h1>登录页面</h1>
    <input type="text" v-model="username">
    <br>
    <input type="password" v-model="password">
    <br>
    <button @click="handleSubmit">点击登录</button>
  </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: "login",
        data(){
          return{
            username: '',
            password: ''
          }
        },
        methods:{
          handleSubmit(){
            axios.post('http://localhost:3000/login',{
              username: this.username,
              password: this.password
            }).then(res =>{
              if(res.data.code == 200){
                alert('登录成功')
                this.$router.push('/')
              }else{
                alert('登录失败')
              }
            })
          }

        }

    }
</script>

<style scoped>

</style>
