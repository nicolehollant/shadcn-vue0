/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fotaoxa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import {NuxtLink} from "#components"

export default function Component() {
  return (
    <div class="flex flex-col h-screen w-screen bg-white dark:bg-zinc-900">
      <nav class="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800">
        <div class="flex items-center space-x-4">
          <svg
            class=" h-8 w-8 text-zinc-900 dark:text-zinc-50"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <h1 class="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Analytics Dashboard</h1>
        </div>
        <div class="flex items-center space-x-4">
          <Button size="icon" variant="ghost">
            <svg
              class=" h-5 w-5 text-zinc-500 dark:text-zinc-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
            <span class="sr-only">Toggle dark mode</span>
          </Button>
          <Button size="icon" variant="ghost">
            <svg
              class=" h-5 w-5 text-zinc-500 dark:text-zinc-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
            <span class="sr-only">View notifications</span>
          </Button>
        </div>
      </nav>
      <div class="flex flex-1 overflow-hidden">
        <aside class="w-64 border-r border-zinc-200 dark:border-zinc-800 overflow-auto">
          <nav class="flex flex-col gap-4 p-4">
            <h2 class="text-lg font-semibold text-zinc-500 dark:text-zinc-400">Filters</h2>
            <div class="space-y-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a metric" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="users">Users</SelectItem>
                  <SelectItem value="sessions">Sessions</SelectItem>
                  <SelectItem value="bounce_rate">Bounce Rate</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="last_7_days">Last 7 days</SelectItem>
                  <SelectItem value="last_30_days">Last 30 days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </nav>
        </aside>
        <main class="flex-1 overflow-auto p-4">
          <div class="grid gap-4">
            <div class="h-96 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
            <div class="h-96 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
          </div>
          <div class="grid gap-4 mt-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div class="h-64 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
            <div class="h-64 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
            <div class="h-64 rounded-lg bg-zinc-100 dark:bg-zinc-800" />
          </div>
        </main>
      </div>
      <footer class="flex items-center justify-between px-6 py-4 border-t border-zinc-200 dark:border-zinc-800">
        <p class="text-sm text-zinc-500 dark:text-zinc-400">© 2023 Acme Inc.</p>
        <nav class="flex items-center space-x-4">
          <NuxtLink class="text-sm text-zinc-500 dark:text-zinc-400" href="#">
            Terms
          </NuxtLink>
          <NuxtLink class="text-sm text-zinc-500 dark:text-zinc-400" href="#">
            Privacy
          </NuxtLink>
        </nav>
      </footer>
    </div>
  )
}