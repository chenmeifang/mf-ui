<template>

  <!-- <button class="mf-button"> 类名不能写死了，要动态控制类名-->
    <button
      class="mf-button"
      :class="[`mf-button--${type}`,
                {'is-plain': plain,
                'is-round': round,
                'is-circle': circle
            }]"
      @click="handleClick">
      <!-- 直接放slot没办法控制样式 -->
      <!-- <slot>
      </slot> -->
      <i v-if="icon" :class="icon"></i>
      <!-- 如果没有传入任何的内容 当我们没有传入插槽的时候-->
      <span v-if="$slots.default">
          <slot>
          </slot>
      </span>
  </button>
</template>

<script>
export default {
  name: 'MfButton',
  // 子组件接收父组件传过来的数据
  // 封装一个通用的组件，会对props做一个约束，进行类型校验
  // props: ['type'],
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      console.log('e:', e)
      // 往父组件派发了一个click事件
      // 在子组件中需要向父组件传值处使用this.$emit("function",param);
      // 其中function为父组件定义函数，param为需要传递参数
      // 这个地方也没有理清楚！！！！！
      // this.$emit('func', e)
      this.$emit('click')
    }
  },
  created () {
    console.log(this.type)
    console.log('插槽：', this.$slots) // 查看所有插槽
  }
}
</script>

<style lang="scss">
.mf-button{
    display: inline-block;
    line-height: 1;
    /* 文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。 */
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}
.mf-button--primary{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
        color: #66b1ff;
        border-color: #66b1ff;
        background-color: #fff;
    }
}
.mf-button--success{
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
        color: #85ce61;
        border-color: #85ce61;
        background-color: #fff;
    }
}
.mf-button--info{
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
        color: #a6a9ad;
        border-color: #a6a9ad;
        background-color: #fff;
    }
}
.mf-button--warning{
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
        color: #a6a9ad;
        border-color: #a6a9ad;
        background-color: #fff;
    }
}
.mf-button--danger{
    color: #fff;
    background-color: red;
    border-color: red;
    &:hover,
    &:focus {
        color: #a6a9ad;
        border-color: #a6a9ad;
        background-color: #fff;
    }
}
// 朴素按钮
.mf-button.is-plain{
    &:hover,
    &:focus {
        color: #fff;
        border-color: #409eff;
        background-color: #409eff;
    }
}
.mf-button--primary.is-plain{
    color: #409fff;
    background-color: #ecf5ff;
    border-color: #b3d8ff;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #409eff;
        background-color: #409eff;
    }
}
.mf-button--success.is-plain{
    color: #67c23a;
    background-color: #f0f9eb;
    border-color: #c2e7b8;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #67c23a;
        background-color: #67c23a;
    }
}
.mf-button--info.is-plain{
    color: #909399;
    background-color: #f4f4f5;
    border-color: #d3d4d6;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #909399;
        background-color: #909399;
    }
}
.mf-button--warning.is-plain{
    color: #e6a23c;
    background-color: #fdf6ec;
    border-color: #f5dab1;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #e6a23c;
        background-color: #e6a23c;
    }
}
.mf-button--danger.is-plain{
    color: #f56c6c;
    background-color: #fef0f0;
    border-color: #fbc4c4;
    &:hover,
    &:focus {
        color: #fff;
        border-color: #f56c6c;
        background-color: #f56c6c;
    }
}
.mf-button.is-round{
    border-radius: 20px;
    padding: 12px 23px;
}
.mf-button.is-circle{
    border-radius: 50%;
    padding: 12px;
}
// 看不太懂这个样式
.mf-button [class*=mf-icon-]+span{
    margin-left: 5px;
}
</style>
