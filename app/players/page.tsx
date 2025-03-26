import Link from "next/link";
import { Search, Filter, ArrowUpDown } from "lucide-react";

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

export default function PlayersPage() {
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
                className="flex items-center text-lg font-medium text-blue-600 border-b-2 border-blue-600"
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
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Players</h1>
              <p className="text-muted-foreground">
                Browse and analyze player statistics
              </p>
            </div>
            {/* <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Search players..." />
                <Button type="submit" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" /> Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem>All Positions</DropdownMenuItem>
                  <DropdownMenuItem>Quarterback (QB)</DropdownMenuItem>
                  <DropdownMenuItem>Running Back (RB)</DropdownMenuItem>
                  <DropdownMenuItem>Wide Receiver (WR)</DropdownMenuItem>
                  <DropdownMenuItem>Tight End (TE)</DropdownMenuItem>
                  <DropdownMenuItem>Kicker (K)</DropdownMenuItem>
                  <DropdownMenuItem>Defense/Special Teams (DST)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div> */}
          </div>

          <div className="mt-8">
            <Tabs defaultValue="football">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="football">Football</TabsTrigger>
                <TabsTrigger value="basketball">Basketball</TabsTrigger>
                <TabsTrigger value="baseball">Baseball</TabsTrigger>
                <TabsTrigger value="soccer">Soccer</TabsTrigger>
                <TabsTrigger value="hockey">Hockey</TabsTrigger>
              </TabsList>
              <TabsContent value="football" className="mt-4">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Player</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Team</TableHead>
                        <TableHead>
                          <div className="flex items-center">
                            Fantasy Pts
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>
                          <div className="flex items-center">
                            Avg Pts/Game
                            <ArrowUpDown className="ml-2 h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">
                          Patrick Mahomes
                        </TableCell>
                        <TableCell>QB</TableCell>
                        <TableCell>KC</TableCell>
                        <TableCell>285.4</TableCell>
                        <TableCell>25.9</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Healthy
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Christian McCaffrey
                        </TableCell>
                        <TableCell>RB</TableCell>
                        <TableCell>SF</TableCell>
                        <TableCell>243.2</TableCell>
                        <TableCell>22.1</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                            Injured
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Justin Jefferson
                        </TableCell>
                        <TableCell>WR</TableCell>
                        <TableCell>MIN</TableCell>
                        <TableCell>211.2</TableCell>
                        <TableCell>19.2</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Healthy
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Lamar Jackson
                        </TableCell>
                        <TableCell>QB</TableCell>
                        <TableCell>BAL</TableCell>
                        <TableCell>278.3</TableCell>
                        <TableCell>25.3</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Healthy
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Travis Kelce
                        </TableCell>
                        <TableCell>TE</TableCell>
                        <TableCell>KC</TableCell>
                        <TableCell>156.2</TableCell>
                        <TableCell>14.2</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Healthy
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Tyreek Hill
                        </TableCell>
                        <TableCell>WR</TableCell>
                        <TableCell>MIA</TableCell>
                        <TableCell>236.5</TableCell>
                        <TableCell>21.5</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                            Questionable
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Derrick Henry
                        </TableCell>
                        <TableCell>RB</TableCell>
                        <TableCell>BAL</TableCell>
                        <TableCell>201.3</TableCell>
                        <TableCell>18.3</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Healthy
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Ja'Marr Chase
                        </TableCell>
                        <TableCell>WR</TableCell>
                        <TableCell>CIN</TableCell>
                        <TableCell>195.8</TableCell>
                        <TableCell>17.8</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                            Out
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">
                            View
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
              <TabsContent value="basketball" className="mt-4">
                <div className="flex items-center justify-center p-12">
                  <p className="text-muted-foreground">
                    Select the Football tab to view player statistics
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="baseball" className="mt-4">
                <div className="flex items-center justify-center p-12">
                  <p className="text-muted-foreground">
                    Select the Football tab to view player statistics
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="soccer" className="mt-4">
                <div className="flex items-center justify-center p-12">
                  <p className="text-muted-foreground">
                    Select the Football tab to view player statistics
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="hockey" className="mt-4">
                <div className="flex items-center justify-center p-12">
                  <p className="text-muted-foreground">
                    Select the Football tab to view player statistics
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Top Performers This Week</CardTitle>
                <CardDescription>
                  Players with the highest fantasy points
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">1.</span>
                      <span>Patrick Mahomes (QB - KC)</span>
                    </div>
                    <span className="font-medium">38.7 pts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">2.</span>
                      <span>Lamar Jackson (QB - BAL)</span>
                    </div>
                    <span className="font-medium">36.2 pts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">3.</span>
                      <span>Justin Jefferson (WR - MIN)</span>
                    </div>
                    <span className="font-medium">32.5 pts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">4.</span>
                      <span>Derrick Henry (RB - BAL)</span>
                    </div>
                    <span className="font-medium">29.8 pts</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold">5.</span>
                      <span>Tyreek Hill (WR - MIA)</span>
                    </div>
                    <span className="font-medium">28.3 pts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trending Up</CardTitle>
                <CardDescription>
                  Players with increasing fantasy value
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Jayden Daniels (QB - WAS)</span>
                    <span className="text-green-600 font-medium">+15.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Bijan Robinson (RB - ATL)</span>
                    <span className="text-green-600 font-medium">+12.8%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Marvin Harrison Jr. (WR - ARI)</span>
                    <span className="text-green-600 font-medium">+10.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Caleb Williams (QB - CHI)</span>
                    <span className="text-green-600 font-medium">+9.7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Drake London (WR - ATL)</span>
                    <span className="text-green-600 font-medium">+8.3%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Trending Down</CardTitle>
                <CardDescription>
                  Players with decreasing fantasy value
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Christian McCaffrey (RB - SF)</span>
                    <span className="text-red-600 font-medium">-18.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Ja'Marr Chase (WR - CIN)</span>
                    <span className="text-red-600 font-medium">-14.2%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Aaron Rodgers (QB - NYJ)</span>
                    <span className="text-red-600 font-medium">-11.7%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Nick Chubb (RB - CLE)</span>
                    <span className="text-red-600 font-medium">-10.3%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cooper Kupp (WR - LAR)</span>
                    <span className="text-red-600 font-medium">-8.9%</span>
                  </div>
                </div>
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
