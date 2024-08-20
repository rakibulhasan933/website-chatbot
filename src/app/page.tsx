import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Super Chatbot</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col items-start space-y-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/placeholder-user.jpg" alt="Chatbot Avatar" />
                <AvatarFallback>CB</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Welcome to our Super Chatbot</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get instant answers to your questions and personalized recommendations. Our chatbot is available 24/7
                  to assist you.
                </p>
                <Button>Start Conversation</Button>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <ClockIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-medium">Fast Response Times</h3>
                  <p className="text-sm text-muted-foreground">
                    Our chatbot provides instant responses to your queries.
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <CalendarDaysIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-medium">24/7 Availability</h3>
                  <p className="text-sm text-muted-foreground">Our chatbot is available anytime, day or night.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted p-4">
                  <MoveHorizontalIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-medium">Personalized Recommendations</h3>
                  <p className="text-sm text-muted-foreground">
                    Our chatbot learns your preferences and provides tailored suggestions.
                  </p>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <SparkleIcon className="h-8 w-8 text-primary" />
                  <h3 className="mt-2 text-lg font-medium">Engaging Conversations</h3>
                  <p className="text-sm text-muted-foreground">
                    Our chatbot is designed to have natural, friendly conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Customers Say</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers about their experience with our chatbot.
              </p>
            </div>
            <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-start gap-4 p-6">
                <blockquote className="text-lg font-medium leading-relaxed">
                  &ldquo;The chatbot has been a game-changer for our business. It\n provides instant support and personalized
                  recommendations\n that have helped us improve customer satisfaction.&ldquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Testimonial Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Rakibul Hasan</p>
                    <p className="text-sm text-muted-foreground">CEO, Super Chatbot Inc.</p>
                  </div>
                </div>
              </Card>
              <Card className="flex flex-col items-start gap-4 p-6">
                <blockquote className="text-lg font-medium leading-relaxed">
                  &ldquo;I&ldquo;m amazed by how helpful and knowledgeable the chatbot is.\n It&ldquo;s like having a personal assistant
                  available 24/7 to\n answer my questions and provide valuable insights.&ldquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Testimonial Avatar" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Sarah Anderson</p>
                    <p className="text-sm text-muted-foreground">Marketing Manager, Acme Corp.</p>
                  </div>
                </div>
              </Card>
              <Card className="flex flex-col items-start gap-4 p-6">
                <blockquote className="text-lg font-medium leading-relaxed">
                  &ldquo;The chatbot has been a lifesaver for our customer support\n team. It handles routine inquiries
                  quickly and frees up our\n agents to focus on more complex issues.&ldquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="Testimonial Avatar" />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">Mohosina </p>
                    <p className="text-sm text-muted-foreground">Customer Support Manager, Super Chatbot Solutions</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Super Chatbot. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CalendarDaysIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function MoveHorizontalIcon(props: any) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}


function SparkleIcon(props: any) {
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
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  )
}