<template>
    <div class="container">
        <!-- 头部组件 -->
        <Header></Header>
        <!-- 中间 -->
        <Main></Main>
        <!-- footer -->
    </div>
</template>
 
 
<script lang='ts' setup>
import Header from '../../components/Header/index.vue'
import Main from './components/Main.vue'
</script>
 
<style scoped lang='less'>
.container {
    background-image: url('./image/longbg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>