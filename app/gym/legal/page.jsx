function LegalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <header className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-gray-800">Legal Information</h1>
          <a href="/" className="text-blue-500">
            Back to Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl flex-1 p-4 sm:p-6 lg:p-8">
        <div className="rounded-lg bg-white p-6 shadow">
          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Terms of Service</h2>
            <p className="mb-2 text-gray-600">
              Welcome to [Gym Name]. These terms and conditions outline the rules and regulations
              for the use of our website and services. By accessing this website, you accept these
              terms and conditions in full. Do not continue to use [Gym Name]'s website if you do
              not accept all of the terms and conditions stated on this page.
            </p>
            <p className="text-gray-600">
              You must not use this website in any way that is unlawful, harmful, or fraudulent. The
              content of this website is for your general information and use only. It is subject to
              change without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Privacy Policy</h2>
            <p className="mb-2 text-gray-600">
              We are committed to protecting your privacy. This privacy policy explains how we
              collect, use, and protect your personal information. By using our website, you consent
              to the collection and use of your information as described in this policy.
            </p>
            <p className="mb-2 text-gray-600">
              We collect information such as your name, email address, and payment details when you
              sign up for a membership. This information is used solely for providing and improving
              our services. We do not share your personal information with third parties except as
              necessary to process your payments or comply with the law.
            </p>
            <p className="text-gray-600">
              If you have any questions or concerns about our privacy practices, please contact us
              at privacy@[gymname].com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">Disclaimer</h2>
            <p className="mb-2 text-gray-600">
              The information provided by [Gym Name] on this website is for general informational
              purposes only. All information on the site is provided in good faith; however, we make
              no representation or warranty of any kind, express or implied, regarding the accuracy,
              adequacy, validity, reliability, availability, or completeness of any information on
              the site.
            </p>
            <p className="mb-2 text-gray-600">
              Under no circumstance shall we have any liability to you for any loss or damage of any
              kind incurred as a result of the use of the site or reliance on any information
              provided on the site. Your use of the site and your reliance on any information on the
              site is solely at your own risk.
            </p>
            <p className="text-gray-600">
              The site may contain links to other websites or content belonging to or originating
              from third parties. Such external links are not investigated, monitored, or checked
              for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>
          </section>
        </div>
      </main>

      <footer className="mt-8 bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600">&copy; 2024 [Gym Name]. All rights reserved.</p>
          <p className="text-sm text-gray-600">
            For any legal concerns, please contact us at legal@[gymname].com.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LegalPage;
