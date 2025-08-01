'use client';

export default function ManagePlansSection() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto px-14">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button className="p-2 border border-gray-200 rounded-lg mr-4">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Manage Plans</h1>
                <p className="text-sm text-gray-600">Manage your subscription and billing</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-gray-900">PDFConverter Pro</h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-20 py-8">
        {/* Current Plan Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <h2 className="text-xl font-bold text-gray-900 mr-3">Current Plan</h2>
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">Active</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">Pro Plan</p>
              <p className="text-gray-600">$29/monthly • Renews on 2/14/2024</p>
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
                Change Plan
              </button>
              <button className="px-6 py-3 border border-gray-200 rounded-lg text-gray-700 bg-gray-50 hover:bg-gray-100">
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>

        {/* Usage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* API Calls */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-gray-900">API Calls</h3>
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-2xl font-bold text-gray-900">8,654</span>
                <span className="text-sm text-gray-600">of 50,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '17.3%' }}></div>
              </div>
              <p className="text-sm text-gray-600">17.3% used</p>
            </div>
          </div>

          {/* Storage */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-gray-900">Storage</h3>
              <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-2xl font-bold text-gray-900">45.2 GB</span>
                <span className="text-sm text-gray-600">of 100 GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45.2%' }}></div>
              </div>
              <p className="text-sm text-gray-600">45.2% used</p>
            </div>
          </div>

          {/* Conversions */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-base font-semibold text-gray-900">Conversions</h3>
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="text-2xl font-bold text-gray-900">2,847</span>
                <span className="text-sm text-gray-600">of 10,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '28.5%' }}></div>
              </div>
              <p className="text-sm text-gray-600">28.5% used</p>
            </div>
          </div>
        </div>

        {/* Available Plans */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Available Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Plan */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">$9</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <p className="text-sm text-gray-600">or $90/year (save 17%)</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">1,000 API calls/month</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">10 GB storage</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">100 conversions/month</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Basic support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Standard processing speed</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
                Downgrade
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-sm px-4 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
              <div className="border-2 border-red-200 bg-red-50 rounded-xl p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
                  <div className="flex items-end justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">$29</span>
                    <span className="text-gray-600 ml-1">/month</span>
                  </div>
                  <p className="text-sm text-gray-600">or $290/year (save 17%)</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">50,000 API calls/month</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">100 GB storage</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">10,000 conversions/month</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Fast processing speed</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Advanced tools</span>
                  </li>
                </ul>
                <button className="w-full py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
                  Downgrade
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="flex items-end justify-center mb-2">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <p className="text-sm text-gray-600">or $990/year (save 17%)</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Unlimited API calls</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">1 TB storage</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Unlimited conversions</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">24/7 dedicated support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Ultra-fast processing</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">SLA guarantee</span>
                </li>
              </ul>
              <button className="w-full py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
                Upgrade
              </button>
            </div>
          </div>
        </div>

        {/* Billing History */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Billing History</h2>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
              Download All Invoices
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-semibold text-gray-900">Date</th>
                  <th className="text-left py-3 text-sm font-semibold text-gray-900">Amount</th>
                  <th className="text-left py-3 text-sm font-semibold text-gray-900">Status</th>
                  <th className="text-left py-3 text-sm font-semibold text-gray-900">Invoice</th>
                  <th className="text-right py-3 text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-4 text-sm text-gray-900">1/14/2024</td>
                  <td className="py-4 text-sm text-gray-900">$29.00</td>
                  <td className="py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="py-4 text-sm text-gray-600 font-mono">INV-2024-001</td>
                  <td className="py-4 text-right">
                    <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-gray-900">12/14/2023</td>
                  <td className="py-4 text-sm text-gray-900">$29.00</td>
                  <td className="py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="py-4 text-sm text-gray-600 font-mono">INV-2023-012</td>
                  <td className="py-4 text-right">
                    <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                      Download
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-sm text-gray-900">11/14/2023</td>
                  <td className="py-4 text-sm text-gray-900">$29.00</td>
                  <td className="py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="py-4 text-sm text-gray-600 font-mono">INV-2023-011</td>
                  <td className="py-4 text-right">
                    <button className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
                      Download
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
