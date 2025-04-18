<!--
 * @Author: lw
 * @Date: 2025-03-13 10:14:25
 * @LastEditors: lw
 * @LastEditTime: 2025-04-10 15:34:16
 * @Mailbox: 742787938@qq.com
 * @FilePath: \FeiFanHuiWu\apps\web-naive\src\views\dashboard\home\index.vue
 * @Descripttion: 
-->
<script lang="ts" setup>
import { Page } from '@vben/common-ui';
import { useAccessStore, useUserStore } from '@vben/stores';

import { VbenIcon } from '@vben-core/shadcn-ui';

import { auditListApi } from '#/api/main/business/index';
import { projectHomePage } from '#/api/main/project/index';
import { dateForMat } from '#/mixin/day';
import { useCustomColors } from '#/mixin/index';
import { useAuthStore } from '#/store';

const AuthStore = useAuthStore();
const UserStore = useUserStore();
const AccessStore = useAccessStore();
const { getTagColors } = useCustomColors();
const router = useRouter();
// import { VbenIcon } from '@vben-core/shadcn-ui';

// 获取待办、已办列表
const todoList = ref<any[]>([]);
const doneList = ref<any[]>([]);
const getTodoList = () => {
  const params = {
    curPage: 1,
    rowNum: 5,
    result: 0,
  };
  auditListApi(params).then((res: any) => {
    todoList.value = res.records;
  });
};
const getDoneoList = () => {
  const params = {
    curPage: 1,
    rowNum: 5,
    result: 1,
  };
  auditListApi(params).then((res: any) => {
    doneList.value = res.records;
  });
};

const toRouter = (name: string) => {
  router.push({
    name,
  });
};
//
const handleTodoApply = (row: any) => {
  if (!AuthStore.btnCodeAccess('project-approval-apply')) {
    return;
  }
  router.push({
    path: '/project/project-approval-apply',
    query: {
      id: row.targetId.toString(),
      type: 2,
    },
  });
};
const handleDoneInfo = (row: any) => {
  if (!AuthStore.btnCodeAccess('project-approval-info')) {
    return;
  }
  router.push({
    path: '/project/project-approval-info',
    query: {
      id: row.targetId.toString(),
      type: 1,
    },
  });
};
const pageDate = ref<any[]>();
const getHomePage = () => {
  projectHomePage({}).then((res) => {
    pageDate.value = res;
  });
};
const quickRouteList = ref<any[]>([]);
const initQuickRouteList = () => {
  const temp = AuthStore.initAllMenu(AccessStore.baseMenuList).sort(
    (a, b) => a.meta.order - b.meta.order,
  );
  const data: any[] = [];
  temp.forEach((elm: any) => {
    elm.children.forEach((v: any) => {
      if (!v.meta.hideInMenu) data.push(v);
    });
  });
  quickRouteList.value = data;
};
const handleQuick = (event: any) => {
  router.push({
    name: event.name,
  });
};
onMounted(() => {
  initQuickRouteList();
  getTodoList();
  getDoneoList();
  getHomePage();
});
</script>

<template>
  <Page class="h-full p-10" content-class="">
    <div class="pageContent h-full">
      <div class="d-grid-box">
        <div class="item item1 bg-fff col-g-20 a-center flex p-20">
          <div>
            <n-avatar :size="85" src="/images/logo.jpg" />
          </div>
          <div class="flex-column row-g-20 j-center">
            <div class="fs-16 cr-333">{{ UserStore.companyName }}</div>
            <div class="fs-14 cr-999">
              上次登陆时间：{{
                dateForMat(UserStore.userInfo?.loginTime, 'YYYY-MM-DD HH:mm:ss')
              }}
            </div>
          </div>
        </div>
        <div class="item item2 bg-fff p-20">
          <div class="sx-list-box">
            <div class="j-between flex">
              <div class="a-center col-g-5 flex">
                <n-image
                  width="24"
                  src="/images/home/dbsx.png"
                  preview-disabled
                />
                <div class="fs-16 cr-333">待办事项</div>
              </div>
              <div class="a-center col-g-5 flex" @click="toRouter('todo-list')">
                <div class="fs-14 cr-666">查看全部</div>
                <span class="icon-[lucide--chevron-right]"></span>
              </div>
            </div>
            <n-divider style="margin-top: 10px; margin-bottom: 10px" />
            <div
              class="a-center j-center m-t-50 flex"
              v-if="todoList.length === 0"
            >
              <n-empty description="暂无待办事项" />
            </div>
            <div class="grid-list" v-else>
              <div
                v-for="(item, index) in todoList"
                :key="index"
                @click="handleTodoApply(item)"
                class="pointer"
              >
                <div class="grid-item">
                  <div class="a-center col-g-10 fs-14 cr-333 o-x-hidden flex">
                    <n-tag :color="getTagColors('success')"> 待审批 </n-tag>
                    <n-ellipsis style="width: 100%" class="fs-14 cr-333">
                      {{ item.targetName }}
                    </n-ellipsis>
                  </div>
                  <div class="fs-14 cr-999 text-right">
                    {{ dateForMat(item.createTime, 'YYYY-MM-DD HH:mm:ss') }}
                  </div>
                </div>
                <n-divider style="margin-top: 10px; margin-bottom: 10px" />
              </div>
            </div>
          </div>
          <div class="sx-list-box">
            <div class="j-between flex">
              <div class="a-center col-g-5 flex">
                <n-image
                  width="24"
                  src="/images/home/ybsx.png"
                  preview-disabled
                />
                <div class="fs-16 cr-333">已办事项</div>
              </div>
              <div class="a-center col-g-5 flex" @click="toRouter('done-list')">
                <div class="fs-14 cr-666">查看全部</div>
                <span class="icon-[lucide--chevron-right]"></span>
              </div>
            </div>
            <n-divider style="margin-top: 10px; margin-bottom: 10px" />
            <div
              class="a-center j-center m-t-50 flex"
              v-if="doneList.length === 0"
            >
              <n-empty description="暂无已办事项" />
            </div>
            <div class="grid-list" v-else>
              <div
                v-for="(item, index) in doneList"
                :key="index"
                @click="handleDoneInfo(item)"
                class="pointer"
              >
                <div class="grid-item">
                  <div class="a-center col-g-10 fs-14 cr-333 o-x-hidden flex">
                    <n-tag
                      :color="{
                        color: '#FF9800',
                        textColor: '#FFF',
                        borderColor: '#FF9800',
                      }"
                    >
                      已审批
                    </n-tag>
                    <n-ellipsis style="width: 100%" class="fs-14 cr-333">
                      {{ item.targetName }}
                    </n-ellipsis>
                  </div>
                  <div class="fs-14 cr-999 text-right">
                    {{ dateForMat(item.createTime, 'YYYY-MM-DD HH:mm:ss') }}
                  </div>
                </div>
                <n-divider style="margin-top: 10px; margin-bottom: 10px" />
              </div>
            </div>
          </div>
        </div>
        <div class="item item3 bg-fff flex-column row-g-20 p-20">
          <div class="fs-24 cr-999">快捷入口</div>
          <div class="quick-list-box">
            <div
              class="flex-column row-g-10 col-g-10 j-center a-center pointer"
              v-for="(item, index) in quickRouteList"
              :key="index"
              @click="handleQuick(item)"
            >
              <div class="iconItem">
                <VbenIcon
                  class="quickIconItem"
                  :icon="item.meta.icon"
                  fallback
                />
              </div>
              <div class="fs-18 cr-333">{{ $t(item.meta.functionName) }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-box bg-fff p-20">
        <div class="flex-column row-g-30">
          <div class="fs-18 cr-999">项目收入</div>
          <div class="footer-d-grid-box">
            <div
              class="flex-column row-g-5 j-center a-center"
              v-for="(item, index) in pageDate"
              :key="index"
            >
              <div class="fs-16 cr-333">{{ item.name }}</div>
              <div class="fs-24 cr-34B">{{ item.salePrice }}</div>
            </div>
          </div>
        </div>
        <div class="flex-column row-g-30">
          <div class="fs-18 cr-999">项目成本</div>
          <div class="footer-d-grid-box">
            <div
              class="flex-column row-g-5 j-center a-center"
              v-for="(item, index) in pageDate"
              :key="index"
            >
              <div class="fs-16 cr-333">{{ item.name }}</div>
              <div class="fs-24 cr-2A6">{{ item.buyPayPrice }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Page>
</template>

<style lang="scss" scoped>
.pageContent {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  .d-grid-box {
    display: grid;
    grid-template-rows: 150px 1fr;
    grid-template-columns: 1fr 33%;
    gap: 10px;

    .item1 {
      height: 150px;

      // height: min-content;
    }

    .item2 {
      grid-row: span 2;

      .sx-list-box {
        height: 300px;
      }

      .grid-list {
        .grid-item {
          display: grid;
          grid-template-columns: 1fr 150px;
          column-gap: 10px;
          align-items: center;
        }
      }
    }

    .item3 {
      .quick-list-box {
        display: flex;
        flex-wrap: wrap;
        gap: 20px 40px;
      }

      .iconItem {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 95px;
        height: 95px;
        background: #e3f0ff;
        border-radius: 50%;

        .quickIconItem {
          width: 32px;
          height: 32px;
          color: #2a66eb;
        }
      }
    }
  }

  .footer-box {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .footer-d-grid-box {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }
  // grid-template-columns: 1fr 33%;
  // background-color: #fff;
}
</style>
