function BorderApp() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-3xl mx-auto rounded-lg p-8 md:p-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            white_border - Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 italic">
            Last Updated: May 22, 2023
          </p>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Introduction */}
        <div className="space-y-4 text-gray-700 leading-relaxed mb-8">
          <p className="font-medium text-gray-900">
            Welcome to our privacy policy.
          </p>
          <p>
            Your privacy is critically important to us. At white_border, we have a few fundamental principles:
          </p>
          
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>We don't ask you for personal information unless we truly need it.</li>
            <li>We don't share your personal information with anyone except to comply with the law, develop our products, or protect our rights.</li>
            <li>We don't store personal information unless required for the on-going operation of our services.</li>
          </ul>

          <p>
            This Privacy Policy describes the policies and procedures of white_border on the collection, use and disclosure of your information when you use the white_border Application, and tells you about your privacy rights and how the law protects you.
          </p>

          <p>
            By using the Application, you agree to the collection and use of information in accordance with this Privacy Policy.
          </p>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. INFORMATION WE COLLECT
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We don't collect or store any personal data from you while you use our application. However, we do utilize Google Analytics to understand how our application is used and to improve it. Google Analytics collects statistical data about our users' behavior in our Application, but it does not identify individual users to us.
            </p>
            <p>
              For a better understanding of what data Google Analytics collects and how it is used, we recommend that you review Google's privacy policy at{' '}
              <a 
                href="https://policies.google.com/privacy" 
                className="text-blue-600 hover:text-blue-700 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. HOW WE USE THE INFORMATION WE COLLECT
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The only purpose for which we use the data collected via Google Analytics is to improve our Application, and to understand what our users prefer. This statistical data does not allow us to identify you personally.
          </p>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. CHILDREN'S PRIVACY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our Application does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. CHANGES TO THIS PRIVACY POLICY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. CONTACT US
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
          </p>
          <a 
            href="mailto:hi@skyroth.com"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            hi@skyroth.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default BorderApp;