<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <AsideCom />
      </el-aside>
      <el-container>
        <el-header class="header">
          <div>你好,{{ $route.params.usersId }}</div>
          <el-button class="quit" @click="quitLogin">退出登录</el-button>
          <HeadCom />
        </el-header>
        <el-main>
          <!-- <router-link to=/manage/home>跳转到</router-link> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script setup>
// import { inject } from 'vue';
import AsideCom from '../components/AsideCom.vue';
import HeadCom from '../components/HeadCom.vue';
// import MainCom from '../components/MainCom.vue';
import router from '../router/router';

// const hasLoginHandle = inject('hasLogin');
// console.log('----home-----', hasLoginHandle.hasLogin.value);

const quitLogin = () => {
  sessionStorage.setItem('flag', 0);
  // console.log(sessionStorage.getItem('flag'));
  router.push('/login');
};
</script>

<style>
.header {
  border: 1px red solid;
}

.aside {
  width: 225px;
  background: #545c64;
  height: 100vh;
}

/* .common-layout{
  display: flex;
  border: 1px solid red;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
} */
.quit {
  float: right;
}
</style>