/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GkNjwEC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"

export default function Component() {
  return (
    <div class="flex">
      <aside class="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
        <div class="flex items-center mb-4 space-x-1">
          <img
            alt="Company Logo"
            height="30"
            src="/placeholder.svg"
            style={{
              aspectRatio: "30/30",
              objectFit: "cover",
            }}
            width="30"
          />
          <h1 class="text-lg font-medium">Acme</h1>
        </div>
        <nav class="space-y-2">
          <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
            <HomeIcon class="w-4 h-4" />
            <span class="text-sm font-medium">Home</span>
          </button>
          <button class="w-full flex items-center space-x-2 bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-800">
            <WalletIcon class="w-4 h-4" />
            <span class="text-sm font-medium">Transactions</span>
          </button>
          <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
            <UsersIcon class="w-4 h-4" />
            <span class="text-sm font-medium">Accounts</span>
          </button>
          <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
            <TicketIcon class="w-4 h-4" />
            <span class="text-sm font-medium">Tax</span>
          </button>
        </nav>
      </aside>
      <main class="flex-grow p-6">
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-lg font-medium">Transactions</h1>
          <Button
            class="px-2 py-1 bg-gray-800 text-white rounded-lg flex items-center space-x-2 text-sm"
            type="button"
          >
            <DownloadIcon class="w-4 h-4" />
            <span>Download</span>
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Category</TableHead>
              <TableHead class="text-right">Amount</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Mar 12</TableCell>
              <TableCell>WeWork</TableCell>
              <TableCell>
                <span class="px-2 py-1 bg-red-200 text-red-800 rounded-md">
                  <TagIcon class="w-4 h-4 inline-block mr-1" />
                  Office
                </span>
              </TableCell>
              <TableCell class="text-right">$175.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      class="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <MoveVerticalIcon class="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-40">
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Edit</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <ShareIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Share</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 13</TableCell>
              <TableCell>IKEA</TableCell>
              <TableCell>
                <span class="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">
                  <TagIcon class="w-4 h-4 inline-block mr-1" />
                  Home
                </span>
              </TableCell>
              <TableCell class="text-right">$450.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      class="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <MoveVerticalIcon class="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-40">
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Edit</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <ShareIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Share</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 14</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>
                <span class="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">
                  <TagIcon class="w-4 h-4 inline-block mr-1" />
                  Home
                </span>
              </TableCell>
              <TableCell class="text-right">$200.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      class="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <MoveVerticalIcon class="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-40">
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Edit</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <ShareIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Share</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 15</TableCell>
              <TableCell>Burger King</TableCell>
              <TableCell>
                <span class="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                  <TagIcon class="w-4 h-4 inline-block mr-1" />
                  Food
                </span>
              </TableCell>
              <TableCell class="text-right">$15.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      class="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <MoveVerticalIcon class="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-40">
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Edit</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <ShareIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Share</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 16</TableCell>
              <TableCell>WeWork</TableCell>
              <TableCell>
                <span class="px-2 py-1 bg-red-200 text-red-800 rounded-md">
                  <TagIcon class="w-4 h-4 inline-block mr-1" />
                  Office
                </span>
              </TableCell>
              <TableCell class="text-right">$250.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      class="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <MoveVerticalIcon class="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-40">
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Edit</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <ShareIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Share</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 17</TableCell>
              <TableCell>IKEA</TableCell>
              <TableCell>
                <span class="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">
                  <TagIcon class="w-4 h-4 inline-block mr-1" />
                  Home
                </span>
              </TableCell>
              <TableCell class="text-right">$350.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      class="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <MoveVerticalIcon class="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-40">
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Edit</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <ShareIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Share</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 18</TableCell>
              <TableCell>Home Depot</TableCell>
              <TableCell>
                <span class="px-2 py-1 bg-blue-200 text-blue-800 rounded-md">
                  <TagIcon class="w-4 h-4 inline-block mr-1" />
                  Home
                </span>
              </TableCell>
              <TableCell class="text-right">$100.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      class="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <MoveVerticalIcon class="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-40">
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Edit</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <ShareIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Share</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Mar 19</TableCell>
              <TableCell>Burger King</TableCell>
              <TableCell>
                <span class="px-2 py-1 bg-green-200 text-green-800 rounded-md">
                  <TagIcon class="w-4 h-4 inline-block mr-1" />
                  Food
                </span>
              </TableCell>
              <TableCell class="text-right">$20.00</TableCell>
              <TableCell>
                <Popover>
                  <PopoverTrigger>
                    <Button
                      class="px-2 py-1 bg-transparent text-black hover:bg-gray-200 active:bg-gray-300 rounded"
                      type="button"
                    >
                      <MoveVerticalIcon class="w-4 h-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-40">
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Edit</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <ShareIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Share</span>
                    </button>
                    <button class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg text-gray-500">
                      <DeleteIcon class="w-4 h-4" />
                      <span class="text-sm font-medium">Delete</span>
                    </button>
                  </PopoverContent>
                </Popover>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </main>
    </div>
  )
}

function DeleteIcon(props) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function DownloadIcon(props) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MoveVerticalIcon(props) {
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
      <polyline points="8 18 12 22 16 18" />
      <polyline points="8 6 12 2 16 6" />
      <line x1="12" x2="12" y1="2" y2="22" />
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


function TagIcon(props) {
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
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  )
}


function TicketIcon(props) {
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
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
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


function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}