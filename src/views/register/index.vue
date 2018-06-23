<template>
  <div class="createPost-container">
    <el-form ref="form" :model="form" :rules="rules" class="form-container">
      <sticky class="sub-navbar">
        <template>
          <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="onSubmit">发布</el-button>
          <el-button v-loading="loading" type="warning">草稿</el-button>
        </template>
      </sticky>
      <div class="createPost-main-container">
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPassword">
          <el-input v-model="form.userPassword"></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import Sticky from '@/components/Sticky' // 粘性header组件
import { registerUser } from '@/api/register'
export default {
  name: 'index',
  components: { Sticky },
  data() {
    return {
      form: {
        userName: '文章标题',
        userPassword: '文章内容'
      },
      rules: {
        userName: [{ required: true }],
        userPassword: [{ required: true }]
      },
      loading: false
    }
  },
  mounted: function() {
  },
  methods: {
    onSubmit() {
      console.log(123)
      registerUser(this.form).then(function(res) {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
