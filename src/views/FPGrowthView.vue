<template>
    <div id="fp-growth">
        <h2>频繁项集分析</h2>

        <el-form inline>
            <el-form-item label="最小支持度">
                <el-input-number v-model="minSupport" :min="0" :max="100" :step="1" />
            </el-form-item>
            <el-button type="primary" @click="startMining">开始分析</el-button>
            <el-button type="success" @click="exportCSV">导出CSV</el-button>
        </el-form>

        <el-table :data="frequentItemsets" class="mt-4">
            <el-table-column prop="items" label="频繁项集" />
            <el-table-column prop="support" label="支持度" />
        </el-table>
    </div>
</template>

<script>
    // import { exportCSV } from '@/api/fp-growth'
    export default {
        name: 'FPGrowthView',
        data() {
            return {
                minSupport: 0,
                frequentItemsets: []
            }
        },
        methods: {
            startMining() {
                alert("开始分析，支持度=" + this.minSupport)
            },
            exportCSV() {
                alert("导出CSV")
                // TODO 因为还没有对接前后端接口，暂时用空数据实现导出CSV功能
                // exportCSV().then(res => {
                //     const blob = new Blob([res.data], { type: 'text/csv;charset=utf-8;' });
                //     const url = window.URL.createObjectURL(blob);
                //     const link = document.createElement('a');
                //     link.href = url;
                //     link.setAttribute('download', 'frequent_itemsets.csv');
                //     document.body.appendChild(link);
                //     link.click();
                //     document.body.removeChild(link);
                // })
                var res = {}
                const blob = new Blob([res.data], { type: 'text/csv;charset=utf-8;' });
                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'frequent_itemsets.csv');
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
</script>