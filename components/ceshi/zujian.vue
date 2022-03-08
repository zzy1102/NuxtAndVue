<template>
  <div>
    <div>title</div>
    <img class="img"
         :src="url"
         alt=""
         srcset="">
    <div>text</div>
    <el-button>哈哈哈</el-button>
    <div>这个是本地图片</div>
    <img class="img"
         src="/images/雷神.jfif"
         alt=""
         srcset="">
  </div>
</template>

<script>
export default {
  name: 'Zujian',
  props: ["url", "title", "text"]
}
</script>

<style >
.img {
  width: 100px;
}
</style>


