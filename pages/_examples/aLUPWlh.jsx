/**
 * v0 by Vercel.
 * @see https://v0.dev/t/aLUPWlh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div class="flex items-center justify-between rounded-full bg-zinc-800 p-2 max-w-max">
      <div class="flex space-x-2 border-r border-zinc-600 pr-1">
        <Button
          class="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
          size="icon"
          variant="ghost"
        >
          <MessageCircleIcon class="h-6 w-6 stroke-1" />
          <span class="sr-only">Create a comment</span>
        </Button>
        <div class="relative">
          <Button
            class="text-zinc-100 relative rounded-full hover:bg-gray-600 hover:text-zinc-100"
            size="icon"
            variant="ghost"
          >
            <InboxIcon class="h-6 w-6 stroke-1" />
            <span class="sr-only">Open inbox</span>
            <span class="absolute top-2 right-2 block h-2 w-2 rounded-full bg-blue-500" />
          </Button>
        </div>
        <Button
          class="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
          size="icon"
          variant="ghost"
        >
          <LayersIcon class="h-6 w-6 stroke-1" />
          <span class="sr-only">Edit</span>
        </Button>
      </div>
      <div class="flex space-x-2 border-r border-zinc-600 px-3">
        <img
          alt="Avatar 1"
          class="rounded-full border-2 border-red-500 bg-gray-500"
          height="32"
          src="/placeholder.svg"
          style={{
            aspectRatio: "32/32",
            objectFit: "cover",
          }}
          width="32"
        />
        <img
          alt="Avatar 2"
          class="rounded-full border-2 border-green-500 bg-gray-500"
          height="32"
          src="/placeholder.svg"
          style={{
            aspectRatio: "32/32",
            objectFit: "cover",
          }}
          width="32"
        />
        <div class="relative">
          <img
            alt="Avatar 3"
            class="rounded-full border-2 border-[#666666] bg-gray-700 opacity-50"
            height="32"
            src="/placeholder.svg"
            style={{
              aspectRatio: "32/32",
              objectFit: "cover",
            }}
            width="32"
          />
          <span class="absolute top-0 left-0 flex items-center justify-center w-full h-full text-white text-xs font-bold">
            9+
          </span>
        </div>
      </div>
      <div class="flex items-center justify-center space-x-2 pl-1">
        <Button
          class="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
          size="icon"
          variant="ghost"
        >
          <ShareIcon class="h-6 w-6 stroke-1" />
          <span class="sr-only">Open share UI</span>
        </Button>
        <Button
          class="text-zinc-100 rounded-full hover:bg-gray-600 hover:text-zinc-100"
          size="icon"
          variant="ghost"
        >
          <MenuIcon class="h-6 w-6 stroke-1" />
          <span class="sr-only">Open menu</span>
        </Button>
      </div>
    </div>
  )
}

function InboxIcon(props) {
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
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}


function LayersIcon(props) {
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
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
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


function ShareIcon(props) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}