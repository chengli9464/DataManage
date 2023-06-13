<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <p>{{msg}}</p>
  <p>{{ reverseMsg() }}</p>
  <p>{{ computerMsg }}</p>
  <!-- <button :disabled="isButtonDisabled">Button</button>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button >Add</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button> -->    

  
  <el-container class="layout-container-demo" style="height: 500px">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1', '3']">
          <template v-for="menu in menusData">
            <template v-for="subMenu in menu">
              <el-sub-menu :index="subMenu.key">
                <template #title>
                  <el-icon>
                    <message /> </el-icon
                  >{{ subMenu.title }}
                </template>
                <el-menu-item-group v-for="groups in subMenu.group">
                  <template #title>{{ groups.title }}</template>
                  <template v-for="group in groups.subMenu">
                    <el-menu-item :index="group.key">{{ group.title }}</el-menu-item>
                  </template>
                </el-menu-item-group>
              </el-sub-menu>
            </template>
          </template>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>橙梨</span>
        </div>
      </el-header>

      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="数据" width="140" />
            <el-table-column prop="name" label="名字" width="120" />
            <el-table-column prop="address" label="地址" width="120" />
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { menus } from './data/menu';
import { computed, ref } from 'vue';
// import { router } from './router/router';
// import func from '../vue-temp/vue-editor-bridge';
const menusData = ref(menus);

const msg = ref('hello');
function reverseMsg(){
  return msg.value.split('').reverse().join('');
}
const computerMsg =  computed(() =>{ return msg.value.split('').reverse().join('');
});

// const isButtonDisabled = ref(false);

</script>
<style scoped>
.done {
  text-decoration: line-through;
}

.layout-container-demo {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}

.layout-container-demo .el-menu {
  border-right: none;
}

.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>

