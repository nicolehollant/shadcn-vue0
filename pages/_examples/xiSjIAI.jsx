/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xiSjIAI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <aside class="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono">
      <div class="flex justify-between items-center">
        <div class="flex space-x-2 text-red-500">
          <div class="w-3 h-3 rounded-full bg-red-500" />
          <div class="w-3 h-3 rounded-full bg-yellow-500" />
          <div class="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p class="text-sm">bash</p>
      </div>
      <div class="mt-4">
        <p class="text-green-400">$ npm install next</p>
        <p class="text-white">+ next@10.2.3</p>
        <p class="text-white">added 1 package, and audited 2 packages in 3s</p>
        <p class="text-green-400">$</p>
      </div>
    </aside>
  )
}