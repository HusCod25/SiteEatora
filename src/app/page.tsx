'use client';

import Image from "next/image";
import { MouseEvent, useEffect, useState } from "react";

const features = [
  {
    icon: "🟢",
    title: "Ingredient-based generation",
    description:
      "Add ingredients with quantities — AI creates complete meals using only what you have.",
  },
  {
    icon: "🟢",
    title: "Macro-optimized meals",
    description: "Set calorie and macro targets and get recipes tailored to your goals.",
  },
  {
    icon: "🟢",
    title: "Quick & simple mode",
    description:
      "Just choose how many people you're cooking for and get a fast, effortless recipe.",
  },
  {
    icon: "🟢",
    title: "Save & manage meals",
    description:
      "Save your favorite recipes or remove the ones you don’t want — your personal AI cookbook.",
  },
];

type Plan = {
  name: string;
  description: string;
  perks: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  badge?: string;
  highlighted?: boolean;
  buttonText?: string;
};

const planTiers: Plan[] = [
  {
    name: "Free Plan",
    description: "Kick off with pantry basics and core recipes.",
    perks: [
      "10 meals per week",
      "Up to 6 ingredients",
      "Basic recipes",
      "Save up to 3 meals",
      "GPT-4o-mini",
    ],
    monthlyPrice: 0,
    yearlyPrice: 0,
  },
  {
    name: "Beginner Plan",
    description: "Unlock advanced recipes with unlimited ingredients.",
    perks: [
      "40 meals per week",
      "Unlimited ingredients",
      "Advanced recipes",
      "Save up to 20 meals",
      "GPT-4o-mini",
    ],
    monthlyPrice: 4.99,
    yearlyPrice: 49.9,
    buttonText: "Free 15-day trial",
  },
  {
    name: "Chef Plan",
    description: "Personalized suggestions and unlimited saved meals.",
    perks: [
      "80 meals per week",
      "Unlimited ingredients",
      "Personalized suggestions",
      "Unlimited saved meals",
      "GPT-4o",
    ],
    monthlyPrice: 9.99,
    yearlyPrice: 99.9,
    badge: "Most popular",
    highlighted: true,
  },
  {
    name: "Unlimited Plan",
    description: "For power users who want limitless meals and themes.",
    perks: [
      "500 meals per week",
      "Unlimited ingredients",
      "Unlimited saved meals",
      "Personalized themes",
      "GPT-4o",
    ],
    monthlyPrice: 29.99,
    yearlyPrice: 299.9,
  },
];

const euroFormatter = new Intl.NumberFormat("en-IE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const steps = [
  {
    badge: "🟩",
    title: "1. Add your on-hand ingredients",
    description:
      "Enter the ingredients in your kitchen — include quantities for more accurate meals. EatoraAI™ uses only what you already own.",
  },
  {
    badge: "🟦",
    title: "2. Choose your mode",
    description:
      "Pick Serving Mode (just tell us how many people you’re cooking for) or Macro Mode (set your calorie & macro targets). The app adapts automatically.",
  },
  {
    badge: "🟧",
    title: "3. Click Generate — get your meal instantly",
    description:
      "AI creates a complete recipe using your ingredients. Save the meals you love or delete the ones you don’t. Cooking made effortless.",
  },
];

const testimonials = [
  {
    quote:
      "I never imagined I could plate a dish like this at home. EatoraAI™ built the recipe step-by-step from just some ingredients.",
    name: "David S.",
    role: "Home cook",
    image: "/testimonials/dish.jpg",
  },
  {
    quote: "Didn't know what to cook. Dropped my ingredients and got this.",
    name: "Tom R.",
    role: "Munchies user",
    image: "/testimonials/tom-plate.jpg",
  },
];

/*
const plans = [
  {
    name: "Free Plan",
    price: "€0",
    description: "Kick off with pantry basics and core recipes.",
    perks: [
      "10 meals per week",
      "Up to 6 ingredients",
      "Basic recipes",
      "Save up to 3 meals",
      "GPT-4o-mini (20 meals/day limit)",
    ],
    buttonText: "Wait for period end",
  },
  {
    name: "Beginner Plan",
    price: "€4.99",
    priceNote: "/month",
    description: "Unlock advanced recipes with unlimited ingredients.",
    perks: [
      "40 meals per week",
      "Unlimited ingredients",
      "Advanced recipes",
      "Save up to 20 meals",
      "GPT-4o-mini",
    ],
    buttonText: "Free 15-day trial",
  },
  {
    name: "Chef Plan",
    price: "€14.99",
    priceNote: "/month",
    description: "Personalized suggestions and unlimited saved meals.",
    perks: [
      "80 meals per week",
      "Unlimited ingredients",
      "Personalized suggestions",
      "Unlimited saved meals",
      "GPT-4o",
    ],
    badge: "Current plan",
  },
  {
    name: "Unlimited Plan",
    price: "€29.99",
    priceNote: "/month",
    description: "For power users who want limitless meals and themes.",
    perks: [
      "500 meals per week",
      "Unlimited ingredients",
      "Unlimited saved meals",
      "Personalized themes",
      "GPT-4o",
    ],
    badge: "Most popular",
    highlighted: true,
    buttonText: "Upgrade now",
  },
];
*/

const HEADER_OFFSET = 120;

const scrollToSection = (id: string) => {
  if (typeof window === "undefined") return;
  const element = document.getElementById(id);
  if (!element) return;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - HEADER_OFFSET;
  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
};

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");
  const [cookieChoice, setCookieChoice] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("cookie-consent") : null;
    if (stored === "accepted" || stored === "declined") {
      setCookieChoice(stored);
    }
  }, []);

  const handleCookieChoice = (choice: "accepted" | "declined") => {
    setCookieChoice(choice);
    if (typeof window !== "undefined") {
      localStorage.setItem("cookie-consent", choice);
    }
  };
  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-emerald-500/40 blur-[180px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-y-1/2 rounded-full bg-orange-500/30 blur-[160px]" />

        <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <div>
              <div className="flex items-center gap-3">
        <Image
            src="/EatoraAILogo.svg"
            alt="EatoraAI™ logo"
            width={48}
            height={48}
    priority
  />
                <span className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  <span className="bg-gradient-to-r from-emerald-300 via-lime-200 to-amber-200 bg-clip-text text-transparent">
                    EatoraAI™
                  </span>
                </span>
              </div>
              <p className="ml-14 text-xs uppercase tracking-[0.3em] text-slate-400">
                Your AI powered chef
              </p>
            </div>
            <nav className="ml-auto hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
              <a
                href="#home"
                onClick={(event) => handleAnchorClick(event, "home")}
                className="transition hover:text-white"
              >
                Home
              </a>
              <a
                href="https://discord.gg/dkrn5r5kZ9"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Discord
              </a>
              <a
                href="#about"
                onClick={(event) => handleAnchorClick(event, "about")}
                className="transition hover:text-white"
              >
                About us
              </a>
              <a
                href="#pricing"
                onClick={(event) => handleAnchorClick(event, "pricing")}
                className="transition hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#contact"
                onClick={(event) => handleAnchorClick(event, "contact")}
                className="transition hover:text-white"
              >
                Contact
              </a>
            </nav>
            <a
              href="https://app.eatora.tech/register"
              className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white md:inline-flex"
            >
              Get started
            </a>
          </div>
        </header>

        <main className="relative mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
          <section id="home" className="scroll-mt-32 text-center sm:text-left">
            <div className="mt-4 flex flex-col gap-4">
              <div className="flex justify-center">
                <a
                  href="https://app.eatora.tech/signin"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 py-4 text-xl font-semibold text-white shadow-md transition hover:border-white hover:bg-white/20"
                >
                  Go to the app
                </a>
              </div>
              <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Hungry and uninspired?
              </h1>
              <p className="text-xl text-slate-200 sm:text-2xl">
                Let AI turn simple{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-lime-200 to-amber-200 bg-clip-text text-transparent">
                  on-hand ingredients
                </span>{" "}
                into recipes{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-lime-200 to-amber-200 bg-clip-text text-transparent">
                  instantly
                </span>
                .
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#pricing"
                  onClick={(event) => handleAnchorClick(event, "pricing")}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  See our subscriptions
                </a>
                <a
                  href="#screenshots"
                  onClick={(event) => handleAnchorClick(event, "screenshots")}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white hover:text-emerald-200"
                >
                  Explore the product →
                </a>
              </div>
            </div>
            <div className="mt-12 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-left text-base font-semibold text-white">
              {[
                { icon: "✅", label: "Save time" },
                { icon: "♻️", label: "Reduce waste" },
                { icon: "🍽️", label: "Eat better" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-base">
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="space-y-8 scroll-mt-32">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                About us
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Built for people who stare at their fridge and think: “What now?”
              </h2>
              <p className="text-lg text-slate-300">
                EatoraAI™ was created to solve the most annoying daily problem: not knowing what to cook. We built a fast, smart AI that takes whatever ingredients you have and turns them into real meals—instantly. Simple, helpful, and made for everyday life.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: "🎯",
                  title: "Zero thinking",
                  copy: "Stop wasting minutes deciding what to cook. AI does it for you.",
                },
                {
                  icon: "🛒",
                  title: "Shop smarter",
                  copy: "Get meal ideas based on what’s already in your kitchen.",
                },
                {
                  icon: "🧑‍🍳",
                  title: "Cook confidently",
                  copy: "Simple steps anyone can follow — even beginners.",
                },
              ].map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
                >
                  <p className="text-lg font-semibold text-white">
                    <span className="mr-2">{pillar.icon}</span>
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{pillar.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="features" className="space-y-10 scroll-mt-32">
            <div className="max-w-3xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                Features
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Everything you need to cook smarter, not harder.
              </h2>
              <p className="text-lg text-slate-300">
                EatoraAI™ helps you instantly turn your ingredients into meals, save time, reduce
                waste, and eat better — all with a simple, friendly experience anyone can use.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                >
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-emerald-200">
                    <span>{feature.icon}</span>
                    {feature.title}
                  </div>
                  <p className="mt-3 text-base text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-it-works" className="space-y-10 scroll-mt-32">
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                How it works
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Cook smarter in three simple steps.
              </h2>
              <p className="text-lg text-slate-300">
                No planning, no stress — just instant meals from what you already have.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-4 text-3xl">{step.badge}</div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-base text-slate-300">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="screenshots" className="space-y-10 scroll-mt-32">
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                Product preview
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Watch your ingredients turn into recipes in seconds.
              </h2>
              <p className="text-lg text-slate-300">
                See real examples of meals generated from everyday ingredients.
              </p>
            </div>
            <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-4 sm:p-6 lg:p-8">
              <div className="relative w-full overflow-hidden rounded-2xl bg-black/60 pb-[56.25%]">
                <iframe
                  className="absolute inset-0 h-full w-full border-0"
                  src="https://www.youtube.com/embed/q4qs-L6HRvQ"
                  title="EatoraAI product walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                Product walkthrough
              </p>
              <p className="mt-1 text-center text-xs text-slate-500">
                Learn how EatoraAI™ turns your ingredients into ready-to-cook recipes.
              </p>
            </div>
          </section>

          <section id="testimonials" className="space-y-10 scroll-mt-32">
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                Testimonials
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Listen to our first users reviews. Real meals. Real people. Real results.
              </h2>
              <p className="text-lg text-slate-300">
                Instant recipes. Zero food waste. Maximum convenience.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <figure
                  key={testimonial.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left"
                >
                  {testimonial.image && (
                    <div className="mb-4 overflow-hidden rounded-xl">
                      <Image
                        src={testimonial.image}
                        alt={`Dish created by ${testimonial.name}`}
                        width={600}
                        height={400}
                        className="h-48 w-full object-cover"
                      />
                    </div>
                  )}
                  <blockquote className="text-lg text-slate-100">
                    “{testimonial.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-slate-400">
                    {testimonial.name} · {testimonial.role}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="pricing" className="space-y-10 scroll-mt-32">
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                Pricing
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Flexible plans for every concept.
              </h2>
              <p className="text-lg text-slate-300">Upgrade or downgrade anytime.</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-sm sm:flex-row sm:justify-between">
              <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1">
                {(["monthly", "yearly"] as const).map((cycle) => (
                  <button
                    key={cycle}
                    type="button"
                    onClick={() => setBillingCycle(cycle)}
                    className={`rounded-full px-4 py-1 text-xs font-semibold transition ${
                      billingCycle === cycle
                        ? "bg-white text-slate-900"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {cycle === "monthly" ? "Monthly" : "Yearly"}
                  </button>
                ))}
              </div>
              <p className="text-xs text-slate-400">Switch to yearly billing for extra savings.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {planTiers.map((plan) => {
                const price =
                  billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
                const note =
                  price === 0
                    ? ""
                    : billingCycle === "monthly"
                    ? "/month"
                    : "/year";
                const displayPrice =
                  price === 0 ? "€0" : euroFormatter.format(price);

                return (
                  <div
                    key={plan.name}
                    className={`flex flex-col rounded-2xl border bg-white/5 p-5 text-sm ${
                      plan.highlighted ? "border-emerald-400/50 shadow-emerald-400/30 shadow-xl" : "border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                      {plan.badge && (
                        <span className="text-xs uppercase tracking-wide text-slate-400">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 flex items-baseline gap-2 text-3xl font-semibold text-white">
                      {displayPrice}
                      {note && <span className="text-sm font-medium text-slate-400">{note}</span>}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">{plan.description}</p>
                    <ul className="mt-4 space-y-2 text-xs text-slate-200">
                      {plan.perks.map((perk) => (
                        <li key={perk} className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-300" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="https://app.eatora.tech/register"
                      className={`mt-6 w-full rounded-full px-3 py-2 text-center text-xs font-semibold transition ${
                        plan.highlighted
                          ? "bg-white text-slate-950 hover:bg-slate-100"
                          : "border border-white/20 text-white hover:border-white"
                      }`}
                    >
                      {plan.buttonText ?? "Choose plan"}
                    </a>
                  </div>
                );
              })}
            </div>
          </section>

          <section id="contact" className="space-y-10 scroll-mt-32">
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">
                Contact
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Questions? We reply in under a day.
              </h2>
              <p className="text-lg text-slate-300">
                We’re here to support your cooking journey. Let us know how we can help.
              </p>
            </div>
            <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 lg:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Talk to us</h3>
                <p className="text-slate-300">
                  eatora.app@gmail.com
                </p>
                <p className="text-slate-300">
                  <a
                    href="https://discord.gg/dkrn5r5kZ9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                  >
                    Join our Discord
                  </a>
                </p>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white focus:outline-none"
                />
                <textarea
                  placeholder="What are you craving help with?"
                  className="h-28 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white placeholder:text-slate-500 focus:border-white focus:outline-none"
                />
                <button
                  type="button"
                  className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Send message
                </button>
              </form>
            </div>
          </section>
        </main>

        {cookieChoice === null && (
          <div className="fixed bottom-4 left-4 right-4 z-30 sm:left-auto sm:right-4 sm:max-w-md">
            <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl shadow-emerald-500/15 backdrop-blur">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 text-lg">🍪</div>
                <div className="flex-1 space-y-2 text-sm text-slate-200">
                  <p className="font-semibold text-white">We use cookies</p>
                  <p className="text-slate-300">
                    We rely on essential and analytics cookies to improve your experience. Read our
                    <a href="/cookie-policy" className="ml-1 font-semibold text-emerald-200 underline-offset-4 hover:underline">
                      Cookie Policy
                    </a>
                    .
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => handleCookieChoice("declined")}
                      className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-white/40"
                    >
                      Decline
                    </button>
                    <button
                      type="button"
                      onClick={() => handleCookieChoice("accepted")}
                      className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-slate-100"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <footer className="border-t border-white/5 bg-slate-950/60">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10">
            {/* Main footer content */}
            <div className="flex flex-col gap-4 text-center text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
              <p>EatoraAI™ © {new Date().getFullYear()} · All rights reserved.</p>
              <div className="flex justify-center gap-6 text-slate-400 sm:justify-end">
                <a
                  href="#features"
                  onClick={(event) => handleAnchorClick(event, "features")}
                  className="transition hover:text-white"
                >
                  Product
                </a>
                <a
                  href="#pricing"
                  onClick={(event) => handleAnchorClick(event, "pricing")}
                  className="transition hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="#testimonials"
                  onClick={(event) => handleAnchorClick(event, "testimonials")}
                  className="transition hover:text-white"
                >
                  Stories
                </a>
                <a
                  href="https://app.eatora.tech/terms"
                  className="transition hover:text-white"
                  rel="noreferrer"
                  target="_blank"
                >
                  Terms
                </a>
                <a
                  href="https://app.eatora.tech/privacy"
                  className="transition hover:text-white"
                  rel="noreferrer"
                  target="_blank"
                >
                  Privacy
                </a>
              </div>
            </div>
            
            {/* Consumer protection badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 border-t border-white/5 pt-6">
              <a
                href="https://anpc.ro/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                title="Autoritatea Națională pentru Protecția Consumatorilor"
              >
                <img
                  src="/anpc.svg"
                  alt="ANPC - Protecția Consumatorilor"
                  className="h-16 w-auto bg-white px-2 py-1 rounded"
                />
              </a>
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                title="Soluționarea Online a Litigiilor - European Commission"
              >
                <img
                  src="/EuCom.svg"
                  alt="European Commission - ODR Platform"
                  className="h-16 w-auto bg-white px-2 py-1 rounded"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
