/**
 * v0 by Vercel.
 * @see https://v0.dev/t/w9AZEZq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {NuxtLink} from "#components"

export default function Component() {
  return (
    <section class="w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div class="container px-4 md:px-6">
        <div class="grid gap-6 items-center">
          <div class="flex flex-col justify-center space-y-4 text-center">
            <div class="space-y-2">
              <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Revolutionize Your Email Experience
              </h1>
              <p class="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Join us and take control of your inbox. Fast, secure, and designed for modern life.
              </p>
            </div>
            <div class="w-full max-w-sm space-y-2 mx-auto">
              <form class="flex space-x-2">
                <Input
                  class="max-w-lg flex-1 bg-gray-800 text-white border-gray-900"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button class="bg-white text-black" type="submit">
                  Join Now
                </Button>
              </form>
              <p class="text-xs text-zinc-200 dark:text-zinc-100">
                Get ready to redefine your email experience.
                <NuxtLink class="underline underline-offset-2 text-white" href="#">
                  Terms & Conditions
                </NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}