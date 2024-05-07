/**
 * v0 by Vercel.
 * @see https://v0.dev/t/K7Lm5ql
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {NuxtLink} from "#components"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectLabel, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div class="flex flex-col h-screen">
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-white font-bold text-xl">Company Logo</div>
          <div class="flex space-x-4">
            <NuxtLink href="#">
              <a class="text-white" href="#">
                <LayoutDashboardIcon class="h-4 w-4" />
                <span class="sr-only">Dashboard</span>
              </a>
            </NuxtLink>
            <NuxtLink href="#">
              <a class="text-white" href="#">
                <UsersIcon class="h-4 w-4" />
                <span class="sr-only">Users</span>
              </a>
            </NuxtLink>
            <NuxtLink href="#">
              <a class="text-white" href="#">
                <SettingsIcon class="h-4 w-4" />
                <span class="sr-only">Settings</span>
              </a>
            </NuxtLink>
          </div>
        </div>
      </nav>
      <div class="mt-10 flex-grow mb-10">
        <Card class="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Admin User Management</CardTitle>
            <CardDescription>Enter user details to create a new user</CardDescription>
          </CardHeader>
          <CardContent>
            <div class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="John" required />
                </div>
                <div class="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Doe" required />
                </div>
              </div>
              <div class="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="johndoe@example.com" required type="email" />
              </div>
              <div class="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" required type="password" />
              </div>
              <div class="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select id="role" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Roles</SelectLabel>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button class="w-full" type="submit">
              Create User
            </Button>
          </CardFooter>
        </Card>
      </div>
      <footer class="bg-gray-800 p-4 text-center text-white">
        <p>© 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  )
}

function LayoutDashboardIcon(props) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}