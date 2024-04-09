<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const onEdit = (): void => {
    alert("onEdit");
    // 編集画面へ
    router.push({name: "SkillEdit"});
};
const onDelete = (): void => {
    // 成功したら一覧画面へ
    alert("onDelete");
    router.push({name: "SkillList"});
};
</script>

<template>
    <div class="container">
        <div class="row bg-info text-white p-2 mb-2">
            スキル詳細
        </div>

        <!-- 名称 -->
        <div class="row p-2">
            <div class="col">名称</div>
            <div class="col">Java</div>
        </div>

        <!-- 種別 -->
        <div class="row p-2">
            <div class="col">種別</div>
            <div class="col">PG</div>
        </div>

        <!-- 期間 -->
        <div class="row p-2">
            <div class="col">期間</div>
            <div class="col">4年3ヶ月</div>
        </div>

        <div class="row p-2">
            <div class="col"><button class="btn btn-secondary" v-on:click="onEdit">変更</button></div>
            <div class="col"><button class="btn btn-secondary" v-on:click="onDelete">削除</button></div>
        </div>
    </div>
    
</template>

<style scoped>
</style>