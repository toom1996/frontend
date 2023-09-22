<template>
  <div data-controller="nav" class="sticky top-0 z-20"
    data-action="load@window->nav#adjustMenu resize@window->nav#adjustMenu">
    <header id="hbx-header">
      <div class="container px-md md:px-xl">
        <div class="flex">
          <nav class="hidden md:flex w-2/5 md:w-auto md:flex-grow-0 items-center text-base">
            <div id="hamburger-menu" class="cursor-pointer flex items-center w-lg h-lg"
              data-action="click->nav#toggleMenu"><svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"
                class="icon icon-2xl hamburger">
                <use xlink:href="/icomoon/hbx/symbol-defs.svg#icon-ic_navbar-hamburger" height="24" width="24"></use>
              </svg></div>
          </nav><a href="https://hbx.com/cn?no-direct=1" id="site-logo"
            class="flex flex-grow md:flex-grow-0 md:justify-center md:ml-lg md:mr-sm items-center"><svg height="25"
              width="70" xmlns="http://www.w3.org/2000/svg" class="inline">
              <image href="https://hbx.com/build/shop/images/hbx/logo.d9933030.svg" height="25" width="70" />
            </svg></a>
          <nav id="section-nav" class="hidden md:flex flex-grow flex-nowrap items-stretch text-base" itemscope="itemscope"
            itemtype="http://www.schema.org/SiteNavigationElement"><a href="https://hbx.com/cn/men" id="nav-men"
              class="relative px-sm flex items-center "
              data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" itemprop="url"
              data-nav-target="hooks links" data-dropdown="men" data-level1-value="men"><span
                itemprop="name">男装</span></a><a href="https://hbx.com/cn/women" id="nav-women"
              class="relative px-sm flex items-center "
              data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" itemprop="url"
              data-nav-target="hooks links" data-dropdown="women" data-level1-value="women"><span
                itemprop="name">女装</span></a><a href="https://hbx.com/cn/life" id="nav-life"
              class="relative px-sm flex items-center "
              data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" itemprop="url"
              data-nav-target="hooks links" data-dropdown="life" data-level1-value="life"><span
                itemprop="name">生活</span></a><a href="https://hbx.com/cn/archives" id="nav-archives"
              class="relative px-sm flex items-center "
              data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" itemprop="url"
              data-nav-target="hooks links" data-dropdown="archives" data-level1-value="archives"><span
                itemprop="name">中古逸品</span></a><a href="https://hbx.com/cn/drops" id="nav-drops"
              data-action="click->nav#trackTopNavigation" itemprop="url" class="relative px-sm flex items-center "><span
                itemprop="name">特别发售</span></a><a href="https://hbx.com/cn/sale" id="nav-sale"
              class="relative px-sm flex items-center "
              data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" itemprop="url"
              data-nav-target="hooks links" data-dropdown="sale" data-level1-value="sale"><span
                itemprop="name">折扣商品</span></a><a href="https://hbx.com/cn/journal" id="nav-journal"
              class="relative px-sm flex items-center active"
              data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" itemprop="url"
              data-nav-target="hooks links" data-dropdown="journal" data-level1-value="journal"><span
                itemprop="name">文章</span></a><a href="#" class="relative px-sm flex items-center hidden" id="nav-more"
              data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" data-nav-target="hooks links"
              data-dropdown="more" data-level1-value="more"><span>更多</span></a>
          </nav>
          <nav id="section-user" class="w-2/5 md:w-auto flex flex-grow-0 flex-nowrap justify-end items-center">
            <a href="https://hbx.com/cn/settings" class="ml-lg hidden xl:flex items-center"
              data-action="mouseover->nav#showTooltip mouseleave->nav#hideTooltip" data-nav-target="hooks"
              data-dropdown="locale-settings">
              <span id="nav-locale-setting-text" class="flex items-center">
                <span class="ml-xs text-base ">toom1996</span>
              </span>
            </a>
            <a href="https://hbx.com/cn/login" class="ml-2 hidden md:flex items-center">
              <span class="s-top-img-wrapper">
                <img src="https://himg.bdimg.com/sys/portraitn/item/public.1.a74a6ba3.4oIZIrLuTb2PPuIVIAfn6A">
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
        </div>
      </div>
    </header>
    <div class="bg-white">
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue';
import { ref, onMounted } from 'vue'
import axios from "axios";
const count = ref(0)

function increment() {
  count.value++
}

const props = defineProps({
  titleName: String
});

onMounted(() => {
  console.log(88888)


  // 向给定ID的用户发起请求
  axios.get('/user?ID=12345')
    .then(function (response) {
      // 处理成功情况
      console.log(response);
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error);
    })
    .then(function () {
      // 总是会执行
    });
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