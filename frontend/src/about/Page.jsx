import {
  Wrench,
  ShieldCheck,
  Clock3,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              About Mechanic Finder
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-blue-100 leading-relaxed">
              Connecting vehicle owners with trusted, verified mechanics in just
              a few clicks. Whether it's routine maintenance or an emergency
              repair, we make finding reliable automotive professionals simple,
              fast, and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900"
            alt="Mechanic"
            className="rounded-2xl shadow-xl w-full h-[450px] object-cover"
          />
        </div>

        <div>
          <span className="text-blue-600 font-semibold uppercase">
            Our Story
          </span>

          <h2 className="text-4xl font-bold mt-3 mb-6">
            Built to Make Vehicle Repairs Easier
          </h2>

          <p className="text-gray-600 mb-5 leading-8">
            Mechanic Finder was created with one goal — making it effortless for
            drivers to find skilled and trustworthy mechanics nearby. Instead of
            spending hours searching or relying on guesswork, our platform helps
            users compare mechanics based on ratings, experience, services, and
            customer reviews.
          </p>

          <p className="text-gray-600 leading-8">
            We believe every vehicle owner deserves transparent pricing,
            dependable service, and access to qualified professionals whenever
            they need assistance.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
              <ShieldCheck size={30} />
            </div>

            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>

            <p className="text-gray-600 leading-8">
              To simplify vehicle maintenance by connecting customers with
              trusted mechanics while promoting transparency, quality service,
              and customer satisfaction.
            </p>
          </div>

          <div className="bg-orange-50 rounded-2xl p-8">
            <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-6">
              <Wrench size={30} />
            </div>

            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>

            <p className="text-gray-600 leading-8">
              To become the most trusted platform for automotive services,
              helping millions of drivers quickly discover reliable mechanics
              anywhere, anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Mechanic Finder?
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              We make finding professional mechanics quick, reliable, and
              completely hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle size={32} />,
                title: "Verified Mechanics",
                desc: "Every mechanic is verified to ensure quality workmanship and trusted service.",
              },
              {
                icon: <Clock3 size={32} />,
                title: "Fast Response",
                desc: "Locate nearby mechanics and request assistance within minutes.",
              },
              {
                icon: <Users size={32} />,
                title: "Customer Reviews",
                desc: "Read genuine customer ratings before choosing the right mechanic.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition"
              >
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                <p className="text-gray-600 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h2 className="text-5xl font-bold">500+</h2>
              <p className="mt-3 text-blue-100">Verified Mechanics</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">10K+</h2>
              <p className="mt-3 text-blue-100">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">24/7</h2>
              <p className="mt-3 text-blue-100">Support Available</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">4.9★</h2>
              <p className="mt-3 text-blue-100">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Find a Trusted Mechanic?
            </h2>

            <p className="text-blue-100 mb-8">
              Join thousands of vehicle owners who rely on Mechanic Finder to
              connect with experienced professionals for quality repairs and
              maintenance.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center gap-2 transition">
              Find a Mechanic
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;