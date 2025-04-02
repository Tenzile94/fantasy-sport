import Link from "next/link";
import { ArrowRight, Trophy, Users, BarChart3 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
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
              <span className="inline-block font-bold text-xl text-blue-600">
                FantasySports
              </span>
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
              <a
                href="/team"
                className="flex items-center text-lg font-medium transition-colors hover:text-blue-600"
              >
                My Team
              </a>
              <a
                href="/news"
                className="flex items-center text-lg font-medium transition-colors hover:text-blue-600"
              >
                News
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 via-background to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-600">
                    Build Your Dream Team
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create your fantasy sports team, join leagues, and compete
                    with friends. Track stats and win big!
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 group"
                  >
                    <Link href="/leagues">
                      Get Started{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  {/* <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Link href="#">Learn More</Link>
                  </Button> */}
                </div>
              </div>
              <img
                src="/fantasy.png"
                alt="Fantasy Sports Dashboard"
                width={550}
                height={310}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-xl"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-600">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the millions of fantasy sports enthusiasts and start your
                  journey to the top.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <Users className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Create Your Team</h3>
                  <p className="text-muted-foreground">
                    Draft real players to build your fantasy team with our
                    easy-to-use team builder.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <Trophy className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Join Leagues</h3>
                  <p className="text-muted-foreground">
                    Compete in public leagues or create private ones to
                    challenge your friends.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 group">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <BarChart3 className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Track Performance</h3>
                  <p className="text-muted-foreground">
                    Follow live stats and see how your team performs against the
                    competition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-600">
                  Featured Leagues
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our most popular fantasy sports leagues and start
                  competing today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-blue-400">
                <CardHeader>
                  <CardTitle className="text-blue-600">
                    Football Fantasy
                  </CardTitle>
                  <CardDescription>
                    The most popular fantasy football league
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Draft NFL players and compete based on their weekly
                    performance stats.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    <span>24/32 Teams</span>
                    <span className="mx-2">•</span>
                    <span>Season: 2025-2026</span>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Join League
                  </Button>
                </CardFooter> */}
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 border-purple-200 hover:border-purple-400">
                <CardHeader>
                  <CardTitle className="text-purple-600">
                    Basketball Masters
                  </CardTitle>
                  <CardDescription>
                    NBA fantasy league for basketball fans
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Create your dream NBA team and compete throughout the
                    season.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    <span>18/20 Teams</span>
                    <span className="mx-2">•</span>
                    <span>Season: 2025-2026</span>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Join League
                  </Button>
                </CardFooter> */}
              </Card>
              <Card className="hover:shadow-xl transition-all duration-300 border-orange-200 hover:border-orange-400">
                <CardHeader>
                  <CardTitle className="text-orange-600">
                    Soccer Champions
                  </CardTitle>
                  <CardDescription>
                    International soccer fantasy league
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Pick players from top leagues around the world and track
                    their performance.
                  </p>
                  <div className="mt-4 flex items-center text-sm text-muted-foreground">
                    <Users className="mr-1 h-4 w-4" />
                    <span>12/20 Teams</span>
                    <span className="mx-2">•</span>
                    <span>Season: 2025-2026</span>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Join League
                  </Button>
                </CardFooter> */}
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600">
                NEW FEATURE
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-600">
                  Live Scoring Dashboard
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Track your players' performance in real-time with our new live
                  scoring dashboard.
                </p>
              </div>
            </div>

            <div className="relative mx-auto max-w-5xl">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-blue-200">
                <div className="p-4 bg-blue-600 text-white">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg">Live Scores - Week 12</h3>
                    <div className="flex items-center text-sm">
                      <span className="mr-2">●</span>
                      <span>Updating live</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                  <div className="border rounded-lg overflow-hidden shadow-md">
                    <div className="bg-blue-50 p-3 border-b">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">
                          Kansas City Chiefs vs Las Vegas Raiders
                        </span>
                        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                          4th Quarter
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">24</div>
                          <div className="text-sm text-muted-foreground">
                            Chiefs
                          </div>
                        </div>
                        <div className="text-xl font-bold">-</div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">17</div>
                          <div className="text-sm text-muted-foreground">
                            Raiders
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>Patrick Mahomes (KC)</span>
                          <span className="font-medium text-blue-600">
                            21.4 pts
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Travis Kelce (KC)</span>
                          <span className="font-medium text-blue-600">
                            15.2 pts
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden shadow-md">
                    <div className="bg-blue-50 p-3 border-b">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">
                          Buffalo Bills vs Miami Dolphins
                        </span>
                        <span className="text-sm bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
                          4th Quarter
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">31</div>
                          <div className="text-sm text-muted-foreground">
                            Bills
                          </div>
                        </div>
                        <div className="text-xl font-bold">-</div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">28</div>
                          <div className="text-sm text-muted-foreground">
                            Dolphins
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>Josh Allen (BUF)</span>
                          <span className="font-medium text-blue-600">
                            24.5 pts
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Tyreek Hill (MIA)</span>
                          <span className="font-medium text-blue-600">
                            26.2 pts
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="p-4 bg-blue-50 flex justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    View All Live Games <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-600">
                  Top Performers This Week
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out the players who dominated the fantasy scoreboard
                  this week.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-blue-400">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <div className="mr-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      1
                    </div>
                    Patrick Mahomes
                  </CardTitle>
                  <CardDescription>QB - Kansas City Chiefs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Fantasy Points:
                      </span>
                      <span className="font-bold text-blue-600">38.7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Passing:
                      </span>
                      <span>385 YDS, 3 TD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Rushing:
                      </span>
                      <span>42 YDS, 1 TD</span>
                    </div>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    View Details
                  </Button>
                </CardFooter> */}
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-purple-200 hover:border-purple-400">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <div className="mr-2 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      2
                    </div>
                    Lamar Jackson
                  </CardTitle>
                  <CardDescription>QB - Baltimore Ravens</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Fantasy Points:
                      </span>
                      <span className="font-bold text-purple-600">36.2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Passing:
                      </span>
                      <span>312 YDS, 2 TD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Rushing:
                      </span>
                      <span>95 YDS, 1 TD</span>
                    </div>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-purple-600 hover:bg-purple-50 hover:text-purple-600"
                  >
                    View Details
                  </Button>
                </CardFooter> */}
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-orange-200 hover:border-orange-400">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <div className="mr-2 bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      3
                    </div>
                    Justin Jefferson
                  </CardTitle>
                  <CardDescription>WR - Minnesota Vikings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Fantasy Points:
                      </span>
                      <span className="font-bold text-orange-600">32.5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Receiving:
                      </span>
                      <span>11 REC, 185 YDS, 2 TD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Rushing:
                      </span>
                      <span>15 YDS</span>
                    </div>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-orange-600 hover:bg-orange-50 hover:text-orange-600"
                  >
                    View Details
                  </Button>
                </CardFooter> */}
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-blue-400">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <div className="mr-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      4
                    </div>
                    Derrick Henry
                  </CardTitle>
                  <CardDescription>RB - Baltimore Ravens</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Fantasy Points:
                      </span>
                      <span className="font-bold text-blue-600">29.8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Rushing:
                      </span>
                      <span>168 YDS, 2 TD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">
                        Receiving:
                      </span>
                      <span>3 REC, 30 YDS</span>
                    </div>
                  </div>
                </CardContent>
                {/* <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    View Details
                  </Button>
                </CardFooter> */}
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-600">
                JOIN NOW
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-blue-600">
                  Ready to Dominate Your Fantasy League?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today and start building your championship team.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button
                  size="lg"
                  asChild
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  <Link href="#">View Pricing Plans</Link>
                </Button> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-blue-600" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025{" "}
              <span className="font-medium text-blue-600">FantasySports</span>.
              All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-blue-600 hover:underline transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-blue-600 hover:underline transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-blue-600 hover:underline transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
