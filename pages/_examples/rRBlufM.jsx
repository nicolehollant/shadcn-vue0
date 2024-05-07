/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rRBlufM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <section class="min-h-screen w-full py-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
      <div class="container px-4 md:px-6">
        <div class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div class="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div>
              <h3 class="text-2xl font-bold text-center">Basic</h3>
              <div class="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span class="text-4xl font-bold">$29</span>/ month
              </div>
              <ul class="mt-4 space-y-2">
                <li class="flex items-center">
                  <CheckIcon class="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  720p Video Rendering
                </li>
                <li class="flex items-center">
                  <CheckIcon class="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  2GB Cloud Storage
                </li>
                <li class="flex items-center">
                  <CheckIcon class="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Basic Video Templates
                </li>
              </ul>
            </div>
            <div class="mt-6">
              <Button class="w-full">Get Started</Button>
            </div>
          </div>
          <div class="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500">
            <div class="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Popular
            </div>
            <div>
              <h3 class="text-2xl font-bold text-center">Pro</h3>
              <div class="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span class="text-4xl font-bold">$59</span>/ month
              </div>
              <ul class="mt-4 space-y-2">
                <li class="flex items-center">
                  <CheckIcon class="text-white text-2xs bg-green-500 rounded-full mr-2 p-1" />
                  1080p Video Rendering
                </li>
                <li class="flex items-center">
                  <CheckIcon class="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  10GB Cloud Storage
                </li>
                <li class="flex items-center">
                  <CheckIcon class="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Premium Video Templates
                </li>
                <li class="flex items-center">
                  <CheckIcon class="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Collaboration Tools
                </li>
              </ul>
            </div>
            <div class="mt-6">
              <Button class="w-full bg-gradient-to-r from-pink-500 to-purple-500">Get Started</Button>
            </div>
          </div>
          <div class="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div>
              <h3 class="text-2xl font-bold text-center">Enterprise</h3>
              <div class="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span class="text-4xl font-bold">$99</span>/ month
              </div>
              <ul class="mt-4 space-y-2">
                <li class="flex items-center">
                  <CheckIcon class="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  4K Video Rendering
                </li>
                <li class="flex items-center">
                  <CheckIcon class="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Unlimited Cloud Storage
                </li>
                <li class="flex items-center">
                  <CheckIcon class="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Custom Video Templates
                </li>
                <li class="flex items-center">
                  <CheckIcon class="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Advanced Collaboration Tools
                </li>
                <li class="flex items-center">
                  <CheckIcon class="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Dedicated Support
                </li>
              </ul>
            </div>
            <div class="mt-6">
              <Button class="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}