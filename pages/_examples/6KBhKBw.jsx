/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6KBhKBw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div class="flex items-center justify-center min-h-screen bg-cyan-500">
      <div class="max-w-lg mx-auto bg-cyan-500 p-6 rounded-lg shadow-offset-black offset-x-10 offset-y-10">
        <Card class="p-6 font-poppins">
          <CardContent class="text-xl relative mb-2">
            <svg
              class=" absolute top-0 left-0 text-20xl text-cyan-300"
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
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
            "Generating a testimonial card component with a prompt-driven interface is pretty cool... Well done,
            Vercel!"
          </CardContent>
          <CardHeader class="pt-0">
            <div class="flex items-center">
              <img
                alt="John Doe's Avatar"
                class="mr-2 rounded-full"
                height="40"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width="40"
              />
              <div>
                <CardTitle class="text-base">John Doe</CardTitle>
                <CardDescription>CEO, Example Corp.</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}