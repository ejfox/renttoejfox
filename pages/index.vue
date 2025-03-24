<template>
  <div class="min-h-screen">
    <!-- Top navigation bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm py-3">
      <div class="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <div class="font-medium text-indigo-600">EJ Fox</div>
        <div class="flex space-x-1 md:space-x-4">
          <a href="#about"
            class="text-sm text-gray-600 hover:text-indigo-600 px-2 py-1 rounded-full hover:bg-gray-50 transition-colors">About</a>
          <a href="#cat"
            class="text-sm text-gray-600 hover:text-indigo-600 px-2 py-1 rounded-full hover:bg-gray-50 transition-colors">Cat</a>
          <a href="#looking-for"
            class="text-sm text-gray-600 hover:text-indigo-600 px-2 py-1 rounded-full hover:bg-gray-50 transition-colors">Looking
            For</a>
          <a href="#why-me"
            class="text-sm text-gray-600 hover:text-indigo-600 px-2 py-1 rounded-full hover:bg-gray-50 transition-colors">Why
            Me</a>
          <a href="#contact"
            class="text-sm text-gray-600 hover:text-indigo-600 px-2 py-1 rounded-full hover:bg-gray-50 transition-colors">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="min-h-[50vh] flex items-center justify-center bg-white relative overflow-hidden pt-16">
      <!-- Animated background patterns -->
      <div class="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <svg class="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32V0h32" fill="none" stroke="currentColor" stroke-width="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 animate-gradient"></div>
      </div>
      <div class="max-w-4xl mx-auto px-4 py-8 text-center relative">
        <div class="mb-4 transform hover:scale-105 transition-transform duration-500">
          <!-- Placeholder for your headshot - replace src with your actual photo -->
          <div
            class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-gray-400">
            <span>Photo</span>
          </div>
        </div>
        <h1
          class="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 animate-gradient">
          Hi, I'm EJ Fox. I'd like to rent your Beacon property.
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 mb-8 transform hover:scale-[1.02] transition-transform">
          Professional, responsible tenant seeking studio/1BR with outdoor space
        </p>
        <div class="flex flex-wrap gap-4 justify-center mb-8">
          <div
            class="px-4 py-2 bg-indigo-50 rounded-full text-indigo-700 font-medium hover:bg-indigo-100 transition-colors">
            🎨 Creative Professional
          </div>
          <div
            class="px-4 py-2 bg-purple-50 rounded-full text-purple-700 font-medium hover:bg-purple-100 transition-colors">
            💻 Remote Worker
          </div>
          <div class="px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-medium hover:bg-blue-100 transition-colors">
            🏡 Responsible Tenant
          </div>
        </div>
        <a href="#contact"
          class="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl">
          Contact Me
        </a>
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="bg-gradient-to-br from-gray-50 to-white" v-intersect="onIntersect">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-xl font-bold mb-2 text-center">About Me</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="space-y-2 slide-up">
            <div
              class="transform hover:translate-x-2 transition-transform duration-300 p-4 bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 class="font-semibold text-indigo-600 mb-2">Professional Life 💼</h3>
              <p class="text-gray-700">I run Room 302 Studio, a data visualization and prototyping company</p>
            </div>
            <div
              class="transform hover:translate-x-2 transition-transform duration-300 p-4 bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 class="font-semibold text-purple-600 mb-2">Lifestyle 🌟</h3>
              <p class="text-gray-700">Quiet professional who works from home and values a peaceful environment</p>
            </div>
            <div
              class="transform hover:translate-x-2 transition-transform duration-300 p-4 bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 class="font-semibold text-blue-600 mb-2">Stability 📈</h3>
              <p class="text-gray-700">Stable income, excellent credit, references available</p>
            </div>
            <div
              class="transform hover:translate-x-2 transition-transform duration-300 p-4 bg-white rounded-lg shadow-sm hover:shadow-md">
              <h3 class="font-semibold text-green-600 mb-2">As a Neighbor 🏡</h3>
              <p class="text-gray-700">Non-smoker, no parties, respectful neighbor</p>
            </div>
          </div>
          <div class="relative slide-up flex items-stretch">
            <div
              class="bg-gradient-to-br from-gray-200 to-gray-100 rounded-lg transform hover:scale-[1.02] transition-all duration-300 hover:shadow-xl overflow-hidden w-full">
              <div class="flex items-center justify-center p-4 h-full">
                <div class="text-center">
                  <div class="text-4xl mb-2">🎨</div>
                  <div class="text-gray-500">Professional photos coming soon</div>
                </div>
              </div>
            </div>
            <!-- Decorative elements -->
            <div
              class="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full opacity-50 z-0">
            </div>
            <div
              class="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full opacity-50 z-0">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet My Cat Section -->
    <section id="cat" class="py-6 bg-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03] texture"></div>
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-xl font-bold mb-3 text-center">Meet My Cat</h2>
        <div class="text-center mb-4">
          <div class="inline-block px-3 py-1 bg-amber-50 rounded-full text-amber-700 text-sm font-medium">
            <span class="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1"></span> Roommate & Companion
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4 items-center">
          <div class="relative">
            <!-- Cat photo card -->
            <div
              class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg transform hover:rotate-1 transition-all duration-300 hover:shadow-xl overflow-hidden">
              <div class="h-48 md:h-64 rounded-t-lg overflow-hidden">
                <div
                  class="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50 p-8">
                  <div class="text-center">
                    <div class="text-6xl mb-4">🐱</div>
                    <div class="text-amber-600">Cat photo coming soon</div>
                  </div>
                </div>
              </div>

              <!-- Feltron-style data visualization -->
              <div class="p-4">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-xs uppercase tracking-wider text-amber-700">Cat stats</span>
                  <div class="h-px flex-grow mx-2 bg-amber-200"></div>
                  <span class="text-xs uppercase font-medium text-amber-700">2024</span>
                </div>

                <div class="grid grid-cols-3 gap-2 mb-4">
                  <div class="text-center p-2 bg-white rounded">
                    <div class="text-2xl font-bold text-amber-600">3</div>
                    <div class="text-xs text-amber-700">Years Old</div>
                  </div>
                  <div class="text-center p-2 bg-white rounded">
                    <div class="text-2xl font-bold text-amber-600">10</div>
                    <div class="text-xs text-amber-700">Lbs</div>
                  </div>
                  <div class="text-center p-2 bg-white rounded">
                    <div class="text-2xl font-bold text-amber-600">16</div>
                    <div class="text-xs text-amber-700">Hr Sleep</div>
                  </div>
                </div>

                <!-- Activity chart -->
                <div class="mb-3">
                  <div class="flex justify-between text-xs text-amber-700 mb-1">
                    <span>Activity Level</span>
                    <span>Low ⟶ High</span>
                  </div>
                  <div class="h-2 w-full bg-amber-100 rounded-full overflow-hidden">
                    <div class="h-full w-1/3 bg-amber-500 rounded-full"></div>
                  </div>
                  <div class="text-xs text-right mt-1 text-amber-600">Mostly calm, occasional zoomies</div>
                </div>
              </div>
            </div>

            <!-- Decorative elements -->
            <div class="absolute -bottom-3 -left-3 w-16 h-16 bg-amber-200 rounded-full opacity-30 z-0"></div>
            <div class="absolute -top-3 -right-3 w-12 h-12 bg-orange-200 rounded-full opacity-30 z-0"></div>
          </div>

          <div class="space-y-6">
            <div class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <span>🏠</span>
                </div>
                <h3 class="font-semibold text-amber-700">Lifestyle</h3>
              </div>
              <p class="text-gray-700">Well-behaved, indoor cat who appreciates sunny spots and windowsills</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mt-3">
                <span class="px-2 py-1 bg-amber-50 rounded text-amber-700 text-xs">Indoor only</span>
                <span class="px-2 py-1 bg-amber-50 rounded text-amber-700 text-xs">Litter trained</span>
                <span class="px-2 py-1 bg-amber-50 rounded text-amber-700 text-xs">Quiet</span>
              </div>
            </div>

            <div class="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <div class="flex items-center gap-3 mb-2">
                <div class="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                  <span>🧾</span>
                </div>
                <h3 class="font-semibold text-amber-700">Pet Deposit</h3>
              </div>
              <p class="text-gray-700">Happy to provide pet deposit and veterinary records upon request</p>

              <!-- Visual status -->
              <div class="flex items-center mt-3 gap-2">
                <span class="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                <span class="text-sm text-green-700">Vaccinations up to date</span>
              </div>
            </div>

            <!-- Feltron-style distribution chart -->
            <div class="p-4 bg-white rounded-lg shadow-sm">
              <div class="text-xs uppercase tracking-wider text-amber-700 mb-2">Daily activity distribution</div>
              <div class="flex h-12 space-x-1 mb-1">
                <div class="w-1/6 bg-amber-100 rounded-sm"></div>
                <div class="w-1/6 bg-amber-200 rounded-sm"></div>
                <div class="w-1/6 bg-amber-300 rounded-sm"></div>
                <div class="w-1/6 bg-amber-200 rounded-sm"></div>
                <div class="w-1/6 bg-amber-300 rounded-sm"></div>
                <div class="w-1/6 bg-amber-100 rounded-sm"></div>
              </div>
              <div class="flex justify-between text-xs text-amber-600">
                <span>Sleep</span>
                <span>Play</span>
                <span>Sleep</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What I'm Looking For Section -->
    <section id="looking-for" class="py-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      v-intersect="onIntersect">
      <div class="absolute inset-0 opacity-[0.02] texture"></div>

      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-xl font-bold mb-3 text-center slide-up">What I'm Looking For</h2>
        <div class="text-center mb-4 slide-up">
          <div class="inline-block px-3 py-1 bg-blue-50 rounded-full text-blue-700 text-sm font-medium">
            <span class="inline-block w-2 h-2 rounded-full bg-blue-500 mr-1"></span> Beacon Area Preferences
          </div>
        </div>

        <!-- Feltron-style header metrics -->
        <div class="grid grid-cols-3 gap-4 mb-5 slide-up">
          <div class="text-center">
            <div class="text-xs uppercase tracking-wider text-blue-700 mb-2">Size Range</div>
            <div class="text-3xl font-bold text-blue-600">500-800</div>
            <div class="text-sm text-blue-700">square feet</div>
          </div>
          <div class="text-center">
            <div class="text-xs uppercase tracking-wider text-blue-700 mb-2">Budget Range</div>
            <div class="text-3xl font-bold text-blue-600">$1800-2400</div>
            <div class="text-sm text-blue-700">monthly</div>
          </div>
          <div class="text-center">
            <div class="text-xs uppercase tracking-wider text-blue-700 mb-2">Move-in</div>
            <div class="text-3xl font-bold text-blue-600">June 1</div>
            <div class="text-sm text-blue-700">± 14 days</div>
          </div>
        </div>

        <!-- Main content -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Left column -->
          <div class="space-y-6 slide-up">
            <!-- Property type card -->
            <div class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
              <div class="p-4">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <span class="text-xl">🏠</span>
                  </div>
                  <h3 class="font-semibold text-blue-700">Property Type</h3>
                </div>
                <p class="text-gray-700">Studio or 1BR, 500-800 sq ft</p>

                <!-- Preference meter -->
                <div class="mt-4 space-y-3">
                  <div>
                    <div class="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Studio</span>
                      <span>1-Bedroom</span>
                    </div>
                    <div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div class="h-full w-3/4 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Feltron-style chart -->
              <div class="bg-blue-50 p-3">
                <div class="text-xs uppercase tracking-wider text-blue-700 mb-2">Ideal Layout</div>
                <div class="flex w-full h-8 mb-1">
                  <div
                    class="w-1/4 bg-blue-200 border-r border-white text-[9px] text-center flex items-center justify-center">
                    KITCHEN
                  </div>
                  <div
                    class="w-1/4 bg-blue-300 border-r border-white text-[9px] text-center flex items-center justify-center">
                    BATH
                  </div>
                  <div class="w-2/4 bg-blue-400 text-[9px] text-center flex items-center justify-center text-white">
                    LIVING/BEDROOM
                  </div>
                </div>
              </div>
            </div>

            <!-- Location card -->
            <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
              <div class="p-4">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <span class="text-xl">📍</span>
                  </div>
                  <h3 class="font-semibold text-blue-700">Location</h3>
                </div>
                <p class="text-gray-700">Beacon with preference for walkable areas near Main Street</p>

                <!-- Neighborhood tags -->
                <div class="flex flex-wrap gap-2 mt-3">
                  <span class="px-2 py-1 bg-blue-50 rounded-full text-blue-700 text-xs">Main St Area</span>
                  <span class="px-2 py-1 bg-blue-50 rounded-full text-blue-700 text-xs">Fishkill Creek</span>
                  <span class="px-2 py-1 bg-blue-50 rounded-full text-blue-700 text-xs">Mt. Beacon</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right column -->
          <div class="space-y-6 slide-up">
            <!-- Must-haves card -->
            <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <span class="text-xl">✨</span>
                </div>
                <h3 class="font-semibold text-blue-700">Must-Haves</h3>
              </div>

              <!-- Feature scores -->
              <div class="space-y-3 mt-1">
                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700">Cat-friendly</span>
                    <div class="flex gap-1">
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </div>
                  </div>
                  <div class="h-1 w-full bg-gray-100 rounded-full">
                    <div class="h-full w-full bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700">Outdoor space</span>
                    <div class="flex gap-1">
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-gray-200 rounded-full"></span>
                    </div>
                  </div>
                  <div class="h-1 w-full bg-gray-100 rounded-full">
                    <div class="h-full w-4/5 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700">High-speed internet</span>
                    <div class="flex gap-1">
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-gray-200 rounded-full"></span>
                    </div>
                  </div>
                  <div class="h-1 w-full bg-gray-100 rounded-full">
                    <div class="h-full w-4/5 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between mb-1">
                    <span class="text-sm text-gray-700">Natural light</span>
                    <div class="flex gap-1">
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span class="w-2 h-2 bg-gray-200 rounded-full"></span>
                      <span class="w-2 h-2 bg-gray-200 rounded-full"></span>
                    </div>
                  </div>
                  <div class="h-1 w-full bg-gray-100 rounded-full">
                    <div class="h-full w-3/5 bg-blue-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Timeline card -->
            <div class="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-4">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <span class="text-xl">📅</span>
                </div>
                <h3 class="font-semibold text-blue-700">Timeline</h3>
              </div>

              <!-- Feltron-style timeline -->
              <div class="relative pt-1 pl-4">
                <!-- Timeline line -->
                <div class="absolute top-0 left-4 bottom-0 w-px bg-blue-200"></div>

                <!-- Timeline points -->
                <div class="relative mb-6">
                  <div class="absolute left-[-12px] top-1 w-5 h-5 rounded-full bg-blue-500"></div>
                  <div class="pl-6">
                    <div class="text-sm font-medium">May 15-31</div>
                    <div class="text-xs text-gray-600">Property visits</div>
                  </div>
                </div>

                <div class="relative mb-6">
                  <div class="absolute left-[-12px] top-1 w-5 h-5 rounded-full bg-blue-300"></div>
                  <div class="pl-6">
                    <div class="text-sm font-medium">June 1-15</div>
                    <div class="text-xs text-gray-600">Preferred move-in</div>
                  </div>
                </div>

                <div class="relative">
                  <div class="absolute left-[-12px] top-1 w-5 h-5 rounded-full bg-blue-200"></div>
                  <div class="pl-6">
                    <div class="text-sm font-medium">June 30</div>
                    <div class="text-xs text-gray-600">Latest move-in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Rent to Me Section -->
    <section id="why-me" class="py-6 bg-white relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03] texture"></div>
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-xl font-bold mb-3 text-center">Why Rent to Me</h2>

        <!-- Value proposition stats -->
        <div class="grid grid-cols-4 gap-3 mb-5">
          <div
            class="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-all border-t-4 border-green-400">
            <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Income Stability</div>
            <div class="text-xl font-bold text-gray-800">5+ years</div>
            <div class="text-xs text-gray-500">Same business</div>
          </div>
          <div
            class="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-all border-t-4 border-blue-400">
            <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Payment History</div>
            <div class="text-xl font-bold text-gray-800">Reliable</div>
            <div class="text-xs text-gray-500">On-time payments</div>
          </div>
          <div
            class="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-all border-t-4 border-purple-400">
            <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Remote Work</div>
            <div class="text-xl font-bold text-gray-800">100%</div>
            <div class="text-xs text-gray-500">Work from home</div>
          </div>
          <div
            class="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition-all border-t-4 border-amber-400">
            <div class="text-xs uppercase tracking-wider text-gray-500 mb-1">Rental History</div>
            <div class="text-xl font-bold text-gray-800">10+ years</div>
            <div class="text-xs text-gray-500">No evictions</div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-3">
            <ul class="space-y-3">
              <li class="transform hover:translate-x-2 transition-transform duration-300">
                <div
                  class="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:shadow-md transition-all">
                  <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span class="text-2xl">💸</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-green-700">Consistent Payment History</h3>
                    <p class="text-green-600">Prioritize rent payments above all else</p>
                  </div>
                </div>
              </li>
              <li class="transform hover:translate-x-2 transition-transform duration-300">
                <div
                  class="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-sky-50 rounded-lg hover:shadow-md transition-all">
                  <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span class="text-2xl">🏡</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-blue-700">Property Care</h3>
                    <p class="text-blue-600">Treat your property like my own</p>
                  </div>
                </div>
              </li>
              <li class="transform hover:translate-x-2 transition-transform duration-300">
                <div
                  class="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg hover:shadow-md transition-all">
                  <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span class="text-2xl">🤫</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-purple-700">Peace & Quiet</h3>
                    <p class="text-purple-600">Work-focused, no parties</p>
                  </div>
                </div>
              </li>
              <li class="transform hover:translate-x-2 transition-transform duration-300">
                <div
                  class="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg hover:shadow-md transition-all">
                  <div class="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <span class="text-2xl">📈</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-amber-700">Long-term Potential</h3>
                    <p class="text-amber-600">Looking for a lasting home</p>
                  </div>
                </div>
              </li>
              <li class="transform hover:translate-x-2 transition-transform duration-300">
                <div
                  class="flex items-center gap-4 p-4 bg-gradient-to-r from-red-50 to-rose-50 rounded-lg hover:shadow-md transition-all">
                  <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span class="text-2xl">💻</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-red-700">Tech-Savvy Tenant</h3>
                    <p class="text-red-600">Can troubleshoot most home issues</p>
                  </div>
                </div>
              </li>
              <li class="transform hover:translate-x-2 transition-transform duration-300">
                <div
                  class="flex items-center gap-4 p-4 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-lg hover:shadow-md transition-all">
                  <div class="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <span class="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-teal-700">Proactive Communication</h3>
                    <p class="text-teal-600">Address issues before they become problems</p>
                  </div>
                </div>
              </li>
              <!-- Additional financial responsibility card -->
              <li class="transform hover:translate-x-2 transition-transform duration-300">
                <div
                  class="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg hover:shadow-md transition-all">
                  <div class="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span class="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-emerald-700">Financial Commitment</h3>
                    <p class="text-emerald-600">Willing to provide larger security deposit</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div
              class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] mb-5">
              <h3 class="font-semibold mb-5 text-gray-800 text-xl">What Others Say</h3>
              <div class="space-y-5">
                <div class="p-4 bg-white rounded-lg shadow-sm">
                  <div class="flex items-center mb-3">
                    <div class="text-yellow-400 flex">
                      ★★★★★
                    </div>
                  </div>
                  <p class="text-gray-600 italic">
                    "Testimonials from previous landlords coming soon..."
                  </p>
                  <div class="mt-3 text-sm text-gray-500">
                    - Previous Landlord
                  </div>
                </div>
                <div class="flex items-center gap-2 text-gray-600 text-sm mt-4">
                  <span>📝</span>
                  <span>References available upon request</span>
                </div>
              </div>
            </div>

            <!-- Feltron-style comparative chart -->
            <div class="bg-white rounded-lg shadow-sm p-4">
              <div class="text-xs uppercase tracking-wider text-gray-600 mb-3">Average Tenant vs. Me</div>
              <div class="space-y-3">
                <div>
                  <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Maintenance Requests</span>
                    <span>Few ← → Many</span>
                  </div>
                  <div class="flex w-full h-6 rounded-full overflow-hidden">
                    <div class="w-3/4 bg-gray-100 flex justify-end items-center px-2">
                      <span class="text-[10px] text-gray-500">Avg</span>
                    </div>
                    <div class="w-1/4 bg-indigo-100 flex justify-start items-center px-2">
                      <span class="text-[10px] text-indigo-500">Me</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Lease Duration</span>
                    <span>Short ← → Long</span>
                  </div>
                  <div class="flex w-full h-6 rounded-full overflow-hidden">
                    <div class="w-1/2 bg-gray-100 flex justify-end items-center px-2">
                      <span class="text-[10px] text-gray-500">Avg</span>
                    </div>
                    <div class="w-1/2 bg-indigo-100 flex justify-start items-center px-2">
                      <span class="text-[10px] text-indigo-500">Me</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Property Care</span>
                    <span>Basic ← → Excellent</span>
                  </div>
                  <div class="flex w-full h-6 rounded-full overflow-hidden">
                    <div class="w-2/3 bg-gray-100 flex justify-end items-center px-2">
                      <span class="text-[10px] text-gray-500">Avg</span>
                    </div>
                    <div class="w-1/3 bg-indigo-100 flex justify-start items-center px-2">
                      <span class="text-[10px] text-indigo-500">Me</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section id="contact" class="py-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden"
      v-intersect="onIntersect">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-xl font-bold mb-3 text-center slide-up">Contact Me</h2>
        <div class="text-center mb-4 slide-up">
          <div class="inline-block px-3 py-1 bg-indigo-50 rounded-full text-indigo-700 text-sm font-medium">
            <span class="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-1"></span> Ready To Connect
          </div>
        </div>

        <!-- Contact stats -->
        <div class="grid grid-cols-3 gap-4 mb-5 slide-up">
          <div class="relative">
            <div
              class="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all transform hover:-rotate-1">
              <div class="text-xs uppercase tracking-wider text-indigo-700 mb-1">Response Time</div>
              <div class="text-2xl font-bold text-indigo-600">&lt; 24h</div>
              <div class="absolute -top-2 -right-2 w-4 h-4 bg-indigo-100 rounded-full"></div>
            </div>
          </div>
          <div class="relative">
            <div
              class="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all transform hover:rotate-1">
              <div class="text-xs uppercase tracking-wider text-indigo-700 mb-1">Available For</div>
              <div class="text-2xl font-bold text-indigo-600">Virtual Tours</div>
              <div class="absolute -top-2 -left-2 w-4 h-4 bg-indigo-100 rounded-full"></div>
            </div>
          </div>
          <div class="relative">
            <div
              class="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-all transform hover:-rotate-1">
              <div class="text-xs uppercase tracking-wider text-indigo-700 mb-1">References</div>
              <div class="text-2xl font-bold text-indigo-600">On Request</div>
              <div class="absolute -top-2 -right-2 w-4 h-4 bg-indigo-100 rounded-full"></div>
            </div>
          </div>
        </div>

        <div class="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden slide-up">
          <div class="p-2 bg-indigo-50">
            <div class="flex items-center justify-between px-3">
              <div class="flex space-x-1">
                <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div class="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div class="text-xs text-indigo-700 uppercase tracking-wider">Contact Form</div>
              <div></div>
            </div>
          </div>

          <form class="p-5 space-y-4">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <div class="relative">
                  <input type="text"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pl-9" />
                  <div class="absolute left-3 top-2.5 text-gray-400">
                    <span>👤</span>
                  </div>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div class="relative">
                  <input type="email"
                    class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pl-9" />
                  <div class="absolute left-3 top-2.5 text-gray-400">
                    <span>✉️</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Property Details</label>
              <div class="relative">
                <textarea rows="4"
                  class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 pl-9"></textarea>
                <div class="absolute left-3 top-2.5 text-gray-400">
                  <span>🏠</span>
                </div>
              </div>
            </div>

            <!-- Tags -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">What best describes your property?
                (Optional)</label>
              <div class="flex flex-wrap gap-2">
                <div
                  class="px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-indigo-50 hover:border-indigo-200 cursor-pointer transition-colors">
                  Studio</div>
                <div
                  class="px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-indigo-50 hover:border-indigo-200 cursor-pointer transition-colors">
                  1-Bedroom</div>
                <div
                  class="px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-indigo-50 hover:border-indigo-200 cursor-pointer transition-colors">
                  Outdoor Space</div>
                <div
                  class="px-3 py-1 border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-indigo-50 hover:border-indigo-200 cursor-pointer transition-colors">
                  Near Main St</div>
              </div>
            </div>

            <button type="submit"
              class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:scale-[1.01] transition-all duration-300 hover:shadow-xl">
              Send Message
            </button>
          </form>

          <!-- Contact alternatives -->
          <div class="px-6 py-4 bg-indigo-50 border-t border-gray-100">
            <div class="flex justify-center items-center gap-6">
              <a href="mailto:email@example.com"
                class="flex items-center gap-2 text-indigo-700 hover:text-indigo-900 transition-colors">
                <span>📧</span>
                <span>Email directly</span>
              </a>
              <div class="h-4 w-px bg-indigo-200"></div>
              <a href="tel:+1234567890"
                class="flex items-center gap-2 text-indigo-700 hover:text-indigo-900 transition-colors">
                <span>📞</span>
                <span>Call me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-4 bg-white">
      <div class="max-w-4xl mx-auto px-4 text-center text-gray-600">
        <p>© 2024 EJ Fox</p>
        <p class="mt-2">
          <a href="https://ejfox.com" class="text-indigo-600 hover:text-indigo-700">ejfox.com</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Intersection Observer for scroll animations
const onIntersect = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    }
  })
}

// Smooth scroll
const smoothScroll = (e) => {
  e.preventDefault()
  const targetId = e.target.getAttribute('href')
  const targetElement = document.querySelector(targetId)
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

onMounted(() => {
  // Add smooth scroll to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll)
  })
})
</script>

<style>
.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

.slide-up {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease-out;
}

.slide-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Enhanced hover effects */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.1);
}

/* Smooth transitions */
* {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Add a subtle texture to backgrounds */
.texture {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

/* Fix grid gaps */
.grid {
  @apply gap-4;
}

.space-y-6 {
  @apply space-y-4;
}

.space-y-5 {
  @apply space-y-3;
}

.space-y-4 {
  @apply space-y-3;
}

.space-y-3 {
  @apply space-y-2;
}

.mb-6 {
  @apply mb-4;
}

.mb-5 {
  @apply mb-3;
}

.mb-4 {
  @apply mb-3;
}

.py-6 {
  @apply py-4;
}

.p-6 {
  @apply p-4;
}

.p-5 {
  @apply p-4;
}
</style>
