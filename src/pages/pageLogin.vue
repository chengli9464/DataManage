<template>
  <div id="background" @keyup.enter="login">
    <div class="loginbody">
      <div class="border_corner border_corner_left_top"></div>
      <div class="border_corner border_corner_right_top"></div>
      <div class="border_corner border_corner_left_bottom"></div>
      <div class="border_corner border_corner_right_bottom"></div>
      <div class="input" >
        <div class="logo">
          <h1 class="h1">登录</h1>
        </div>
        <div class="name">
          <!-- 用户名： -->
          <input v-model="username" type="text" class="user" name="Username" maxlength="16" placeholder="请输入用户名" />
        </div>
        <div class="name">
          <!-- 密&nbsp; &nbsp;码： -->
          <input v-model="password" type="password" class="user" id='pwd' name="Password" maxlength="16" placeholder="请输入密码" />
        </div>
        <div class="name">
          <!-- <el-button class="login_in" :plain="true" @click="open2" @click="login" @keyup.enter="login">立即登录</el-button> -->
          <button class="login_in" @click="login" @keyup.enter="login">立即登录</button>
          <div class="register">
            <span>没有账号？</span>
            <a href="" id="zhuce">立即注册</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, inject, onUpdated } from 'vue';
import { useRouter } from 'vue-router';
// import { ElMessage } from 'element-plus';
// import axios from 'axios';

const hasLoginHandle = inject('hasLogin');
console.log('------login-----', hasLoginHandle.hasLogin.value);
const router = useRouter();
const username = ref('');
const password = ref('');
/* //利用axios
const getUsers_A = async () => {
  const users = await axios.get('http://127.0.0.1:3000/api/v1/users').then(res => res.data);
  return users;
};

onMounted(() => {
  // getUsers();
  getUsers_A();
});

const login = () => {
  axios.post({
    method: 'post',
    url:'http://127.0.0.1:3000/api/v1/login', 
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      name: username.value,
      password: password.value
    } 
  }).then(res => {
    console.log(res);
  });
}; */

// 异步函数 GET得到json
const getUsers = async () => {
  const users = await fetch('http://127.0.0.1:3000/api/v1/users', {
    method: 'GET'
  }).then((res) => res.json());//将json解析成promise对象
  return users;//返回一个promise对象
};

//生命周期 渲染之前
onMounted(() => { 
  // alert('生命周期');
  getUsers();
});

//fetch语法
const login = () => {
  fetch('http://127.0.0.1:3000/api/v1/login', {//请求的url
    method: 'POST',//请求方法POST
    headers: {//请求头
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({//请求体
      name: username.value,
      password: password.value,
      action: 'delete'
    })
  }).then(res => res.json()).then(res => {
    console.log('-----res-----', res);
    
    if (res.code === 200 ) {
      // 登录成功时保存一个登录状态；
      sessionStorage.setItem('flag',1);
      // hasLoginHandle.changeHasLogin(true);
      // alert('登录成功');
      // router.push(`/manage/${username.value}`);
      router.push('/manage/home');
      
    }
    else {
      sessionStorage.setItem('flag',0);
      alert('账号密码错误');
    }
  });
};
// const open2 = () => {
//   ElMessage({
//     message: '登录成功',
//     type: 'success',
//   });
// };

onUpdated(() =>{
  
});

</script>


<style>
/* 登录页面样式 */
body {
  margin: 0;
  padding: 0;
  border: 0
}

/* #loginbody{
  margin: auto auto;
  margin-top: 210px;
  padding: 0 50px 0 50px;
  border-color: blue;
  border-style: solid;
  width: 217px;
  border-radius: 20px;
} */

#app {
  margin: 0;
}

#background {
  display: flex;
  /* border: 1px solid red; */
  background: url(../img/background.png) no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  position: absolute;
}

.loginbody {
  margin: auto;
  vertical-align: middle;
  padding: 0 50px 0 50px;
  border: 1px solid #21a7e1;
  box-shadow: 5px 5px 10px 10px rgba(24, 68, 124, 0.4);
  padding-top: 10px;
  padding-bottom: 50px;
  border-radius: 6px;
  width: 300px;
  position: relative;
  background-color: rgba(10, 163, 245, 0);
  align-self: center;
}

/*四个角框*/
.border_corner {
  z-index: 2500;
  position: absolute;
  width: 19px;
  height: 19px;
  background: rgba(0, 0, 0, 0);
  border: 4px solid #1fa5f1;
}

.border_corner_left_top {
  top: -2px;
  left: -2px;
  border-right: none;
  border-bottom: none;
  border-top-left-radius: 6px;
}

.border_corner_right_top {
  top: -2px;
  right: -2px;
  border-left: none;
  border-bottom: none;
  border-top-right-radius: 6px;
}

.border_corner_left_bottom {
  bottom: -2px;
  left: -2px;
  border-right: none;
  border-top: none;
  border-bottom-left-radius: 6px;
}

.border_corner_right_bottom {
  bottom: -2px;
  right: -2px;
  border-left: none;
  border-top: none;
  border-bottom-right-radius: 6px;
}

.input {
  border: 1px blue;
}

.h1 {
  margin: auto;
  padding: 0;
  font-size: 25px;
  font-weight: bolder;
  text-align: center;
  color: white;
  padding-bottom: 15px;
}

.logo {
  margin-bottom: 30px;
  margin-top: 0px;
}

.name {
  border: 1px red;
  width: 300px;
  height: 50px;
  margin: auto;
}

.user {
  height: 25px;
  width: 200px;
  display: block;
  margin: auto;

}

.login_in {
  display: block;
  margin: auto;
}

button {
  width: 210px;
  background-color: rgb(0, 245, 184, 0);
  height: 35px;
  border-color: #bd5735;
  border-radius: 10px;
  color: rgb(255, 255, 255);
  cursor: pointer;
}

.register {
  margin-top: 15px;
  margin-right: 50px;
  text-align: end;
  font-size: 10px;
  color: white;
}

#zhuce {
  color: antiquewhite;
}
</style>

