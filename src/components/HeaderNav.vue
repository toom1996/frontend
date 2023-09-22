<template>
    <nav class="container mx-auto flex flex-row justify-between py-5 border-b-4">
        <a class="logo text-2xl" href="/">YEN</a>
        <ul class="flex flex-row">
            <li v-for="link in navList" :key="link.link" class=" text-lg px-3">
                <a :href="link.link">{{ link.text }}</a>
            </li>
        </ul>
    </nav>
    <button @click="increment">
        {{ count }}
    </button>
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