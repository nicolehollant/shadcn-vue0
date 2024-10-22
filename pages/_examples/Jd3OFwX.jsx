/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Jd3OFwX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export default function Component() {
  return (
    <div class="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto">
      <div class="flex justify-between items-center px-6 py-4">
        <div class="flex space-x-4">
          <div>
            <img
              alt="Profile"
              class="rounded-full"
              height="48"
              src="/placeholder.svg"
              style={{
                aspectRatio: "48/48",
                objectFit: "cover",
              }}
              width="48"
            />
          </div>
          <div>
            <div class="text-lg font-bold dark:text-white">John Doe</div>
            <div class="text-sm text-gray-500 dark:text-gray-200">@johndoe</div>
          </div>
        </div>
        <div>
          <Select class="w-6 h-6 text-gray-500 dark:text-gray-200">
            <SelectTrigger aria-label="Options">
              <svg
                class=" w-6 h-6 text-gray-500 dark:text-gray-200"
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
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="delete">Delete tweet</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div class="px-6 py-4">
        <div class="text-sm text-gray-800 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque id erat at blandit. Donec
          ullamcorper turpis vitae dolor lacinia mollis. Donec at augue eget ipsum porttitor interdum.
        </div>
      </div>
      <div class="flex justify-between items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700 p-4">
        <div class="flex items-center space-x-4">
          <svg
            class=" h-4 w-4 text-gray-500 dark:text-gray-200"
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
            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
            <path d="M8 16H3v5" />
          </svg>
          <svg
            class=" h-4 w-4 text-gray-500 dark:text-gray-200"
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
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <svg
            class=" h-4 w-4 text-gray-500 dark:text-gray-200"
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
          </svg>
        </div>
        <div class="flex items-center space-x-4">
          <svg
            class=" h-4 w-4 text-gray-500 dark:text-gray-200"
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
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
          <svg
            class=" h-4 w-4 text-gray-500 dark:text-gray-200"
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
            <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
          </svg>
        </div>
      </div>
    </div>
  )
}