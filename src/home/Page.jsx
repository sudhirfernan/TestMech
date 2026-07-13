import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();
  
    
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gray-50 px-10 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

          {/* Left Content */}
          <div className="max-w-xl">

            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Get Instant Roadside Assistance 
              <span className="text-blue-600">
                {" "}Anywhere, Anytime
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Connect with nearby verified mechanics, request emergency
              assistance, track your service provider in real-time, and
              communicate instantly when your vehicle breaks down.
            </p>


            <div className="mt-8 flex gap-4">

              <button 
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
                Request Emergency Help
              </button>

              <button 
              onClick={() => navigate("/mechanics")}
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 cursor-pointer" >
                Find a Mechanic
              </button>

            </div>

          </div>


          {/* Image / Illustration */}
          <div className="mt-10 md:mt-0">

            <div className="w-96 h-80 bg-blue-100 rounded-3xl flex items-center justify-center">

              <div className="text-center">
                <p className="text-5xl">
                  🚗
                </p>

                <p className="mt-3 text-blue-600 font-semibold">
                  24/7 Road Assistance
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* Services Section */}
      <section className="py-16 px-10">

        <h2 className="text-3xl font-bold text-center">
          Our Services
        </h2>


        <div className="grid md:grid-cols-4 gap-6 mt-10">


          <ServiceCard
            icon="🔧"
            title="Mechanic Assistance"
            description="Find nearby verified mechanics based on your location."
          />


          <ServiceCard
            icon="📍"
            title="GPS Tracking"
            description="Track mechanic arrival location and estimated time."
          />


          <ServiceCard
            icon="🤖"
            title="AI Vehicle Diagnosis"
            description="Get intelligent suggestions about possible vehicle issues."
          />


          <ServiceCard
            icon="📞"
            title="Live Communication"
            description="Connect with mechanics through chat and video calls."
          />


        </div>

      </section>




      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-10">

        <h2 className="text-3xl font-bold text-center">
          How It Works
        </h2>


        <div className="grid md:grid-cols-4 gap-8 mt-10">


          <Step
            number="1"
            title="Request Help"
            text="Submit your breakdown details and current location."
          />


          <Step
            number="2"
            title="Smart Matching"
            text="Our system finds the best available mechanic nearby."
          />


          <Step
            number="3"
            title="Track Arrival"
            text="Monitor mechanic location in real-time."
          />


          <Step
            number="4"
            title="Get Repaired"
            text="Receive professional roadside support."
          />


        </div>

      </section>




      {/* Emergency Banner */}
      <section className="bg-blue-600 text-white py-12 px-10 text-center">

        <h2 className="text-3xl font-bold">
          Vehicle Breakdown? Don't Panic.
        </h2>

        <p className="mt-3">
          Our platform helps you get connected with reliable roadside
          assistance quickly.
        </p>


        <button className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold">
          Get Assistance Now
        </button>

      </section>


    </div>
  );
}




// Service Card Component

function ServiceCard({ icon, title, description }) {

  return (

    <div className="bg-white shadow-md rounded-xl p-6">

      <div className="text-4xl">
        {icon}
      </div>


      <h3 className="text-xl font-semibold mt-4">
        {title}
      </h3>


      <p className="text-gray-600 mt-2">
        {description}
      </p>

    </div>

  );

}




// Step Component

function Step({ number, title, text }) {

  return (

    <div className="text-center">

      <div className="mx-auto w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
        {number}
      </div>


      <h3 className="mt-4 font-semibold text-xl">
        {title}
      </h3>


      <p className="text-gray-600 mt-2">
        {text}
      </p>

    </div>

  );

}