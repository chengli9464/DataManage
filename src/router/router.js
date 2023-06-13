import { createRouter, createWebHistory } from 'vue-router';
// import { inject } from 'vue';
import pageLogin from '../pages/pageLogin.vue';
import pageManage from '../pages/pageManage.vue';
import pageRegister from '../pages/pageRegister.vue';
import pageMainhome from '../pages/pageMainhome.vue';
import pageNotFound from '../pages/pageNotFound.vue';
import pageGameUnsale from '../pages/gameAdd/pageGameUnsale.vue';
import pageGameSale from '../pages/gameAdd/pageGameSale.vue';
import pageMicrosoft from '../pages/gameList/pageMicrosoft.vue';
import pageNintendo from '../pages/gameList/pageNintendo.vue';
import pageSony from '../pages/gameList/pageSony.vue';
import pageOther from '../pages/gameList/pageOther.vue';



// import element from '../pages/element.vue';

// const loginEnter = inject('hasLogin');

//定义routes路由的集合，数组类型
const routes = [
  {
    path: '/user',
    component: pageManage, 
  },

  //单个路由均为对象类型，path代表的是路径，component代表组件
  // { path: '/page1', component: page1 },
  // { path: '/page2', component: page2 },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    component: pageLogin,
  },
  {
    // path: '/manage/:usersId?',
    path: '/manage/',
    component: pageManage,
    props: true,
    beforeEnter:(to,from,next) =>{
      if (sessionStorage.getItem('flag') === '1') {
        next();
        // sessionStorage.getItem('flag',0);
      }
      else{
        router.push('/login');
      }
    },
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'home',
        component: pageMainhome,
      },
      {
        path: 'add',
        component:null,
        children: [
          {
            path: 'unsale',
            component: pageGameUnsale,
          },
          {
            path: 'sale',
            component: pageGameSale,
          }
        ]
      },
      {
        path: 'list',
        children:[
          {
            path: 'Nintendo',
            component:pageNintendo
          },
          {
            path: 'Microsoft',
            component:pageMicrosoft
          },
          {
            path: 'Sony',
            component:pageSony
          },
          {
            path: 'Other',
            component:pageOther
          }
        ]
      }
    ],

  },
  { path: '/register', 
    name:'register',
    components: { pageRegister }
  },
  { path: '/:path(.*)', component: pageNotFound },
  // { path: '/element', component: element}
];

//实例化VueRouter并将routes添加进去
const router = createRouter({
  history: createWebHistory(),
  routes,
});



//抛出这个这个实例对象方便外部读取以及访问
export default router;
