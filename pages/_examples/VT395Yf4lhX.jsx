/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VT395Yf4lhX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {NuxtLink} from "#components"

export default function Component() {
  return (
    <section class="fixed inset-0 flex items-center justify-center z-50 bg-[#304529]">
      <div class="bg-white dark:bg-gray-800 opacity-75 rounded-lg shadow-lg w-96 p-8">
        <h2 class="text-2xl font-bold mb-4 dark:text-white">Reservation Dates</h2>
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-4">
            <h3 class="mb-2 text-lg font-semibold dark:text-gray-200">This Week</h3>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">29.10.2023, Thursday</span>
              <NuxtLink class="text-green-500 hover:underline flex items-center" href="#">
                Reservation
                <ArrowRightIcon class="ml-2 h-5 w-5" />
              </NuxtLink>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">30.10.2023, Friday</span>
              <NuxtLink class="text-green-500 hover:underline flex items-center" href="#">
                Reservation
                <ArrowRightIcon class="ml-2 h-5 w-5" />
              </NuxtLink>
            </div>
            <div class="flex justify-between items-center line-through">
              <span class="text-gray-600 dark:text-gray-400">31.10.2023, Saturday</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">01.11.2023, Sunday</span>
              <NuxtLink class="text-green-500 hover:underline flex items-center" href="#">
                Reservation
                <ArrowRightIcon class="ml-2 h-5 w-5" />
              </NuxtLink>
            </div>
          </li>
          <li class="py-4">
            <h3 class="mb-2 text-lg font-semibold dark:text-gray-200">Three Weeks From Now</h3>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">19.11.2023, Thursday</span>
              <NuxtLink class="text-green-500 hover:underline flex items-center" href="#">
                Reservation
                <ArrowRightIcon class="ml-2 h-5 w-5" />
              </NuxtLink>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">20.11.2023, Friday</span>
              <NuxtLink class="text-green-500 hover:underline flex items-center" href="#">
                Reservation
                <ArrowRightIcon class="ml-2 h-5 w-5" />
              </NuxtLink>
            </div>
            <div class="flex justify-between items-center line-through">
              <span class="text-gray-600 dark:text-gray-400">21.11.2023, Saturday</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-gray-600 dark:text-gray-400">22.11.2023, Sunday</span>
              <NuxtLink class="text-green-500 hover:underline flex items-center" href="#">
                Reservation
                <ArrowRightIcon class="ml-2 h-5 w-5" />
              </NuxtLink>
            </div>
          </li>
        </ul>
        <button class="mt-4 w-full h-10 bg-green-500 hover:bg-green-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
          Close
        </button>
      </div>
    </section>
  )
}

function ArrowRightIcon(props) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}