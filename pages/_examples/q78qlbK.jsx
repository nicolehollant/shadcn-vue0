/**
 * v0 by Vercel.
 * @see https://v0.dev/t/q78qlbK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div class="flex justify-center items-center min-h-screen">
      <Card class="shadow-lg w-[550px]">
        <CardContent class="p-6">
          <h2 class="text-2xl font-semibold">Frequently Asked Questions</h2>
          <Accordion class="w-full mt-4" collapsible="" type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger class="hover:underline-none">
                Why does turning my device off and on again solve all issues?
              </AccordionTrigger>
              <AccordionContent>Because it clears the memory and starts the system from scratch.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger class="hover:underline-none">
                Are extra cables in the box bonus decorations?
              </AccordionTrigger>
              <AccordionContent>
                As tempting as it is to weave them into artistic sculptures, those cables are essential for connecting,
                charging, and beaming digital magic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger class="hover:underline-none">
                Can I wear my VR headset to my cousin's wedding?
              </AccordionTrigger>
              <AccordionContent>
                Yes but you might end up inadvertently dodging invisible dance partners or trying to high-five digital
                confetti.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger class="hover:underline-none">
                How often should I update my software?
              </AccordionTrigger>
              <AccordionContent>
                It's recommended to keep your software up to date to ensure you have the latest security patches and
                features.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem class="border-b-0" value="item-5">
              <AccordionTrigger class="hover:underline-none">
                Why does my device get hot when I'm using it?
              </AccordionTrigger>
              <AccordionContent>
                Devices can generate heat during operation, especially when running intensive tasks. This is normal, but
                if it gets too hot, it may indicate a problem.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}