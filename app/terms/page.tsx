export default function TermsPage() {
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
          <h1 className="text-3xl font-bold tracking-tight text-blue-600 mb-6">Terms of Service</h1>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-muted-foreground mb-6">Last updated: November 25, 2025</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using FantasySports, you agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use our service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Service</h2>
            <p>
              FantasySports provides a platform for users to create and manage fantasy sports teams, join leagues, and
              compete with other users based on the performance of real-world athletes.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. User Accounts</h2>
            <p>
              To use certain features of our service, you may be required to create an account. You are responsible for
              maintaining the confidentiality of your account information and for all activities that occur under your
              account.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. User Conduct</h2>
            <p>
              You agree not to use FantasySports for any purpose that is unlawful or prohibited by these Terms. You may
              not use the service in any manner that could damage, disable, overburden, or impair the service.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Content</h2>
            <p>
              Users may have the ability to post content on FantasySports. You retain ownership of any content you post,
              but grant us a worldwide, non-exclusive license to use, reproduce, modify, and display such content.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account and access to FantasySports at our sole
              discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users,
              us, or third parties.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to Terms</h2>
            <p>
              We may modify these Terms at any time. Your continued use of FantasySports after any such changes
              constitutes your acceptance of the new Terms.
            </p>
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
            <a href="/terms" className="text-sm text-blue-600 underline-offset-4 hover:underline transition-colors">
              Terms
            </a>
            <a
              href="/privacy"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-blue-600 hover:underline transition-colors"
            >
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

