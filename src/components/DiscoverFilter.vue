<template>
    <div class="filter stack" @click="handleClick">
        <header class="border-b-2 border-solid border-gray-950">
            <div>共计 1234 条</div>
            <div>
                <a role="button">清除!!</a>
            </div>
        </header>
        <div role="navigation" aria-label="类别">
            <menu>
                <li class="py-1" v-for="item, index in filterColumns">
                    <a class="flex" href="/3d" aria-current="false" style="text-decoration: none;">{{ item }}<ChevronRight /></a>
                </li>
            </menu>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import mitter from '@/utils/eventBus'
import  ChevronRight  from '@/icons/ChevronRight.vue'

const filterColumns = ref([
    '3D', '声音的', '商业与金钱', '漫画与图画小说', '设计', '绘图和绘画', '教育', '小说书籍', '电影', '健身与健康'
])

const handleClick = () => {
    console.log(123123213)
    mitter.emit('msg', msg.value)
}
</script>
<style scoped>
.filter>* {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
    justify-content: space-between;
}

.filter {
    display: grid;
    background-color: rgb(var(--white));
    color: var(--black);
    --active-bg: var(--body-bg);
    border: solid 0.0625rem rgb(var(--color) / var(--border-alpha));
    border-radius: 0.25rem;
}

menu {
    font-size: 1.5rem;
    line-height: 1.2;
    --line-height: 1.1375rem;
    padding-left: 1rem;
    margin-top: .75rem
}
</style>