<script setup lang="ts">
import { useRouter } from "vue-router";
import { RouterLink } from 'vue-router';

const router = useRouter();

const onEdit = (): void => {
    // 編集画面へ
    router.push({name: "PortfolioEdit"});
};
const onDelete = (): void => {
    if(!confirm("削除します。よろしいでしょうか？")) {
        return;
    }
    // 成功したら一覧画面へ
    router.push({name: "PortfolioList"});
};
</script>

<template>
    <div class="container">
        <div class="row bg-info text-white p-2 mb-2">
            ポートフォリオ詳細
        </div>

        <!-- 名称 -->
        <div class="row p-2">
            <div class="col">名称</div>
            <div class="col">ポートフォリオ一覧</div>
        </div>

        <!-- 使用スキル -->
        <div class="row p-2">
            <div class="col">使用スキル</div>
            <div class="col">Vue、Python</div>
        </div>

        <!-- 備考 -->
        <div class="row p-2">
            <div class="col">備考</div>
            <div class="col">このサイトのこと</div>
        </div>

        <div class="row p-2">
            <div class="col"><button class="btn btn-secondary" v-on:click="onEdit">変更</button></div>
            <div class="col"><button class="btn btn-secondary" v-on:click="onDelete">削除</button></div>
        </div>

        <div class="row p-2">
            <div class="col"><RouterLink v-bind:to="{name: 'PortfolioList'}">一覧へ戻る</RouterLink></div>
        </div>
    </div>
    
</template>

<style scoped>
</style>