<template>
  <div class="hello-world">
    Hello, world!
    {{ msg }}
  </div>
</template>
<script lang="ts"></script>

<script lang="ts" setup>
import { reactive, shallowRef } from 'vue'

const props = defineProps({
  msg: {
    type: String,
    default: 'msg',
  },
})

const root = shallowRef<HTMLDivElement>()

const state = reactive({
  fixed: false,
  height: 0, // height of root
  width: 0, // width of root
  scrollTop: 0, // scrollTop of documentElement
  clientHeight: 0, // clientHeight of documentElement
  transform: 0,
})
</script>

<style scoped>
.hello-world {
  color: #1890ff;
}
</style>
