<template>
  <div id="publish">
    <el-row class="icoding-main_publish">
      <el-col :xs="24" :sm="24" :md="18" :lg="16" class="publish-question">
        <h2 class="el-icon-tickets">发起问题</h2>
        <el-divider></el-divider>
        <el-form :label-position="labelPosition" ref="publishForm" :model="publishForm">
          <el-form-item label="问题标题(简单扼要)">
            <el-input
              v-model="publishForm.title"
              placeholder="问题标题....."
              size="small"
              type="text"
              maxlength="20"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item label="问题补充(必填，请参照右侧提示)">
            <el-input
              v-model="publishForm.description"
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows:5,maxRows:10}"
            ></el-input>
          </el-form-item>
          <el-form-item label="添加标签">
            <el-input
              type="text"
              placeholder="问题标签，以逗号隔开"
              v-model="publishForm.tag"
            ></el-input>
          </el-form-item>
          <el-form-item style="float: right;">
            <el-button type="success" round @click="submit('publishForm')">发布</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="24" :sm="24" :md="6" :lg="8" class="publish-guide">
        <div class="icoding-publish_help">
          <div class="help_head">
            <h3>问题发起指南</h3>
          </div>
          <div class="help_body">
            <p>
              <b>• 问题标题:</b>请用精简的语言描述你发布的问题，不超过25个字
            </p>
          </div>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>

    import {pushQuestion} from 'network/publish'

    export default {
        name: "Publish",
        data() {
            return {
                labelPosition: "top",
                publishForm: {
                    title: '',
                    description: '',
                    tag: ''
                }
            }
        },
        methods: {
            submit(formName) {
                console.log(this.$refs[formName]);
                this.publishForm.userId = this.$store.state.user.id;
                pushQuestion(this.publishForm).then( res => {
                  if (res.data === 'success'){
                      this.$message({message:'问题发布成功',type: 'success'});
                  }
                })
            }

        }

    }
</script>

<style scoped>
  #publish {
    background-color: #ffffff;
    padding: 0 10px;
  }

  .publish-question {
    padding-right: 5px;
  }

  .publish-guide {
    border-left: 1px solid #e6e6e6;
    height: 550px;
    padding-left: 5px;
  }

</style>
