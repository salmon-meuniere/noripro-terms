<template>
    <div>
        <div class="mx-auto container max-w-screen-lg px-4 py-6">
            <ContentDoc v-slot="{ doc }">
                <div class="mb-8 text-center text-primary-950 max-w-xs mx-auto">
                    <h1 class="font-bold text-4xl md:text-6xl tracking-wide font-title mb-4">{{ doc.title }}</h1>
                    <p class="font-bold md:text-lg tracking-widest font-title">{{ doc.jaTitle }}</p>
                </div>
                <div class="flex space-x-2 mb-4">
                    <NuxtLink v-for="item in locales" :to="switchLocalePath(item.code).replace(/\/+$/, '/')" :class="locale === item.code && 'text-white bg-primary-900 hover:bg-primary-950'" class="block px-4 py-1.5 bg-primary-100 hover:bg-primary-200 transition-colors rounded-full">{{ item.name }}</NuxtLink>
                </div>
                <div v-if="locale !== 'ja'" class="border-2 border-red-500 bg-red-50 p-4 rounded-lg mb-4 shadow-lg shadow-red-200">
                    <h2 class="font-bold text-lg text-red-950 mb-2">{{ $t('disclaimerTitle') }}</h2>
                    <p class="text-red-950">{{ $t('disclaimerDescription') }}</p>
                </div>
                <ContentRenderer :value="doc" class="markdown-body leading-relaxed" />
            </ContentDoc>
        </div>
    </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<style scoped>

</style>