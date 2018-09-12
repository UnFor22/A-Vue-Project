<template>
    <div>
      <h1>详情页</h1>
      <h2>动态路由ID{{$route.params.id}}</h2>

    </div>

</template>

<script>
    export default {
        name: "about",
        created(){
          console.log(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>
