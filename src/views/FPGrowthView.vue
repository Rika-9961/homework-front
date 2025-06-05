<template>
    <div id="fp-growth">
        <h2>频繁项集分析</h2>

        <el-form inline>
            <el-form-item label="最小支持度">
                <el-input-number v-model="minSupport" :min="0" :max="100" :step="1" />
            </el-form-item>
            <el-button type="primary" @click="startMining">开始分析</el-button>
        </el-form>

        <el-table :data="tableData" class="mt-4">
            <el-table-column prop="id" label="ID" />
            <el-table-column prop="createTime" label="创建时间">
                <template slot-scope="scope">
                    {{ scope.row.createTime ? scope.row.createTime.replace('T', ' ') : '' }}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="detail(scope.row.id)">查看</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog :visible.sync="detailDialogVisible" width="800px" top="5vh" :show-close="showClose"
            :close-on-press-escape="closeOnPressEscape">
            <el-descriptions title="频繁项集" :column="3" border>
                <template slot="extra">
                    <el-button type="success" @click="exportCSV">导出CSV</el-button>
                </template>
                <el-descriptions-item label="ID">{{ this.record.id }}</el-descriptions-item>
                <el-descriptions-item label="支持度阈值">{{ this.record.threshold }}</el-descriptions-item>
                <el-descriptions-item label="创建时间">
                    {{ this.record.createTime ? this.record.createTime.replace('T', ' ') : '' }}
                </el-descriptions-item>
            </el-descriptions>
            <el-table :data="record.itemsets" class="mt-4">
                <el-table-column prop="id" label="商品ID" />
                <el-table-column prop="itemList" label="频繁项集">
                    <template slot-scope="scope">
                        {{ scope.row.itemList }}
                    </template>
                </el-table-column>
                <el-table-column prop="support" label="支持度" />
            </el-table>
        </el-dialog>

    </div>
</template>

<script>
    import { start, getAll, getById } from '@/api/fp-growth'
    export default {
        name: 'FPGrowthView',
        data() {
            return {
                minSupport: 0,
                detailDialogVisible: true,
                tableData: [
                    // { id: 1114, createTime: "2022-09-01T23:06:29", itemsets: this.itemsets }
                ],
                record: {
                    id: 1,
                    threshold: 100,
                    createTime: "2022-09-01T23:06:29",
                    itemsets: [
                        { id: 3, itemList: [1, 2, 3], support: 200 },
                        { id: 4, itemList: [0, 1, 3], support: 100 }
                    ]
                },
                showClose: false,
                closeOnPressEscape: false
            }
        },
        methods: {
            startMining() {
                start(this.minSupport)
            },
            detail(id) {
                getById(id).then(res => {
                    this.threshold = res.data.threshold
                    this.record = res.data.itemsets
                    this.detailDialogVisible = true
                })
            },
            exportCSV() {
                const headers = ['itemList', 'support']
                const rows = this.record.itemsets.map(item => [
                    item.itemList.join(' '),
                    item.support
                ])

                // 拼接csv内容
                let content = headers.join(',') + '\n'
                rows.forEach(row => {
                    content += row.join(',') + '\n'
                })

                // 创建blob并触发下载
                const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'frequent_itemsets_id' + this.record.id + '.csv');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        },
        mounted() {
            getAll().then(res => {
                this.tableData = res.data.data
            })
        }
    }
</script>