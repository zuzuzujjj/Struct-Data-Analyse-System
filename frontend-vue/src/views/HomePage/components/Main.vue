<template>
  <main class="main-container">
    <!-- 第一部分 描述文本 -->
    <section class="content-warpper">
      <div class="main-content">
        <!-- 文档 -->
        <div class="content-text animate__animated animate__fadeInLeft">
          <div class="text-title">
            <img src="../../../assets/logo/logo2.png" alt="">
            <div class="label">
              知识图谱
            </div>
          </div>
          <p class="text-description">
            结构化数据查询与可视化解决方案
          </p>
          <div class="text-buttons">
            <el-button round @click="navigate.push('/struct-data')"><span>快速开始</span></el-button>
            <el-button color="#fff" round @click="navigate.push('/document')"><span>概览</span></el-button>
          </div>
        </div>
        <!-- 右侧图 -->
        <div class="content-right animate__animated animate__fadeInRight">
          <div class="title-warpper">
            <!-- 结构化数据 -->
            <div class="title" v-if="isActivePicture == 0">
              <img src="https://gw.alipayobjects.com/zos/antfincdn/IqREAm36K7/1.png" alt="">
              <h2>足球结构化数据</h2>
            </div>
            <p v-if="isActivePicture == 0">
              具有多种足球结构化数据与可视化方案
            </p>
            <!-- 非结构化数据 -->
            <div class="title" v-if="isActivePicture == 1">
              <img src="https://gw.alipayobjects.com/zos/antfincdn/3fG1Iqjfnz/2.png" alt="">
              <h2>非结构化数据</h2>
            </div>
            <p v-if="isActivePicture == 1">
              非结构化数据分析与可视化,机器学习
            </p>
          </div>

          <div class="imag-warpper">
            <!-- 1==>结构化数据 -->
            <div :class="['img-container', isActivePicture == 1 ? 'isActivePicture' : '']" @mouseover="hoverPicture(1)"
              @mouseleave="overPicture">
              <div class="img-content">
                <!-- 四个角放足球元素 -->

                <!-- 主图 -->
                <img class="img-show" src="../image/p1.png" alt="">
              </div>
            </div>
            <!-- 0==>非结构化数据 -->
            <div :class="['img-container', isActivePicture == 0 ? 'isActivePicture' : '']" @mouseover="hoverPicture(0)"
              @mouseleave="overPicture">
              <div class="img-content">
                <!-- 四个角放足球元素 -->
                <img class="sport-element" src="../image/sportelement/leftbottom.svg" alt="">
                <img class="sport-element" src="../image/sportelement/rightbottom.svg" alt="">
                <img class="sport-element" src="../image/sportelement/righttop.svg" alt="">
                <!-- 主图 -->
                <img class="img-show" src="../image/twoimage/足球1.jpg" alt="">
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- 第二部分 能力特性 -->
    <div class="ability-warpper">
      <!-- 标题 -->
      <div class="menus-title">
        <span>能力特性</span>
      </div>
      <!-- 能力选择菜单 -->
      <ul class="menus-points-warpper">
        <li :class="isActiveAbility == 0 ? 'isActiveAbility' : ''" @click="isActiveAbility = 0"><span><svg
              t="1657282955083" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="3457">
              <path
                d="M849.797 597.766c-16.179-15.919-38.293-25.81-62.742-25.81-24.367 0-46.314 9.642-62.274 25.684l-0.439 0.126-0.577 0.508-93.674-55.902c6.373-14.795 9.697-31.083 9.697-48.127 0-16.799-3.324-33.089-9.697-47.635l93.674-56.148 0.577 0.385c16.151 16.288 38.347 26.316 62.714 26.316 48.814 0 88.866-40.107 88.866-88.607 0-49.131-40.052-88.865-88.866-88.865-48.567 0-88.592 39.734-88.592 88.865 0 10.027 1.677 19.794 4.753 28.694l-94.306 56.535c-1.51-1.512-3.021-3.27-4.586-4.89-21.813-21.813-52.14-35.465-85.544-35.465-2.746 0-5.47 0.102-8.172 0.285L484.07 267.786c8.558-4.208 16.571-9.849 23.748-17.025 34.652-34.654 34.612-90.867 0.096-125.383-34.518-34.518-90.925-34.752-125.579-0.098-17.276 17.277-25.882 40.063-26.106 62.701l0.175 0.175c0.185 22.698 8.828 45.328 26.115 62.616 17.23 17.23 39.568 25.931 62.197 25.873l0.399 0.223 0.766 0.048 26.706 105.752c-0.478 0.199-0.955 0.401-1.43 0.607-10.832 4.479-21.072 10.647-30.441 18.387-0.294 0.242-0.583 0.491-0.875 0.736-0.443 0.373-0.888 0.742-1.327 1.122-0.5 0.432-0.992 0.873-1.484 1.313-0.265 0.236-0.532 0.467-0.794 0.706-0.23 0.209-0.455 0.424-0.683 0.634a130.596 130.596 0 0 0-3.85 3.684c-11.879 11.878-21.046 25.748-26.826 40.54l-105.94-26.535-0.135-0.68c0.096-22.939-8.507-45.723-25.737-62.954-34.518-34.518-91.198-34.478-125.493-0.184-34.741 34.741-34.517 91.158 0.001 125.674 34.342 34.344 90.739 34.547 125.48-0.192 7.09-7.09 12.811-15.183 16.929-23.65l106.66 26.708c-0.001 2.136-0.175 4.449-0.215 6.7 0 20.22 5.066 40.547 15.208 58.805l-83.46 70.159c-7.532-5.852-16.113-10.582-25.708-13.889-46.334-15.967-96.847 8.701-112.749 54.852-15.905 46.15 8.6 96.959 54.935 112.926 23.1 7.959 47.353 5.711 67.8-4.006l0.08-0.234c20.322-10.109 36.877-27.795 44.844-50.91 7.938-23.037 5.972-46.93-3.995-67.244l0.025-0.459-0.292-0.709 82.784-69.857c25.492 23.236 58.773 33.583 91.189 31.019l22.5 106.542-0.553 0.42c-20.661 9.965-37.374 27.684-45.313 50.721-15.902 46.15 8.969 97.082 54.82 112.885 46.45 16.006 97.065-8.916 112.969-55.066 15.823-45.916-8.702-96.701-55.152-112.709-9.479-3.268-19.261-4.863-28.677-4.855l-22.65-107.221a118.858 118.858 0 0 0 7.663-3.588c0.189-0.096 0.379-0.191 0.568-0.288 0.217-0.112 0.433-0.225 0.648-0.338a118.726 118.726 0 0 0 29.146-21.267l1.266-0.99c1.564-1.387 3.076-3.27 4.586-4.766l94.306 56.518c-3.076 9.025-4.753 18.684-4.753 28.83 0 49.01 39.778 88.729 88.592 88.729s88.866-39.719 88.866-88.729c0-24.434-10.026-46.631-25.876-62.795h-0.247z m-62.742-318.974c27.391 0 49.639 21.938 49.639 49.763 0 27.198-22.361 49.255-49.639 49.255-13.46 0-25.985-5.26-34.888-14.546l-1.017-0.617c-2.059-2.514-4.147-5.151-5.962-7.651l-0.301-0.879c-4.586-7.388-7.335-16.414-7.335-25.562 0.001-27.826 22.364-49.763 49.503-49.763z m-341.941-41.279c-12.675 0.085-25.523-4.779-35.041-14.296a49.38 49.38 0 0 1-14.491-35.237c0.001-12.587 4.827-25.301 14.491-34.964 19.319-19.317 50.816-19.192 70.104 0.097 19.189 19.19 19.229 50.776 0 70.006-9.663 9.663-22.474 14.394-35.063 14.394zM258.71 433.788l-0.409 0.834c-1.981 8.466-6.42 16.792-12.888 23.261-19.675 19.675-51 19.375-70.19 0.185-19.368-19.368-19.588-50.612 0.088-70.288 19.231-19.232 50.64-19.017 69.928 0.271 9.518 9.519 14.655 22.093 14.384 34.956l0.282 1.154c-0.322 3.235-0.71 6.575-1.195 9.627z m61.825 276.499a49.387 49.387 0 0 1-25.324 28.467c-11.316 5.512-24.858 6.746-37.779 2.291-25.829-8.898-39.516-37.268-30.629-63.057 8.842-25.66 37.218-39.533 62.93-30.674 12.92 4.453 22.785 13.896 28.302 25.211 5.628 11.358 6.886 25.038 2.5 37.762z m246.426 46.945c3.047-1.129 6.221-2.246 9.178-3.145h0.929c8.479-1.928 17.907-1.586 26.556 1.395 26.308 9.064 39.764 37.355 30.921 63.012-8.924 25.898-36.912 39.785-63.221 30.719-25.714-8.859-39.282-37.188-30.396-62.979 4.386-12.725 13.439-22.852 25.119-28.242l0.914-0.76z m-49.653-343.666l1.29-0.126c20.424 0.398 40.978 8.36 56.635 24.018 31.854 31.854 31.717 83.658-0.275 115.65a81.652 81.652 0 0 1-8.54 7.409 84.406 84.406 0 0 1-12.498 7.628c-2.974 1.479-6.063 2.745-9.228 3.838a81.562 81.562 0 0 1-25.911 4.234c-45.051 0-81.585-36.73-81.585-81.973 0-29.446 15.731-55.378 39.277-69.729a81.622 81.622 0 0 1 40.835-10.949z m269.747 296.498c-27.139 0-49.502-22.309-49.502-49.504 0-13.666 5.715-26.068 14.614-34.969 8.902-9.023 21.428-14.67 34.888-14.67a49.376 49.376 0 0 1 35.162 14.67 49.394 49.394 0 0 1 14.477 34.969c-0.001 27.321-22.362 49.504-49.639 49.504z"
                fill="#2c2c2c" p-id="3458"></path>
            </svg>结构化数据分析</span></li>
        <li :class="isActiveAbility == 1 ? 'isActiveAbility' : ''" @click="isActiveAbility = 1"><span><svg
              t="1657283331010" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="2350">
              <path
                d="M916.931 939.859H109.924c-20.443 0-36.985-16.525-36.985-36.949V114.625c0-20.425 16.542-36.948 36.985-36.948 20.407 0 36.949 16.523 36.949 36.948v751.299h770.058c20.424 0 36.948 16.542 36.948 36.985 0 20.425-16.525 36.95-36.948 36.95"
                fill="#515151" p-id="2351"></path>
              <path
                d="M379.353 805.804H243.008c-18.832 0-34.091-15.278-34.091-34.128V580.704c0-18.831 15.259-34.126 34.091-34.126h136.345c18.851 0 34.109 15.295 34.109 34.126v190.972c0 18.849-15.258 34.128-34.109 34.128m-102.217-68.219h68.09V614.813h-68.09v122.772zM906.177 805.804H769.813c-18.85 0-34.128-15.278-34.128-34.128v-657.05c0-18.832 15.278-34.109 34.128-34.109h136.363c18.831 0 34.108 15.277 34.108 34.109v657.05c0.001 18.849-15.276 34.128-34.107 34.128m-102.273-68.219h68.146v-588.85h-68.146v588.85zM642.738 805.804H506.411c-18.849 0-34.109-15.278-34.109-34.128V343.534c0-18.85 15.26-34.109 34.109-34.109h136.327c18.85 0 34.126 15.26 34.126 34.109v428.142c0 18.849-15.276 34.128-34.126 34.128m-102.236-68.219h68.126V377.644h-68.126v359.941z"
                fill="#515151" p-id="2352"></path>
            </svg>非结构化数据分析</span></li>
        <li :class="isActiveAbility == 2 ? 'isActiveAbility' : ''" @click="isActiveAbility = 2"><span><svg
              t="1657283655197" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="5352">
              <path
                d="M512 791.272727c-186.88 0-372.363636-232.680727-372.363636-279.272727 0-46.685091 186.298182-279.272727 372.363636-279.272727 185.483636 0 372.363636 232.704 372.363636 279.272727 0 46.312727-185.972364 279.272727-372.363636 279.272727z m0-512c-162.792727 0-325.818182 193.838545-325.818182 232.727273 0 38.818909 162.304 232.727273 325.818182 232.727273 163.095273 0 325.818182-194.141091 325.818182-232.727273 0-38.795636-163.514182-232.727273-325.818182-232.727273z m0.698182 349.230546a116.363636 116.363636 0 1 1 0.046545-232.750546 116.363636 116.363636 0 0 1-0.023272 232.750546z m0-186.181818a69.818182 69.818182 0 1 0 0 139.61309 69.818182 69.818182 0 0 0 0-139.61309z"
                fill="#515151" p-id="5353"></path>
            </svg>数据可视化与机器学习</span></li>
      </ul>
      <!-- 分隔线 -->
      <span class="spread"></span>
      <!-- 内容展示部分 -->
      <div class="ability-show-warpper">
        <div v-if="isActiveAbility == 0" class="ability-show-item">
          <!-- 左边表述 -->
          <div class="left-description">
            <svg t="1657346044068" class="icon-ablity" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="8673">
              <path
                d="M0 304.64l292.571429 175.542857v157.257143l146.285714 62.610286v292.571428L0 804.571429V304.64z m1024 0V804.571429l-438.857143 188.050285v-292.571428l146.285714-62.683429v-157.257143l292.571429-175.469714zM512 0l428.982857 183.881143-284.379428 170.642286L512 292.571429l-144.603429 61.952-284.525714-170.642286L512 0z"
                p-id="8674" fill="#8744E1"></path>
            </svg>
            <h3><span>结构化数据知识图谱<span></span></span></h3>
            <p>快速查询数据、知识图谱可视化、多维度分析与比较、数据关系简单明了</p>
            <a href="#/struct-data" target="">查看详情</a>
          </div>
          <!-- 右边图片 -->
          <div class="right-image">
            <img src="../image/ability/test1.png" alt="">
          </div>
        </div>
        <div v-if="isActiveAbility == 1" class="ability-show-item">
          <!-- 左边表述 -->
          <div class="left-description">
            <svg t="1657363558289" class="icon-ablity" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="5001">
              <path
                d="M864 518.016H505.984V160a8 8 0 0 0-8-8h-25.984a398.464 398.464 0 0 0-282.816 117.12 398.208 398.208 0 0 0-117.184 282.88 398.464 398.464 0 0 0 117.12 282.816 398.208 398.208 0 0 0 282.88 117.184 398.464 398.464 0 0 0 282.816-117.12 398.208 398.208 0 0 0 117.184-282.88v-25.984a8 8 0 0 0-8-8z m-158.272 269.76a331.584 331.584 0 0 1-235.328 96.256 329.856 329.856 0 0 1-233.216-97.28 329.856 329.856 0 0 1-97.152-234.752c0-88.704 34.496-172.16 97.152-234.816a329.088 329.088 0 0 1 200.832-95.488v364.288h364.288a329.344 329.344 0 0 1-96.64 201.792z m246.272-325.376l-2.56-28.16a397.824 397.824 0 0 0-115.2-244.672 399.36 399.36 0 0 0-245.248-114.944l-28.288-2.624a7.936 7.936 0 0 0-8.704 7.872V464c0 4.416 3.584 8 8 8l384-1.024a8 8 0 0 0 8-8.576z m-332.16-58.24V147.648c62.528 13.12 120.64 44.16 166.4 89.792a330.176 330.176 0 0 1 89.984 166.144l-256.448 0.64z"
                fill="#8744E1" p-id="5002"></path>
            </svg>
            <h3><span>非结构结数据分析<span></span></span></h3>
            <p>DataFrame数据操作与可视化、机器学习、数据分析,DataFrame数据操作与可视化、机器学习、数据分析,DataFrame数据操作与可视化、机器学习、数据分析</p>
            <a href="#/docment" target="">查看详情</a>
          </div>
          <!-- 右边图片 -->
          <div class="right-image">
            <img src="../image/ability/test1.png" alt="">
          </div>
        </div>
        <div v-if="isActiveAbility == 2" class="ability-show-item">
          <!-- 左边表述 -->
          <div class="left-description">
            <svg t="1657363772553" class="icon-ablity" viewBox="0 0 1024 1024" version="1.1"
              xmlns="http://www.w3.org/2000/svg" p-id="7560">
              <path
                d="M532.992 498.176c31.232-10.752 52.224-40.448 52.224-73.728 0-6.144-0.512-11.776-2.048-17.408l195.584-124.416-245.76 424.96V498.176zM431.104 407.552c-1.024 5.632-2.048 11.264-2.048 17.408 0 33.28 20.992 62.464 52.224 73.728v227.84L219.136 272.384l211.968 135.168z m123.904-44.032c-13.824-10.752-30.72-16.896-48.128-16.896-18.432 0-34.816 6.144-48.128 16.896L252.928 231.936h508.416L555.008 363.52z m295.936-235.52c-33.28 0-62.464 20.992-73.728 52.224H237.056C225.792 148.992 196.608 128 163.328 128c-43.008 0-77.824 34.816-77.824 77.824 0 43.008 34.816 77.824 77.824 77.824h2.048l277.504 480.768c-9.216 13.312-14.336 29.184-14.336 45.056 0 43.008 34.816 77.824 77.824 77.824 43.008 0 77.824-34.816 77.824-77.824 0-19.968-8.192-38.912-20.48-52.224l273.92-474.624c3.584 1.024 8.192 1.024 12.288 1.024 43.008 0 77.824-34.816 77.824-77.824 0-42.496-33.792-77.824-76.8-77.824z"
                fill="#8744E1" p-id="7561"></path>
            </svg>

            <h3><span>机器学习与数据分析<span></span></span></h3>
            <p>一键机器学习、无需编写代码、快速验证数据集、线性回归</p>
            <a href="#/document" target="">查看详情</a>
          </div>
          <!-- 右边图片 -->
          <div class="right-image">
            <img src="../image/ability/test1.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 第三部分 -->
    <div class="todo-warpper">
      <!-- 左侧图片 -->
      <div class="left-image-container">
        <img src="../image/todo/bg2.svg" alt="">
      </div>
      <!-- 右侧文本 -->
      <div class="right-content-container">
        <img src="../image/todo/云.svg" alt="" class="first">
        <img src="../image/todo/云.svg" alt="" class="second">
        <!-- //TODO -->
        <span>展望未来</span>
        <p>我们希望创建一个多种类型的数据库,涵盖不同领域的多种数据格式,丰富的数据与可视化手段,兼以数据分析与机器学习,希望构建一个完整而庞大的结构化数据生态。</p>
        <p>通过数据分析与可视化,方便直观的审视数据维度,从中寻求我们需要的各类信息,通过数据挖掘发现与寻找数据中最有价值的部分l。</p>
      </div>
    </div>


  </main>
</template>
 
 
<script lang='ts' setup>
import { useRouter } from 'vue-router'
import { ref, reactive, onMounted, onUnmounted } from 'vue'
const navigate = useRouter()

onMounted(() => {
  state.timeInter = <any>setInterval(pictureTimer, state.timeActive)
})
onUnmounted(() => {
  clearInterval(state.timeInter)
})
//第一部分轮播图
let isActivePicture = ref<number>(0)
const state = reactive<{ timeInter: string, timeActive: number }>({
  timeInter: '',  //定时器ID
  timeActive: 3000 //时间间隔

})
//轮播图定时器
let pictureTimer = () => {
  isActivePicture.value++;
  isActivePicture.value = isActivePicture.value % 2;
}

const hoverPicture = (value: number) => {
  isActivePicture.value = value
  clearInterval(state.timeInter)
}
const overPicture = () => {
  state.timeInter = <any>setInterval(pictureTimer, state.timeActive)
}
//第二部分激活菜单
let isActiveAbility = ref<number>(0)
</script>
 
<style scoped lang="less">
//展示动画，淡进淡出
@keyframes change {
  from {
    opacity: .4
  }

  to {
    opacity: 1
  }
}

// 1、内容容器
.content-warpper {
  height: 94vh;
  max-height: 803px;
  min-height: 650px;
  overflow: hidden;
  position: relative;

}

// 1、内容区域
.main-content {
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: calc(100% - 80px);
  position: relative;

  //文本区域
  .content-text {
    margin-left: 4.5%;
    position: relative;
    top: 20%;
    // z-index: 1;
    // width: 35%;

    // 标题
    .text-title {
      align-items: center;
      display: flex;
      justify-content: flex-start;
      position: relative;

      img {
        margin: 0 20px;
      }

      .label {
        font-family: PingFangSC, Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        letter-spacing: 0;
        font-size: 3.4em;
      }
    }

    .text-description {
      display: block;
      font-size: 22px;
      font-weight: 400;
      height: 30px;
      line-height: 30px;
      margin-left: 20px;
      margin-top: 27px;
      position: relative;
      text-indent: 20px;

      &::before {
        background-color: #9f5fdb;
        content: "";
        display: block;
        height: 30px;
        left: 0;
        position: absolute;
        top: 0;
        width: 4px;
      }
    }

    .text-buttons {
      display: flex;
      align-items: center;
      margin-top: 5.56%;

      .el-button {
        width: 134px;
        height: 38px;

        &:nth-child(1) {
          border: none;
          background-image: linear-gradient(180deg, #9f5fdb, #873ecb);
          opacity: .8;

          &:hover {
            opacity: 1;
          }

          span {
            color: #fff;
          }
        }

        &:nth-child(2) {
          border: 1px solid #9f5fdb;

          &:active {
            background: none;
          }

          span {
            color: #9f5fdb;
          }
        }

      }
    }

  }

  // 右侧
  .content-right {
    // bottom: 0;
    display: flex;
    flex-direction: column;
    // align-items: center;
    height: 83%;
    width: 55%;
    margin-right: 0;
    padding-bottom: 200px;
    padding-top: 100px;
    position: absolute;
    right: 0;
    top: 0;

    .title-warpper {

      .title {
        display: flex;
        height: 50px;
        margin-bottom: 25px;
        animation-name: change;
        animation-duration: 1.5s;

        img {
          display: block;
          margin-right: 10px;
          height: 75%;
        }

        // 标题文字
        h2 {
          font-size: 28px;
          font-weight: 600;
          font-family: PingFangSC, Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        }
      }

      p {
        display: block;
        margin-bottom: 25px;
        font-size: 18px;
        animation-name: change;
        animation-duration: 1.5s;
      }
    }


    // 图片
    .imag-warpper {
      position: relative;
      width: 100%;

      .img-container {
        width: 80%;
        position: absolute;
        box-shadow: 16px 20px 7px;

        .img-content {
          width: 100%;
          height: 100%;
          position: relative;

          //主图
          .img-show {
            width: 100%;
            object-fit: cover;
          }

          //四角元素
          .sport-element {
            position: absolute;
            width: 25%;

            &:nth-child(1) {
              bottom: -15%;
              left: -10%;
            }

            &:nth-child(2) {
              bottom: -15%;
              right: -10%;
            }

            &:nth-child(3) {
              top: -15%;
              right: -10%;
            }
          }
        }

        &:first-child {
          top: 0px;
          left: 0px;
          z-index: 1;
        }

        &:nth-child(2) {
          top: 80px;
          left: 80px;
          z-index: 1;
        }
      }

      //激活的图片
      .isActivePicture {
        z-index: 2 !important;
      }
    }

  }
}

// 2、能力特性容器
@abilityColor: #E0C3FC;
// @abilityColor: #5CCFFE;

.ability-warpper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('../image/ability/bg.svg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 25% 0;

  .menus-title {
    letter-spacing: 10px;
    font-family: PingFangSC, Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 28px;
    font-weight: 600;
    height: 40px;
    margin-top: 50px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }

  //列表字体大小
  @menusFrontSize: 25px;

  //点击warpper
  .menus-points-warpper {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: @menusFrontSize;
    color: #697b8c;
    margin-top: 30px;
    text-align: center;
    width: 100%;

    //span后的伪类，光标
    .spanAfter() {
      background-color: @abilityColor;
      content: "";
      display: block;
      height: 5px;
      position: absolute;
      bottom: -10px;
      width: 100%;
      border-radius: 2px;
    }

    li {
      display: block;
      height: 50px;
      width: 25%;
      position: relative;
      cursor: pointer;
      margin: 0 10px;

      .icon {
        width: @menusFrontSize;
        height: @menusFrontSize;
        margin-right: 10px;
        vertical-align: middle;
      }

      &:hover {
        color: @abilityColor;

        svg {
          path {
            fill: @abilityColor;
          }
        }
      }

      span {
        display: block;
        line-height: 50px;

        &:hover::after {
          .spanAfter
        }
      }
    }

    //激活能力图
    .isActiveAbility {
      color: @abilityColor;

      span {
        &::after {
          .spanAfter
        }
      }

      svg {
        path {
          fill: @abilityColor;
        }
      }
    }
  }

  .spread {
    display: block;
    width: 85%;
    height: 2px;
    opacity: .8;
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #fff 11%, #E0C3FC 35%, #8EC5FC 83%);
    border-radius: 15px / 1px;

  }

  //展示warpper
  .ability-show-warpper {
    margin: 25px 4.5%;
    margin-bottom: 108px;

    .ability-show-item {
      width: 100%;
      margin: 40px 0;
      display: flex;
      justify-content: flex-end;
      position: relative;
      // align-items: center;
      animation-name: change;
      animation-duration: 1.5s;

      .left-description {
        position: absolute;
        top: 0;
        left: 0;
        width: 22%;
        margin-left: 20%;

        .icon-ablity {
          // width:80px;
          height: 55px;
        }

        h3 {
          margin: 25px auto;
          position: relative;

          span {
            position: relative;

            span {
              background-color: #8744E1;
              display: block;
              height: 12px;
              position: absolute;
              bottom: 0;
              width: 100%;
              border-radius: 2px;
              opacity: .4
            }
          }

        }

        p {
          word-break: break-all;
          word-wrap: break-word;
          margin: 25px auto;
          color: rgba(0, 0, 0, .65);
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
        }

        a {
          color: #8744E1
        }
      }

      .right-image {
        width: 50%;
        margin-top: 50px;

        img {
          width: 90%;
          box-shadow: 16px 20px 7px;

        }
      }
    }
  }
}

// 3
.todo-warpper {
  margin: 15% 0 20% 0;
  display: flex;
  height: 650px;
  width: 100%;
  justify-content: space-between;

  // align-items:center;
  .left-image-container {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }
  }

  .right-content-container {
    background-image: url('../image/todo/title-bg2.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    position: relative;
    margin-right: 2.5%;
    padding-top: 8%;

    .first {
      position: absolute;
      left: 0;
      top: 0;
    }

    .second {
      position: absolute;
      right: 5%;
      top: 8%;
    }

    span {
      display: block;
      font-size: 28px;
      font-weight: 600;
      letter-spacing: 10px;
      z-index: 2;
      margin-top: 25px;
      margin: 35px 0;
      position: relative;

      &::before {
        display: inline-block;
        position: absolute;
        left: -15px;
        content: "";
        height: 100%;
        width: 5px;
        background-color: #8744E1;
      }
    }

    p {
      margin-top: 40px;
      word-break: break-all;
      word-wrap: break-word;
      z-index: 2;
      width: 50%;
      text-indent: 2em;
      line-height: 29px;
    }
  }
}
</style>