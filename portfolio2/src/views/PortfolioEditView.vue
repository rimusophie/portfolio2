<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 名称
const inputName = ref("ポートフォリオ一覧");

// 使用スキル
const inputSkill = ref(["11","12"]);

// 備考
const inputNotice = ref("これのこと");

const onBackList = (): void => {
    
};
const onUpdate = (): void => {
    // 成功したら詳細画面へ
    router.push({name: "PortfolioDetail", params:{id: "111"}});
};
</script>

<template>
    <div class="container">
        <div class="row bg-info text-white p-2 mb-2">
            ポートフォリオ変更
        </div>

        <form v-on:submit.prevent="onAdd">
            <!-- 名称 -->
            <div class="row p-2">
                <div class="col">名称</div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="名称を入れてください" v-model="inputName" maxlength="100">
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
                <div class="col"><button class="btn btn-secondary">更新</button></div>
            </div>

            <div class="row p-2">
                <div class="col"><RouterLink v-bind:to="{name: 'PortfolioDetail', params: {id: '111'}}">詳細へ戻る</RouterLink></div>
            </div>
        </form>
    </div>
    
</template>

<style scoped>
.checkbox-category {
    margin-right: 1.25rem;
}
</style>