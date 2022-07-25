<template>
    <div class="allentities-warpper">
        <div class="allentities-content">
            <!-- 搜索框 -->
            <div class="entity-title">
                <span>您搜索的实体为多义词</span>
                <!-- 输入框 -->
                <div class="input-box">
                    <span class="search-icon">
                        <svg t="1657855408940" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2263">
                            <path
                                d="M511.975892 191.296945a23.234661 23.234661 0 1 0 0 46.934014 202.315808 202.315808 0 0 1 202.315808 202.315808 23.234661 23.234661 0 0 0 46.934015 0 249.191736 249.191736 0 0 0-249.249823-249.249822z"
                                fill="#515151" p-id="2264"></path>
                            <path
                                d="M1009.313805 958.389268l-172.807789-172.807789a475.032638 475.032638 0 1 0-54.369106 53.555893l173.214395 173.214396a38.16293 38.16293 0 1 0 53.9625-53.9625z m-533.11929-90.03431a393.072373 393.072373 0 1 1 393.943672-392.0849 393.072373 393.072373 0 0 1-393.943672 392.0849z"
                                fill="#515151" p-id="2265"></path>
                        </svg></span>
                    <input type="text" placeholder="请输入关键字过滤" v-model="filterKey">
                </div>
            </div>
            <!-- 表头 -->
            <div class="entity-item item-header">
                <li class="id">Entity NO.</li>
                <li class="name">Entity Name</li>
                <li class="action">Action</li>
            </div>
            <!-- 表项 -->
            <div class="entity-item" v-for="(item, index) in allEntities" :key="index">
                <li class="id">{{ index }}</li>
                <li class="name">{{ item }}</li>
                <li class="action"><button @click="emit('update:currentEntity', item)">点我</button></li>
            </div>
        </div>
    </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive, onMounted, computed } from 'vue'
//anllentity：reactive({allEntity:[]})
const props = defineProps({
    allEntity: {
        type: Object,
        required: true
    },
    currentEntity: String,
})
const emit = defineEmits(['update:currentEntity'])
//添加过滤逻辑
let filterKey = ref<string>('')
const allEntities = computed(() => {
    let entities: string[] = props.allEntity.allEntity
    let filterData: string[] = entities.filter((value) => {
        return !filterKey.value || value.toLowerCase().includes(filterKey.value.toLowerCase())
    })
    return filterData
})
onMounted(() => {
    console.log(allEntities.value);
})
</script>
 
<style scoped lang="less">
.allentities-warpper {
    padding: 0 4.5%;
    padding-top: 48px;


    .allentities-content {
        background-color: #fff;
        min-height: 500px;

        .entity-title {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .input-box {
                min-width: 25%;
                margin-right: 5%;
                height: 36px;
                border-radius: 30px;
                display: flex;
                align-items: center;
                z-index: 2;
                box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 4px 1px rgb(0 0 0 / 9%);
                border-left: 1px solid transparent;
                border-right: none;
                border-top: 1px solid transparent;
                border-bottom: 1px solid transparent;

                .search-icon {
                    display: block;
                    height: 100%;
                    width: 5%;
                    z-index: 1;
                    border-top-left-radius: 30px;
                    border-bottom-left-radius: 30px;
                    text-align: center;
                    line-height: 36px;
                    padding-left: 5px;
                    margin-left: 3%;
                }

                // 输入框
                input {
                    height: 100%;
                    width: 80%;
                    border: none;
                    outline: none;
                    font-size: 18px;
                    padding-left: 30px;
                    margin-right: 30px;
                    border-top-left-radius: 30px;
                    border-bottom-left-radius: 30px;
                    color: rgb(113, 109, 109);
                    z-index: 1;
                }
            }
        }

        .entity-item {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .id {
                width: 10%;
            }

            .name {}

            .action {
                width: 10%;
            }
        }

        .item-header {
            background-color: #bfa;
            height: 60px;
        }
    }
}
</style>