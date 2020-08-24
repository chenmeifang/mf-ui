<template>
    <transition name="dialog-fade">
        <!-- self代表只有点击自己才触发，点击子元素不触发 -->
        <div class="mf-dialog__wrapper" v-show="visible" @click.self="handleClose">
            <!-- 用v-show，不用v-if 因为这个dialog是要频繁显示隐藏的 -->
            <div class="mf-dialog" :style="{width: width, marginTop: top}">
                <div class="mf-dialog__header">
                    <!-- 原来的写法1：<span class="mf-dialog__title">提示</span> -->
                    <!-- 原来的写法2：<span class="mf-dialog__title">{{title}}</span> -->
                    <!-- 写法2只是动态的控制了它的文本；有的时候我会希望整个标题都不显示一个span，想让标题显示成一个h3或者h4，那怎么办呢？ -->
                    <!-- 写法3: 具名插槽 -->
                    <!-- 如果传了slot，那span就不生成；如果不传slot，span要生成 -->
                    <slot name="title">
                        <!-- 为插槽设置一个具体的后备内容 -->
                        <span class="mf-dialog__title">{{title}}</span>
                    </slot>
                    <button class="mf-dialog__headerbtn" @click="handleClose">
                        <i class="mf-icon-close"></i>
                    </button>
                </div>
                <!--  -->
                <div class="mf-dialog__body">
                    <!-- <span>这是一段信息</span> -->
                    <!-- 默认插槽 -->
                    <slot></slot>
                </div>
                <!--  -->
                <div class="mf-dialog__footer" v-if="$slots.footer">
                    <!-- 有些dialog有按钮，有些dialog没按钮；所以就不能把两个按钮写死在这里-->
                    <!-- <mf-button>取消</mf-button>
                    <mf-button type="primary">确定</mf-button> -->
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'MfDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      // 希望在dialog子组件里面触发修改父组件的属性
      this.$emit('update:visible', false) // 子组件触发父组件里面的事件
      console.log('kkkk')
    }
  }
}
</script>

<style lang="scss">
.mf-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, .5);
    .mf-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
        box-sizing: border-box;
        width: 30%;
        &__header {
            padding: 20px 20px 10px;
            .mf-dialog__title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }
            .mf-dialog__headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;
                .mf-icon-close {
                    color: #909399;
                }
            }
        }
        &__body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }
        &__footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;
            .mf-button:first-child {
                margin-right: 20px;
            }
        }
    }
}
.dialog-fade-enter-active{
    animation: fade 0.3s;
}
.dialog-fade-leave-active{
    animation: fade 0.3s reverse;
}
@keyframes fade{
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>
