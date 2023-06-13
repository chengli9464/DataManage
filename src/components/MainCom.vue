<template>
  <el-main>
    <el-scrollbar>
      <!-- :data="tableData" -->
      <el-table >
        <el-table-column prop="date" label="Date"/>
        <el-table-column prop="name" label="Name"/>
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-scrollbar>
  </el-main>
</template>