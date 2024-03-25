<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="container bg-info mb-3">
        <div class="row">
            <div class="col">
                <button class="btn btn-info header-button">スキル</button>
            </div>
            <div class="col">
                <button class="btn btn-info header-button"><RouterLink v-bind:to="{name: 'JobCareerList'}" class="link-text">職務経歴</RouterLink></button>
            </div>
            <div class="col">
                <button class="btn btn-info header-button">ポートフォリオ</button>
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