/**
 * v0 by Vercel.
 * @see https://v0.dev/t/btero0aK9VK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div key="1" class="flex flex-col h-screen">
      <header class="h-[60px] flex items-center px-4 shadow-md">
        <h1 class="text-sm font-medium text-gray-900 dark:text-gray-50 flex items-center">
          <KanbanIcon class="mr-2 h-4 w-4" />
          Kanban Board
        </h1>
      </header>
      <main class="flex-1 overflow-auto py-4 px-4 bg-gray-100">
        <div class="flex space-x-4">
          <div class="w-72">
            <h2 class="mb-4 text-sm font-medium text-gray-400 dark:text-gray-300 flex items-center">
              <BackpackIcon class="mr-2 h-4 w-4" />
              Backlog
            </h2>
            <div class="bg-white p-3 rounded-lg shadow-sm mb-4">
              <h3 class="text-sm font-semibold mb-1">Task 1</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">This is a description for task 1.</p>
            </div>
            <div class="bg-white p-3 rounded-lg shadow-sm mb-4">
              <h3 class="text-sm font-semibold mb-1">Task 2</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">This is a description for task 2.</p>
            </div>
            <div class="bg-white p-3 rounded-lg shadow-sm mb-4">
              <h3 class="text-sm font-semibold mb-1">Task 3</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">This is a description for task 3.</p>
            </div>
          </div>
          <div class="w-72">
            <h2 class="mb-4 text-sm font-medium text-gray-400 dark:text-gray-300 flex items-center">
              <ListTodoIcon class="mr-2 h-4 w-4" />
              To Do
            </h2>
            <div class="bg-white p-3 rounded-lg shadow-sm mb-4">
              <h3 class="text-sm font-semibold mb-1">Task 4</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">This is a description for task 4.</p>
            </div>
            <div class="bg-white p-3 rounded-lg shadow-sm mb-4">
              <h3 class="text-sm font-semibold mb-1">Task 5</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">This is a description for task 5.</p>
            </div>
          </div>
          <div class="w-72">
            <h2 class="mb-4 text-sm font-medium text-gray-400 dark:text-gray-300 flex items-center">
              <ActivityIcon class="mr-2 h-4 w-4" />
              In Progress
            </h2>
            <div class="bg-white p-3 rounded-lg shadow-sm mb-4">
              <h3 class="text-sm font-semibold mb-1">Task 6</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">This is a description for task 6.</p>
            </div>
            <div class="bg-white p-3 rounded-lg shadow-sm mb-4">
              <h3 class="text-sm font-semibold mb-1">Task 7</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">This is a description for task 7.</p>
            </div>
          </div>
          <div class="w-72">
            <h2 class="mb-4 text-sm font-medium text-gray-400 dark:text-gray-300 flex items-center">
              <CheckIcon class="mr-2 h-4 w-4" />
              Done
            </h2>
            <div class="bg-white p-3 rounded-lg shadow-sm mb-4">
              <h3 class="text-sm font-semibold mb-1">Task 8</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">This is a description for task 8.</p>
            </div>
            <div class="bg-white p-3 rounded-lg shadow-sm mb-4">
              <h3 class="text-sm font-semibold mb-1">Task 9</h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">This is a description for task 9.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function ActivityIcon(props) {
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
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  )
}


function BackpackIcon(props) {
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
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      <path d="M8 10h8" />
      <path d="M8 18h8" />
    </svg>
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


function KanbanIcon(props) {
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
      <path d="M6 5v11" />
      <path d="M12 5v6" />
      <path d="M18 5v14" />
    </svg>
  )
}


function ListTodoIcon(props) {
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
      <rect x="3" y="5" width="6" height="6" rx="1" />
      <path d="m3 17 2 2 4-4" />
      <path d="M13 6h8" />
      <path d="M13 12h8" />
      <path d="M13 18h8" />
    </svg>
  )
}