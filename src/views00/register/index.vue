<template>
  <div class="createPost-container">
    <el-form ref="form" :model="form" :rules="rules" class="form-container">
      <sticky class="sub-navbar">
        <template>
          <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="onSubmit">保存</el-button>
          <el-button v-loading="loading" type="warning" @click.native.prevent="$router.go(-1)">取消</el-button>
        </template>
      </sticky>
      <el-row>
        <el-col :span="8">
          <div class="createPost-main-container">
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="form.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="userPassword">
              <el-input v-model="form.userPassword"></el-input>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
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
        userName: '',
        userPassword: ''
      },
      rules: {
        userName: [{ required: true, message: '请填写用户名' }],
        userPassword: [{ required: true, message: '请填写密码' }]
      },
      loading: false
    }
  },
  mounted: function() {
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          registerUser(this.form).then(function(res) {
            console.log(res)
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
