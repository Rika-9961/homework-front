<template>
    <div class="recommend">
        <h2>智能商品推荐</h2>

        <el-form inline>
            <!-- <el-form-item label="选择商品集合">
                <el-select v-model="inputItems" multiple placeholder="选择商品" style="width: 300px">
                    <el-option v-for="item in allItems" :key="item" :label="item" :value="item" />
                </el-select>
            </el-form-item> -->

            <el-form-item label="K值">
                <el-input-number v-model="topK" :min="1" :max="10" />
            </el-form-item>

            <el-button type="primary" @click="select">选择商品集合</el-button>
            <el-button type="success" @click="getRecommendation">获取推荐</el-button>
        </el-form>

        <el-table :data="recommendations" class="mt-4">
            <el-table-column prop="id" label="推荐商品" />
            <el-table-column prop="conf" label="置信度" />
        </el-table>

        <el-dialog :visible.sync="selectDialogVisible" width="800px" top="5vh" :show-close="showClose"
            :close-on-press-escape="closeOnPressEscape">
            <el-descriptions title="商品集合">
                <template slot="extra">
                    <el-input-number v-model="item" />
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <el-button type="primary" @click="addItem">添加商品</el-button>
                </template>
            </el-descriptions>
            <el-table :data="inputItems" class="mt-4">
                <el-table-column label="商品ID">
                    <template slot-scope="scope">{{ scope.row }}</template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="mini" icon="el-icon-minus" @click="removeItem(scope.row)" circle></el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script>
    import { recommend } from '@/api/recommend'
    export default {
        name: "RecommendView",
        data() {
            return {
                inputItems: [],
                allItems: [],
                item: 0,
                topK: 1,
                recommendations: [
                    // { id: 2007, conf: 0.66 },
                    // { id: 2874, conf: 0.66 },
                    // { id: 13920, conf: 0.65 },
                    // { id: 762, conf: 0.65 },
                    // { id: 3316, conf: 0.65 },
                    // { id: 27, conf: 0.65 }
                ],
                selectDialogVisible: false,
                showClose: false,
                closeOnPressEscape: false
            }
        },
        methods: {
            select() {
                this.selectDialogVisible = true;
            },
            addItem() {
                this.inputItems.push(this.item)
            },
            removeItem(item) {
                this.inputItems = this.inputItems.filter(value => value != item)
            },
            getRecommendation() {
                recommend({
                    commodities: this.inputItems,
                    k: this.topK
                }).then(res => {
                    this.recommendations = res.data
                })
            }
        }
    }
</script>