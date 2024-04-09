<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 名称
const inputName = ref("Java");

// 種別
const inputKind = ref("1");

const onUpdate = (): void => {
    alert("aaa");
    // 成功したら詳細画面へ
    //inputName.value = "";
    //inputKind.value = "0";
    router.push({name: "SkillDetail", params:{id: "111"}});
};
</script>

<template>
    <div class="container">
        <div class="row bg-info text-white p-2 mb-2">
            スキル変更
        </div>

        <form v-on:submit.prevent="onUpdate">
            <!-- 名称 -->
            <div class="row p-2">
                <div class="col">名称</div>
                <div class="col"><input type="text" class="form-control" placeholder="名称を入れてください" v-model="inputName" maxlength="100"></div>
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
                <div class="col"><button class="btn btn-secondary">更新</button></div>
            </div>
        </form>
    </div>
    
</template>

<style scoped>
</style>