function VerbuuApp() {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 md:p-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Verbuu - Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 italic">
            Last Updated: Oct 25, 2024
          </p>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">
            Welcome to our privacy policy. We value your trust and are committed to protecting your privacy. This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use Verbuu. By using Verbuu, you agree to the practices described in this Privacy Policy.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            1. INFORMATION WE COLLECT
          </h2>
          
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <div>
              <p className="font-semibold text-gray-900 mb-2">a. Basic User Information</p>
              <p className="mb-2">To provide you with our services, we may collect and store the following basic user information:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Language code you want to learn</li>
                <li>Last signed in</li>
                <li>Flashcard learning progress (liked/saved words)</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">b. User-Generated Content</p>
              <p>Verbuu stores your current progress, this is only words that you liked or saved as well as completed quizzes. This data will be stored on our platform.</p>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">c. Geo-location Data</p>
              <p className="mb-2">We may collect and store basic geo-location data for analytical purposes only. This data helps us improve our services and understand user behavior.</p>
              <p>
                Google Analytics collects statistical data about our users' behavior in our Application, but it does not identify individual users to us. For a better understanding of what data Google Analytics collects and how it is used, we recommend that you review Google's privacy policy at{' '}
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
        </div>

        {/* Section 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            2. HOW WE USE THE INFORMATION WE COLLECT
          </h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            We use the information collected for the following purposes:
          </p>
          <ul className="list-none space-y-2 text-gray-700 ml-4">
            <li>a. To provide and improve our services.</li>
            <li>b. To communicate with you regarding updates, new features, and promotions.</li>
            <li>c. To analyze user behavior and preferences, and to enhance the user experience.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            3. DATA STORAGE
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All user data, including basic user information and user-generated content, is securely stored using Google Firebase. We do not sell your data to third parties.
          </p>
        </div>

        {/* Section 4 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            4. CHILDREN'S PRIVACY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Verbuu is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected personal information from a child under 13, please contact us immediately, and we will take steps to remove the information from our records.
          </p>
        </div>

        {/* Section 5 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            5. SECURITY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We take the security of your personal information seriously and implement reasonable measures to protect it. However, no method of transmission over the internet or electronic storage is entirely secure, so we cannot guarantee absolute security.
          </p>
        </div>

        {/* Section 6 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            6. CHANGES TO THIS PRIVACY POLICY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on Verbuu.
          </p>
        </div>

        {/* Section 7 */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            7. CONTACT US
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Thank you for using Verbuu. Your privacy is important to us.
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

export default VerbuuApp;