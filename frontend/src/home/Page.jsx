import React, { useState } from "react";
import {
  Search,
  MapPin,
  Wrench,
  Gauge,
  Battery,
  Snowflake,
  Disc,
  Cog,
  Star,
  Clock,
  ShieldCheck,
  ArrowRight,
  Quote,
  CheckCircle2,
  Briefcase,
  DollarSign,
  Users,
  Truck,
  Building2,
  Award,
} from "lucide-react";

const fontImport = `
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap');
`;

const display = { fontFamily: "'Oswald', sans-serif" };
const mono = { fontFamily: "'IBM Plex Mono', monospace" };

/* ---------- Mode-specific content ---------- */

const CONTENT = {
  hire: {
    eyebrow: "Trusted mechanics, on demand",
    headline: "Find a mechanic who actually shows up.",
    body: "Tell us what's wrong. We match you with a vetted mechanic nearby, show you real reviews and upfront pricing, and get your car back on the road.",
    searchPlaceholder: "What's the problem? (e.g. brakes squeaking)",
    searchLocationPlaceholder: "Location",
    searchButtonLabel: "Search",
    searchIcon: Wrench,
    footnote: "NO SIGNUP REQUIRED · AVG MATCH TIME 4 MIN",
    ticketLabel: "Nearby match",
    categoriesEyebrow: "What do you need?",
    categoriesTitle: "Browse by service.",
    categories: [
      { icon: Disc, label: "Brakes" },
      { icon: Cog, label: "Engine" },
      { icon: Gauge, label: "Diagnostics" },
      { icon: Battery, label: "Battery" },
      { icon: Snowflake, label: "A/C" },
      { icon: Wrench, label: "General" },
    ],
    stepsEyebrow: "How it works",
    stepsTitle: "Three steps, no hassle.",
    steps: [
      { title: "Describe the problem", body: "Type what's going on, or snap a photo of the warning light, leak, or damage." },
      { title: "Get matched instantly", body: "We surface nearby, verified mechanics with upfront pricing and real ratings." },
      { title: "Book and get moving", body: "Confirm a time, message the shop directly, and track the job to completion." },
    ],
    listingEyebrow: "Top rated nearby",
    listingTitle: "Mechanics people trust.",
    listingCta: "View all",
    valueProps: [
      { icon: ShieldCheck, title: "Licensed & insured", body: "Every shop is verified before they can take a booking." },
      { icon: CheckCircle2, title: "Upfront pricing", body: "Itemized quotes before you commit — no surprise invoices." },
      { icon: Star, title: "Real reviews only", body: "Ratings come only from drivers who booked through Gearline." },
    ],
    quote: "My check-engine light came on an hour before a road trip. Gearline found someone four minutes away who fit me in the same day.",
    quoteName: "Jordan T.",
    quoteRole: "Gearline driver",
    quoteInitials: "JT",
    ctaTitle: "Something feels off with your car?",
    ctaBody: "Get matched with a mechanic in minutes.",
    ctaButton: "Find a mechanic",
  },
  work: {
    eyebrow: "Work that finds you",
    headline: "Find your next job, faster.",
    body: "Tell us your specialty. We match you with nearby shops and drivers who need work done, show you the pay upfront, and get you booked.",
    searchPlaceholder: "What do you specialize in? (e.g. engine diagnostics)",
    searchLocationPlaceholder: "Location",
    searchButtonLabel: "Find work",
    searchIcon: Briefcase,
    footnote: "FREE TO JOIN · AVG TIME TO FIRST JOB 2 DAYS",
    ticketLabel: "Open job",
    categoriesEyebrow: "What's your specialty?",
    categoriesTitle: "Browse open jobs.",
    categories: [
      { icon: Disc, label: "Brakes" },
      { icon: Truck, label: "Mobile" },
      { icon: Building2, label: "Shop tech" },
      { icon: Users, label: "Freelance" },
      { icon: Gauge, label: "Diagnostics" },
      { icon: Award, label: "Certified" },
    ],
    stepsEyebrow: "How it works",
    stepsTitle: "Three steps to your next job.",
    steps: [
      { title: "Build your profile", body: "List your certifications, specialties, and availability so shops know what you bring." },
      { title: "Get matched with jobs", body: "We surface nearby job requests that fit your skills and schedule, pay shown upfront." },
      { title: "Accept and get paid", body: "Confirm the job, message the customer or shop directly, and get paid on completion." },
    ],
    listingEyebrow: "Open right now",
    listingTitle: "Jobs near you.",
    listingCta: "View all",
    valueProps: [
      { icon: DollarSign, title: "Upfront pay", body: "See the rate before you accept — no negotiating after the fact." },
      { icon: ShieldCheck, title: "Verified customers", body: "Every job request comes from a verified driver or shop account." },
      { icon: Star, title: "Build your reputation", body: "Every completed job adds to a public rating you own." },
    ],
    quote: "I picked up three jobs in my first week just from my phone. No cold calling, no waiting around at the shop.",
    quoteName: "Priya S.",
    quoteRole: "Independent mechanic",
    quoteInitials: "PS",
    ctaTitle: "Ready to pick up your next job?",
    ctaBody: "Join free and start getting matched today.",
    ctaButton: "Find work",
  },
};

const LISTINGS = {
  hire: [
    { name: "Marisol's Auto & Diesel", specialty: "Brakes & suspension", rating: "4.9", distance: "2.4 mi", eta: "4 min" },
    { name: "Union Street Motors", specialty: "Engine diagnostics", rating: "4.8", distance: "3.1 mi", eta: "7 min" },
    { name: "Torque & Tread Garage", specialty: "Tires & alignment", rating: "4.7", distance: "1.8 mi", eta: "5 min" },
  ],
  work: [
    { name: "Brake pad replacement", specialty: "Union Street Motors", rating: "$85", distance: "2.1 mi", eta: "Today" },
    { name: "Mobile battery swap", specialty: "Private customer", rating: "$60", distance: "0.9 mi", eta: "Tomorrow" },
    { name: "Full diagnostics check", specialty: "Torque & Tread Garage", rating: "$120", distance: "3.4 mi", eta: "This week" },
  ],
};

/* ---------- Shared pieces ---------- */

function TicketDivider() {
  return (
    <div className="flex items-center gap-3 py-2" aria-hidden="true">
      <div className="h-px flex-1 border-t-2 border-dashed border-neutral-700" />
      <Wrench className="w-4 h-4 text-neutral-600" />
      <div className="h-px flex-1 border-t-2 border-dashed border-neutral-700" />
    </div>
  );
}

function ModeSwitch({ mode, onChange }) {
  return (
    <div className="inline-flex items-center bg-neutral-900 border border-neutral-800 rounded-full p-1 mb-8">
      <button
        onClick={() => onChange("hire")}
        className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${
          mode === "hire"
            ? "bg-orange-500 text-neutral-950"
            : "text-stone-400 hover:text-stone-200"
        }`}
      >
        Hire a mechanic
      </button>
      <button
        onClick={() => onChange("work")}
        className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${
          mode === "work"
            ? "bg-orange-500 text-neutral-950"
            : "text-stone-400 hover:text-stone-200"
        }`}
      >
        Find work
      </button>
    </div>
  );
}

function ServiceCategory({ icon: Icon, label }) {
  return (
    <button className="group bg-neutral-900 border border-neutral-800 hover:border-orange-500/60 rounded-sm p-5 flex flex-col items-center gap-3 transition-colors">
      <div className="w-11 h-11 rounded-full bg-neutral-800 group-hover:bg-orange-500/10 flex items-center justify-center transition-colors">
        <Icon className="w-5 h-5 text-amber-400" />
      </div>
      <span className="text-sm text-stone-300 group-hover:text-stone-100 transition-colors">
        {label}
      </span>
    </button>
  );
}

function StepCard({ number, title, body }) {
  return (
    <div className="border border-neutral-800 bg-neutral-900/60 rounded-sm p-6">
      <span className="text-3xl text-orange-500/80 block mb-3" style={mono}>
        {number}
      </span>
      <h3 className="text-stone-100 font-medium mb-2">{title}</h3>
      <p className="text-sm text-stone-400 leading-relaxed">{body}</p>
    </div>
  );
}

function ListingCard({ name, specialty, rating, distance, eta, mode }) {
  return (
    <div className="bg-stone-100 text-neutral-900 rounded-sm p-5 shadow-lg">
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-neutral-500">{specialty}</p>
        </div>
        <span className="flex items-center gap-1 text-xs font-medium bg-amber-400/20 text-amber-700 px-2 py-1 rounded-sm">
          {mode === "hire" ? (
            <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
          ) : (
            <DollarSign className="w-3 h-3" />
          )}
          {rating}
        </span>
      </div>
      <div className="flex items-center justify-between text-xs text-neutral-500 border-t border-dashed border-neutral-300 pt-3">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5" /> {distance}
        </span>
        <span className="flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" /> {eta}
        </span>
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function HomePage() {
  const [mode, setMode] = useState("hire");
  const c = CONTENT[mode];
  const listings = LISTINGS[mode];
  const SearchIcon = c.searchIcon;

  return (
    <div className="min-h-screen bg-neutral-950 text-stone-200">
      <style>{fontImport}</style>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ModeSwitch mode={mode} onChange={setMode} />

            <p className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-4" style={display}>
              {c.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl leading-[1.05] text-stone-100 mb-6" style={display}>
              {c.headline}
            </h1>
            <p className="text-stone-400 leading-relaxed mb-8 max-w-md">
              {c.body}
            </p>

            {/* Search "ticket" */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-sm p-4 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2 flex-1 bg-neutral-950 border border-neutral-800 rounded-sm px-3">
                <SearchIcon className="w-4 h-4 text-stone-500 shrink-0" />
                <input
                  type="text"
                  placeholder={c.searchPlaceholder}
                  className="bg-transparent w-full py-3 text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-2 sm:w-40 bg-neutral-950 border border-neutral-800 rounded-sm px-3">
                <MapPin className="w-4 h-4 text-stone-500 shrink-0" />
                <input
                  type="text"
                  placeholder={c.searchLocationPlaceholder}
                  className="bg-transparent w-full py-3 text-sm text-stone-100 placeholder:text-stone-600 focus:outline-none"
                />
              </div>
              <button className="bg-orange-500 hover:bg-orange-400 text-neutral-950 font-semibold px-5 py-3 rounded-sm flex items-center justify-center gap-2 transition-colors shrink-0">
                <Search className="w-4 h-4" />
                {c.searchButtonLabel}
              </button>
            </div>
            <p className="text-xs text-stone-600 mt-3" style={mono}>
              {c.footnote}
            </p>
          </div>

          {/* Sample ticket preview */}
          <div className="bg-stone-100 text-neutral-900 rounded-sm shadow-2xl p-6 relative -rotate-1">
            <div className="absolute -top-3 -right-3 bg-amber-400 text-neutral-900 text-xs font-bold px-3 py-1 rounded-sm rotate-6 shadow-md" style={display}>
              VERIFIED
            </div>
            <div className="flex justify-between items-start border-b border-neutral-300 pb-3 mb-3">
              <div>
                <p className="text-xs uppercase tracking-widest text-neutral-500" style={display}>
                  {c.ticketLabel}
                </p>
                <p className="text-lg font-semibold" style={mono}>#04521</p>
              </div>
              <Gauge className="w-6 h-6 text-neutral-400" />
            </div>
            <div className="space-y-3 text-sm">
              {mode === "hire" ? (
                <>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Shop</span>
                    <span className="font-medium">Marisol's Auto &amp; Diesel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Specialty</span>
                    <span className="font-medium">Brakes &amp; suspension</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-500">Rating</span>
                    <span className="flex items-center gap-1 font-medium">
                      4.9 <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Job</span>
                    <span className="font-medium">Brake pad replacement</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Posted by</span>
                    <span className="font-medium">Union Street Motors</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-500">Pay</span>
                    <span className="flex items-center gap-1 font-medium">
                      $85 <DollarSign className="w-3.5 h-3.5 text-amber-500" />
                    </span>
                  </div>
                </>
              )}
              <div className="flex justify-between">
                <span className="text-neutral-500">Distance</span>
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5" /> 2.4 mi
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">
                  {mode === "hire" ? "Est. response" : "Starts"}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5" /> {mode === "hire" ? "4 min" : "Today"}
                </span>
              </div>
            </div>
            <button className="w-full mt-4 bg-neutral-900 hover:bg-neutral-800 text-stone-100 font-medium py-2.5 rounded-sm text-sm transition-colors">
              {mode === "hire" ? "View profile" : "View job"}
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <TicketDivider />
      </div>

      {/* CATEGORIES */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-3" style={display}>
          {c.categoriesEyebrow}
        </p>
        <h2 className="text-2xl sm:text-3xl text-stone-100 mb-10" style={display}>
          {c.categoriesTitle}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {c.categories.map((cat) => (
            <ServiceCategory key={cat.label} icon={cat.icon} label={cat.label} />
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <TicketDivider />
      </div>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-3" style={display}>
          {c.stepsEyebrow}
        </p>
        <h2 className="text-2xl sm:text-3xl text-stone-100 mb-10" style={display}>
          {c.stepsTitle}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {c.steps.map((step, i) => (
            <StepCard
              key={step.title}
              number={`0${i + 1}`}
              title={step.title}
              body={step.body}
            />
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <TicketDivider />
      </div>

      {/* LISTINGS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-3" style={display}>
              {c.listingEyebrow}
            </p>
            <h2 className="text-2xl sm:text-3xl text-stone-100" style={display}>
              {c.listingTitle}
            </h2>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-sm text-stone-400 hover:text-stone-100 transition-colors">
            {c.listingCta} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {listings.map((item) => (
            <ListingCard key={item.name} {...item} mode={mode} />
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <TicketDivider />
      </div>

      {/* VALUE PROPS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-4">
          {c.valueProps.map((v) => (
            <div key={v.title} className="border border-neutral-800 bg-neutral-900/60 rounded-sm p-6 flex gap-4">
              <v.icon className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-stone-100 font-medium mb-1">{v.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        <TicketDivider />
      </div>

      {/* TESTIMONIAL */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <Quote className="w-8 h-8 text-orange-500 mb-4" />
        <p className="text-xl sm:text-2xl text-stone-100 leading-snug mb-6" style={display}>
          {c.quote}
        </p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-stone-400" style={mono}>
            {c.quoteInitials}
          </div>
          <div>
            <p className="text-sm text-stone-200 font-medium">{c.quoteName}</p>
            <p className="text-xs text-stone-500">{c.quoteRole}</p>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-neutral-900 border border-neutral-800 rounded-sm p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl text-stone-100 mb-2" style={display}>
              {c.ctaTitle}
            </h2>
            <p className="text-stone-400">{c.ctaBody}</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-400 text-neutral-950 font-semibold px-6 py-3 rounded-sm flex items-center gap-2 transition-colors shrink-0">
            {c.ctaButton} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}