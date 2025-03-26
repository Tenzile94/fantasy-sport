import Link from "next/link";
import {
  Trophy,
  Users,
  Calendar,
  ArrowUpDown,
  Filter,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

export default function LeaguesPage() {
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
                className="flex items-center text-lg font-medium text-blue-600 border-b-2 border-blue-600"
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
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-blue-600">
                Leagues
              </h1>
              <p className="text-muted-foreground">
                Browse and join fantasy leagues or create your own
              </p>
            </div>
            {/* <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="text" placeholder="Search leagues..." className="pl-8 w-full md:w-[200px]" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center gap-1 border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Filter className="h-4 w-4" /> Filter
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>All Sports</DropdownMenuItem>
                  <DropdownMenuItem>Football</DropdownMenuItem>
                  <DropdownMenuItem>Basketball</DropdownMenuItem>
                  <DropdownMenuItem>Baseball</DropdownMenuItem>
                  <DropdownMenuItem>Soccer</DropdownMenuItem>
                  <DropdownMenuItem>Hockey</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="bg-blue-600 hover:bg-blue-700">Create League</Button>
            </div> */}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-blue-400">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-600">
                    Football Fantasy Pro
                  </CardTitle>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    NFL
                  </span>
                </div>
                <CardDescription>
                  Professional fantasy football league
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-muted-foreground">24/32 Teams</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-muted-foreground">
                      Season: 2025-2026
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">
                      Draft starts in 3 days. Join now to secure your spot!
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Join League
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-purple-200 hover:border-purple-400">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-600">
                    Basketball Masters
                  </CardTitle>
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                    NBA
                  </span>
                </div>
                <CardDescription>NBA Fantasy League</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span className="text-muted-foreground">18/20 Teams</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    <span className="text-muted-foreground">
                      Season: 2025-2026
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">
                      League in progress. Join the waitlist for next season.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Join Waitlist
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-orange-200 hover:border-orange-400">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-orange-600">
                    Soccer Champions
                  </CardTitle>
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                    International
                  </span>
                </div>
                <CardDescription>International Soccer League</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-orange-600" />
                    <span className="text-muted-foreground">12/20 Teams</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-orange-600" />
                    <span className="text-muted-foreground">
                      Season: 2025-2026
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">
                      Registration open. Draft begins in 2 weeks.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Join League
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-blue-400">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-600">
                    Baseball Legends
                  </CardTitle>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    MLB
                  </span>
                </div>
                <CardDescription>MLB Fantasy League</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span className="text-muted-foreground">8/16 Teams</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span className="text-muted-foreground">Season: 2025</span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">
                      New league forming. Be one of the first to join!
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Join League
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-purple-200 hover:border-purple-400">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-purple-600">
                    Hockey Elite
                  </CardTitle>
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                    NHL
                  </span>
                </div>
                <CardDescription>NHL Fantasy League</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span className="text-muted-foreground">10/12 Teams</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    <span className="text-muted-foreground">
                      Season: 2025-2026
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">
                      Only 2 spots remaining! Join before the draft next week.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Join League
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-orange-200 hover:border-orange-400">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-orange-600">
                    Friends & Family Football
                  </CardTitle>
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800">
                    Private
                  </span>
                </div>
                <CardDescription>Private NFL League</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-orange-600" />
                    <span className="text-muted-foreground">6/10 Teams</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-orange-600" />
                    <span className="text-muted-foreground">
                      Season: 2025-2026
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm">
                      Private league. Requires invitation code to join.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Enter Invitation Code
                </Button>
              </CardFooter>
            </Card>
          </div>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-blue-600">
            Your Leagues
          </h2>
          <div className="mt-4 rounded-md border shadow-sm overflow-hidden">
            <Table>
              <TableHeader className="bg-blue-50">
                <TableRow>
                  <TableHead>League Name</TableHead>
                  <TableHead>Sport</TableHead>
                  <TableHead>Team Name</TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      Rank
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="hover:bg-blue-50 transition-colors">
                  <TableCell className="font-medium">
                    Football Fantasy Pro
                  </TableCell>
                  <TableCell>Football</TableCell>
                  <TableCell>Touchdown Titans</TableCell>
                  <TableCell>3rd of 24</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Active
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Manage
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-blue-50 transition-colors">
                  <TableCell className="font-medium">
                    Basketball Masters
                  </TableCell>
                  <TableCell>Basketball</TableCell>
                  <TableCell>Slam Dunkers</TableCell>
                  <TableCell>8th of 18</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      Active
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Manage
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow className="hover:bg-blue-50 transition-colors">
                  <TableCell className="font-medium">
                    Baseball Legends
                  </TableCell>
                  <TableCell>Baseball</TableCell>
                  <TableCell>Home Run Heroes</TableCell>
                  <TableCell>1st of 8</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      Draft Soon
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                    >
                      Manage
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* <div className="mt-12 p-6 rounded-lg bg-blue-50 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-blue-600">
                  Create Your Own League
                </h3>
                <p className="text-muted-foreground mt-2">
                  Set your own rules, invite friends, and compete for glory!
                </p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Start a League
              </Button>
            </div>
          </div> */}
        </div>
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
