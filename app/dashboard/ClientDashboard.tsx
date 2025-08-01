'use client';

export default function ClientDashboard() {
  const mostUsedTools = [
    {
      name: 'PDF to Word',
      uses: '1,247 uses',
      icon: 'M14.1606 6.66665V13.3333H12.4944L10.8281 11.6666L9.16186 13.3333H7.49561V6.66665H9.16186V10.8333L10.8281 9.16665L12.4944 10.8333V6.66665H13.3275V3.33331H4.99624V16.6666H16.66V6.66665H14.1606ZM3.32999 2.49998C3.32999 2.26665 3.41052 2.06943 3.57159 1.90831C3.73266 1.7472 3.92984 1.66665 4.16311 1.66665H14.1606L18.3262 5.83331V17.5C18.3262 17.7222 18.2457 17.9166 18.0846 18.0833C17.9236 18.25 17.7264 18.3333 17.4931 18.3333H4.16311C3.92984 18.3333 3.73266 18.2528 3.57159 18.0916C3.41052 17.9305 3.32999 17.7333 3.32999 17.5V2.49998Z',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      name: 'PDF to Excel',
      uses: '892 uses',
      icon: 'M11.492 9.99998L13.8247 13.3333H11.8252L10.4922 11.4333L9.1592 13.3333H7.1597L9.49246 9.99998L7.1597 6.66665H9.1592L10.4922 8.56665L11.8252 6.66665H12.9916V3.33331H4.66033V16.6666H16.3241V6.66665H13.8247L11.492 9.99998ZM2.99408 2.49998C2.99408 2.26665 3.07462 2.06943 3.23569 1.90831C3.39676 1.7472 3.59393 1.66665 3.8272 1.66665H13.8247L17.9903 5.83331V17.5C17.9903 17.7222 17.9098 17.9166 17.7487 18.0833C17.5877 18.25 17.3905 18.3333 17.1572 18.3333H3.8272C3.59393 18.3333 3.39676 18.2528 3.23569 18.0916C3.07462 17.9305 2.99408 17.7333 2.99408 17.5V2.49998Z',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      name: 'Merge PDFs',
      uses: '654 uses',
      icon: 'M6.99845 4.99998V2.49998C6.99845 2.26665 7.07899 2.06943 7.24006 1.90831C7.40113 1.7472 7.5983 1.66665 7.83158 1.66665H17.8291C18.0624 1.66665 18.2595 1.7472 18.4206 1.90831C18.5817 2.06943 18.6622 2.26665 18.6622 2.49998V14.1666C18.6622 14.4 18.5817 14.5972 18.4206 14.7583C18.2595 14.9194 18.0624 15 17.8291 15H15.3297V17.5C15.3297 17.7333 15.2492 17.9305 15.0881 18.0916C14.927 18.2528 14.7299 18.3333 14.4966 18.3333H4.49908C4.2658 18.3333 4.06863 18.2528 3.90756 18.0916C3.74649 17.9305 3.66595 17.7333 3.66595 17.5V5.83331C3.66595 5.59998 3.74927 5.40276 3.91589 5.24165C4.08252 5.08054 4.27691 4.99998 4.49908 4.99998H6.99845ZM5.3322 6.66665V16.6666H13.6635V6.66665H5.3322ZM8.6647 4.99998H15.3297V13.3333H16.996V3.33331H8.6647V4.99998Z',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      name: 'Compress PDF',
      uses: '543 uses',
      icon: 'M17.4931 18.3333H4.16314C3.92987 18.3333 3.73269 18.2528 3.57162 18.0916C3.41055 17.9305 3.33002 17.7333 3.33002 17.5V2.49998C3.33002 2.26665 3.41055 2.06943 3.57162 1.90831C3.73269 1.7472 3.92987 1.66665 4.16314 1.66665H17.4931C17.7264 1.66665 17.9236 1.7472 18.0847 1.90831C18.2457 2.06943 18.3263 2.26665 18.3263 2.49998V17.5C18.3263 17.7333 18.2457 17.9305 18.0847 18.0916C17.9236 18.2528 17.7264 18.3333 17.4931 18.3333ZM16.66 16.6666V3.33331H4.99627V16.6666H16.66ZM12.4944 9.99998V14.1666H9.16189V11.6666H10.8281V9.99998H12.4944ZM10.8281 3.33331H12.4944V4.99998H10.8281V3.33331ZM9.16189 4.99998H10.8281V6.66665H9.16189V4.99998ZM10.8281 6.66665H12.4944V8.33331H10.8281V6.66665ZM9.16189 8.33331H10.8281V9.99998H9.16189V8.33331Z',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      name: 'Split PDF',
      uses: '432 uses',
      icon: 'M8.54269 6.69998L10.6755 8.81665L16.2741 3.21665C16.4963 3.00554 16.749 2.86109 17.0322 2.78331C17.3155 2.70554 17.6015 2.70554 17.8904 2.78331C18.1792 2.86109 18.4291 3.00554 18.6402 3.21665L8.54269 13.3C8.85372 13.8222 9.00924 14.3861 9.00924 14.9916C9.00924 15.5972 8.85928 16.1555 8.55935 16.6666C8.25943 17.1778 7.85397 17.5833 7.34299 17.8833C6.83201 18.1833 6.27659 18.3333 5.67674 18.3333C5.07689 18.3333 4.52147 18.1833 4.01049 17.8833C3.49951 17.5833 3.09405 17.1778 2.79413 16.6666C2.4942 16.1555 2.34424 15.6 2.34424 15C2.34424 14.4 2.4942 13.8444 2.79413 13.3333C3.09405 12.8222 3.49951 12.4166 4.01049 12.1166C4.52147 11.8166 5.07967 11.6666 5.68507 11.6666C6.29047 11.6666 6.85422 11.8222 7.37631 12.1333L9.49245 9.99998L7.37631 7.86665C6.85422 8.17776 6.29047 8.33331 5.68507 8.33331C5.07967 8.33331 4.52147 8.18331 4.01049 7.88331C3.49951 7.58331 3.09405 7.17776 2.79413 6.66665C2.4942 6.15554 2.34424 5.59998 2.34424 4.99998C2.34424 4.39998 2.4942 3.84443 2.79413 3.33331C3.09405 2.8222 3.49951 2.41665 4.01049 2.11665C4.52147 1.81665 5.07689 1.66665 5.67674 1.66665C6.27659 1.66665 6.83201 1.81665 7.34299 2.11665C7.85397 2.41665 8.25943 2.8222 8.55935 3.33331C8.85928 3.84443 9.00924 4.40276 9.00924 5.00831C9.00924 5.61387 8.85372 6.17776 8.54269 6.69998ZM13.0249 11.1833L18.6402 16.7833C18.4291 16.9944 18.1792 17.1389 17.8904 17.2166C17.6015 17.2944 17.3155 17.2944 17.0322 17.2166C16.749 17.1389 16.4963 16.9944 16.2741 16.7833L11.8585 12.35L13.0249 11.1833Z',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      name: 'PDF Signature',
      uses: '321 uses',
      icon: 'M6.94841 11.7C6.74846 12.2222 6.58183 12.7166 6.44853 13.1833C7.25944 12.5944 8.2092 12.2333 9.29782 12.1C10.3198 11.9666 11.2751 11.5889 12.1638 10.9666C13.0302 10.3555 13.7023 9.60554 14.1799 8.71665L12.9802 7.49998L14.9797 5.48331C15.3463 5.11665 15.7462 4.46109 16.1794 3.51665C13.9022 3.8722 11.9916 4.74998 10.4475 6.14998C8.99234 7.48331 7.82596 9.33331 6.94841 11.7ZM15.3296 7.49998L16.1628 8.33331C15.874 9.18887 15.4241 9.99442 14.8131 10.75C14.1577 11.55 13.3912 12.2055 12.5137 12.7166C11.5695 13.2722 10.5642 13.6166 9.49777 13.75C7.2761 14.0278 5.88756 15.5555 5.33214 18.3333H3.66589L3.71588 18.0166C3.97137 16.4833 4.2102 15.2555 4.43237 14.3333C4.81005 12.7333 5.27105 11.3 5.81536 10.0333C6.51518 8.43331 7.36497 7.06665 8.36472 5.93331C9.53109 4.59998 10.9085 3.57776 12.497 2.86665C14.2855 2.06665 16.3405 1.66665 18.6621 1.66665C17.829 4.16665 16.9959 5.83331 16.1628 6.66665L15.3296 7.49998Z',
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-600'
    }
  ];

  const recentActivities = [
    {
      title: 'PDF to Word conversion',
      description: 'quarterly-report.pdf',
      time: '2 minutes ago',
      status: 'completed'
    },
    {
      title: 'API key regenerated',
      description: 'Production environment',
      time: '1 hour ago',
      status: 'completed'
    },
    {
      title: 'Bulk PDF merge',
      description: '12 files processed',
      time: '3 hours ago',
      status: 'completed'
    },
    {
      title: 'OCR processing',
      description: 'scanned-document.pdf',
      time: '5 hours ago',
      status: 'completed'
    },
    {
      title: 'PDF compression',
      description: 'large-presentation.pdf',
      time: '1 day ago',
      status: 'completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto">
        <div className="p-4">
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 mb-8">
            {/* Home - Active */}
            <button className="w-full flex items-center p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white shadow-lg">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M16.7422 15.27C16.7422 15.48 16.6697 15.6575 16.5247 15.8025C16.3797 15.9475 16.2022 16.02 15.9922 16.02H3.99219C3.78219 16.02 3.60469 15.9475 3.45969 15.8025C3.31469 15.6575 3.24219 15.48 3.24219 15.27V7.39499C3.24219 7.14499 3.33719 6.94499 3.52719 6.79499L9.52719 2.12999C9.66719 2.02999 9.82219 1.97999 9.99219 1.97999C10.1622 1.97999 10.3172 2.02999 10.4572 2.12999L16.4572 6.79499C16.6472 6.94499 16.7422 7.14499 16.7422 7.39499V15.27Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium">Home</div>
                <div className="text-xs text-red-100">Dashboard overview</div>
              </div>
              <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
            </button>

            {/* Other Navigation Items */}
            <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M3.24219 9.375H4.74219V16.125H3.24219V9.375ZM15.2422 6.375H16.7422V16.125H15.2422V6.375ZM9.24219 1.875H10.7422V16.125H9.24219V1.875Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-700">Total Usage</div>
                <div className="text-xs text-gray-500">Usage statistics</div>
              </div>
            </button>

            <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M9.99219 0.75L17.1172 4.875V13.125L9.99219 17.25L2.86719 13.125V4.875L9.99219 0.75Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-700">API Setup</div>
                <div className="text-xs text-gray-500">Integration guides</div>
              </div>
            </button>

            <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M3.24219 13.875V3.75C3.24219 3.34 3.34219 2.9625 3.54219 2.6175C3.74219 2.2725 4.01469 2 4.35969 1.8C4.70469 1.6 5.08219 1.5 5.49219 1.5H15.9922C16.2022 1.5 16.3797 1.5725 16.5247 1.7175C16.6697 1.8625 16.7422 2.04 16.7422 2.25V15.75C16.7422 15.96 16.6697 16.1375 16.5247 16.2825C16.3797 16.4275 16.2022 16.5 15.9922 16.5H5.86719C5.38719 16.5 4.94719 16.3825 4.54719 16.1475C4.14719 15.9125 3.82969 15.595 3.59469 15.195C3.35969 14.795 3.24219 14.355 3.24219 13.875Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-700">API Reference</div>
                <div className="text-xs text-gray-500">Documentation</div>
              </div>
            </button>

            <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M9.30219 1.19999L16.7272 2.26499L17.7922 9.68999L10.8922 16.575C10.7522 16.725 10.5772 16.8 10.3672 16.8C10.1572 16.8 9.98219 16.725 9.84219 16.575L2.41719 9.14999C2.26719 9.00999 2.19219 8.83499 2.19219 8.62499C2.19219 8.41499 2.26719 8.23999 2.41719 8.09999L9.30219 1.19999Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-700">View Plans</div>
                <div className="text-xs text-gray-500">Pricing and upgrades</div>
              </div>
            </button>

            <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M3.24219 2.25H16.7422C16.9522 2.25 17.1297 2.3225 17.2747 2.4675C17.4197 2.6125 17.4922 2.79 17.4922 3V15C17.4922 15.21 17.4197 15.3875 17.2747 15.5325C17.1297 15.6775 16.9522 15.75 16.7422 15.75H3.24219C3.03219 15.75 2.85469 15.6775 2.70969 15.5325C2.56469 15.3875 2.49219 15.21 2.49219 15V3C2.49219 2.79 2.56469 2.6125 2.70969 2.4675C2.85469 2.3225 3.03219 2.25 3.24219 2.25Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-700">API Documentation</div>
                <div className="text-xs text-gray-500">Complete API docs</div>
              </div>
              <svg className="w-3 h-3 text-gray-400 ml-auto" fill="currentColor" viewBox="0 0 15 14">
                <path d="M6.52906 3.5V4.66667H3.61344V11.0833H10.0278V8.16667H11.1941V11.6667C11.1941 11.83 11.1377 11.9681 11.025 12.0808C10.9122 12.1936 10.7742 12.25 10.6109 12.25H3.03031C2.86704 12.25 2.72903 12.1936 2.6163 12.0808C2.50356 11.9681 2.44719 11.83 2.44719 11.6667V4.08333C2.44719 3.92 2.50356 3.78194 2.6163 3.66917C2.72903 3.55639 2.86704 3.5 3.03031 3.5H6.52906ZM12.9434 1.75V6.41667H11.7772V3.745L7.22881 8.28333L6.41244 7.46667L10.9492 2.91667H8.27844V1.75H12.9434Z"/>
              </svg>
            </button>

            <button className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M5.25219 2.66998C5.72219 2.49998 6.20469 2.46998 6.69969 2.57998C7.19469 2.68998 7.62719 2.92498 7.99719 3.28498C8.40719 3.70498 8.65219 4.20248 8.73219 4.77748C8.81219 5.35248 8.71719 5.88998 8.44719 6.38998L16.4722 14.43L15.4222 15.48L7.38219 7.45498C6.88219 7.72498 6.34469 7.81998 5.76969 7.73998C5.19469 7.65998 4.69719 7.41498 4.27719 7.00498C3.91719 6.63498 3.68219 6.20248 3.57219 5.70748C3.46219 5.21248 3.49219 4.72998 3.66219 4.25998L5.34219 5.93998C5.56219 6.15998 5.82719 6.26998 6.13719 6.26998C6.44719 6.26998 6.71219 6.15998 6.93219 5.93998C7.15219 5.71998 7.26219 5.45498 7.26219 5.14498C7.26219 4.83498 7.15219 4.56998 6.93219 4.34998L5.25219 2.66998Z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-gray-700">Live Tools</div>
                <div className="text-xs text-gray-500">PDF conversion tools</div>
              </div>
            </button>
          </nav>

          {/* Quick Actions */}
          <div className="border-t border-gray-200 pt-6 mb-8">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <svg className="w-4 h-4 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 19 18">
                  <path d="M2.625 14.625H16.125V16.125H2.625V14.625ZM10.125 4.74V13.125H8.625V4.74L4.065 9.3L3.015 8.235L9.375 1.875L15.735 8.235L14.685 9.3L10.125 4.74Z"/>
                </svg>
                <span className="text-sm text-gray-700">Upload PDF</span>
              </button>
              <button className="w-full flex items-center p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                <svg className="w-4 h-4 text-gray-600 mr-3" fill="currentColor" viewBox="0 0 19 18">
                  <path d="M9.375 1.5C10.395 1.5 11.37 1.695 12.3 2.085C13.19 2.465 13.9825 3.0025 14.6775 3.6975C15.3725 4.3925 15.91 5.185 16.29 6.075C16.68 7.005 16.875 7.98 16.875 9C16.875 10.02 16.68 10.995 16.29 11.925C15.91 12.815 15.3725 13.6075 14.6775 14.3025C13.9825 14.9975 13.19 15.535 12.3 15.915C11.37 16.305 10.395 16.5 9.375 16.5C8.355 16.5 7.38 16.305 6.45 15.915C5.56 15.535 4.7675 14.9975 4.0725 14.3025C3.3775 13.6075 2.84 12.815 2.46 11.925C2.07 10.995 1.875 10.02 1.875 9H3.375C3.375 10.09 3.65 11.1 4.2 12.03C4.73 12.93 5.445 13.645 6.345 14.175C7.275 14.725 8.285 15 9.375 15C10.465 15 11.475 14.725 12.405 14.175C13.305 13.645 14.02 12.93 14.55 12.03C15.1 11.1 15.375 10.09 15.375 9C15.375 7.91 15.1 6.9 14.55 5.97C14.02 5.07 13.305 4.355 12.405 3.825C11.475 3.275 10.465 3 9.375 3C8.365 3 7.415 3.24 6.525 3.72C5.665 4.18 4.96 4.815 4.41 5.625H6.375V7.125H1.875V2.625H3.375V4.5C4.075 3.57 4.94 2.84 5.97 2.31C7.03 1.77 8.165 1.5 9.375 1.5Z"/>
                </svg>
                <span className="text-sm text-gray-700">View History</span>
              </button>
            </div>
          </div>

          {/* Upgrade Plan */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-4">
            <div className="flex items-center mb-2">
              <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 17 16">
                <path d="M1.66563 13H14.9906V14.3334H1.66563V13ZM1.66563 3.66671L4.99688 6.00004L8.32813 1.66671L11.6594 6.00004L14.9906 3.66671V11.6667H1.66563V3.66671Z"/>
              </svg>
              <h3 className="text-sm font-semibold text-red-900">Upgrade Plan</h3>
            </div>
            <p className="text-xs text-red-800 mb-3">Get unlimited conversions and advanced features</p>
            <button className="w-full py-2 px-3 border border-gray-200 rounded-lg text-sm text-gray-700 bg-white hover:bg-gray-50">
              View Plans
            </button>
          </div>
        </div>

        {/* Sidebar Toggle Button */}
        <button className="absolute -right-3 top-6 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
          <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 14 12">
            <path d="M6.47 5.99999L8.94 8.46999L8.24 9.17999L5.06 5.99999L8.24 2.81999L8.94 3.52999L6.47 5.99999Z"/>
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 22 20">
                <path d="M10.9922 13.3333H7.65969V6.66667H10.9922C11.592 6.66667 12.1475 6.81667 12.6584 7.11667C13.1694 7.41667 13.5749 7.82223 13.8748 8.33334C14.1747 8.84445 14.3247 9.4 14.3247 10C14.3247 10.6 14.1747 11.1556 13.8748 11.6667C13.5749 12.1778 13.1694 12.5833 12.6584 12.8833C12.1475 13.1833 11.592 13.3333 10.9922 13.3333ZM9.32594 8.33334V11.6667H10.9922C11.2921 11.6667 11.5698 11.5917 11.8253 11.4417C12.0808 11.2917 12.2835 11.0889 12.4335 10.8333C12.5835 10.5778 12.6584 10.3 12.6584 10C12.6584 9.7 12.5835 9.42222 12.4335 9.16667C12.2835 8.91111 12.0808 8.70834 11.8253 8.55834C11.5698 8.40834 11.2921 8.33334 10.9922 8.33334H9.32594ZM13.4916 3.33334H5.16031V16.6667H16.8241V6.66667H13.4916V3.33334ZM3.49406 2.5C3.49406 2.26667 3.5746 2.06945 3.73567 1.90834C3.89674 1.74722 4.09391 1.66667 4.32719 1.66667H14.3247L18.4903 5.83334V17.5C18.4903 17.7222 18.4098 17.9167 18.2487 18.0833C18.0876 18.25 17.8905 18.3333 17.6572 18.3333H4.32719C4.09391 18.3333 3.89674 18.2528 3.73567 18.0917C3.5746 17.9306 3.49406 17.7333 3.49406 17.5V2.5Z"/>
              </svg>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Pro Plan Badge */}
              <div className="flex items-center px-3 py-2 border border-blue-200 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span className="text-blue-700 text-sm font-medium">Pro Plan</span>
              </div>

              {/* Manage Plan Button */}
              <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 15 14">
                  <path d="M2.60943 9.04167V2.04167H1.44318V0.875H3.19255C3.35583 0.875 3.49383 0.931389 3.60657 1.04417C3.71931 1.15694 3.77568 1.295 3.77568 1.45833V8.45833H11.0298L12.196 3.79167H4.94193V2.625H12.9424C13.1057 2.625 13.2437 2.68139 13.3564 2.79417C13.4692 2.90694 13.5255 3.045 13.5255 3.20833C13.5255 3.255 13.5178 3.30167 13.5022 3.34833L12.0444 9.18167C12.0133 9.31389 11.9453 9.42083 11.8403 9.5025C11.7353 9.58417 11.6168 9.625 11.4846 9.625H3.19255C3.02928 9.625 2.89127 9.56861 2.77853 9.45583C2.66579 9.34306 2.60943 9.205 2.60943 9.04167Z"/>
                </svg>
                Manage Plan
              </button>

              {/* Notifications */}
              <button className="relative p-2 border border-gray-200 rounded-lg">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5h-5l5-5zM4 14h11a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v7a2 2 0 002 2z" />
                </svg>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
              </button>

              {/* User Profile */}
              <button className="flex items-center px-2 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">SJ</span>
                </div>
                <div className="text-left mr-3">
                  <div className="text-sm font-medium">Sarah Johnson</div>
                  <div className="text-xs text-red-100">sarah@company.com</div>
                </div>
                <svg className="w-4 h-4 text-red-200" fill="currentColor" viewBox="0 0 17 16">
                  <path d="M8.66411 8.70667L11.9554 5.41333L12.9015 6.34667L8.66411 10.5867L4.42676 6.34667L5.37283 5.41333L8.66411 8.70667Z"/>
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Welcome Banner */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 overflow-hidden">
              {/* Background decorations */}
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-white bg-opacity-5 rounded-full"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white bg-opacity-5 rounded-full"></div>
              
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Sarah Johnson!</h1>
                  <p className="text-blue-100 text-lg mb-1">Ready to convert your PDFs? You're on the Pro Plan.</p>
                  <p className="text-blue-200 text-sm">Thursday, July 31, 2025 • 08:33 AM</p>
                </div>
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-white font-medium hover:bg-opacity-30 transition-colors">
                    Upload New PDF
                  </button>
                  <button className="px-6 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-white font-medium hover:bg-opacity-30 transition-colors">
                    View All Tools
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Files Converted */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Files Converted</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">2,847</p>
                    <p className="text-green-600 text-sm">+12%</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M13.4915 3.33334H5.1603V16.6667H16.824V6.66668H13.4915V3.33334ZM3.49405 2.50001C3.49405 2.26668 3.57458 2.06946 3.73566 1.90834C3.89673 1.74723 4.0939 1.66668 4.32717 1.66668H14.3247L18.4903 5.83334V17.5C18.4903 17.7222 18.4098 17.9167 18.2487 18.0833C18.0876 18.25 17.8904 18.3333 17.6572 18.3333H4.32717C4.0939 18.3333 3.89673 18.2528 3.73566 18.0917C3.57458 17.9306 3.49405 17.7333 3.49405 17.5V2.50001ZM10.9922 9.16668V6.66668L14.3247 10L10.9922 13.3333V10.8333H7.65967V9.16668H10.9922Z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* API Calls Remaining */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">API Calls Remaining</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">47,153</p>
                    <p className="text-gray-500 text-sm">3,847 used</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.1566 9.99999L14.258 15.9L13.0917 14.7167L17.8072 9.99999L13.0917 5.28333L14.258 4.09999L20.1566 9.99999ZM4.17723 9.99999L8.89272 14.7167L7.72635 15.9L1.82782 9.99999L7.72635 4.09999L8.89272 5.28333L4.17723 9.99999Z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Storage Used */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Storage Used</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">45.2 GB</p>
                    <p className="text-gray-500 text-sm">of 100 GB</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M10.159 15.8333V7.5H4.32714V15.8333H10.159ZM10.159 5.83333V3.33333C10.159 3.1 10.2395 2.90278 10.4006 2.74167C10.5617 2.58055 10.7589 2.5 10.9921 2.5H18.4903C18.7235 2.5 18.9207 2.58055 19.0818 2.74167C19.2429 2.90278 19.3234 3.1 19.3234 3.33333V16.6667C19.3234 16.9 19.2429 17.0972 19.0818 17.2583C18.9207 17.4194 18.7235 17.5 18.4903 17.5H3.49401C3.26074 17.5 3.06357 17.4194 2.90249 17.2583C2.74142 17.0972 2.66089 16.9 2.66089 16.6667V6.66667C2.66089 6.43333 2.74142 6.23611 2.90249 6.075C3.06357 5.91389 3.26074 5.83333 3.49401 5.83333H10.159ZM11.8253 4.16667V15.8333H17.6571V4.16667H11.8253ZM5.16026 13.3333H9.32589V15H5.16026V13.3333ZM12.6584 13.3333H16.824V15H12.6584V13.3333ZM12.6584 10.8333H16.824V12.5H12.6584V10.8333ZM12.6584 8.33333H16.824V10H12.6584V8.33333ZM5.16026 10.8333H9.32589V12.5H5.16026V10.8333Z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Active Integrations */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Active Integrations</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">8</p>
                    <p className="text-green-600 text-sm">+2 this month</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M11.8253 15V16.6667H16.824V18.3333H11.8253C11.5253 18.3333 11.2476 18.2583 10.9921 18.1083C10.7367 17.9583 10.5339 17.7556 10.384 17.5C10.234 17.2445 10.159 16.9667 10.159 16.6667V15H7.65965C7.0598 15 6.50438 14.85 5.9934 14.55C5.48242 14.25 5.07696 13.8445 4.77704 13.3333C4.47711 12.8222 4.32715 12.2667 4.32715 11.6667V5.83334C4.32715 5.60001 4.40768 5.40279 4.56875 5.24168C4.72983 5.08057 4.927 5.00001 5.16027 5.00001H7.65965V1.66668H9.3259V5.00001H12.6584V1.66668H14.3246V5.00001H16.824C17.0573 5.00001 17.2545 5.08057 17.4155 5.24168C17.5766 5.40279 17.6571 5.60001 17.6571 5.83334V11.6667C17.6571 12.2667 17.5072 12.8222 17.2073 13.3333C16.9073 13.8445 16.5019 14.25 15.9909 14.55C15.4799 14.85 14.9245 15 14.3246 15H11.8253Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Most Used Tools */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Most Used Tools</h2>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 text-sm hover:bg-gray-50">
                  View All Tools
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {mostUsedTools.map((tool, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                      <svg className={`w-5 h-5 ${tool.iconColor}`} fill="currentColor" viewBox="0 0 22 20">
                        <path d={tool.icon} />
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 text-center mb-1">{tool.name}</h3>
                    <p className="text-xs text-gray-600 text-center">{tool.uses}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 text-sm hover:bg-gray-50">
                  View Full History
                </button>
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 18 17">
                        <path d="M7.57973 10.62L13.7092 4.48664L14.642 5.43331L7.57973 12.5133L3.34238 8.25997L4.27513 7.32664L7.57973 10.62Z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-600 truncate">{activity.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{activity.time}</p>
                      <span className="inline-block px-2 py-1 mt-1 text-xs text-green-800 bg-green-100 rounded-full">
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
