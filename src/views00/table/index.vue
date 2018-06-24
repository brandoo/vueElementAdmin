<template>
    <div class="app-container calendar-list-container">
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column prop="password" label="密码"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="createTime" label="创建时间"></el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
  name: 'article-list',
  data() {
    return {
      tableData: [
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' },
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' },
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' },
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' },
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' },
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' },
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' },
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' },
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' },
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' },
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' },
        { name: '陆荣泽', email: '1946755280@qq.com', password: '2145255', address: '广州市越秀区', createTime: '2018-06-17' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
