/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zJO10z7wUTe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-200 dark:bg-gray-800">
      <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
        <div class="text-right text-4xl p-4 bg-gray-100 dark:bg-gray-800 dark:text-gray-200">0</div>
        <div class="grid grid-cols-4 gap-1 p-4 bg-gray-100 dark:bg-gray-800">
          <Button class="col-span-2 bg-red-500 text-white">C</Button>
          <Button class="bg-yellow-500 text-black">⌫</Button>
          <Button class="bg-yellow-500 text-black">/</Button>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button class="bg-yellow-500 text-black">*</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button class="bg-yellow-500 text-black">-</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button class="bg-yellow-500 text-black">+</Button>
          <Button class="col-span-2">0</Button>
          <Button>.</Button>
          <Button class="bg-green-500 text-white">=</Button>
        </div>
      </div>
    </div>
  )
}