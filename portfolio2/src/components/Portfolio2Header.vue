<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container bg-info mb-3">
        <div class="row">
            <div class="col">
                <RouterLink v-bind:to="{name: 'SkillList'}" class="link-text"><button class="btn btn-info header-button">スキル</button></RouterLink>
            </div>
            <div class="col">
                <RouterLink v-bind:to="{name: 'JobCareerList'}" class="link-text"><button class="btn btn-info header-button">職務経歴</button></RouterLink>
            </div>
            <div class="col">
                <RouterLink v-bind:to="{name: 'PortfolioList'}" class="link-text"><button class="btn btn-info header-button">ポートフォリオ</button></RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-button {
    width: 100%;
}
.link-text {
    color: white;
}
</style>