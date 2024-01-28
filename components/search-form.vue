<template>
  <div class="border-solid border-2 rounded-lg border-gray-600 p-10">
    <div class="py-5 flex space-x-20">
      <URadio text-lg font-large v-for="method of methods" :key="method.value" v-model="selected" v-bind="method" :value="method.value" name="condition" />
    </div>

    <div>
      <UFormGroup v-slot="{ error }" label="ZIP" :error="!zip && 'You must enter a zip'" help="This is a nice zip!">
      <UInput v-model="zip" type="text" placeholder="Enter ZIP" :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
    </UFormGroup>
    </div>
  </div>
</template>

<script setup>
  const zip = ref(77002)
  const methods = [
  { value: 'new', label: 'New' },
  { value: 'used', label: 'Used' },
]
const selected = ref('new')

</script>

<style scoped>

</style>