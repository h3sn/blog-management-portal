<template>
  <el-button @click="handleConfirm">{{ label }}</el-button>
  <el-dialog v-model="isOpen" title="Warning" width="500" align-center>
    <span>{{ label }}しますか？</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeDialog">Cancel</el-button>
        <el-button type="primary" @click="handleSubmit"> {{ label }}する </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped></style>

<script lang="ts" setup>
// prop
// ------------------------------
const {
  label = '',
  handleSubmit = () => {},
  handleConfirm = () => {},
} = defineProps<{
  label: string;
  handleSubmit: () => void;
  handleConfirm: () => void;
}>();

// v-model
// ------------------------------
const isOpen = defineModel('isOpen', { required: true, default: false });

// close
// ------------------------------
const closeDialog = () => {
  isOpen.value = false;
};
</script>
