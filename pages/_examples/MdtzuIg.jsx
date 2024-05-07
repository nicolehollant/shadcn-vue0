/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MdtzuIg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div class="flex justify-center items-center h-screen bg-gray-100">
      <Card class="font-mono">
        <CardHeader class="text-red-500">
          <CardTitle>@nextjs</CardTitle>
        </CardHeader>
        <CardContent class="text-green-500">The React Framework – created and maintained by @vercel.</CardContent>
        <CardFooter class="text-blue-500">
          <div class="flex items-center space-x-4">
            <Button class="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">Red</Button>
            <Button class="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">Green</Button>
            <Button class="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">Blue</Button>
            <Button class="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600">Yellow</Button>
            <Button class="bg-purple-500 text-white px-4 py-2 rounded shadow hover:bg-purple-600">Purple</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}