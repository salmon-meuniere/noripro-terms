<template>
    <div>
        NoriPro Terms Translations
        <ul class="my-2 list-disc ml-8">
            <li v-for="item in data">
                <GNuxtLink :to="item._path">{{ item.title }}</GNuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const { data } = await useAsyncData('index', () => queryContent(`/${locale.value}/`).only(['_path', 'title']).find());
</script>

<style scoped>

</style>