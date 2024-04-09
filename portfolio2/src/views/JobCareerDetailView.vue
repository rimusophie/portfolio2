<script setup lang="ts">
import { useRouter } from "vue-router";
import { RouterLink } from 'vue-router';

const router = useRouter();

const onEdit = (): void => {
    // 編集画面へ
    router.push({name: "JobCareerEdit"});
};
const onDelete = (): void => {
    if(!confirm("削除します。よろしいでしょうか？")) {
        return;
    }
    // 成功したら一覧画面へ
    router.push({name: "JobCareerList"});
};
</script>

<template>
    <div class="container">
        <div class="row bg-info text-white p-2 mb-2">
            職務経歴詳細
        </div>

        <!-- 案件名 -->
        <div class="row p-2">
            <div class="col">案件名</div>
            <div class="col">積算設備見積ソフト実装</div>
        </div>

        <!-- 開始日 -->
        <div class="row p-2">
            <div class="col">開始日</div>
            <div class="col">2012年4月1日</div>
        </div>

        <!-- 終了日 -->
        <div class="row p-2">
            <div class="col">終了日</div>
            <div class="col">2018年9月30日</div>
        </div>

        <!-- 期間 -->
        <div class="row p-2">
            <div class="col">期間</div>
            <div class="col">6年5ヶ月</div>
        </div>

        <!-- 業務内容 -->
        <div class="row p-2">
            <div class="col">業務内容</div>
            <div class="col">基本設計、詳細設計、実装</div>
        </div>

        <!-- 使用スキル -->
        <div class="row p-2">
            <div class="col">使用スキル</div>
            <div class="col">Java、SQLServer</div>
        </div>

        <!-- 備考 -->
        <div class="row p-2">
            <div class="col">備考</div>
            <div class="col">3年ほど実装。3年ほど設計</div>
        </div>

        <div class="row p-2">
            <div class="col"><button class="btn btn-secondary" v-on:click="onEdit">変更</button></div>
            <div class="col"><button class="btn btn-secondary" v-on:click="onDelete">削除</button></div>
        </div>

        <div class="row p-2">
            <div class="col"><RouterLink v-bind:to="{name: 'JobCareerList'}">一覧へ戻る</RouterLink></div>
        </div>
    </div>
    
</template>

<style scoped>
</style>