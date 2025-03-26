import Link from "next/link"
import { Clock, Search, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DraftPage() {
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
              <span className="inline-block font-bold text-blue-600">FantasySports</span>
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
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Draft Room</h1>
              <p className="text-muted-foreground">Football Fantasy Pro League</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-muted px-3 py-1 rounded-md">
                <Clock className="h-4 w-4 text-primary" />
                <span className="font-medium">Draft starts in: 2d 14h 32m</span>
              </div>
              <Button>Enter Draft Room</Button>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Draft Order</CardTitle>
                  <CardDescription>The order in which teams will select players</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Pick</TableHead>
                          <TableHead>Team</TableHead>
                          <TableHead>Owner</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">1</TableCell>
                          <TableCell>Gridiron Giants</TableCell>
                          <TableCell>John Smith</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">2</TableCell>
                          <TableCell>Pigskin Patriots</TableCell>
                          <TableCell>Sarah Johnson</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">3</TableCell>
                          <TableCell>Touchdown Titans</TableCell>
                          <TableCell>You</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">4</TableCell>
                          <TableCell>Field Goal Falcons</TableCell>
                          <TableCell>Mike Williams</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">5</TableCell>
                          <TableCell>Blitz Broncos</TableCell>
                          <TableCell>Emily Davis</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">6</TableCell>
                          <TableCell>Sack Attack</TableCell>
                          <TableCell>David Wilson</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">7</TableCell>
                          <TableCell>Hail Mary Heroes</TableCell>
                          <TableCell>Jessica Brown</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">8</TableCell>
                          <TableCell>Fumble Fumblers</TableCell>
                          <TableCell>Robert Taylor</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Draft Strategy</CardTitle>
                  <CardDescription>Prepare for your draft with these tips</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-medium">Research Player Rankings</h3>
                      <p className="text-sm text-muted-foreground">
                        Study player rankings and create a tiered draft board to help make quick decisions during the
                        draft.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Know Your League Settings</h3>
                      <p className="text-sm text-muted-foreground">
                        Understand your league's scoring system and roster requirements to optimize your draft strategy.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Monitor Injuries</h3>
                      <p className="text-sm text-muted-foreground">
                        Stay updated on player injuries and avoid drafting players who might miss significant time.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Draft for Value</h3>
                      <p className="text-sm text-muted-foreground">
                        Look for value picks in later rounds and don't reach for players too early based solely on need.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Be Flexible</h3>
                      <p className="text-sm text-muted-foreground">
                        Adapt your strategy as the draft unfolds. Be ready to pivot if your targeted players are taken.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Draft Settings</CardTitle>
                  <CardDescription>League draft configuration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Draft Type:</span>
                      <span className="font-medium">Snake</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time Per Pick:</span>
                      <span className="font-medium">90 seconds</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Draft Date:</span>
                      <span className="font-medium">Nov 28, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Draft Time:</span>
                      <span className="font-medium">8:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Teams:</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rounds:</span>
                      <span className="font-medium">15</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Mock Draft</CardTitle>
                  <CardDescription>Practice before the real thing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join a mock draft to practice your strategy and get familiar with the draft interface.
                  </p>
                  <Button className="w-full">Start Mock Draft</Button>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Draft Chat</CardTitle>
                  <CardDescription>Connect with other team owners</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] overflow-y-auto border rounded-md p-3 mb-3 space-y-3">
                    <div>
                      <div className="text-xs text-muted-foreground">John Smith:</div>
                      <p className="text-sm">Anyone looking to trade draft positions?</p>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">Sarah Johnson:</div>
                      <p className="text-sm">I might be interested. What position do you have?</p>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">John Smith:</div>
                      <p className="text-sm">I'm at #1, looking to move back and get an extra pick.</p>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">You:</div>
                      <p className="text-sm">I'm at #3 and would love to move up!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input type="text" placeholder="Type your message..." />
                    <Button size="icon">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Top Draft Prospects</CardTitle>
                <CardDescription>Highest ranked available players</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium">Player Rankings</h3>
                  <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Search players..." />
                    <Button type="submit" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Tabs defaultValue="all">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="qb">QB</TabsTrigger>
                    <TabsTrigger value="rb">RB</TabsTrigger>
                    <TabsTrigger value="wr">WR</TabsTrigger>
                    <TabsTrigger value="te">TE</TabsTrigger>
                    <TabsTrigger value="k">K</TabsTrigger>
                    <TabsTrigger value="dst">DST</TabsTrigger>
                  </TabsList>
                  <TabsContent value="all" className="mt-4">
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Rank</TableHead>
                            <TableHead>Player</TableHead>
                            <TableHead>Position</TableHead>
                            <TableHead>Team</TableHead>
                            <TableHead>Projected Pts</TableHead>
                            <TableHead>ADP</TableHead>
                            <TableHead>Notes</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">1</TableCell>
                            <TableCell>Christian McCaffrey</TableCell>
                            <TableCell>RB</TableCell>
                            <TableCell>SF</TableCell>
                            <TableCell>352.7</TableCell>
                            <TableCell>1.2</TableCell>
                            <TableCell className="text-red-600">Injured - Check status</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">2</TableCell>
                            <TableCell>Patrick Mahomes</TableCell>
                            <TableCell>QB</TableCell>
                            <TableCell>KC</TableCell>
                            <TableCell>348.5</TableCell>
                            <TableCell>2.1</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">3</TableCell>
                            <TableCell>Justin Jefferson</TableCell>
                            <TableCell>WR</TableCell>
                            <TableCell>MIN</TableCell>
                            <TableCell>325.8</TableCell>
                            <TableCell>3.4</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">4</TableCell>
                            <TableCell>Lamar Jackson</TableCell>
                            <TableCell>QB</TableCell>
                            <TableCell>BAL</TableCell>
                            <TableCell>322.3</TableCell>
                            <TableCell>4.2</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">5</TableCell>
                            <TableCell>Tyreek Hill</TableCell>
                            <TableCell>WR</TableCell>
                            <TableCell>MIA</TableCell>
                            <TableCell>318.6</TableCell>
                            <TableCell>5.7</TableCell>
                            <TableCell className="text-yellow-600">Questionable</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">6</TableCell>
                            <TableCell>Derrick Henry</TableCell>
                            <TableCell>RB</TableCell>
                            <TableCell>BAL</TableCell>
                            <TableCell>312.4</TableCell>
                            <TableCell>6.3</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">7</TableCell>
                            <TableCell>Travis Kelce</TableCell>
                            <TableCell>TE</TableCell>
                            <TableCell>KC</TableCell>
                            <TableCell>298.7</TableCell>
                            <TableCell>8.1</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">8</TableCell>
                            <TableCell>Ja'Marr Chase</TableCell>
                            <TableCell>WR</TableCell>
                            <TableCell>CIN</TableCell>
                            <TableCell>295.2</TableCell>
                            <TableCell>7.8</TableCell>
                            <TableCell className="text-red-600">Out - Injury</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </TabsContent>
                  <TabsContent value="qb" className="mt-4">
                    <div className="flex items-center justify-center p-12">
                      <p className="text-muted-foreground">Select the All tab to view player rankings</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 FantasySports. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

