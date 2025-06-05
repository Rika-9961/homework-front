<template>
    <div class="recommend">
        <h2>智能商品推荐</h2>

        <el-form inline>
            <el-form-item label="选择商品集合">
                <el-select v-model="inputItems" multiple placeholder="选择商品" style="width: 300px">
                    <el-option v-for="item in allItems" :key="item" :label="item" :value="item" />
                </el-select>
            </el-form-item>

            <el-form-item label="K值">
                <el-input-number v-model="topK" :min="1" :max="10" />
            </el-form-item>

            <el-button type="primary" @click="getRecommendation">获取推荐</el-button>
        </el-form>

        <el-table :data="recommendations" class="mt-4">
            <el-table-column prop="item" label="推荐商品" />
            <el-table-column prop="confidence" label="置信度" />
        </el-table>
    </div>
</template>

<script>
    import { } from '@/api/recommend'
    export default {
        name: "RecommendView",
        data() {
            return {
                inputItems: [],
                allItems: [],
                topK: 1,
                recommendations: []
            }
        },
        methods: {
            getRecommendation() {
                alert("获取推荐，K=" + this.topK)
            }
        }
    }
</script>