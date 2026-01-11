// app/privacy/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Currency Converter',
  description: 'We don\'t collect any data. Simple as that.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          TTC - Privacy Policy
        </h1>
        
        <div className="bg-white rounded-lg border-[2px] border-gray-100 p-8 space-y-6">
          <section>
            <p className="text-lg text-gray-700">
              We don't collect any data. We don't track you. We don't store anything about you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Collect
            </h2>
            <p className="text-gray-700 mb-3">
              Nothing. Zero. Nada.
            </p>
            <p className="text-gray-700">
              We don't use cookies, analytics, tracking pixels, or any other surveillance technology.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Store
            </h2>
            <p className="text-gray-700 mb-3">
              Your preferences (like your default currencies) are saved locally on your device using iOS's standard storage. 
              This data never leaves your phone.
            </p>
            <p className="text-gray-700">
              We can't see it, we can't access it, and we definitely don't want it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-700 mb-3">
              The app fetches exchange rates from these free APIs:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Frankfurter API</strong> - For fiat currency rates</li>
              <li><strong>CoinGecko API</strong> - For cryptocurrency prices</li>
              <li><strong>Metals Live API</strong> - For gold and silver prices</li>
            </ul>
            <p className="text-gray-700 mt-3">
              These services may log API requests (like any website you visit), but we don't send them any personal information. 
              Just "Hey, what's the current USD to EUR rate?"
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-700">
              If we ever change this policy (spoiler: we won't), we'll update this page. 
              But honestly, it's pretty simple—we don't collect data, and that's not changing (we might add analytics but probably not, we will update this page if we do).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Questions?
            </h2>
            <p className="text-gray-700">
              If you have any questions about this privacy policy, you can email us at{' '}
              <a 
                href="mailto:hi@skyroth.com" 
                className="text-blue-600 hover:text-blue-700 underline"
              >
                hi@skyroth.com
              </a>
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Last updated: January 10, 2026 @ 10:42 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}