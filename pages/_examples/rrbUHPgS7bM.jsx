/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rrbUHPgS7bM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div class="w-full h-screen bg-white dark:bg-gray-800 p-8">
      <div class="flex flex-col items-center justify-center h-full">
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">URL Shortener</h1>
        <div class="w-full max-w-md">
          <div class="rounded-md shadow-sm">
            <input
              aria-label="URL input"
              class="block w-full text-lg py-3 px-4 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
              type="text"
              value="https://www.example.com"
            />
          </div>
          <Select class="mt-2">
            <SelectTrigger>
              <SelectValue
                class="block w-full text-lg py-3 px-4 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                placeholder="Select a format"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="markdown">Markdown</SelectItem>
                <SelectItem value="html">HTML</SelectItem>
                <SelectItem value="plain">Plain Text</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button class="w-full mt-4 py-2 rounded-b-md" type="submit" variant="primary">
            Shorten URL
          </Button>
        </div>
        <div class="w-full max-w-md mt-8">
          <h2 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Your Shortened URLs</h2>
          <div class="space-y-4">
            <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
              <div>
                <p class="text-sm text-gray-900 dark:text-white mb-1">short.ly/3rFg4</p>
                <p class="text-xs text-gray-500">Clicked 24 times</p>
              </div>
              <Button size="sm" variant="ghost">
                Copy
              </Button>
            </div>
            <div class="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
              <div>
                <p class="text-sm text-gray-900 dark:text-white mb-1">short.ly/7tYh1</p>
                <p class="text-xs text-gray-500">Clicked 67 times</p>
              </div>
              <Button size="sm" variant="ghost">
                Copy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}