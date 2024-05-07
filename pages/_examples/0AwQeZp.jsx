/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0AwQeZp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div class="flex items-center justify-center h-screen bg-green-500">
      <Card>
        <CardContent>
          <div class="space-y-8">
            <div class="space-y-2">
              <h2 class="text-3xl font-semibold">Contact Us</h2>
              <p class="text-zinc-500 dark:text-zinc-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div class="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div class="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div class="space-y-2">
                <Label>Pronoun</Label>
                <Select>
                  <SelectTrigger aria-label="Pronoun">
                    <SelectValue placeholder="Select your pronoun" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pronouns</SelectLabel>
                      <SelectItem value="he/him">He/Him</SelectItem>
                      <SelectItem value="she/her">She/Her</SelectItem>
                      <SelectItem value="they/them">They/Them</SelectItem>
                      <SelectItem value="prefer not to say">Prefer not to say</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div class="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea class="min-h-[100px]" id="message" placeholder="Enter your message" />
              </div>
              <Button class="bg-gray-800 text-white" type="submit">
                Send message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}