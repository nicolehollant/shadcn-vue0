/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AfXYpLG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {NuxtLink} from "#components"

export default function Component() {
  return (
    <section class="w-full">
      <header class="bg-white text-zinc-900 py-4 border-b">
        <div class="container mx-auto px-4 md:px-6">
          <nav class="flex items-center justify-between">
            <div class="text-2xl font-bold">News Site</div>
            <div class="space-x-4">
              <NuxtLink class="text-zinc-900 hover:text-zinc-700" href="#">
                Home
              </NuxtLink>
              <NuxtLink class="text-zinc-900 hover:text-zinc-700" href="#">
                Politics
              </NuxtLink>
              <NuxtLink class="text-zinc-900 hover:text-zinc-700" href="#">
                Business
              </NuxtLink>
              <NuxtLink class="text-zinc-900 hover:text-zinc-700" href="#">
                Tech
              </NuxtLink>
              <NuxtLink class="text-zinc-900 hover:text-zinc-700" href="#">
                Culture
              </NuxtLink>
              <NuxtLink class="text-zinc-900 hover:text-zinc-700" href="#">
                Sports
              </NuxtLink>
            </div>
          </nav>
        </div>
      </header>
      <main class="container mx-auto px-4 md:px-6 py-8">
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Top Story</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                alt="Top Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div class="flex flex-col justify-center">
              <h3 class="text-xl font-bold mb-2">Top Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the top story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
          </div>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Politics</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Politics Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Politics Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the politics story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
            <div>
              <img
                alt="Politics Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Politics Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the politics story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
            <div>
              <img
                alt="Politics Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Politics Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the politics story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
          </div>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Business</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Business Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Business Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the business story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
            <div>
              <img
                alt="Business Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Business Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the business story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
            <div>
              <img
                alt="Business Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Business Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the business story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
          </div>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Tech</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Tech Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Tech Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the tech story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
            <div>
              <img
                alt="Tech Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Tech Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the tech story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
            <div>
              <img
                alt="Tech Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Tech Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the tech story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
          </div>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Culture</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Culture Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Culture Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the culture story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
            <div>
              <img
                alt="Culture Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Culture Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the culture story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
            <div>
              <img
                alt="Culture Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Culture Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the culture story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
          </div>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Sports</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Sports Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Sports Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the sports story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
            <div>
              <img
                alt="Sports Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Sports Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the sports story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
            <div>
              <img
                alt="Sports Story Image"
                class="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
              <h3 class="text-xl font-bold mb-2 mt-4">Sports Story Headline</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                This is a brief summary of the sports story. Click the NuxtLink to read more.
              </p>
              <NuxtLink class="text-blue-500 hover:text-blue-700 mt-4" href="#">
                Read More
              </NuxtLink>
            </div>
          </div>
        </section>
      </main>
    </section>
  )
}