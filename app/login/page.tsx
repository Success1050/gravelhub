import Link from "next/link";
import { Truck } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-secondary-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="inline-flex items-center justify-center gap-2 group mb-6">
          <div className="bg-primary-500 text-white p-2 rounded-xl group-hover:bg-primary-600 transition-colors">
            <Truck size={28} className="stroke-[1.5]" />
          </div>
          <span className="font-heading font-bold text-3xl tracking-tight text-secondary-900">
            Gravel<span className="text-primary-500">Hub</span>
          </span>
        </Link>
        <h2 className="text-center text-3xl font-heading font-bold tracking-tight text-secondary-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-secondary-600">
          Or{" "}
          <Link href="/register" className="font-medium text-primary-600 hover:text-primary-500 transition-colors">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-secondary-200/20 sm:rounded-3xl sm:px-10 border border-secondary-100">
          <form className="space-y-6" action="#" method="POST">
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
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-xl border border-secondary-200 px-4 py-3 placeholder-secondary-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-secondary-700 cursor-pointer">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-xl border border-transparent bg-primary-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-secondary-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-secondary-500">Demo Access</span>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center text-sm text-secondary-500 text-center">
              Frontend-only mode. Backend and authentication functionality are temporarily disabled per user request.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
