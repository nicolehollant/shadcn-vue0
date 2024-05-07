/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AokCsMvkYGf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <Card
      key="1"
      class="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
    >
      <img
        alt="Profile picture"
        class="object-cover w-full"
        height="320"
        src="/placeholder.svg"
        style={{
          aspectRatio: "320/320",
          objectFit: "cover",
        }}
        width="320"
      />
      <CardContent class="p-4">
        <h2 class="text-2xl font-bold hover:text-gray-700 transition-all duration-200">Emily Johnson</h2>
        <h3 class="text-gray-500 hover:text-gray-600 transition-all duration-200">Front-end Developer</h3>
        <p class="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
          Passionate about creating interactive user interfaces.
        </p>
        <div class="flex mt-4 space-x-2">
          <Button class="w-full hover:bg-gray-700 hover:text-white transition-all duration-200" size="sm">
            Follow
          </Button>
          <Button
            class="w-full hover:border-gray-700 hover:text-gray-700 transition-all duration-200"
            size="sm"
            variant="outline"
          >
            Message
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}