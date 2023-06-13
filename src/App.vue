<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script setup>

import { provide, ref } from 'vue';
// import AsideCom from './components/AsideCom.vue';
// import HeadCom from './components/HeadCom.vue';
// import router from './router/router';

// const open =()=>{
//   router.push({name:'register'});
// };

// sessionStorage.setItem('flag',0);
// console.log(sessionStorage.getItem('flag'));

const hasLogin = ref(true);
const changeHasLogin = value => hasLogin.value = value;
provide('hasLogin', {
  hasLogin,
  changeHasLogin
});

console.log(1);
// import LoginIn from './components/LoginIn.vue';

// import { ref } from 'vue';

// const props = defineProps(['IsLogin']);
// console.log(props.IsLogin);
// const IsLogin = ref(true);

// defineProps([IsLogin]);

</script>


<style>

</style>
