/**
 * v0 by Vercel.
 * @see https://v0.dev/t/W5ak7S2nJ9y
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div class="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex justify-center items-center">
      <div class="flex flex-col p-8 space-y-4 bg-white shadow-lg rounded-lg">
        <div class="flex flex-col items-center">
          <label class="mt-2 cursor-pointer">
            <input aria-label="Upload profile picture" class="hidden" type="file" />
            <img
              alt="Doctor's profile picture"
              class="rounded-full"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="100"
            />
          </label>
          <h2 class="mt-2 text-lg font-semibold">Dr. Maximilian Mustermann</h2>
        </div>
        <div class="flex gap-4">
          <Input
            aria-label="Doctor's first name"
            class="border rounded-md p-2 flex-grow"
            placeholder="First name"
            type="text"
          />
          <Input
            aria-label="Doctor's last name"
            class="border rounded-md p-2 flex-grow"
            placeholder="Last name"
            type="text"
          />
        </div>
        <Input aria-label="Doctor's title" class="border rounded-md p-2" placeholder="Doctor's title" type="text" />
        <Select>
          <SelectTrigger class="w-full border rounded-md p-2">
            <SelectValue placeholder="Select specialization" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Specializations</SelectLabel>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
              <SelectItem value="pediatrics">Pediatrics</SelectItem>
              <SelectItem value="psychiatry">Psychiatry</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div class="flex flex-wrap gap-2">
          <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            English
            <Button class="ml-2 bg-transparent hover:bg-transparent" size="sm" variant="destructive">
              <XIcon class="h-4 w-4 text-blue-800" />
            </Button>
          </div>
          <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            Spanish
            <Button class="ml-2 bg-transparent hover:bg-transparent" size="sm" variant="destructive">
              <XIcon class="h-4 w-4 text-blue-800" />
            </Button>
          </div>
          <Button size="sm" variant="outline">
            Add Language
          </Button>
        </div>
        <Button
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          type="submit"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}