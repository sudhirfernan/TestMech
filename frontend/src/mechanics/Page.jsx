import { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Star,
  Clock,
  Wrench,
  ShieldCheck,
  Phone,
  SlidersHorizontal,
  ChevronRight,
  X,
  Menu,
} from "lucide-react";

const FONT_IMPORT = `@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;700&display=swap');`;

const SERVICES = [
  "All",
  "Oil change",
  "Brakes",
  "Diagnostics",
  "Tires",
  "AC & heating",
  "Transmission",
];

const MECHANICS = [
  {
    id: "A104",
    name: "Delgado & Sons Auto",
    specialties: ["Brakes", "Diagnostics", "Oil change"],
    rating: 4.9,
    reviews: 214,
    distance: 0.6,
    price: "$$",
    wait: "15 min",
    status: "Open",
    verified: true,
    phone: "(555) 019-2244",
  },
  {
    id: "A091",
    name: "Northside Tire & Auto",
    specialties: ["Tires", "Oil change"],
    rating: 4.7,
    reviews: 158,
    distance: 1.2,
    price: "$",
    wait: "30 min",
    status: "Open",
    verified: true,
    phone: "(555) 019-7710",
  },
  {
    id: "A078",
    name: "Prime Transmission Co.",
    specialties: ["Transmission", "Diagnostics"],
    rating: 4.8,
    reviews: 96,
    distance: 2.4,
    price: "$$$",
    wait: "1 hr",
    status: "Open",
    verified: true,
    phone: "(555) 019-3391",
  },
  {
    id: "A066",
    name: "CoolAir Climate Specialists",
    specialties: ["AC & heating", "Diagnostics"],
    rating: 4.6,
    reviews: 74,
    distance: 3.1,
    price: "$$",
    wait: "45 min",
    status: "Closed",
    verified: false,
    phone: "(555) 019-5528",
  },
  {
    id: "A052",
    name: "Ferra Bros. Garage",
    specialties: ["Brakes", "Tires", "Oil change"],
    rating: 4.9,
    reviews: 301,
    distance: 1.8,
    price: "$$",
    wait: "20 min",
    status: "Open",
    verified: true,
    phone: "(555) 019-8802",
  },
  {
    id: "A039",
    name: "Union Ave Diagnostics",
    specialties: ["Diagnostics", "Transmission"],
    rating: 4.5,
    reviews: 61,
    distance: 4.0,
    price: "$$$",
    wait: "1.5 hr",
    status: "Open",
    verified: false,
    phone: "(555) 019-1150",
  },
];

function HazardStripe({ className = "" }) {
  return (
    <div
      className={`h-3 w-full ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, #F4A100 0px, #F4A100 14px, #1C2126 14px, #1C2126 28px)",
      }}
    />
  );
}

function TicketCard({ mech }) {
  const statusColor =
    mech.status === "Open" ? "text-emerald-600" : "text-rose-600";

  return (
    <div className="relative bg-[#F4F2ED] border border-[#D8D3C6] rounded-sm shadow-sm hover:shadow-md transition-shadow">
      {/* perforated top edge */}
      <div
        className="h-2 w-full"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1C2126 1.5px, transparent 1.6px)",
          backgroundSize: "10px 10px",
          backgroundPosition: "center",
          backgroundColor: "#1C2126",
        }}
      />
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <p className="font-[JetBrains_Mono] text-[11px] tracking-widest text-[#8A8272] mb-1">
              TICKET #{mech.id}
            </p>
            <h3 className="font-[Oswald] text-xl sm:text-2xl text-[#1C2126] leading-snug">
              {mech.name}
            </h3>
          </div>
          {mech.verified && (
            <span className="flex items-center gap-1 shrink-0 bg-[#1C2126] text-[#F4A100] text-[10px] font-[JetBrains_Mono] font-semibold tracking-wider px-2 py-1 rounded-sm">
              <ShieldCheck size={12} strokeWidth={2.5} />
              VERIFIED
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {mech.specialties.map((s) => (
            <span
              key={s}
              className="text-xs font-[Inter] font-medium text-[#4B5563] bg-[#E7E2D3] border border-[#D8D3C6] px-2.5 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>

        <div
          className="my-4 h-px w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #B7AF9B 0px, #B7AF9B 6px, transparent 6px, transparent 12px)",
          }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-[JetBrains_Mono] text-[13px]">
          <div>
            <p className="text-[#8A8272] text-[10px] tracking-wider mb-0.5">RATING</p>
            <p className="flex items-center gap-1 text-[#1C2126] font-semibold">
              <Star size={13} className="fill-[#F4A100] text-[#F4A100]" />
              {mech.rating}
              <span className="text-[#8A8272] font-normal">({mech.reviews})</span>
            </p>
          </div>
          <div>
            <p className="text-[#8A8272] text-[10px] tracking-wider mb-0.5">DISTANCE</p>
            <p className="flex items-center gap-1 text-[#1C2126] font-semibold">
              <MapPin size={13} />
              {mech.distance} mi
            </p>
          </div>
          <div>
            <p className="text-[#8A8272] text-[10px] tracking-wider mb-0.5">EST. WAIT</p>
            <p className="flex items-center gap-1 text-[#1C2126] font-semibold">
              <Clock size={13} />
              {mech.wait}
            </p>
          </div>
          <div>
            <p className="text-[#8A8272] text-[10px] tracking-wider mb-0.5">PRICE</p>
            <p className={`font-semibold ${statusColor === "text-emerald-600" ? "text-[#1C2126]" : "text-[#1C2126]"}`}>
              {mech.price}
              <span className={`ml-2 text-[11px] font-[Inter] ${statusColor}`}>
                ● {mech.status}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3">
          <button className="flex-1 bg-[#1C2126] hover:bg-[#2E3A46] text-[#F4F2ED] font-[Inter] font-semibold text-sm py-2.5 rounded-sm transition-colors flex items-center justify-center gap-1.5">
            Book service
            <ChevronRight size={15} />
          </button>
          <button className="w-11 h-11 flex items-center justify-center border border-[#1C2126] text-[#1C2126] rounded-sm hover:bg-[#1C2126] hover:text-[#F4F2ED] transition-colors shrink-0">
            <Phone size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function MechanicFinder() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [activeService, setActiveService] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("distance");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const results = useMemo(() => {
    let list = MECHANICS.filter((m) => {
      const matchesQuery =
        query.trim() === "" ||
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.specialties.some((s) => s.toLowerCase().includes(query.toLowerCase()));
      const matchesService =
        activeService === "All" || m.specialties.includes(activeService);
      return matchesQuery && matchesService;
    });

    list.sort((a, b) => {
      if (sortBy === "distance") return a.distance - b.distance;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "wait") return a.wait.localeCompare(b.wait);
      return 0;
    });

    return list;
  }, [query, activeService, sortBy]);

  return (
    <div className="min-h-screen bg-[#F4F2ED] font-[Inter]">
      <style>{FONT_IMPORT}</style>

      {/* HEADER */}
      <header className="bg-[#1C2126] px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between relative">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm bg-[#F4A100] flex items-center justify-center shrink-0">
            <Wrench size={17} className="text-[#1C2126]" strokeWidth={2.5} />
          </div>
          <span className="font-[Oswald] text-base sm:text-lg text-[#F4F2ED] tracking-wide">
            WRENCHFINDER
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-7 font-[Inter] text-sm text-[#C9C4B6]">
          <a href="#" className="hover:text-[#F4A100] transition-colors">How it works</a>
          <a href="#" className="hover:text-[#F4A100] transition-colors">For mechanics</a>
          <button className="text-[#1C2126] bg-[#F4A100] hover:bg-[#ffb520] font-semibold px-4 py-2 rounded-sm transition-colors">
            Sign in
          </button>
        </nav>

        <button
          onClick={() => setMobileNavOpen((v) => !v)}
          className="md:hidden text-[#F4F2ED] p-1.5"
          aria-label="Toggle menu"
        >
          {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {mobileNavOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#1C2126] border-t border-[#2E3A46] px-4 py-4 flex flex-col gap-4 font-[Inter] text-sm text-[#C9C4B6] z-10">
            <a href="#" className="hover:text-[#F4A100] transition-colors">How it works</a>
            <a href="#" className="hover:text-[#F4A100] transition-colors">For mechanics</a>
            <button className="text-[#1C2126] bg-[#F4A100] hover:bg-[#ffb520] font-semibold px-4 py-2 rounded-sm transition-colors w-full">
              Sign in
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="bg-[#1C2126] px-4 sm:px-6 lg:px-10 pt-8 sm:pt-10 pb-12 sm:pb-16">
        <div className="max-w-3xl">
          <p className="font-[JetBrains_Mono] text-[#F4A100] text-[10px] sm:text-xs tracking-[0.2em] mb-3">
            OPEN BAY · VERIFIED SHOPS · REAL WAIT TIMES
          </p>
          <h1 className="font-[Oswald] text-[#F4F2ED] text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-4">
            Find a mechanic<br />you can actually trust.
          </h1>
          <p className="text-[#9CA3AF] text-sm sm:text-base lg:text-lg max-w-xl mb-8">
            Compare verified shops near you by rating, wait time, and price —
            book the next open bay in minutes.
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="bg-[#F4F2ED] rounded-sm p-2 flex flex-col sm:flex-row gap-2 max-w-3xl shadow-lg">
          <div className="flex items-center gap-2 flex-1 px-3 py-2.5 border-b sm:border-b-0 sm:border-r border-[#D8D3C6]">
            <Search size={17} className="text-[#8A8272] shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Service or shop name"
              className="w-full bg-transparent outline-none text-[#1C2126] placeholder:text-[#8A8272] text-sm"
            />
          </div>
          <div className="flex items-center gap-2 flex-1 px-3 py-2.5">
            <MapPin size={17} className="text-[#8A8272] shrink-0" />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="ZIP or address"
              className="w-full bg-transparent outline-none text-[#1C2126] placeholder:text-[#8A8272] text-sm"
            />
          </div>
          <button className="bg-[#F4A100] hover:bg-[#ffb520] text-[#1C2126] font-[Inter] font-semibold text-sm px-6 py-2.5 rounded-sm transition-colors shrink-0 w-full sm:w-auto">
            Search shops
          </button>
        </div>
      </section>

      <HazardStripe />

      {/* FILTERS */}
      <section className="px-4 sm:px-6 lg:px-10 py-5 sm:py-6 bg-[#F4F2ED] border-b border-[#D8D3C6]">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap gap-2 overflow-x-auto -mx-1 px-1 sm:mx-0 sm:px-0 sm:overflow-visible w-full sm:w-auto">
            {SERVICES.map((s) => (
              <button
                key={s}
                onClick={() => setActiveService(s)}
                className={`shrink-0 text-xs sm:text-sm font-[Inter] font-medium px-3 sm:px-3.5 py-1.5 rounded-full border transition-colors ${
                  activeService === s
                    ? "bg-[#1C2126] text-[#F4A100] border-[#1C2126]"
                    : "bg-transparent text-[#4B5563] border-[#D8D3C6] hover:border-[#1C2126]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <button
            onClick={() => setShowFilters((v) => !v)}
            className="sm:ml-auto flex items-center gap-1.5 text-xs sm:text-sm font-[Inter] font-medium text-[#4B5563] border border-[#D8D3C6] px-3.5 py-1.5 rounded-full hover:border-[#1C2126] transition-colors shrink-0"
          >
            {showFilters ? <X size={14} /> : <SlidersHorizontal size={14} />}
            Sort
          </button>
        </div>

        {showFilters && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-[#D8D3C6] font-[JetBrains_Mono] text-xs">
            {[
              { key: "distance", label: "NEAREST" },
              { key: "rating", label: "TOP RATED" },
              { key: "wait", label: "SHORTEST WAIT" },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSortBy(opt.key)}
                className={`px-3 py-1.5 rounded-sm tracking-wider transition-colors ${
                  sortBy === opt.key
                    ? "bg-[#F4A100] text-[#1C2126]"
                    : "bg-[#E7E2D3] text-[#4B5563]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* RESULTS */}
      <section className="px-4 sm:px-6 lg:px-10 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-6">
          <h2 className="font-[Oswald] text-xl sm:text-2xl text-[#1C2126]">
            {results.length} shop{results.length !== 1 ? "s" : ""} nearby
          </h2>
          <p className="font-[JetBrains_Mono] text-xs text-[#8A8272]">
            SORTED BY {sortBy.toUpperCase()}
          </p>
        </div>

        {results.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-[#D8D3C6] rounded-sm">
            <p className="font-[Oswald] text-lg text-[#1C2126] mb-1">No shops match that search</p>
            <p className="text-sm text-[#8A8272]">Try a different service or clear your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {results.map((m) => (
              <TicketCard key={m.id} mech={m} />
            ))}
          </div>
        )}
      </section>

      <HazardStripe />

      {/* FOOTER */}
      <footer className="bg-[#1C2126] px-4 sm:px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Wrench size={15} className="text-[#F4A100]" />
          <span className="font-[Oswald] text-sm text-[#F4F2ED] tracking-wide">
            WRENCHFINDER
          </span>
        </div>
        <p className="font-[Inter] text-xs text-[#6B7280]">
          © 2026 Wrenchfinder. Every shop is licensed and background-checked.
        </p>
      </footer>
    </div>
  );
}