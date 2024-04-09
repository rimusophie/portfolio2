<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container">
        <div class="row bg-info text-white p-2 mb-2">
            ポートフォリオ一覧
        </div>

        <div class="row p-2 mb-2">
            <div class="col">
                <RouterLink v-bind:to="{name: 'PortfolioAdd'}">新規登録はこちらから</RouterLink>
            </div>
        </div>

        <div class="row">
            <table class="table table-bordered table-hover table-sm">
                <thead>
                    <tr class="table-primary">
                        <th>名称</th>
                        <th>使用スキル</th>
                        <th>備考</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><RouterLink v-bind:to="{name: 'PortfolioDetail', params: {id: '111'}}">ポートフォリオ一覧</RouterLink></td>
                        <td>Vue、Python</td>
                        <td>このサイトのこと</td>
                    </tr>
                    <tr>
                        <td><RouterLink v-bind:to="{name: 'PortfolioDetail', params: {id: '111'}}">AI</RouterLink></td>
                        <td>Python</td>
                        <td>ディープラーニングの勉強</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</template>

<style scoped>
</style>