/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pElUF6n
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div class="min-h-screen bg-gradient-to-r from-purple-300 via-pink-200 to-red-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 flex items-center justify-center">
      <div class="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden dark:bg-zinc-900">
        <div class="flex justify-between items-center px-6 py-4">
          <div class="flex items-center">
            <svg
              class=" h-6 w-6 text-yellow-500"
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
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
            <div class="mx-3">
              <h3 class="text-lg font-medium text-gray-700 dark:text-gray-200">Starry Night</h3>
              <p class="text-gray-500 dark:text-gray-400">Vincent van Gogh</p>
            </div>
          </div>
          <div class="flex items-center">
            <svg
              class=" h-6 w-6 text-red-500"
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
              class=" h-6 w-6 text-gray-500 dark:text-gray-400 ml-4"
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
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
        </div>
        <div class="relative">
          <img
            alt="Starry Night"
            class="object-cover w-full h-64"
            height="400"
            src="/placeholder.svg"
            style={{
              aspectRatio: "800/400",
              objectFit: "cover",
            }}
            width="800"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <svg
              class=" h-20 w-20 text-white"
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
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>
        <div class="px-6 py-4">
          <div class="flex items-center">
            <svg
              class=" h-5 w-5 text-gray-500 dark:text-gray-400"
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
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            </svg>
            <div class="w-full mx-3">
              <div class="relative mt-1 h-1 bg-gray-200 rounded overflow-hidden dark:bg-gray-800">
                <div class="absolute left-0 top-0 h-full bg-yellow-500 w-1/2" />
              </div>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">50%</p>
          </div>
          <div class="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-3">
            <span>00:00</span>
            <span>3:35</span>
          </div>
        </div>
      </div>
    </div>
  )
}