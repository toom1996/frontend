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
                <li>
                    <a href="/3d" aria-current="false" style="text-decoration: none;">3D<span
                            class="icon icon-outline-cheveron-right"></span></a>
                </li>
                <li>
                    <a href="/audio" aria-current="false" style="text-decoration: none;">声音的<span
                            class="icon icon-outline-cheveron-right"></span></a>
                </li>
                <li>
                    <a href="/business-and-money" aria-current="false" style="text-decoration: none;">商业与金钱<span
                            class="icon icon-outline-cheveron-right"></span></a>
                </li>
                <li>
                    <a href="/comics-and-graphic-novels" aria-current="false" style="text-decoration: none;">漫画与图画小说</a>
                </li>
                <li>
                    <a href="/design" aria-current="false" style="text-decoration: none;">设计<span
                            class="icon icon-outline-cheveron-right"></span></a>
                </li>
                <li>
                    <a href="/drawing-and-painting" aria-current="false" style="text-decoration: none;">绘图和绘画<span
                            class="icon icon-outline-cheveron-right"></span></a>
                </li>
                <li>
                    <a href="/education" aria-current="false" style="text-decoration: none;">教育<span
                            class="icon icon-outline-cheveron-right"></span></a>
                </li>
                <li>
                    <a href="/fiction-books" aria-current="false" style="text-decoration: none;">小说书籍<span
                            class="icon icon-outline-cheveron-right"></span></a>
                </li>
                <li>
                    <a href="/films" aria-current="false" style="text-decoration: none;">电影<span
                            class="icon icon-outline-cheveron-right"></span></a>
                </li>
                <li>
                    <a href="/fitness-and-health" aria-current="false" style="text-decoration: none;">健身与健康<span
                            class="icon icon-outline-cheveron-right"></span></a>
                </li>
            </menu>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import mitter from '@/utils/eventBus'

const msg = ref('Hello, world!')

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
    font-size: .875rem;
    line-height: 1.3;
    --line-height: 1.1375rem;
    padding-left: 1rem;
    margin-top: .75rem
}
</style>