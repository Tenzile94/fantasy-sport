import Link from "next/link";
import {
  Trophy,
  Calendar,
  ArrowRight,
  Search,
  Bell,
  Share2,
  ThumbsUp,
  MessageSquare,
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
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function NewsPage() {
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
                className="h-6 w-6 text-primary"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
              <span className="inline-block font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                FantasySports
              </span>
            </a>
            <nav className="hidden gap-6 md:flex">
              <a
                href="/leagues"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Leagues
              </a>
              <a
                href="/players"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                Players
              </a>
              <a
                href="/team"
                className="flex items-center text-lg font-medium transition-colors hover:text-primary"
              >
                My Team
              </a>
              <a
                href="/news"
                className="flex items-center text-lg font-medium text-primary border-b-2 border-primary"
              >
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
              <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                News & Updates
              </h1>
              <p className="text-muted-foreground">
                Stay informed with the latest fantasy sports news
              </p>
            </div>
            {/* <div className="flex w-full md:w-auto items-center space-x-2">
              <Input type="text" placeholder="Search news..." className="max-w-sm" />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary-600 transition-all duration-300">
                <Search className="h-4 w-4" />
              </Button>
            </div> */}
          </div>

          <div className="mb-8">
            <Tabs defaultValue="all">
              <TabsList className="bg-primary-50 p-1">
                <TabsTrigger
                  value="all"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  All News
                </TabsTrigger>
                <TabsTrigger
                  value="football"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Football
                </TabsTrigger>
                <TabsTrigger
                  value="basketball"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Basketball
                </TabsTrigger>
                <TabsTrigger
                  value="baseball"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Baseball
                </TabsTrigger>
                <TabsTrigger
                  value="soccer"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Soccer
                </TabsTrigger>
                <TabsTrigger
                  value="hockey"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Hockey
                </TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/50 overflow-hidden">
                    <div className="absolute top-3 right-3 z-10">
                      <Badge className="bg-red-500 text-white hover:bg-red-600">
                        Breaking
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="relative pb-2">
                      <CardTitle className="text-primary group-hover:text-primary-600 transition-colors">
                        McCaffrey Out for Season with ACL Tear
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>November 25, 2025</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <img
                          src="/news1.webp"
                          alt="Christian McCaffrey injured"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        San Francisco 49ers star running back Christian
                        McCaffrey has been ruled out for the remainder of the
                        season after suffering an ACL tear during Sunday's game
                        against the Seattle Seahawks.
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <ThumbsUp className="h-4 w-4" />
                          <span>243</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MessageSquare className="h-4 w-4" />
                          <span>58</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </div>
                      </div>
                    </CardContent>
                    {/* <CardFooter className="relative">
                      <Button
                        variant="outline"
                        className="w-full border-primary hover:bg-primary/10 hover:text-primary group"
                      >
                        Read More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter> */}
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 border-secondary/20 hover:border-secondary/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="relative pb-2">
                      <CardTitle className="text-secondary group-hover:text-secondary-600 transition-colors">
                        Rookie QB Daniels Continues to Impress
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-secondary" />
                        <span>November 24, 2025</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <img
                          src="/news2.jpg"
                          alt="Jayden Daniels throwing"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        Washington Commanders rookie quarterback Jayden Daniels
                        threw for 325 yards and 3 touchdowns in Sunday's win
                        over the Dallas Cowboys, continuing his impressive
                        rookie campaign.
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <ThumbsUp className="h-4 w-4" />
                          <span>187</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MessageSquare className="h-4 w-4" />
                          <span>42</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </div>
                      </div>
                    </CardContent>
                    {/* <CardFooter className="relative">
                      <Button
                        variant="outline"
                        className="w-full border-secondary hover:bg-secondary/10 hover:text-secondary group"
                      >
                        Read More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter> */}
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 border-accent/20 hover:border-accent/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="relative pb-2">
                      <CardTitle className="text-accent group-hover:text-accent-600 transition-colors">
                        Fantasy Basketball: Waiver Wire Pickups
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>November 23, 2025</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <img
                          src="/news3.avif"
                          alt="Basketball player dunking"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        Looking to bolster your fantasy basketball roster? Check
                        out these under-the-radar players who are available in
                        most leagues and could provide significant value.
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <ThumbsUp className="h-4 w-4" />
                          <span>156</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MessageSquare className="h-4 w-4" />
                          <span>31</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </div>
                      </div>
                    </CardContent>
                    {/* <CardFooter className="relative">
                      <Button
                        variant="outline"
                        className="w-full border-accent hover:bg-accent/10 hover:text-accent group"
                      >
                        Read More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter> */}
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="relative pb-2">
                      <CardTitle className="text-primary group-hover:text-primary-600 transition-colors">
                        MLB Free Agency: Top Signings Impact
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>November 22, 2025</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <img
                          src="/news4.jpg"
                          alt="Baseball player signing contract"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        As MLB free agency heats up, several big-name players
                        have already found new homes. We analyze how these
                        signings will impact fantasy baseball values for the
                        upcoming season.
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <ThumbsUp className="h-4 w-4" />
                          <span>124</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MessageSquare className="h-4 w-4" />
                          <span>27</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </div>
                      </div>
                    </CardContent>
                    {/* <CardFooter className="relative">
                      <Button
                        variant="outline"
                        className="w-full border-primary hover:bg-primary/10 hover:text-primary group"
                      >
                        Read More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter> */}
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 border-secondary/20 hover:border-secondary/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="relative pb-2">
                      <CardTitle className="text-secondary group-hover:text-secondary-600 transition-colors">
                        Fantasy Football Playoff Preview
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-secondary" />
                        <span>November 21, 2025</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <img
                          src="/news5.jpg"
                          alt="Football playoff bracket"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        With fantasy football playoffs approaching, we break
                        down key matchups, players to target, and strategies to
                        help you secure a championship in your league.
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <ThumbsUp className="h-4 w-4" />
                          <span>198</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MessageSquare className="h-4 w-4" />
                          <span>45</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </div>
                      </div>
                    </CardContent>
                    {/* <CardFooter className="relative">
                      <Button
                        variant="outline"
                        className="w-full border-secondary hover:bg-secondary/10 hover:text-secondary group"
                      >
                        Read More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter> */}
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 border-accent/20 hover:border-accent/50 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <CardHeader className="relative pb-2">
                      <CardTitle className="text-accent group-hover:text-accent-600 transition-colors">
                        NHL Rookie Sensation Breaking Records
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-accent" />
                        <span>November 20, 2025</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className="relative h-40 mb-4 overflow-hidden rounded-md">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <img
                          src="/news6.jpg"
                          alt="Hockey player celebrating"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="text-muted-foreground">
                        The hockey world is buzzing about the incredible start
                        to the season for rookie sensation Connor Bedard, who is
                        on pace to break several NHL rookie scoring records.
                      </p>
                      <div className="flex items-center gap-3 mt-4">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <ThumbsUp className="h-4 w-4" />
                          <span>167</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MessageSquare className="h-4 w-4" />
                          <span>36</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </div>
                      </div>
                    </CardContent>
                    {/* <CardFooter className="relative">
                      <Button
                        variant="outline"
                        className="w-full border-accent hover:bg-accent/10 hover:text-accent group"
                      >
                        Read More{" "}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter> */}
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="football" className="mt-4">
                <div className="flex items-center justify-center p-12 bg-primary-50 rounded-lg">
                  <div className="text-center">
                    <Bell className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce-subtle" />
                    <h3 className="text-lg font-medium text-primary">
                      Select the All News tab to view news articles
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      We've highlighted the latest football news there for you
                    </p>
                    <Button className="mt-4 bg-primary hover:bg-primary-600 transition-all duration-300">
                      View All News
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="group hover:shadow-xl transition-all duration-300 border-primary/20 hover:border-primary/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative pb-2">
                <CardTitle className="text-primary">Injury Report</CardTitle>
                <CardDescription>Latest player injury updates</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">
                          Christian McCaffrey (RB - SF)
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          ACL Tear
                        </p>
                      </div>
                      <Badge className="bg-red-500 hover:bg-red-600">
                        Out for Season
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">
                          Ja'Marr Chase (WR - CIN)
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Hamstring
                        </p>
                      </div>
                      <Badge className="bg-red-500 hover:bg-red-600">
                        Out Week 12
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Tyreek Hill (WR - MIA)</h3>
                        <p className="text-sm text-muted-foreground">Ankle</p>
                      </div>
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">
                        Questionable
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">George Kittle (TE - SF)</h3>
                        <p className="text-sm text-muted-foreground">Knee</p>
                      </div>
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">
                        Questionable
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Nick Chubb (RB - CLE)</h3>
                        <p className="text-sm text-muted-foreground">Knee</p>
                      </div>
                      <Badge className="bg-green-500 hover:bg-green-600">
                        Returning Week 13
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="relative">
                <Button
                  variant="outline"
                  className="w-full border-primary hover:bg-primary/10 hover:text-primary"
                >
                  View Full Injury Report
                </Button>
              </CardFooter>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-secondary/20 hover:border-secondary/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative pb-2">
                <CardTitle className="text-secondary">
                  Fantasy Podcast
                </CardTitle>
                <CardDescription>Listen to our latest episodes</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="space-y-4">
                  <div className="group/item p-3 rounded-lg hover:bg-secondary/5 transition-colors">
                    <h3 className="font-medium text-secondary">
                      Week 12 Preview: Start 'Em, Sit 'Em
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-muted-foreground">
                        Nov 25, 2025 • 48 min
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-secondary hover:bg-secondary/10 hover:text-secondary-600 group-hover/item:opacity-100 opacity-0 transition-opacity"
                      >
                        <Bell className="mr-1 h-4 w-4" /> Subscribe
                      </Button>
                    </div>
                  </div>
                  <div className="group/item p-3 rounded-lg hover:bg-secondary/5 transition-colors">
                    <h3 className="font-medium text-secondary">
                      Waiver Wire Gems for Week 12
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-muted-foreground">
                        Nov 23, 2025 • 35 min
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-secondary hover:bg-secondary/10 hover:text-secondary-600 group-hover/item:opacity-100 opacity-0 transition-opacity"
                      >
                        <Bell className="mr-1 h-4 w-4" /> Subscribe
                      </Button>
                    </div>
                  </div>
                  <div className="group/item p-3 rounded-lg hover:bg-secondary/5 transition-colors">
                    <h3 className="font-medium text-secondary">
                      Injury Impact: McCaffrey Out for Season
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-muted-foreground">
                        Nov 22, 2025 • 42 min
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-secondary hover:bg-secondary/10 hover:text-secondary-600 group-hover/item:opacity-100 opacity-0 transition-opacity"
                      >
                        <Bell className="mr-1 h-4 w-4" /> Subscribe
                      </Button>
                    </div>
                  </div>
                  <div className="group/item p-3 rounded-lg hover:bg-secondary/5 transition-colors">
                    <h3 className="font-medium text-secondary">
                      Fantasy Basketball: Week 6 Preview
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-muted-foreground">
                        Nov 20, 2025 • 51 min
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-secondary hover:bg-secondary/10 hover:text-secondary-600 group-hover/item:opacity-100 opacity-0 transition-opacity"
                      >
                        <Bell className="mr-1 h-4 w-4" /> Subscribe
                      </Button>
                    </div>
                  </div>
                  <div className="group/item p-3 rounded-lg hover:bg-secondary/5 transition-colors">
                    <h3 className="font-medium text-secondary">
                      Trade Deadline Special: Buy Low, Sell High
                    </h3>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-sm text-muted-foreground">
                        Nov 18, 2025 • 63 min
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-secondary hover:bg-secondary/10 hover:text-secondary-600 group-hover/item:opacity-100 opacity-0 transition-opacity"
                      >
                        <Bell className="mr-1 h-4 w-4" /> Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="relative">
                <Button className="w-full bg-secondary hover:bg-secondary-600 transition-all duration-300 shadow hover:shadow-secondary/30">
                  Subscribe to Podcast
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* <div className="mt-12 p-6 rounded-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Never Miss an Update
                </h3>
                <p className="text-muted-foreground mt-2">
                  Subscribe to our newsletter for weekly fantasy insights and
                  tips
                </p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-sm"
                />
                <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-primary/30">
                  Subscribe
                </Button>
              </div>
            </div>
          </div> */}
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2025{" "}
              <span className="font-medium text-primary">FantasySports</span>.
              All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground underline-offset-4 hover:text-primary hover:underline transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
