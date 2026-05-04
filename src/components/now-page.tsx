"use client";

import {
  Award,
  BookOpen,
  ExternalLink,
  FileText,
  Github,
  GitPullRequest,
  Radio,
  RefreshCw,
  Sparkles,
  Star,
  Trophy,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

const currentBook = {
  title: "The Pragmatic Programmer",
  isbn: "9780201616224",
  fallbackAuthor: "Andy Hunt and Dave Thomas",
};

const notes = [
  {
    title: "Building is mostly reading the docs twice",
    description:
      "The first read tells me what exists. The second read tells me what I misunderstood. Most good implementation decisions happen between those two passes.",
    icon: FileText,
  },
  {
    title: "YouTube is useful when I treat it like a lab",
    description:
      "I watch to see someone reason through tradeoffs, then pause and rebuild the idea myself. Passive watching does not stick; recreating the pattern does.",
    icon: Youtube,
  },
  {
    title: "API integration is product thinking",
    description:
      "Fetching data is the easy part. The real work is loading states, fallbacks, rate limits, malformed responses, and making the result feel native to the UI.",
    icon: Radio,
  },
];

type BookData = {
  title: string;
  author: string;
  coverUrl: string;
  sourceUrl: string;
};

type GitHubStats = {
  publicRepos: number;
  followers: number;
  recentEvents: number;
  recentPushes: number;
  recentPullRequests: number;
};

const hacktoberfestSwags = [
  { title: "Contributor", level: "Level 1", tone: "violet" },
  { title: "Contributor", level: "Level 3", tone: "indigo" },
  { title: "Contributor", level: "Level 4", tone: "blue" },
  { title: "Supercontributor", level: "Gold", tone: "gold" },
  { title: "Holopin x Hacktoberfest", level: "Badge club", tone: "orange" },
  { title: "Plant a tree", level: "Tree-Nation", tone: "green" },
];

type GitHubCard = {
  label: string;
  value: number | string;
  icon: LucideIcon;
};

export function NowPage() {
  const [book, setBook] = useState<BookData | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [githubStatus, setGithubStatus] = useState<"loading" | "ready" | "fallback">("loading");

  useEffect(() => {
    let cancelled = false;

    async function loadBook() {
      try {
        const response = await fetch(`https://openlibrary.org/isbn/${currentBook.isbn}.json`);
        if (!response.ok) throw new Error("Book lookup failed");
        const data = await response.json();

        let author = currentBook.fallbackAuthor;
        const authorKey = data.authors?.[0]?.key;
        if (authorKey) {
          const authorResponse = await fetch(`https://openlibrary.org${authorKey}.json`);
          if (authorResponse.ok) {
            const authorData = await authorResponse.json();
            author = authorData.name ?? author;
          }
        }

        if (!cancelled) {
          setBook({
            title: data.title ?? currentBook.title,
            author,
            coverUrl: `https://covers.openlibrary.org/b/isbn/${currentBook.isbn}-L.jpg`,
            sourceUrl: `https://openlibrary.org/isbn/${currentBook.isbn}`,
          });
          setStatus("ready");
        }
      } catch {
        if (!cancelled) {
          setBook({
            title: currentBook.title,
            author: currentBook.fallbackAuthor,
            coverUrl: `https://covers.openlibrary.org/b/isbn/${currentBook.isbn}-L.jpg`,
            sourceUrl: `https://openlibrary.org/isbn/${currentBook.isbn}`,
          });
          setStatus("fallback");
        }
      }
    }

    loadBook();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadGitHubStats() {
      try {
        const [profileResponse, eventsResponse] = await Promise.all([
          fetch("https://api.github.com/users/sandy4242"),
          fetch("https://api.github.com/users/sandy4242/events/public?per_page=60"),
        ]);

        if (!profileResponse.ok || !eventsResponse.ok) throw new Error("GitHub lookup failed");

        const profile = await profileResponse.json();
        const events = await eventsResponse.json();
        const recentPushes = events.filter((event: { type: string }) => event.type === "PushEvent").length;
        const recentPullRequests = events.filter((event: { type: string }) => event.type === "PullRequestEvent").length;

        if (!cancelled) {
          setGithubStats({
            publicRepos: profile.public_repos ?? 0,
            followers: profile.followers ?? 0,
            recentEvents: Array.isArray(events) ? events.length : 0,
            recentPushes,
            recentPullRequests,
          });
          setGithubStatus("ready");
        }
      } catch {
        if (!cancelled) {
          setGithubStats({
            publicRepos: 74,
            followers: 0,
            recentEvents: 60,
            recentPushes: 39,
            recentPullRequests: 14,
          });
          setGithubStatus("fallback");
        }
      }
    }

    loadGitHubStats();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="section-shell pt-28">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="eyebrow">Now</p>
            <h1 className="section-title">What I am reading, building, and figuring out.</h1>
          </div>
          <p className="section-copy">
            A living page for the messy middle: books, docs, videos, API experiments, and the small notes that shape how I build.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="minimal-card overflow-hidden">
            <div className="border-b border-border p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">Live API</p>
                  <h2 className="mt-2 font-heading text-2xl font-semibold text-foreground">Current book</h2>
                </div>
                <span className="rounded-md bg-secondary px-2 py-1 text-xs font-bold text-muted-foreground">
                  Open Library
                </span>
              </div>
            </div>

            <div className="grid gap-6 p-5 sm:grid-cols-[9rem_1fr]">
              <div className="aspect-[2/3] overflow-hidden rounded-md border border-border bg-secondary">
                {book?.coverUrl ? (
                  <img src={book.coverUrl} alt={`${book.title} cover`} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-primary">
                    <BookOpen size={34} />
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 text-sm font-bold text-primary">
                  {status === "loading" ? <RefreshCw size={15} className="animate-spin" /> : <BookOpen size={15} />}
                  {status === "loading" ? "Fetching live book data" : status === "ready" ? "Fetched from Open Library" : "Using fallback data"}
                </div>
                <h3 className="mt-4 font-heading text-3xl font-semibold leading-tight text-foreground">
                  {book?.title ?? currentBook.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-muted-foreground">
                  {book?.author ?? currentBook.fallbackAuthor}
                </p>
                <p className="section-copy mt-5 text-sm">
                  I am using this as a reminder that stronger backend work starts with stronger mental models: storage, consistency, queues, indexes, and the tradeoffs hiding under clean APIs.
                </p>
                <a
                  href={book?.sourceUrl ?? `https://openlibrary.org/isbn/${currentBook.isbn}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-link mt-6 inline-flex items-center gap-2 text-sm"
                >
                  View API source
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {notes.map((note) => {
              const Icon = note.icon;

              return (
                <article key={note.title} className="minimal-card p-5">
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h2 className="font-heading text-xl font-semibold text-foreground">{note.title}</h2>
                      <p className="section-copy mt-2 text-sm">{note.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            ["Reading", "Docs before opinions. Source code when docs get vague."],
            ["Watching", "Short implementation videos, then rebuilding the idea without the video."],
            ["Building", "Backend integrations that handle slow APIs, empty states, and clean fallbacks."],
          ].map(([title, description]) => (
            <article key={title} className="minimal-card p-5">
              <p className="text-sm font-bold text-primary">{title}</p>
              <p className="section-copy mt-2 text-sm">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="minimal-card overflow-hidden">
            <div className="border-b border-border p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="eyebrow">Open Source</p>
                  <h2 className="mt-2 font-heading text-2xl font-semibold text-foreground">GitHub contributions</h2>
                </div>
                <span className="rounded-md bg-secondary px-2 py-1 text-xs font-bold text-muted-foreground">
                  GitHub API
                </span>
              </div>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-[0.9fr_1.1fr]">
              <div className="minimal-card bg-secondary/60 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-background text-primary">
                    <Github size={21} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-primary">Last year</p>
                    <p className="font-heading text-4xl font-bold text-foreground">1,227</p>
                  </div>
                </div>
                <p className="section-copy mt-4 text-sm">
                  Contributions across commits, pull requests, issues, and reviews. The public API panel beside this updates live where GitHub allows unauthenticated reads.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {(
                  [
                    { label: "Public repos", value: githubStats?.publicRepos ?? "-", icon: Star },
                    { label: "Followers", value: githubStats?.followers ?? "-", icon: Sparkles },
                    { label: "Recent pushes", value: githubStats?.recentPushes ?? "-", icon: Github },
                    { label: "Recent PR events", value: githubStats?.recentPullRequests ?? "-", icon: GitPullRequest },
                  ] satisfies GitHubCard[]
                ).map((card) => {
                  const Icon = card.icon;

                  return (
                    <div key={card.label} className="minimal-card p-4">
                      <Icon className="text-primary" size={18} />
                      <p className="mt-4 font-heading text-2xl font-semibold text-foreground">{card.value}</p>
                      <p className="mt-1 text-xs font-bold uppercase text-muted-foreground">{card.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-border px-5 py-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="flex items-center gap-2 text-sm font-bold text-primary">
                  {githubStatus === "loading" ? <RefreshCw size={15} className="animate-spin" /> : <Github size={15} />}
                  {githubStatus === "loading" ? "Fetching GitHub activity" : githubStatus === "ready" ? "Live public GitHub data loaded" : "Using fallback GitHub data"}
                </p>
                <a
                  href="https://github.com/sandy4242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="accent-link inline-flex items-center gap-2 text-sm"
                >
                  Visit GitHub
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </article>

          <article className="minimal-card overflow-hidden">
            <div className="border-b border-border p-5">
              <p className="eyebrow">Hacktoberfest</p>
              <h2 className="mt-2 font-heading text-2xl font-semibold text-foreground">Swags and badges</h2>
              <p className="section-copy mt-3 text-sm">
                A little badge wall for the contribution streaks, Holopin drops, and open-source momentum.
              </p>
            </div>

            <div className="hacktober-grid p-5">
              {hacktoberfestSwags.map((swag) => (
                <div key={`${swag.title}-${swag.level}`} className={`hacktober-badge hacktober-${swag.tone}`}>
                  <div className="hacktober-badge-screen">
                    <Award size={28} />
                    <span />
                  </div>
                  <p>{swag.title}</p>
                  <small>{swag.level}</small>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary text-primary">
                  <Trophy size={20} />
                </span>
                <p className="section-copy text-sm">
                  These represent community participation: shipping PRs, reviewing feedback, and learning how real projects evolve in public.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
