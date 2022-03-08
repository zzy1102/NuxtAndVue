<template>
  <div>
    index页面
    <nuxt-link to="/home">goHome</nuxt-link>
    <el-button @click="setStore">点击</el-button>
    {{counter}}
    <!-- <Zujian :url='ZujianData.url'
            :title='ZujianData.title'
            :text='ZujianData.text' /> -->

    <!-- 
      注意服务端和客户端区别：
        接口区分、cookie区分、store区分、 
      element oading封装  主题切换

    -->
  </div>
</template>

<script>
import Zujian from "@/components/ceshi/zujian.vue"
import changeCookie from "@/static/js/changeCookie";
export default {
  components: {
    Zujian
  },
  data () {
    return {
      ZujianData: {
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13796084222%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648804539&t=0adab5d73ecab3e3fc02c9563f74e532',
        title: "这个是网路图片",
        text: "胡桃"
      },
      process: '',
    }
  },
  mounted () {
    // this.getqueryById()
    // this.setCookie()
    // this.putedit()
    // this.getStore()
  },
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    getqueryById () {
      this.$api.demoApi.getqueryById({})
        .then((res) => {
          console.log('res', res)
        })
    },
    putedit () {
      let data = {
        "detail": { "name": "4444485566633" },
        "id": "cad182ab6ca1dcd1539a9ede1fb6feef"
      }
      this.$api.demoApi.putedit(data)
        .then((res) => {
          console.log('res', res)
        })
    },
    setCookie () {
      changeCookie.setCookie("tenant-id", 'd59de7b24a9f11eca01000163e144cbe,6b9e1a501eb402473e306eb89db59804');
      changeCookie.setCookie("X-Access-Token", 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NDc4MzAwNzAsInVzZXJuYW1lIjoiYWRtaW4ifQ.lLfETxxlSRX2v9pnuqMWDctt92t1nRMFSW3e4SzaDkg');
    },
    getStore () {
      this.counter = this.$store.state.counter
    },
    setStore () {
      this.$store.commit("add", 2)
      this.$store.dispatch('getData', 3)
    }
  }
}

</script>
