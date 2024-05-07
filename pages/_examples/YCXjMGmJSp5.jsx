/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YCXjMGmJSp5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
  <div class="flex items-center justify-center h-screen">
    <div class="rounded-lg shadow-lg w-64">
      <div class="h-24 bg-blue-600 rounded-t-lg" />
      <img
        alt="User avatar"
        class="rounded-full -mt-12 border-4 border-white mx-auto"
        height="100"
        src="/placeholder.svg"
        style={{ aspectRatio: '100/100', objectFit: 'cover' }}
        width="100"
      />
      <div class="text-center mt-2">
        <h2 class="text-lg font-semibold">John Doe</h2>
        <p class="text-gray-500">Software Engineer</p>
      </div>
      <div class="flex justify-around my-4">
        <div class="text-center">
          <h3 class="font-semibold text-lg">500</h3>
          <p class="text-gray-500">Followers</p>
        </div>
        <div class="text-center">
          <h3 class="font-semibold text-lg">300</h3>
          <p class="text-gray-500">Following</p>
        </div>
      </div>
      <div class="px-6 py-4">
        <Button class="w-full bg-blue-600 text-white rounded-lg">Follow</Button>
      </div>
    </div>
  </div>
  )
}
