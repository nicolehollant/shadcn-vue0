/**
 * v0 by Vercel.
 * @see https://v0.dev/t/x4SRZe6
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div class="w-full h-screen bg-cyan-500 flex items-center justify-center">
      <div class="w-96 h-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div class="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-4 py-2">
          <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Music Player</h2>
          <div class="flex space-x-2">
            <ExpandIcon class="text-gray-900 dark:text-gray-100" />
            <ConstructionIcon class="text-gray-900 dark:text-gray-100" />
            <MenuIcon class="text-gray-900 dark:text-gray-100" />
          </div>
        </div>
        <div class="flex flex-col space-y-4 p-4">
          <div class="flex items-center space-x-4">
            <img
              alt="Album Art"
              height="64"
              src="/placeholder.svg"
              style={{
                aspectRatio: "64/64",
                objectFit: "cover",
              }}
              width="64"
            />
            <div class="flex-1 space-y-1">
              <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Blowin' in the Wind</h2>
              <p class="text-sm text-gray-500 dark:text-gray-400">Bob Dylan</p>
            </div>
          </div>
          <Slider class="flex-1" value={[0]} />
          <div class="flex items-center justify-between">
            <Button size="icon" variant="ghost">
              <ArrowLeftIcon class="text-gray-900 dark:text-gray-100" />
            </Button>
            <Button class="p-2" size="icon" variant="primary">
              <PlayIcon class="text-gray-900 dark:text-gray-100" />
            </Button>
            <Button size="icon" variant="ghost">
              <ArrowRightIcon class="text-gray-900 dark:text-gray-100" />
            </Button>
          </div>
        </div>
        <div class="p-4">
          <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Playlist</h2>
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-900 dark:text-gray-100">Like a Rolling Stone</p>
              <PlayIcon class="text-gray-900 dark:text-gray-100" />
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-900 dark:text-gray-100">The Times They Are a-Changin'</p>
              <PlayIcon class="text-gray-900 dark:text-gray-100" />
            </div>
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-900 dark:text-gray-100">Subterranean Homesick Blues</p>
              <PlayIcon class="text-gray-900 dark:text-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
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


function ConstructionIcon(props) {
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
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  )
}


function ExpandIcon(props) {
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
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlayIcon(props) {
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
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}