export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="flex gap-6 md:gap-10">
            <a href="/" className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-blue-600"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
              <span className="inline-block font-bold text-xl text-blue-600">FantasySports</span>
            </a>
            <nav className="hidden gap-6 md:flex">
              <a
                href="/leagues"
                className="flex items-center text-lg font-medium transition-colors hover:text-blue-600"
              >
                Leagues
              </a>
              <a
                href="/players"
                className="flex items-center text-lg font-medium transition-colors hover:text-blue-600"
              >
                Players
              </a>
              <a href="/team" className="flex items-center text-lg font-medium transition-colors hover:text-blue-600">
                My Team
              </a>
              <a href="/news" className="flex items-center text-lg font-medium transition-colors hover:text-blue-600">
                News
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight text-blue-600 mb-6">Privacy Policy</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-muted-foreground mb-6">Last updated: November 25, 2025</p>

            <p className="mb-6">
              At FantasySports, we take your privacy seriously. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you use our service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide to us when you register for an account,
              express interest in obtaining information about us or our products, or otherwise contact us.
            </p>
            <p className="mt-4">The personal information we collect may include:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Username</li>
              <li>Password</li>
              <li>Profile information</li>
              <li>Payment information</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To allow you to participate in interactive features</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our service</li>
              <li>To monitor the usage of our service</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Disclosure of Your Information</h2>
            <p>We may share your information with third parties in certain situations, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>With service providers who perform services for us</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights or property</li>
              <li>With your consent or at your direction</li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-blue-600"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 <span className="font-medium text-blue-600">FantasySports</span>. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="/terms"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-blue-600 hover:underline transition-colors"
            >
              Terms
            </a>
            <a href="/privacy" className="text-sm text-blue-600 underline-offset-4 hover:underline transition-colors">
              Privacy
            </a>
            <a
              href="/contact"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-blue-600 hover:underline transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

