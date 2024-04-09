<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from 'vue-router';

// 名称
const inputName = ref("");

// 種別
const inputKind = ref("0");

const onBackList = (): void => {
    
};
const onAdd = (): void => {
    if(!confirm("登録します。よろしいでしょうか？")) {
        return;
    }
    // 成功したら入力値を初期化
    inputName.value = "";
    inputKind.value = "0";
};
</script>

<template>
    <div class="container">
        <div class="row bg-info text-white p-2 mb-2">
            スキル登録
        </div>

        <form v-on:submit.prevent="onAdd">
            <!-- 名称 -->
            <div class="row p-2">
                <div class="col">名称</div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="名称を入れてください" v-model="inputName" maxlength="100">
                </div>
            </div>

            <!-- 種別 -->
            <div class="row p-2">
                <div class="col">種別</div>
                <div class="col">
                    <select v-model="inputKind" class="form-select form-control">
                        <option value="0">---</option>
                        <option value="1">OS</option>
                        <option value="2">DB</option>
                    </select>
                </div>
            </div>

            <div class="row p-2">
                <div class="col"><button type="submit" class="btn btn-secondary">登録</button></div>
            </div>

            <div class="row p-2">
                <div class="col"><RouterLink v-bind:to="{name: 'SkillList'}">一覧へ戻る</RouterLink></div>
            </div>
        </form>
    </div>
    
</template>

<style scoped>
</style>