<template>
  <div>PostList</div>
  <router-link :to="{ path: ROUTER.POST.REGISTER.PATH }"><el-button>新規投稿</el-button></router-link>
  <el-table :data="posts">
    <el-table-column prop="id" label="Id" width="80" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column label="color">
      <template #default="scope"
        ><el-row :gutter="10" align="middle"
          ><el-col :span="4"><div class="color-dot" :style="`background-color: ${scope.row.color}`"></div></el-col>
          <el-col :span="20">{{ scope.row.color }}</el-col>
        </el-row></template
      >
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
.color-dot {
  width: 10px;
  height: 10px;
}
</style>

<script lang="ts" setup>
// controller
import { useGetPostListController } from '@/app/components/pages/post/PostController';
// domain
import { ROUTER } from '@/app/core/domain/router';

// 投稿一覧を取得する
// ------------------------------
const { getPostListController, posts } = useGetPostListController();

// ロード処理
// ------------------------------
const load = () => {
  getPostListController();
};
load();
</script>
