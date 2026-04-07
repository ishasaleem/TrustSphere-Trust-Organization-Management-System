import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 text-gray-700 border-t border-gray-300 bg-gradient-to-b from-gray-100 to-gray-200">

      <div className="max-w-6xl px-6 py-12 mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-blue-600">
              TrustSphere
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Transparent donation tracking and community impact platform.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-5">

              <a href="#" className="p-3 transition bg-white rounded-full shadow hover:bg-blue-600 hover:text-white">
                <FaFacebookF />
              </a>

              <a href="#" className="p-3 transition bg-white rounded-full shadow hover:bg-sky-500 hover:text-white">
                <FaTwitter />
              </a>

              <a href="#" className="p-3 transition bg-white rounded-full shadow hover:bg-pink-500 hover:text-white">
                <FaInstagram />
              </a>

              <a href="#" className="p-3 transition bg-white rounded-full shadow hover:bg-blue-700 hover:text-white">
                <FaLinkedinIn />
              </a>

              <a href="#" className="p-3 transition bg-white rounded-full shadow hover:bg-red-600 hover:text-white">
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* QUICK LINKS (CLICKABLE) */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-sm">

              <li>
                <NavLink to="/dashboard" className="transition hover:text-blue-600">
                  ➜ Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink to="/donations" className="transition hover:text-blue-600">
                  ➜ Donations
                </NavLink>
              </li>

              <li>
                <NavLink to="/beneficiaries" className="transition hover:text-blue-600">
                  ➜ Beneficiaries
                </NavLink>
              </li>

              <li>
                <NavLink to="/events" className="transition hover:text-blue-600">
                  ➜ Events
                </NavLink>
              </li>

              <li>
                <NavLink to="/settings" className="transition hover:text-blue-600">
                  ➜ Settings
                </NavLink>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>

            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 support@trustsphere.com</p>
              <p>📞 +92 300 0000000</p>
              <p>📍 Pakistan</p>
            </div>

            <div className="inline-block px-3 py-1 mt-5 text-xs text-blue-600 bg-blue-100 rounded-full">
              24/7 Support Available
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between pt-8 mt-10 text-sm border-t border-gray-300 md:flex-row">

          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-blue-600">TrustSphere</span>
          </p>

          <div className="flex gap-5 mt-3 text-gray-600 md:mt-0">
            <span className="cursor-pointer hover:text-blue-600">Privacy</span>
            <span className="cursor-pointer hover:text-blue-600">Terms</span>
            <span className="cursor-pointer hover:text-blue-600">Support</span>
          </div>

        </div>

      </div>
    </footer>
  );
}