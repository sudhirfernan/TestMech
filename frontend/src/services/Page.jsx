const services = [
  {
    icon: "🔧",
    title: "Find a Mechanic",
    description:
      "Connect with verified mechanics near your location and get professional vehicle assistance quickly.",
  },
  {
    icon: "🚗",
    title: "Vehicle Breakdown Assistance",
    description:
      "Get immediate roadside support when your vehicle stops unexpectedly during your journey.",
  },
  {
    icon: "🔋",
    title: "Battery Assistance",
    description:
      "Get battery jump-start services, battery checks, and replacement support from experts.",
  },
  {
    icon: "⛽",
    title: "Fuel Delivery",
    description:
      "Running out of fuel? Request quick fuel delivery directly to your current location.",
  },
  {
    icon: "🚚",
    title: "Vehicle Towing",
    description:
      "Safe and reliable towing services for damaged or non-operational vehicles.",
  },
  {
    icon: "📍",
    title: "Live Location Tracking",
    description:
      "Track your mechanic's location and estimated arrival time in real-time.",
  },
];


function Services() {
  return (
    <div className="min-h-screen bg-gray-50">


      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Smart Mechanic Assistance
          </h1>

          <p className="mt-5 text-lg text-blue-100 max-w-3xl mx-auto">
            Fast, reliable roadside assistance connecting drivers
            with trusted mechanics whenever they need help.
          </p>


          <button
            className="
            mt-8 bg-white text-blue-700
            px-8 py-3 rounded-full
            font-semibold
            hover:bg-gray-100 transition
            "
          >
            Request Assistance
          </button>

        </div>

      </section>



      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16">


        <div className="text-center mb-12">

          <h2 className="text-3xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mt-3 text-gray-600">
            Complete vehicle assistance solutions anytime, anywhere.
          </p>

        </div>



        <div className="grid md:grid-cols-3 gap-8">


          {services.map((service, index) => (

            <div
              key={index}
              className="
              bg-white p-8 rounded-2xl
              shadow-md
              border border-gray-100
              hover:shadow-xl
              hover:-translate-y-2
              transition duration-300
              "
            >


              <div
                className="
                w-16 h-16
                rounded-full
                bg-blue-100
                flex items-center justify-center
                text-3xl
                "
              >
                {service.icon}
              </div>



              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {service.title}
              </h3>


              <p className="mt-3 text-gray-600 leading-relaxed">
                {service.description}
              </p>


              <button
                className="
                mt-5 text-blue-600
                font-semibold
                hover:text-blue-800
                "
              >
                Explore Service →
              </button>


            </div>

          ))}


        </div>


      </section>




      {/* Features */}
      <section className="bg-white py-16">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">


          <div className="text-center">

            <div className="text-4xl">
              ✅
            </div>

            <h3 className="mt-3 font-bold text-lg">
              Verified Mechanics
            </h3>

            <p className="text-gray-600 mt-2">
              Trusted and professional mechanics.
            </p>

          </div>



          <div className="text-center">

            <div className="text-4xl">
              ⚡
            </div>

            <h3 className="mt-3 font-bold text-lg">
              Fast Response
            </h3>

            <p className="text-gray-600 mt-2">
              Get roadside help quickly.
            </p>

          </div>



          <div className="text-center">

            <div className="text-4xl">
              🌍
            </div>

            <h3 className="mt-3 font-bold text-lg">
              Location Based Support
            </h3>

            <p className="text-gray-600 mt-2">
              Find mechanics near you.
            </p>

          </div>


        </div>

      </section>




      {/* Emergency Banner */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div
          className="
          bg-gray-900
          text-white
          rounded-3xl
          p-10
          text-center
          "
        >

          <h2 className="text-3xl font-bold">
            Vehicle Breakdown Emergency?
          </h2>


          <p className="mt-3 text-gray-300">
            Request assistance and get connected with a mechanic.
          </p>


          <button
            className="
            mt-6
            bg-red-500
            px-8 py-3
            rounded-full
            font-semibold
            hover:bg-red-600
            "
          >
            Get Help Now
          </button>


        </div>

      </section>


    </div>
  );
}


export default Services;