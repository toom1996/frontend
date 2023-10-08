<template>
   <nav id="section-user" class="w-2/5 md:w-auto flex flex-grow-0 flex-nowrap justify-end items-center">
    <a v-if="state.isLogin === true" href="https://hbx.com/cn/settings" class="ml-lg hidden xl:flex items-center"
      data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" data-nav-target="hooks"
      data-dropdown="locale-settings">
      <span id="nav-locale-setting-text" class="flex items-center">
        <span class="ml-xs text-base ">{{ state.login.username }}</span>
      </span>
    </a>
    <a v-if="state.isLogin === true" href="https://hbx.com/cn/login" class="ml-2 hidden md:flex items-center">
      <span class="s-top-img-wrapper">
        <img src="https://himg.bdimg.com/sys/portraitn/item/public.1.a74a6ba3.4oIZIrLuTb2PPuIVIAfn6A">
      </span>
    </a>
    <a v-if="state.isLogin === false" :href="`${state.baseUrl}/login`" class="ml-lg hidden xl:flex items-center"
      data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" data-nav-target="hooks"
      data-dropdown="locale-settings">
      <span id="nav-locale-setting-text" class="flex items-center">
        <span class="ml-xs text-base ">登陆/注册</span>
      </span>
    </a>
    <a href="https://hbx.com/cn/faq" class="ml-4 hidden lg:flex items-center"
      data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" data-nav-target="hooks"
      data-dropdown="help">
      <span id="nav-help-text">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
        </svg>
      </span>
    </a>
    <a href="https://hbx.com/cn/cart" class="ml-4 flex items-center whitespace-nowrap"
      data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" data-nav-target="hooks"
      data-dropdown="cart">
      <span id="nav-bag-text" class="relative">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
        <span
          class="absolute top-1/2 left-1/2 leading-dense transform -translate-x-1/2 -translate-y-1/2 mt-px pt-px"
          style="font-size: 10px;"><span>2</span>
        </span>
      </span>
    </a>
    <div class="ml-md md:hidden flex items-center whitespace-nowrap">
      <div id="hamburger-menu" class="cursor-pointer flex items-center w-lg h-lg"
        data-action="click->nav#toggleMenu"><svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"
          class="icon icon-2xl hamburger">
          <use xlink:href="/icomoon/hbx/symbol-defs.svg#icon-ic_navbar-hamburger" height="24" width="24"></use>
        </svg></div>
    </div>
  </nav>
</template>

<script setup>
// import { ref } from 'vue';
import { ref, onMounted, reactive } from 'vue'
import axios from "axios";
const count = ref(0)
const state = reactive({
  isLogin: false,
  baseUrl: 'http://localhost:4321',
  login: { // login state
    username: null
  },
})

function increment() {
  count.value++
}


function setLoginState()
{
  state.login.username = localStorage.getItem('username')
  console.log(state.login.username)
  if (state.login.username) {
    state.isLogin = true
  }
}

const props = defineProps({
  titleName: String
});

onMounted(() => {
  setLoginState()
  console.log(88888)
  console.log(document.cookie)


  // 向给定ID的用户发起请求
  // axios.post('http://localhost:8080/api/v1/get-user-info')
  //   .then(function (response) {
  //     // 处理成功情况
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // 处理错误情况
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // 总是会执行
  //   });
})
const navList = [
  { text: 'ABOUT!!', link: 'about' },
  { text: 'WORK', link: 'work' },
]
</script>
<style>
.s-top-img-wrapper {
    position: relative;
    width: 28px;
    height: 28px;
    border: 2px solid #000000;
    display: inline-block;
    border-radius: 50%
}

.s-top-img-wrapper img {
    padding: 2px;
    margin: auto;
    border-radius: 50%
}
</style>