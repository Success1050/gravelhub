import Link from "next/link";
import { Truck } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-secondary-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl text-center">
        <Link href="/" className="inline-flex items-center justify-center gap-2 group mb-6">
          <div className="bg-primary-500 text-white p-2 rounded-xl group-hover:bg-primary-600 transition-colors">
            <Truck size={28} className="stroke-[1.5]" />
          </div>
          <span className="font-heading font-bold text-3xl tracking-tight text-secondary-900">
            Gravel<span className="text-primary-500">Hub</span>
          </span>
        </Link>
        <h2 className="text-center text-3xl font-heading font-bold tracking-tight text-secondary-900">
          Create an account
        </h2>
        <p className="mt-2 text-center text-sm text-secondary-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 shadow-xl shadow-secondary-200/20 sm:rounded-3xl sm:px-10 border border-secondary-100">
          <form className="space-y-6" action="#" method="POST">
            
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-secondary-700">
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-xl border border-secondary-200 px-4 py-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-secondary-700">
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-xl border border-secondary-200 px-4 py-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="account-type" className="block text-sm font-medium text-secondary-700">
                Account Type
              </label>
              <div className="mt-1">
                <select
                  id="account-type"
                  name="account-type"
                  className="block w-full rounded-xl border border-secondary-200 px-4 py-3 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 bg-white"
                >
                  <option>Individual / Homeowner</option>
                  <option>Contractor / Builder</option>
                  <option>Real Estate Developer</option>
                  <option>Driver / Fleet Owner</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-xl border border-secondary-200 px-4 py-3 placeholder-secondary-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-secondary-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full appearance-none rounded-xl border border-secondary-200 px-4 py-3 placeholder-secondary-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-secondary-700">
                I agree to the <a href="#" className="font-medium text-primary-600 hover:text-primary-500">Terms of Service</a> and <a href="#" className="font-medium text-primary-600 hover:text-primary-500">Privacy Policy</a>
              </label>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-xl border border-transparent bg-primary-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
