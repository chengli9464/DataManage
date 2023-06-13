<template>
  <div>
    <el-menu background-color="#545c64" text-color="#ffffff" active-text-color="red">
      <el-menu-item index="1" @click="homeOpen">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title >
          <span>添加游戏</span>
        </template>
        <el-menu-item index="2-1" @click="saleOpen">已发售游戏</el-menu-item>
        <el-menu-item index="2-2" @click="unsaleOpen">未发售游戏</el-menu-item>
    </el-sub-menu>
      <el-sub-menu index="3">
        <template #title >
          <span>游戏列表</span>
        </template>
        <el-menu-item index="3-1" @click="NintendoOpen">任天堂游戏</el-menu-item>
        <el-menu-item index="3-2" @click="SonyOpen">索尼游戏</el-menu-item>
        <el-menu-item index="3-3" @click="MicrosoftOpen">微软游戏</el-menu-item>
        <el-menu-item index="3-4" @click="OtherOpen">其他游戏</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="4">
      <template #title >
          <span>游戏详情</span>
        </template>
        <el-menu-item index="4-1">网络游戏</el-menu-item>
        <el-menu-item index="4-2">主机游戏</el-menu-item>
        <el-menu-item index="4-3">手机游戏</el-menu-item>
        <el-menu-item index="4-4">网页游戏</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="5">
        <template #title >
          <span>设置</span>
        </template>
        <el-menu-item index="5-1">用户设置</el-menu-item>
        <el-menu-item index="5-2">管理员设置</el-menu-item>
    </el-sub-menu>
      <el-menu-item index="6">其他</el-menu-item>
    </el-menu>
  </div>
</template>


<script setup>
import router from '../router/router';
const homeOpen = () =>{
  // console.log('222');
  router.push('/manage/home');
};
const unsaleOpen = () =>{
  router.push('/manage/add/unsale');
};
const saleOpen = () =>{
  router.push('/manage/add/sale');
};
const NintendoOpen = () =>{
  router.push('/manage/list/Nintendo');
};
const MicrosoftOpen = () =>{
  router.push('/manage/list/Microsoft');
};
const SonyOpen = () =>{
  router.push('/manage/list/Sony');
};
const OtherOpen = () =>{
  router.push('/manage/list/Other');
};
</script>
<style>

</style>