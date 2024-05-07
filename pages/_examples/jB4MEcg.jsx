/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jB4MEcg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"

export default function Component() {
  return (
    <Popover>
      <PopoverTrigger asChild="">
        <Button variant="outline">
          <svg
            class=" h-4 w-4"
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
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent class="w-96">
        <div class="grid gap-4">
          <div class="space-y-2">
            <h4 class="font-medium leading-none">Settings</h4>
            <p class="text-sm text-zinc-500 dark:text-zinc-400">Adjust your application settings.</p>
          </div>
          <div class="grid gap-2">
            <div class="grid grid-cols-3 items-center gap-4 w-full">
              <Label htmlFor="theme">Theme</Label>
              <Select class="col-span-2 h-8 w-full" id="theme">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Light" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div class="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="language">Language</Label>
              <Select class="col-span-2 h-8 w-full" id="language">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}