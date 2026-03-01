import { useState } from "react"

function App() {
  const CALENDLY_URL = "https://calendly.com/ratkocerialnit/30min"

  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    properties: "",
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await fetch("https://hook.eu1.make.com/yi2j7p2m2j9th6qszcxy4rthd88ris8b", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      setIsOpen(false)
      alert("Application submitted successfully.")
      setFormData({ name: "", email: "", properties: "" })
    } catch (error) {
      console.error("Submission failed:", error)
      alert("Something went wrong.")
    }
  }

  return (
    <div className="bg-slate-950 text-white min-h-screen relative">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-slate-800">
        <h1 className="text-xl font-semibold tracking-wide">ReviewRisk AI</h1>

        <div className="flex items-center gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="border border-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-slate-900"
          >
            Book Demo
          </a>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:opacity-90"
          >
            Apply for Access
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-8 py-28 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/40 px-4 py-2 text-xs text-slate-300">
          Private beta • Built for multi-property hosts
        </div>

        <h2 className="mt-6 text-5xl font-bold leading-tight">
          Protect Your Airbnb Rating Before Guests Complain Publicly.
        </h2>

        <p className="mt-6 text-lg text-slate-400">
          ReviewRisk AI detects friction in guest messages, automates low-risk replies, and escalates
          high-risk threads — built for hosts managing multiple properties.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center hover:opacity-90"
          >
            Book a private demo
          </a>

          <a
            href="#learn-more"
            className="border border-slate-700 px-6 py-3 rounded-lg inline-flex items-center justify-center hover:bg-slate-900"
          >
            Learn more
          </a>
        </div>

        <div className="mt-6 text-sm text-slate-500">
          Insurance-layer workflow: detect → respond → escalate → log.
        </div>
      </section>

      {/* Problem Section */}
      <section id="learn-more" className="bg-slate-900 py-24 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold">
            Bad Reviews Don’t Start With One Star —<span className="text-red-500"> They Start With Friction</span>
          </h3>

          <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold mb-4">Subtle Frustration</h4>
              <p className="text-slate-400">
                Guests often express dissatisfaction politely at first. Early signals are easy to miss in a busy inbox.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold mb-4">Repeated Complaints</h4>
              <p className="text-slate-400">
                Small issues repeated across a booking increase review risk, even when each message seems minor.
              </p>
            </div>

            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h4 className="text-xl font-semibold mb-4">Late Escalation</h4>
              <p className="text-slate-400">
                By the time refund threats or emotional language appear, the review damage is often already forming.
              </p>
            </div>
          </div>

          <p className="mt-16 text-slate-400 max-w-3xl mx-auto">
            Most hosts don’t lose ratings because they don’t care. They lose them because they detect risk too late.
          </p>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-28 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold">Live Booking Risk Dashboard</h3>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Monitor emotional risk, incident accumulation, and escalation across all active bookings in real time.
          </p>

          <div className="mt-16 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-800 text-left text-slate-400 text-sm">Active Bookings</div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-800 text-slate-400 text-sm">
                  <tr>
                    <th className="px-6 py-4">Property</th>
                    <th className="px-6 py-4">Guest</th>
                    <th className="px-6 py-4">Risk Status</th>
                    <th className="px-6 py-4">Incidents</th>
                    <th className="px-6 py-4">Last Message</th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  <tr className="border-t border-slate-800">
                    <td className="px-6 py-4">Flat 12A</td>
                    <td className="px-6 py-4">John D</td>
                    <td className="px-6 py-4 text-yellow-400 font-medium">At Risk</td>
                    <td className="px-6 py-4">1</td>
                    <td className="px-6 py-4 text-slate-400">Heating issue reported</td>
                  </tr>

                  <tr className="border-t border-slate-800">
                    <td className="px-6 py-4">Studio B</td>
                    <td className="px-6 py-4">Anna M</td>
                    <td className="px-6 py-4 text-red-500 font-medium">Escalated</td>
                    <td className="px-6 py-4">3</td>
                    <td className="px-6 py-4 text-slate-400">Refund mentioned</td>
                  </tr>

                  <tr className="border-t border-slate-800">
                    <td className="px-6 py-4">Loft 5</td>
                    <td className="px-6 py-4">Mark T</td>
                    <td className="px-6 py-4 text-green-400 font-medium">Normal</td>
                    <td className="px-6 py-4">0</td>
                    <td className="px-6 py-4 text-slate-400">Check-in confirmed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold inline-flex items-center justify-center hover:opacity-90"
            >
              Book a private demo
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="border border-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-900"
            >
              Apply for access
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-50">
          <div className="bg-slate-900 w-full max-w-md rounded-2xl p-8 border border-slate-800 shadow-2xl relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>

            <h3 className="text-2xl font-semibold mb-6 text-center">Apply for Access</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  required
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white text-white"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Number of Properties</label>
                <select
                  name="properties"
                  value={formData.properties}
                  required
                  onChange={handleChange}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white text-white"
                >
                  <option value="">Select</option>
                  <option value="2-5">2–5</option>
                  <option value="5-15">5–15</option>
                  <option value="15+">15+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:opacity-90"
              >
                Submit application
              </button>

              <div className="text-xs text-slate-500 text-center">
                Prefer to move faster?{" "}
                <a href={CALENDLY_URL} target="_blank" rel="noreferrer" className="underline hover:text-white">
                  Book a demo
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App



