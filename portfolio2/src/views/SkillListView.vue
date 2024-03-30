<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container">
        <div class="row bg-info text-white p-2 mb-2">
            スキル一覧
        </div>
        <div class="row">
            <table class="table table-bordered table-hover table-sm">
                <thead>
                    <tr class="table-primary">
                        <th>名称</th>
                        <th>種別</th>
                        <th>期間</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <RouterLink v-bind:to="{name: 'SkillDetail', params: {id: 111}}">Java</RouterLink>
                        </td>
                        <td>PG</td>
                        <td>4年3ヶ月</td>
                    </tr>
                    <tr>
                        <td>
                            <RouterLink v-bind:to="{name: 'SkillDetail', params: {id: 222}}">SQLServer</RouterLink>
                        </td>
                        <td>DB</td>
                        <td>3ヶ月</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
</template>

<style scoped>
</style>