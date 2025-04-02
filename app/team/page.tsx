import Link from "next/link";
import { ArrowUpDown, Plus, MoreHorizontal, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TeamPage() {
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
              <span className="inline-block font-bold text-blue-600">
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
                className="flex items-center text-lg font-medium text-blue-600 border-b-2 border-blue-600"
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
        <div className="container py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Touchdown Titans
              </h1>
              <p className="text-muted-foreground">
                Football Fantasy Pro League
              </p>
            </div>
            {/* <Button>Edit Team</Button> */}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Team Stats</CardTitle>
                <CardDescription>Current season performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rank:</span>
                    <span className="font-medium">3rd of 24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Record:</span>
                    <span className="font-medium">8-3-0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Points For:</span>
                    <span className="font-medium">1,245</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Points Against:
                    </span>
                    <span className="font-medium">1,087</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Streak:</span>
                    <span className="font-medium">W3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Next Matchup</CardTitle>
                <CardDescription>Week 12 - Sunday</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-lg font-bold">Touchdown Titans</div>
                    <div className="text-sm text-muted-foreground">(8-3-0)</div>
                  </div>
                  <div className="text-xl font-bold">VS</div>
                  <div className="text-center">
                    <div className="text-lg font-bold">Gridiron Giants</div>
                    <div className="text-sm text-muted-foreground">(7-4-0)</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-muted-foreground text-center">
                    Projected Score
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-1">
                    <div className="text-lg font-bold">124.5</div>
                    <div className="text-lg font-bold">118.2</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Team Health</CardTitle>
                <CardDescription>Player status updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>J. Allen (QB)</span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>D. Henry (RB)</span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>T. Hill (WR)</span>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      Questionable
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>T. Kelce (TE)</span>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Healthy
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>J. Chase (WR)</span>
                    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                      Out
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="roster">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="roster">Roster</TabsTrigger>
                <TabsTrigger value="available">Available Players</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
              </TabsList>
              <TabsContent value="roster" className="mt-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Current Roster</h2>
                  {/* <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" /> Add Player
                  </Button> */}
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Player</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Team</TableHead>
                        <TableHead>
                          <div className="flex items-center">
                            Avg Pts
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>Status</TableHead>
                        {/* <TableHead className="text-right">Actions</TableHead> */}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Josh Allen
                        </TableCell>
                        <TableCell>QB</TableCell>
                        <TableCell>BUF</TableCell>
                        <TableCell>24.7</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Healthy
                          </span>
                        </TableCell>
                        {/* */}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Derrick Henry
                        </TableCell>
                        <TableCell>RB</TableCell>
                        <TableCell>BAL</TableCell>
                        <TableCell>18.3</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Healthy
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Tyreek Hill
                        </TableCell>
                        <TableCell>WR</TableCell>
                        <TableCell>MIA</TableCell>
                        <TableCell>21.5</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                            Questionable
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Travis Kelce
                        </TableCell>
                        <TableCell>TE</TableCell>
                        <TableCell>KC</TableCell>
                        <TableCell>14.2</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Healthy
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Ja'Marr Chase
                        </TableCell>
                        <TableCell>WR</TableCell>
                        <TableCell>CIN</TableCell>
                        <TableCell>17.8</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                            Out
                          </span>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="available" className="mt-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Available Players</h2>
                  {/* <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Search players..." />
                    <Button type="submit" size="icon">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div> */}
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Player</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Team</TableHead>
                        <TableHead>
                          <div className="flex items-center">
                            Avg Pts
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>Status</TableHead>
                        {/* <TableHead className="text-right">Actions</TableHead> */}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Justin Jefferson
                        </TableCell>
                        <TableCell>WR</TableCell>
                        <TableCell>MIN</TableCell>
                        <TableCell>19.2</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Healthy
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Christian McCaffrey
                        </TableCell>
                        <TableCell>RB</TableCell>
                        <TableCell>SF</TableCell>
                        <TableCell>22.1</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                            Injured
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Davante Adams
                        </TableCell>
                        <TableCell>WR</TableCell>
                        <TableCell>LV</TableCell>
                        <TableCell>16.8</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Healthy
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Lamar Jackson
                        </TableCell>
                        <TableCell>QB</TableCell>
                        <TableCell>BAL</TableCell>
                        <TableCell>25.3</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Healthy
                          </span>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          George Kittle
                        </TableCell>
                        <TableCell>TE</TableCell>
                        <TableCell>SF</TableCell>
                        <TableCell>13.5</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                            Questionable
                          </span>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="transactions" className="mt-4">
                <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Transaction</TableHead>
                        <TableHead>Player</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Team</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Nov 15, 2025</TableCell>
                        <TableCell>Added</TableCell>
                        <TableCell className="font-medium">
                          Ja'Marr Chase
                        </TableCell>
                        <TableCell>WR</TableCell>
                        <TableCell>CIN</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nov 15, 2025</TableCell>
                        <TableCell>Dropped</TableCell>
                        <TableCell className="font-medium">
                          DeAndre Hopkins
                        </TableCell>
                        <TableCell>WR</TableCell>
                        <TableCell>TEN</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nov 10, 2025</TableCell>
                        <TableCell>Added</TableCell>
                        <TableCell className="font-medium">
                          Travis Kelce
                        </TableCell>
                        <TableCell>TE</TableCell>
                        <TableCell>KC</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nov 10, 2025</TableCell>
                        <TableCell>Dropped</TableCell>
                        <TableCell className="font-medium">
                          Mark Andrews
                        </TableCell>
                        <TableCell>TE</TableCell>
                        <TableCell>BAL</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Nov 3, 2025</TableCell>
                        <TableCell>Traded</TableCell>
                        <TableCell className="font-medium">
                          Saquon Barkley for Derrick Henry
                        </TableCell>
                        <TableCell>RB</TableCell>
                        <TableCell>PHI/BAL</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 FantasySports. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
