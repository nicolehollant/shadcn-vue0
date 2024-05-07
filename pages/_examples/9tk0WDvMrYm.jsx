/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9tk0WDvMrYm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {NuxtLink} from "#components"

export default function Component() {
  return (
    <div class="flex flex-col items-center justify-center h-screen bg-[#E6FCFF]">
      <div class="text-4xl font-bold text-[#008080] my-10">Welcome to Math Learning App</div>
      <div class="grid grid-cols-2 gap-4 w-3/4">
        <NuxtLink
          class="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#FFCCE6] text-[#800000] font-semibold text-lg hover:bg-[#FF99CC] transition-colors duration-300"
          href="#"
        >
          <PlusIcon class="h-10 w-10 mb-2" />
          Addition
        </NuxtLink>
        <NuxtLink
          class="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#E6E6FA] text-[#000080] font-semibold text-lg hover:bg-[#CCCCFF] transition-colors duration-300"
          href="#"
        >
          <MinusIcon class="h-10 w-10 mb-2" />
          Subtraction
        </NuxtLink>
        <NuxtLink
          class="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#E6FAE6] text-[#008000] font-semibold text-lg hover:bg-[#CCFFCC] transition-colors duration-300"
          href="#"
        >
          <DivideIcon class="h-10 w-10 mb-2" />
          Multiplication
        </NuxtLink>
        <NuxtLink
          class="flex flex-col items-center justify-center py-4 px-6 rounded-xl bg-[#FAE6E6] text-[#800000] font-semibold text-lg hover:bg-[#FFCCCC] transition-colors duration-300"
          href="#"
        >
          <DivideIcon class="h-10 w-10 mb-2" />
          Division
        </NuxtLink>
      </div>
      <div class="mt-16 text-2xl font-bold text-[#008080]">Your Progress</div>
      <div class="w-3/4 h-2 bg-[#B3E0E6] rounded-full mt-4">
        <div class="h-full bg-[#008080] rounded-full w-1/2" />
      </div>
    </div>
  )
}

function DivideIcon(props) {
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
      <circle cx="12" cy="6" r="1" />
      <line x1="5" x2="19" y1="12" y2="12" />
      <circle cx="12" cy="18" r="1" />
    </svg>
  )
}


function MinusIcon(props) {
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
    </svg>
  )
}


function PlusIcon(props) {
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
      <path d="M12 5v14" />
    </svg>
  )
}