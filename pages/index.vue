<script setup>
const envPath = `~/.env.${process.env.NODE_ENV || 'development'}`

</script>

<template>
  <div>
    <el-button>Default</el-button>
    <el-icon>
      <User style="font-size: 24px" />
    </el-icon>
    <div>{{ envPath }}</div>
  </div>
</template>

<style scoped></style>
