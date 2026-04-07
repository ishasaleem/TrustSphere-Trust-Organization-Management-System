export default function SettingsPage() {
  const clearData = () => {
    if (!window.confirm("⚠ This will delete all saved data. Continue?")) return;
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-br from-gray-50 to-gray-100">
      
      <div className="max-w-3xl p-6 mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-blue-600">
            ⚙ System Settings
          </h2>
          <p className="mt-1 text-gray-500">
            Manage your application preferences and data
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="p-6 bg-white border border-gray-100 shadow-xl rounded-2xl">

          {/* Theme Section */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div>
              <h3 className="text-lg font-semibold">🎨 Theme</h3>
              <p className="text-sm text-gray-500">
                Light mode is active
              </p>
            </div>

            <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
              Light
            </span>
          </div>

          {/* Divider */}
          <div className="my-6 border-t"></div>

          {/* Info Section */}
          <div className="p-4 bg-gray-50 rounded-xl">
            <h3 className="text-lg font-semibold">📦 Storage</h3>
            <p className="mt-1 text-sm text-gray-500">
              Your data is stored locally in the browser
            </p>
          </div>

          {/* Divider */}
          <div className="my-6 border-t"></div>

          {/* Danger Zone */}
          <div className="p-4 border border-red-100 bg-red-50 rounded-xl">
            <h3 className="text-lg font-semibold text-red-600">
              🧨 Danger Zone
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              This will permanently delete all stored data
            </p>

            <button
              onClick={clearData}
              className="px-5 py-2 mt-4 text-white transition-all duration-200 bg-red-600 rounded-lg shadow-md hover:bg-red-700"
            >
              Reset System
            </button>
          </div>

        </div>

        {/* FOOTER NOTE */}
        <p className="mt-6 text-xs text-center text-gray-400">
          Version 1.0 • Dashboard System
        </p>

      </div>
    </div>
  );
}