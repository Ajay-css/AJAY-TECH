export default function Footer() {
  return (
    <footer className="relative bg-black px-6 md:px-16 lg:px-24 xl:px-32">
      
      {/* TOP */}
      <div className="flex flex-col gap-14 md:flex-row md:justify-between py-16 border-b border-white/10">
        
        {/* BRAND */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-semibold text-white">
            Ajay <span className="text-green-500">Technologies</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/60">
            We build modern, scalable and high-performance web applications
            using the MERN stack. Clean UI. Strong backend. Real-world solutions.
          </p>

          <p className="mt-4 text-sm text-white/60">
            📍 India <br />
            📧 contact@ajaytechnologies.dev
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-4 mt-6">
            <a className="text-white/60 hover:text-green-400 transition" href="#">GitHub</a>
            <a className="text-white/60 hover:text-green-400 transition" href="#">LinkedIn</a>
            <a className="text-white/60 hover:text-green-400 transition" href="#">Twitter</a>
          </div>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">SERVICES</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a className="hover:text-green-400 transition" href="#">Web Development</a></li>
              <li><a className="hover:text-green-400 transition" href="#">MERN Stack Apps</a></li>
              <li><a className="hover:text-green-400 transition" href="#">UI/UX Design</a></li>
              <li><a className="hover:text-green-400 transition" href="#">API Development</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">COMPANY</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a className="hover:text-green-400 transition" href="#">About Us</a></li>
              <li><a className="hover:text-green-400 transition" href="#">Projects</a></li>
              <li><a className="hover:text-green-400 transition" href="#">Careers</a></li>
              <li><a className="hover:text-green-400 transition" href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">LEGAL</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a className="hover:text-green-400 transition" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-green-400 transition" href="#">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="py-6 text-center text-xs sm:text-sm text-white/50">
        © {new Date().getFullYear()}{" "}
        <span className="text-white">Ajay Technologies</span>. All rights reserved.
      </div>
    </footer>
  );
}
