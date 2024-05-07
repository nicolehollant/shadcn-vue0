/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ZXXB7Tv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <Card
      key="1"
      class="w-[500px] mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-3xl m-3"
    >
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <span class="object-cover md:w-48 rounded-md bg-muted w-[192px] h-[192px]" />
        </div>
        <div class="p-8 w-full">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <img
                alt="Profile picture"
                class="rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div class="ml-4">
                <div class="uppercase tracking-wide text-sm text-black dark:text-white font-semibold">
                  Chamath Palihapitiya
                </div>
                <div class="text-gray-400 dark:text-gray-300">@chamath</div>
              </div>
            </div>
            <TwitterIcon class="h-6 w-6 text-blue-500 fill-current" />
          </div>
          <p class="mt-4 text-gray-500 dark:text-gray-300">
            I’m in the arena trying stuff. Some will work, some won’t. But always learning. You’re anonymous and afraid
            of your own shadow. Enjoy the sidelines.
          </p>
          <div class="flex mt-6 justify-between items-center">
            <div class="flex space-x-4 text-gray-400 dark:text-gray-300">
              <div class="flex items-center">
                <HeartIcon class="h-6 w-6 text-red-500" />
                <span class="ml-1 text-red-500">566</span>
              </div>
              <div class="flex items-center">
                <MessageCircleIcon class="h-6 w-6 text-green-500" />
                <span class="ml-1 text-green-500">241</span>
              </div>
              <div class="flex items-center">
                <RepeatIcon class="h-6 w-6 text-blue-500" />
                <span class="ml-1 text-blue-500">487</span>
              </div>
            </div>
            <div class="text-gray-400 dark:text-gray-300">7:22 AM · Aug 22, 2023</div>
          </div>
        </div>
      </div>
    </Card>
  )
}

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  )
}


function RepeatIcon(props) {
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
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}