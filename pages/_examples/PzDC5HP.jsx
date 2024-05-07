/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PzDC5HP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div class="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <header class="w-full bg-[#ff6600] p-2 text-white flex justify-start items-center">
        <h1 class="text-lg font-bold border p-2">Y</h1>
        <nav class="ml-4">
          <ul class="flex space-x-4">
            <li>
              <a class="text-white hover:underline" href="#">
                Home
              </a>
            </li>
            <li>
              <a class="text-white hover:underline" href="#">
                New
              </a>
            </li>
            <li>
              <a class="text-white hover:underline" href="#">
                Past
              </a>
            </li>
            <li>
              <a class="text-white hover:underline" href="#">
                Comments
              </a>
            </li>
            <li>
              <a class="text-white hover:underline" href="#">
                Ask
              </a>
            </li>
            <li>
              <a class="text-white hover:underline" href="#">
                Show
              </a>
            </li>
            <li>
              <a class="text-white hover:underline" href="#">
                Jobs
              </a>
            </li>
            <li>
              <a class="text-white hover:underline" href="#">
                Submit
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main class="p-4 flex-grow">
        <ul class="space-y-2">
          <li class="border-b pb-1">
            <h2 class="text-sm font-bold">
              <a class="text-blue-500 hover:underline" href="#">
                Some interesting news article
              </a>
            </h2>
            <p class="text-xs text-gray-500">
              123 points by
              <a class="text-blue-500 hover:underline" href="#">
                username
              </a>
              2 hours ago |
              <a class="text-blue-500 hover:underline" href="#">
                20 comments
              </a>
            </p>
          </li>
          <li class="border-b pb-1">
            <h2 class="text-sm font-bold">
              <a class="text-blue-500 hover:underline" href="#">
                Another fascinating news article
              </a>
            </h2>
            <p class="text-xs text-gray-500">
              456 points by
              <a class="text-blue-500 hover:underline" href="#">
                another_username
              </a>
              3 hours ago |
              <a class="text-blue-500 hover:underline" href="#">
                45 comments
              </a>
            </p>
          </li>
        </ul>
      </main>
      <footer class="w-full bg-[#ff6600] p-4 text-white text-center text-sm">
        <p>Hacker News UI © 2023</p>
      </footer>
    </div>
  )
}