/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XNlTLb7
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {NuxtLink} from "#components"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div class="bg-gray-100 min-h-screen flex items-center justify-center">
      <div class="max-w-sm rounded-lg shadow-lg bg-white p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <div class="space-y-2 text-center">
          <h1 class="text-3xl font-bold">Login</h1>
          <p class="text-zinc-500 dark:text-zinc-400">
            By logging in, you accept our
            <NuxtLink class="text-blue-500 hover:text-blue-700" href="#">
              terms
            </NuxtLink>
            and
            <NuxtLink class="text-blue-500 hover:text-blue-700" href="#">
              privacy policy
            </NuxtLink>
            .{"\n                            "}
          </p>
        </div>
        <div class="space-y-4">
          <div class="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" />
          </div>
          <div class="flex items-center space-x-2">
            <hr class="flex-grow border-zinc-200 dark:border-zinc-700" />
            <span class="text-zinc-400 dark:text-zinc-300 text-sm">OR</span>
            <hr class="flex-grow border-zinc-200 dark:border-zinc-700" />
          </div>
          <Button class="w-full bg-[#4285F4] text-white" variant="outline">
            <div class="flex items-center justify-center">
              <ChromeIcon class="w-5 h-5 mr-2" />
              Login with Google
            </div>
          </Button>
          <Button class="w-full bg-black text-white" variant="outline">
            <div class="flex items-center justify-center">
              <AppleIcon class="w-5 h-5 mr-2" />
              Login with Apple
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}

function AppleIcon(props) {
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
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  )
}


function ChromeIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}