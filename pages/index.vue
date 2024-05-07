<template>
  <div class="grid grid-cols-[auto,minmax(0,1fr)] h-screen overflow-hidden">
    <aside class="h-full overflow-auto border-r border-gray-300">
      <div class="sticky h-16 px-4 flex items-center top-0 bg-white/60 border-b border-gray-300 backdrop-blur">
        Examples
      </div>
      <nav class="grid gap-1 px-4 mt-4">
        <Button
          @click="() => (active = page.slug)"
          :variant="page.slug === active ? 'default' : 'secondary'"
          v-for="page in pages"
        >
          {{ page.title }}
        </Button>
      </nav>
      <div class="h-40"></div>
    </aside>
    <div class="p-8 w-full h-full">
      <iframe lazy loading="lazy" class="w-full border-2 rounded-lg h-full" :src="`/_examples/${active}`" />
    </div>
  </div>
</template>

<script setup lang="ts">
const active = ref('0AwQeZp')
const pages = [
  { slug: '0AwQeZp', title: '0AwQeZp' },
  { slug: '0i5Ndzc', title: '0i5Ndzc' },
  { slug: '0W13RkH', title: '0W13RkH' },
  { slug: '4D5CdhA', title: '4D5CdhA' },
  { slug: '6KBhKBw', title: '6KBhKBw' },
  { slug: '9tk0WDvMrYm', title: '9tk0WDvMrYm' },
  { slug: 'AfXYpLG', title: 'AfXYpLG' },
  { slug: 'aLUPWlh', title: 'aLUPWlh' },
  { slug: 'AokCsMvkYGf', title: 'AokCsMvkYGf' },
  { slug: 'bo2N7pU', title: 'bo2N7pU' },
  { slug: 'btero0aK9VK', title: 'btero0aK9VK' },
  { slug: 'CF6CtRGlgJi', title: 'CF6CtRGlgJi' },
  { slug: 'fotaoxa', title: 'fotaoxa' },
  { slug: 'GkNjwEC', title: 'GkNjwEC' },
  { slug: 'ILScUPl', title: 'ILScUPl' },
  { slug: 'jB4MEcg', title: 'jB4MEcg' },
  { slug: 'Jd3OFwX', title: 'Jd3OFwX' },
  { slug: 'K7Lm5ql', title: 'K7Lm5ql' },
  { slug: 'LnxRCcq', title: 'LnxRCcq' },
  { slug: 'LOyl5Wee15h', title: 'LOyl5Wee15h' },
  { slug: 'MdtzuIg', title: 'MdtzuIg' },
  { slug: 'pElUF6n', title: 'pElUF6n' },
  { slug: 'PzDC5HP', title: 'PzDC5HP' },
  { slug: 'q78qlbK', title: 'q78qlbK' },
  { slug: 'rRBlufM', title: 'rRBlufM' },
  { slug: 'rrbUHPgS7bM', title: 'rrbUHPgS7bM' },
  { slug: 'SrpuFnW', title: 'SrpuFnW' },
  { slug: 'VT395Yf4lhX', title: 'VT395Yf4lhX' },
  { slug: 'W5ak7S2nJ9y', title: 'W5ak7S2nJ9y' },
  { slug: 'w9AZEZq', title: 'w9AZEZq' },
  { slug: 'x4SRZe6', title: 'x4SRZe6' },
  { slug: 'xiSjIAI', title: 'xiSjIAI' },
  { slug: 'XNlTLb7', title: 'XNlTLb7' },
  { slug: 'Xx6DE3L', title: 'Xx6DE3L' },
  { slug: 'YCXjMGmJSp5', title: 'YCXjMGmJSp5' },
  { slug: 'Yudwvib', title: 'Yudwvib' },
  { slug: 'zJO10z7wUTe', title: 'zJO10z7wUTe' },
  { slug: 'ZXXB7Tv', title: 'ZXXB7Tv' },
]
</script>
