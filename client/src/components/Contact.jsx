export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-24">
      
      {/* GREEN GRADIENT GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 
          rounded-full bg-gradient-to-tr from-green-500/40 via-emerald-400/30 to-transparent blur-[220px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-20 md:flex-row md:items-center md:justify-between">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <div className="mx-auto md:mx-0 flex w-fit items-center gap-2 rounded-full border border-green-900 px-3 py-1 text-xs text-slate-200">
            <img className="h-7 w-7 rounded-full border border-green-900"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" />
            <img className="h-7 w-7 rounded-full border border-green-900 -ml-2"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" />
            <img className="h-7 w-7 rounded-full border border-green-900 -ml-2"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50" />
            <span className="ml-1">Join community of 1M+ founders</span>
          </div>

          <h1 className="mt-6 max-w-xl bg-gradient-to-r from-white via-green-300 to-green-500 
            bg-clip-text text-4xl font-semibold text-transparent md:text-5xl">
            Ready to Transform Your Digital Experience?
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
            Let our design team craft a website that elevates your brand.
            Book a free session today.
          </p>
        </div>

        {/* FORM */}
        <div className="w-full max-w-lg rounded-2xl border border-white/10 
          bg-white/5 backdrop-blur-xl p-8">
          
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm text-white">Name</label>
              <input
                type="text"
                required
                placeholder="Eden Johnson"
                className="w-full rounded-lg border border-white/20 bg-transparent 
                px-4 py-3 text-white placeholder:text-white/40 
                focus:border-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white">Email</label>
              <input
                type="email"
                required
                placeholder="eden@example.com"
                className="w-full rounded-lg border border-white/20 bg-transparent 
                px-4 py-3 text-white placeholder:text-white/40 
                focus:border-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-white">Message</label>
              <textarea
                rows="4"
                required
                placeholder="Write your message here..."
                className="w-full resize-none rounded-lg border border-white/20 bg-transparent 
                px-4 py-3 text-white placeholder:text-white/40 
                focus:border-green-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <p className="text-xs text-white/60 max-w-xs">
                By submitting, you agree to our <span className="text-white">Terms</span> &{" "}
                <span className="text-white">Privacy Policy</span>.
              </p>

              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-green-600 to-emerald-500 
                px-10 py-3 text-sm font-medium text-black 
                transition hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
