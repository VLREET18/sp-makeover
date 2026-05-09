import { motion } from 'framer-motion';

export default function SPMakeoverPortfolio() {
  const services = [
    {
      category: 'Bridal Makeup',
      items: [
        ['Classic Bridal Makeup', '₹5000 - ₹8000'],
        ['Bengali Bridal Makeup', '₹10000 - ₹20000'],
        ['South Indian Bridal Makeup', '₹8000 - ₹15000'],
        ['Muslim Bridal Makeup', '₹8000 - ₹20000'],
        ['Christian Bridal Makeup', '₹8000 - ₹20000'],
        ['HD Bridal Makeup', '₹12000 - ₹20000'],
        ['Arabic Bridal Makeup', '₹12000 - ₹25000'],
      ],
    },
    {
      category: 'Party Makeup',
      items: [
        ['Day Party Makeup - Classic', '₹1500'],
        ['Day Party Makeup - HD', '₹2000'],
        ['Day Party Makeup - Celebrity', '₹3000'],
        ['Night Party Makeup - Classic', '₹1500'],
        ['Night Party Makeup - HD', '₹2000'],
        ['Night Party Makeup - Celebrity', '₹3000'],
        ['Cocktail Party Makeup - Classic', '₹2000'],
        ['Cocktail Party Makeup - HD', '₹3000'],
        ['Cocktail Party Makeup - Celebrity', '₹4000'],
      ],
    },
    {
      category: 'Special Occasion Makeup',
      items: [
        ['Haldi Makeup - Classic', '₹3000'],
        ['Haldi Makeup - HD', '₹4000'],
        ['Haldi Makeup - Celebrity', '₹5000'],
        ['Mehendi Makeup - Classic', '₹3000'],
        ['Mehendi Makeup - HD', '₹4000'],
        ['Mehendi Makeup - Celebrity', '₹5000'],
        ['Engagement Makeup', '₹5000 - ₹15000'],
      ],
    },
  ];

  const gallery = [
    {
      title: 'Nude Makeup For Bridal',
      image:
        'https://img.sanishtech.com/u/3336d259cecc3469b3c124bb22fa2d10.jpg',
    },
    {
      title: 'Ultra HD Bridal Makeup',
      image:
        'https://img.sanishtech.com/u/f89df7313c097e7408f9378472c40785.jpg',
    },
    {
      title: 'Party Makeup',
      image:
        'https://img.sanishtech.com/u/1be9e2a3829cc20f1724799201c5a436.jpg',
    },
    {
      title: 'Haldi Makeup',
      image:
        'https://img.sanishtech.com/u/857a69ca184606ad260995563673ebe8.jpg',
    },
    {
      title: 'Cocktail Party Makeup',
      image:
        'https://img.sanishtech.com/u/b5bdec65cec325e3cc528a50203549a5.jpg',
    },
    {
      title: '25th Anniversary Party Makeup',
      image:
        'https://img.sanishtech.com/u/c23d63a4940c17971b877603795f6d0e.jpg',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-zinc-500/10 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden border-b border-zinc-800 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 opacity-95"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-36 text-center">
          <p className="tracking-[0.35em] text-zinc-400 uppercase text-sm mb-4">
            Luxury Beauty Experience
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            SP MAKEOVER <br />
            <span className="text-zinc-300">
              MAKEUP STUDIO & ACADEMY
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed mb-10">
            “Redefining Beauty With Luxury & Perfection ✨”
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/918541971625"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-110 transition-all duration-500 shadow-2xl hover:shadow-white/30"
            >
              Book Appointment
            </a>

            <a
              href="https://www.instagram.com/s.p_makeover_17"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl border border-zinc-700 hover:bg-zinc-900 transition-all duration-300"
            >
              View Instagram
            </a>
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center relative z-10"
      >
        <div>
          <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 h-[450px]">
            <img
              src="https://img.sanishtech.com/u/85d61398748801f986965fce960ce63e.jpg"
              alt="Sonam Prakash"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>

        <div>
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            About Artist
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Sonam Prakash
          </h2>

          <p className="text-zinc-400 leading-relaxed text-lg mb-6">
            Welcome to SP Makeover Makeup Studio & Academy — a premium beauty
            destination in Katihar, Bihar, dedicated to enhancing confidence,
            elegance, and beauty through professional makeup artistry and salon
            services.
          </p>

          <p className="text-zinc-400 leading-relaxed text-lg mb-6">
            With over 11 years of professional experience, Sonam Prakash
            specializes in luxury bridal transformations, HD makeup,
            hairstyling, beautician services, nail extensions, and premium nail
            art.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-10">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-zinc-400">Happy Clients</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <h3 className="text-2xl font-bold mb-2">11+</h3>
              <p className="text-zinc-400">Years Experience</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Qualifications */}
      <section className="border-y border-zinc-800 bg-zinc-950 py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
              Professional Expertise
            </p>

            <h2 className="text-4xl font-bold">
              Qualifications, Achievements & Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'UK International London Beauty School Certified Artist',
              'Mrs. India Pride of Nation 2024 Makeup Artist Appreciation',
              'Miss Aseatic India 2024 Participation',
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/80 backdrop-blur-lg border border-zinc-800 rounded-3xl p-8 hover:border-zinc-500 hover:-translate-y-2 transition-all duration-500 shadow-2xl"
              >
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-3">{item}</h3>
                <p className="text-zinc-400">
                  Professional certifications and beauty industry recognitions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl font-bold">Our Beauty Creations</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -10 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 h-80 relative group shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
              Services & Pricing
            </p>

            <h2 className="text-4xl font-bold">Salon Menu Card</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-black/80 backdrop-blur-lg border border-zinc-800 rounded-3xl p-8 hover:border-zinc-500 transition-all duration-500 shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">
                  {service.category}
                </h3>

                <div className="space-y-5">
                  {service.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between border-b border-zinc-800 pb-3 gap-4"
                    >
                      <span className="text-zinc-300">{item[0]}</span>
                      <span className="font-semibold whitespace-nowrap">
                        {item[1]}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Booking Form */}
      <section className="max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Online Booking
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Reserve Your Beauty Session
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Fill out the booking form below and our team will contact you shortly to confirm your appointment.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black/80 backdrop-blur-xl border border-zinc-800 rounded-[2rem] p-8 md:p-12 shadow-2xl"
        >
          <form 
            action="https://formsubmit.co/edgha72@gmail.com"
            method="POST"
            className="grid md:grid-cols-2 gap-6"
            >
            <div>
              <label className="block text-zinc-300 mb-3 text-sm uppercase tracking-widest">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                name= "name"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-white transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-3 text-sm uppercase tracking-widest">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-white transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-3 text-sm uppercase tracking-widest">
                Select Service
              </label>
              <select className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-white transition-all duration-300"
                name="services">
                <option>Bridal Makeup</option>
                <option>HD Makeup</option>
                <option>Party Makeup</option>
                <option>Engagement Makeup</option>
                <option>Haldi Makeup</option>
                <option>Mehendi Makeup</option>
                <option>Nail Extension</option>
                <option>Hair Styling</option>
                
              </select>
            </div>

            <div>
              <label className="block text-zinc-300 mb-3 text-sm uppercase tracking-widest">
                Booking Date
              </label>
              <input
                type="date"
                name="date"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-white transition-all duration-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-zinc-300 mb-3 text-sm uppercase tracking-widest">
                Additional Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your booking requirements"
                name="message"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-white transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center mt-4">
              <button
                type="submit"
                className="px-10 py-5 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-110 hover:shadow-white/30 transition-all duration-500 shadow-2xl"
              >
                Book Appointment Now ✨
              </button>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
          </form>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center relative z-10">
        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
          Contact Us
        </p>

        <h2 className="text-5xl font-bold mb-8">
          Book Your Beauty Session Today
        </h2>

        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience premium beauty services, bridal transformations, and luxury
          salon care at SP Makeover Makeup Studio & Academy.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="font-bold text-xl mb-3">📍 Address</h3>
            <p className="text-zinc-400 leading-relaxed">
              2nd Floor, Infront of Halka Kacheri, Binodpur, Katihar, Bihar
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="font-bold text-xl mb-3">📞 Contact</h3>
            <p className="text-zinc-400">7903203066</p>
            <p className="text-zinc-400">WhatsApp: 8541971625</p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <h3 className="font-bold text-xl mb-3">📸 Instagram</h3>
            <a
              href="https://www.instagram.com/s.p_makeover_17"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 hover:text-white transition-all duration-300"
            >
              @s.p_makeover_17
            </a>
          </div>
        </div>

        <a
          href="https://wa.me/918541971625"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-10 py-5 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-110 hover:shadow-white/30 transition-all duration-500 shadow-2xl animate-pulse"
        >
          Book On WhatsApp
        </a>
      </section>

      {/* Footer */}
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/918541971625"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-500 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M19.11 17.21c-.29-.14-1.72-.85-1.98-.95-.27-.1-.46-.14-.66.15-.19.29-.76.95-.93 1.14-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.59-.91-2.18-.24-.58-.49-.5-.66-.5h-.56c-.19 0-.51.07-.77.36-.27.29-1.01.98-1.01 2.39 0 1.41 1.03 2.78 1.17 2.97.14.19 2.03 3.1 4.92 4.34.69.29 1.23.46 1.65.58.69.22 1.32.19 1.81.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
          <path d="M16.01 3C8.84 3 3 8.74 3 15.81c0 2.5.74 4.94 2.14 7.03L3 29l6.35-2.08a13.1 13.1 0 006.66 1.82h.01c7.17 0 13.01-5.74 13.01-12.81C29.02 8.74 23.18 3 16.01 3zm0 23.48h-.01a10.8 10.8 0 01-5.5-1.5l-.39-.23-3.77 1.24 1.23-3.67-.25-.38a10.45 10.45 0 01-1.65-5.63c0-5.77 4.76-10.46 10.62-10.46 5.86 0 10.62 4.69 10.62 10.46 0 5.77-4.76 10.47-10.61 10.47z" />
        </svg>
      </a>

      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm relative z-10">
        © 2026 SP Makeover Makeup Studio & Academy • All Rights Reserved
      </footer>
    </div>
  );
}
