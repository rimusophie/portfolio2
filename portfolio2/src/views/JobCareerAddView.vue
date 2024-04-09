<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from 'vue-router';

// 案件名
const inputName = ref("");

// 開始月
const inputStart = ref("");

// 終了月
const inputEnd = ref("");

// 業務内容
const inputWork = ref([]);

// 使用スキル
const inputSkill = ref([]);

// 備考
const inputNotice = ref("");

const onBackList = (): void => {
    
};
const onAdd = (): void => {
    if(!confirm("登録します。よろしいでしょうか？")) {
        return;
    }
    // 成功したら入力値を初期化
    inputName.value = "";
    inputStart.value = "";
    inputEnd.value = "";
    inputWork.value = [];
    inputSkill.value = [];
    inputNotice.value = "";
};
</script>

<template>
    <div class="container">
        <div class="row bg-info text-white p-2 mb-2">
            職務経歴登録
        </div>

        <form v-on:submit.prevent="onAdd">
            <!-- 案件名 -->
            <div class="row p-2">
                <div class="col">案件名</div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="案件名を入れてください" v-model="inputName" maxlength="100">
                </div>
            </div>

            <!-- 開始日 -->
            <div class="row p-2">
                <div class="col">開始日</div>
                <div class="col">
                    <input type="date" class="form-control" v-model="inputStart">
                </div>
            </div>

            <!-- 終了日 -->
            <div class="row p-2">
                <div class="col">終了日</div>
                <div class="col">
                    <input type="date" class="form-control" v-model="inputEnd">
                </div>
            </div>

            <!-- 業務内容 -->
            <div class="row p-2">
                <div class="col">業務内容</div>
                <div class="col d-flex flex-wrap">
                    <div class="form-check checkbox-category">
                        <input type="checkbox" id="inputWord_1" class="form-check-input" v-model="inputWork" value="1">
                        <label for="inputWord_1" class="form-check-label">要件定義</label>
                    </div>
                        
                    <div class="form-check checkbox-category">
                        <input type="checkbox" id="inputWord_2" class="form-check-input" v-model="inputWork" value="2">
                        <label for="inputWord_2" class="form-check-label">基本設計</label>
                    </div>
                        
                    <div class="form-check checkbox-category">
                        <input type="checkbox" id="inputWord_3" class="form-check-input" v-model="inputWork" value="3">
                        <label for="inputWord_3" class="form-check-label">詳細設計</label>
                    </div>

                    <div class="form-check checkbox-category">
                        <input type="checkbox" id="inputWord_4" class="form-check-input" v-model="inputWork" value="4">
                        <label for="inputWord_4" class="form-check-label">開発</label>
                    </div>

                    <div class="form-check checkbox-category">
                        <input type="checkbox" id="inputWord_5" class="form-check-input" v-model="inputWork" value="5">
                        <label for="inputWord_5" class="form-check-label">単体テスト</label>
                    </div>

                    <div class="form-check checkbox-category">
                        <input type="checkbox" id="inputWord_6" class="form-check-input" v-model="inputWork" value="6">
                        <label for="inputWord_6" class="form-check-label">結合テスト</label>
                    </div>
                        
                    <div class="form-check checkbox-category">
                        <input type="checkbox" id="inputWord_7" class="form-check-input" v-model="inputWork" value="7">
                        <label for="inputWord_7" class="form-check-label">総合テスト</label>
                    </div>

                    <div class="form-check checkbox-category">
                        <input type="checkbox" id="inputWord_8" class="form-check-input" v-model="inputWork" value="8">
                        <label for="inputWord_8" class="form-check-label">運用管理</label>
                    </div>
                </div>
            </div>

            <!-- 使用スキル -->
            <div class="row p-2">
                <div class="col">使用スキル</div>
                <div class="col">
                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <div class="col">OS</div>
                            </div>

                            <div class="row">
                                <div class="col d-flex flex-wrap">
                                    <div class="form-check checkbox-category">
                                        <input type="checkbox" id="inputSkill_1" class="form-check-input" v-model="inputSkill" value="1">
                                        <label for="inputSkill_1" class="form-check-label">Windows</label>
                                    </div>
                                
                                    <div class="form-check checkbox-category">
                                        <input type="checkbox" id="inputSkill_2" class="form-check-input" v-model="inputSkill" value="2">
                                        <label for="inputSkill_2" class="form-check-label">Linux</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="row">
                                <div class="col">PG</div>
                            </div>

                            <div class="row">
                                <div class="col d-flex flex-wrap">
                                    <div class="form-check checkbox-category">
                                        <input type="checkbox" id="inputSkill_11" class="form-check-input" v-model="inputSkill" value="11">
                                        <label for="inputSkill_11" class="form-check-label">Java</label>
                                    </div>

                                    <div class="form-check checkbox-category">
                                        <input type="checkbox" id="inputSkill_12" class="form-check-input" v-model="inputSkill" value="12">
                                        <label for="inputSkill_12" class="form-check-label">C++</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 備考 -->
            <div class="row p-2">
                <div class="col">備考</div>
                <div class="col">
                    <textarea v-model="inputNotice" rows="4" class="form-control"></textarea>
                </div>
            </div>

            <div class="row p-2">
                <div class="col"><button type="submit" class="btn btn-secondary">登録</button></div>
            </div>

            <div class="row p-2">
                <div class="col"><RouterLink v-bind:to="{name: 'JobCareerList'}">一覧へ戻る</RouterLink></div>
            </div>
        </form>
    </div>
    
</template>

<style scoped>
.checkbox-category {
    margin-right: 1.25rem;
}
</style>