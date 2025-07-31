import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Database, Package, University, Users, Calendar } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Navigation - Mobile Optimized */}
      <header className="bg-red-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
              <img 
                src={`${import.meta.env.BASE_URL}images/mcgill-logo.svg`}
                alt="McGill University Logo" 
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain flex-shrink-0"
                onError={(e) => {
                  // Fallback to icon if logo not found
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <University className="h-6 w-6 sm:h-8 sm:w-8 hidden flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl font-bold truncate">Hayer Lab</h1>
                <p className="text-red-100 text-xs sm:text-sm truncate hidden sm:block">Laboratory Management System</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm flex-shrink-0">
              <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">{new Date().toLocaleDateString('en-US')}</span>
              <span className="sm:hidden">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area - Mobile Optimized */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Welcome Section - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Laboratory Management System
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed">
            Welcome to the HayerLab Laboratory Management System. 
            Please select the subsystem you need to access.
          </p>
        </div>

        {/* System Navigation Cards - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Cell Storage System Card - Mobile Optimized */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200 touch-manipulation">
            <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-red-200 transition-colors">
                <Database className="h-6 w-6 sm:h-8 sm:w-8 text-red-700" />
              </div>
              <CardTitle className="text-xl sm:text-2xl text-gray-900 leading-tight">Cell Storage System</CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                Manage and track cell sample storage information in the laboratory
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>Cell Inventory Management</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500">
                  <Database className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>Storage Location Tracking</span>
                </div>
              </div>
              <Button 
                className="w-full bg-red-700 hover:bg-red-800 text-white py-3 sm:py-2 text-sm sm:text-base font-medium touch-manipulation"
                onClick={() => window.open('https://ambient-decoder-467517-h8.nn.r.appspot.com/cell-storage/index', '_blank')}
              >
                Enter System
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Lab Inventory System Card - Mobile Optimized */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200 touch-manipulation">
            <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
              <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-red-200 transition-colors">
                <Package className="h-6 w-6 sm:h-8 sm:w-8 text-red-700" />
              </div>
              <CardTitle className="text-xl sm:text-2xl text-gray-900 leading-tight">Lab Inventory System</CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                Comprehensive laboratory equipment and supplies inventory management
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 sm:px-6 pb-4 sm:pb-6">
              <div className="space-y-2 sm:space-y-4 mb-4 sm:mb-6">
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500">
                  <Package className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>Order Management</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>Inventory Tracking</span>
                </div>
              </div>
              <Button 
                className="w-full bg-red-700 hover:bg-red-800 text-white py-3 sm:py-2 text-sm sm:text-base font-medium touch-manipulation"
                onClick={() => window.open('https://lab-inventory-467021.web.app/inventory', '_blank')}
              >
                Enter System
                <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer Information - Mobile Optimized */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center px-4">
          <div className="border-t border-gray-200 pt-6 sm:pt-8">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2025 Hayer Lab. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1 sm:mt-2 break-words">
              For technical support, please contact qiyaolin3776@gmail.com.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App