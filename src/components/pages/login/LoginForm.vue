<template>
    <div class="">
        <section class="grid gap-8">
            <div class="divider" role="separator">
                <span>或者</span>
            </div>
            <div v-show="state.login.isFail" class="error-indicator danger" role="alert" style="">{{ state.login.errorMessage }}</div>
            <fieldset>
                <legend class="mb-2">
                    <label>电子邮件</label>
                </legend>
                <input v-model="state.form.username" class="required top-level-input" tabindex="1" type="email"/>
            </fieldset>
            <fieldset>
                <legend class="mb-2 w-full">
                    <label class="top-level-label">密码</label>
                    <a class="float-right" href="#">忘记密码了吗？</a>
                </legend>
                <input v-model="state.form.password" class="password required top-level-input" tabindex="2" type="password"/>
            </fieldset>
            <button class="button-primary p-4 hover:bg-pink-400" @click="handleLogin" :disabled="state.login.isLoading">
                <svg v-show="state.login.isLoading" class="animate-spin -ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                    </path>
                </svg>
                登录
            </button>
        </section>
    </div>
</template>
<script setup>
import { ref, onMounted, reactive } from 'vue'
import Cookies from "js-cookie";
import { webAuthLogin } from '@/api/v1'
import { KEY } from 'src/consts';
const state = reactive({
    login: {
        isLoading: false,
        isFail: false,
        errorMessage: '',
    },
    form: {
        username: '',
        password: '',
    }
})

function handleLogin() {
    state.login.isLoading = true
    webAuthLogin(state.form).then(e => {
        if (e.code !== 0) {
            state.login.isFail = true
            state.login.errorMessage = e.msg
            return
        }

        localStorage.setItem(KEY.local.stateLogin, JSON.stringify(e.info))
        Cookies.set(KEY.cookie.login, e.token.plainTextToken)
        window.location = '/';
    }).catch(e => {
        state.login.isFail = true
        state.login.errorMessage = e
    }).finally(() => {
        state.login.isLoading = false
    });
}
</script>