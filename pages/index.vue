<template>
  <div class="w-full">
    <!-- Top navigation bar -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-stone-200 py-4">
      <div class="max-w-2xl mx-auto px-6 flex justify-between items-center">
        <div class="font-medium text-stone-700">EJ Fox</div>
        <div class="flex space-x-5 md:space-x-8">
          <a href="#about" class="text-sm text-stone-600 px-2 py-1">About</a>
          <a href="#cat" class="text-sm text-stone-600 px-2 py-1">Cat</a>
          <a href="#looking-for" class="text-sm text-stone-600 px-2 py-1">Looking For</a>
          <a href="#why-me" class="text-sm text-stone-600 px-2 py-1">Why Me</a>
          <a href="#contact" class="text-sm text-stone-600 px-2 py-1">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="pt-36 pb-24 bg-white relative overflow-hidden">
      <!-- Subtle background pattern -->
      <div class="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <svg class="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M0 32V0h32" fill="none" stroke="currentColor" stroke-width="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div class="max-w-2xl mx-auto px-6 py-4 text-center relative">
        <div class="mb-12">
          <!-- Placeholder for your headshot - replace src with your actual photo -->
          <div class="w-20 h-20 mx-auto rounded-full bg-sage-100 flex items-center justify-center text-sage-400">
            <span>Photo</span>
          </div>
        </div>
        <h1 class="text-3xl md:text-5xl font-bold mb-10 text-stone-800">
          Hi, I'm EJ Fox. I'd like to rent your Beacon property.
        </h1>
        <p class="text-xl md:text-2xl text-stone-600 mb-10">
          Professional, responsible tenant seeking studio/1BR with outdoor space
        </p>
        <p class="text-base italic text-stone-500 mb-10">(Yes, I made a whole website. Desperate times...)</p>
        <p class="text-base text-stone-600 font-medium mb-12">Email me directly at the button below ↓</p>
        <div class="flex flex-wrap gap-5 justify-center mb-14">
          <div class="px-4 py-2 bg-stone-100 border border-stone-200 text-stone-700 font-medium">
            🎨 Creative Professional
          </div>
          <div class="px-4 py-2 bg-stone-100 border border-stone-200 text-stone-700 font-medium">
            💻 Remote Worker
          </div>
          <div class="px-4 py-2 bg-stone-100 border border-stone-200 text-stone-700 font-medium">
            🏡 Responsible Tenant
          </div>
        </div>
        <a href="#contact" class="inline-block text-stone-700 border border-stone-300 px-6 py-3">
          Contact Me
        </a>
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="py-20 bg-stone-50" v-intersect="onIntersect">
      <div class="max-w-2xl mx-auto px-6">
        <h2 class="text-2xl font-medium mb-12 text-center">About Me <span
            class="text-sm font-normal text-stone-500 block mt-2">(Imagine
            reading a rental application, but fancier)</span></h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-8 slide-up">
            <div class="p-6 bg-white border border-stone-200">
              <h3 class="font-medium text-stone-700 mb-4">Professional Life 💼</h3>
              <p class="text-stone-600">I run Room 302 Studio, a data visualization and prototyping company</p>
              <p class="text-xs italic text-stone-500 mt-4">Translation: Pays rent consistently</p>
            </div>
            <div class="p-6 bg-white border border-stone-200">
              <h3 class="font-medium text-stone-700 mb-4">Lifestyle 🌟</h3>
              <p class="text-stone-600">Quiet professional who works from home and values a peaceful environment</p>
              <p class="text-xs italic text-stone-500 mt-4">Translation: You'll forget I live here</p>
            </div>
            <div class="p-6 bg-white border border-stone-200">
              <h3 class="font-medium text-stone-700 mb-4">Stability 📈</h3>
              <p class="text-stone-600">Stable income, excellent credit, references available</p>
              <p class="text-xs italic text-stone-500 mt-4">Translation: The dream tenant unicorn</p>
            </div>
            <div class="p-6 bg-white border border-stone-200">
              <h3 class="font-medium text-stone-700 mb-4">As a Neighbor 🏡</h3>
              <p class="text-stone-600">Non-smoker, no parties, respectful neighbor</p>
              <p class="text-xs italic text-stone-500 mt-4">Translation: Better than the last guy</p>
            </div>
          </div>
          <div class="relative slide-up flex items-stretch">
            <div class="bg-white border border-stone-200 w-full p-10">
              <div class="flex items-center justify-center h-full">
                <div class="text-center">
                  <div class="text-5xl mb-6">🎨</div>
                  <div class="text-stone-500">Professional photos coming soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet My Cat Section -->
    <section id="cat" class="py-20 bg-white">
      <div class="max-w-2xl mx-auto px-6">
        <h2 class="text-2xl font-medium mb-12 text-center">Meet My Cat <span
            class="text-sm font-normal text-stone-500 block mt-2">(The
            real decision-maker here)</span></h2>
        <div class="text-center mb-12">
          <div class="inline-block px-4 py-2 bg-stone-100 border border-stone-200 text-stone-700 text-sm">
            Roommate & Companion
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <!-- Cat photo card -->
            <div class="bg-white border border-stone-200">
              <div class="h-64 md:h-72 overflow-hidden">
                <div class="w-full h-full flex items-center justify-center bg-stone-50 p-10">
                  <div class="text-center">
                    <div class="text-7xl mb-6">🐱</div>
                    <div class="text-stone-600">Cat photo coming soon</div>
                    <div class="text-xs italic text-stone-500 mt-3">(Yes, my cat has a better resume than most tenants)
                    </div>
                  </div>
                </div>
              </div>

              <!-- Feltron-style data visualization -->
              <div class="p-8 border-t border-stone-200">
                <div class="flex justify-between items-center mb-4">
                  <span class="text-xs uppercase tracking-wider text-stone-600">Cat stats</span>
                  <div class="h-px flex-grow mx-3 bg-stone-200"></div>
                  <span class="text-xs uppercase font-medium text-stone-600">2024</span>
                </div>

                <div class="grid grid-cols-3 gap-4 mb-8">
                  <div class="text-center p-4 bg-stone-50">
                    <div class="text-2xl font-medium text-stone-700">3</div>
                    <div class="text-xs text-stone-600 mt-2">Years Old</div>
                  </div>
                  <div class="text-center p-4 bg-stone-50">
                    <div class="text-2xl font-medium text-stone-700">10</div>
                    <div class="text-xs text-stone-600 mt-2">Lbs</div>
                  </div>
                  <div class="text-center p-4 bg-stone-50">
                    <div class="text-2xl font-medium text-stone-700">16</div>
                    <div class="text-xs text-stone-600 mt-2">Hr Sleep</div>
                  </div>
                </div>

                <!-- Activity chart -->
                <div class="mb-3">
                  <div class="flex justify-between text-xs text-stone-600 mb-2">
                    <span>Activity Level</span>
                    <span>Low ⟶ High</span>
                  </div>
                  <div class="h-3 w-full bg-stone-100 overflow-hidden">
                    <div class="h-full w-1/3 bg-stone-400"></div>
                  </div>
                  <div class="text-xs text-right mt-2 text-stone-500">Mostly calm, occasional zoomies</div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-10">
            <div class="p-6 bg-white border border-stone-200">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-10 h-10 flex items-center justify-center text-stone-600">
                  <span>🏠</span>
                </div>
                <h3 class="font-medium text-stone-700">Lifestyle</h3>
              </div>
              <p class="text-stone-600 mb-5">Well-behaved, indoor cat who appreciates sunny spots and windowsills</p>

              <!-- Tags -->
              <div class="flex flex-wrap gap-3 mt-5">
                <span class="px-3 py-1 bg-stone-100 text-stone-600 text-xs">Indoor only</span>
                <span class="px-3 py-1 bg-stone-100 text-stone-600 text-xs">Litter trained</span>
                <span class="px-3 py-1 bg-stone-100 text-stone-600 text-xs">Quiet</span>
              </div>
            </div>

            <div class="p-6 bg-white border border-stone-200">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-10 h-10 flex items-center justify-center text-stone-600">
                  <span>🧾</span>
                </div>
                <h3 class="font-medium text-stone-700">Pet Deposit</h3>
              </div>
              <p class="text-stone-600 mb-5">Happy to provide pet deposit and veterinary records upon request</p>

              <!-- Visual status -->
              <div class="flex items-center mt-5 gap-3">
                <span class="inline-block w-3 h-3 bg-stone-400"></span>
                <span class="text-sm text-stone-600">Vaccinations up to date</span>
              </div>
            </div>

            <!-- Feltron-style distribution chart -->
            <div class="p-6 bg-white border border-stone-200">
              <div class="text-xs uppercase tracking-wider text-stone-600 mb-4">Daily activity distribution</div>
              <div class="flex h-16 space-x-1 mb-3">
                <div class="w-1/6 bg-stone-200"></div>
                <div class="w-1/6 bg-stone-300"></div>
                <div class="w-1/6 bg-stone-400"></div>
                <div class="w-1/6 bg-stone-300"></div>
                <div class="w-1/6 bg-stone-400"></div>
                <div class="w-1/6 bg-stone-200"></div>
              </div>
              <div class="flex justify-between text-xs text-stone-500 mt-3">
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
    <section id="looking-for" class="py-20 bg-stone-50" v-intersect="onIntersect">
      <div class="max-w-2xl mx-auto px-6">
        <h2 class="text-2xl font-medium mb-12 text-center slide-up">What I'm Looking For <span
            class="text-sm font-normal text-stone-500 block mt-2">(Besides affordable housing in this economy)</span>
        </h2>
        <div class="text-center mb-14 slide-up">
          <div class="inline-block px-4 py-2 bg-stone-100 border border-stone-200 text-stone-700 text-sm">
            Beacon Area Preferences
          </div>
        </div>

        <!-- Feltron-style header metrics -->
        <div class="grid grid-cols-3 gap-6 mb-14 slide-up">
          <div class="text-center">
            <div class="text-xs uppercase tracking-wider text-stone-600 mb-3">Size Range</div>
            <div class="text-3xl font-medium text-stone-700 mb-2">500-800</div>
            <div class="text-sm text-stone-600 mb-2">square feet</div>
            <div class="text-xs italic text-stone-500">(Manhattan would call this a mansion)</div>
          </div>
          <div class="text-center">
            <div class="text-xs uppercase tracking-wider text-stone-600 mb-3">Budget Range</div>
            <div class="text-3xl font-medium text-stone-700 mb-2">$1800-2400</div>
            <div class="text-sm text-stone-600 mb-2">monthly</div>
            <div class="text-xs italic text-stone-500">(My firstborn is negotiable)</div>
          </div>
          <div class="text-center">
            <div class="text-xs uppercase tracking-wider text-stone-600 mb-3">Move-in</div>
            <div class="text-3xl font-medium text-stone-700 mb-2">June/July</div>
            <div class="text-sm text-stone-600 mb-2">Flexible</div>
            <div class="text-xs italic text-stone-500">(Traveling in May)</div>
          </div>
        </div>

        <!-- Main content -->
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Left column -->
          <div class="space-y-12 slide-up">
            <!-- Property type card -->
            <div class="bg-white border border-stone-200">
              <div class="p-6">
                <div class="flex items-center gap-4 mb-4">
                  <div class="text-2xl">🏠</div>
                  <h3 class="font-medium text-stone-700">Property Type</h3>
                </div>
                <p class="text-stone-600 mb-6">Studio or 1BR, 500-800 sq ft</p>

                <!-- Preference meter -->
                <div class="mt-6 space-y-4">
                  <div>
                    <div class="flex justify-between text-xs text-stone-500 mb-2">
                      <span>Studio</span>
                      <span>1-Bedroom</span>
                    </div>
                    <div class="h-2 w-full bg-stone-100">
                      <div class="h-full w-3/4 bg-stone-400"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Feltron-style chart -->
              <div class="bg-stone-50 p-6 border-t border-stone-200">
                <div class="text-xs uppercase tracking-wider text-stone-600 mb-4">Ideal Layout</div>
                <div class="flex w-full h-10 mb-2">
                  <div
                    class="w-1/4 bg-stone-200 border-r border-white text-[9px] text-center flex items-center justify-center">
                    KITCHEN
                  </div>
                  <div
                    class="w-1/4 bg-stone-300 border-r border-white text-[9px] text-center flex items-center justify-center">
                    BATH
                  </div>
                  <div class="w-2/4 bg-stone-400 text-[9px] text-center flex items-center justify-center text-white">
                    LIVING/BEDROOM
                  </div>
                </div>
              </div>
            </div>

            <!-- Location card -->
            <div class="bg-white border border-stone-200 p-6">
              <div class="flex items-center gap-4 mb-4">
                <div class="text-2xl">📍</div>
                <h3 class="font-medium text-stone-700">Location</h3>
              </div>
              <p class="text-stone-600 mb-6">Beacon with preference for walkable areas near Main Street</p>

              <!-- Neighborhood tags -->
              <div class="flex flex-wrap gap-3 mt-6">
                <span class="px-3 py-1 bg-stone-100 text-stone-600 text-xs">Main St Area</span>
                <span class="px-3 py-1 bg-stone-100 text-stone-600 text-xs">Fishkill Creek</span>
                <span class="px-3 py-1 bg-stone-100 text-stone-600 text-xs">Mt. Beacon</span>
              </div>
            </div>
          </div>

          <!-- Right column -->
          <div class="space-y-6 slide-up">
            <!-- Must-haves card -->
            <div class="bg-white border border-stone-200 p-6">
              <div class="flex items-center gap-4 mb-4">
                <div class="text-2xl">✨</div>
                <h3 class="font-medium text-stone-700">Must-Haves</h3>
              </div>

              <!-- Feature scores -->
              <div class="space-y-6 mt-4">
                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm text-stone-600">Cat-friendly</span>
                    <div class="flex gap-1">
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                    </div>
                  </div>
                  <div class="h-2 w-full bg-stone-100">
                    <div class="h-full w-full bg-stone-400"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm text-stone-600">Outdoor space</span>
                    <div class="flex gap-1">
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-200"></span>
                    </div>
                  </div>
                  <div class="h-2 w-full bg-stone-100">
                    <div class="h-full w-4/5 bg-stone-400"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm text-stone-600">High-speed internet</span>
                    <div class="flex gap-1">
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-200"></span>
                    </div>
                  </div>
                  <div class="h-2 w-full bg-stone-100">
                    <div class="h-full w-4/5 bg-stone-400"></div>
                  </div>
                </div>

                <div>
                  <div class="flex justify-between mb-2">
                    <span class="text-sm text-stone-600">Natural light</span>
                    <div class="flex gap-1">
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-600"></span>
                      <span class="w-2 h-2 bg-stone-200"></span>
                      <span class="w-2 h-2 bg-stone-200"></span>
                    </div>
                  </div>
                  <div class="h-2 w-full bg-stone-100">
                    <div class="h-full w-3/5 bg-stone-400"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Timeline card -->
            <div class="bg-white border border-stone-200 p-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="text-2xl">📅</div>
                <h3 class="font-medium text-stone-700">Timeline</h3>
              </div>

              <!-- Feltron-style timeline -->
              <div class="relative pt-2 pl-4">
                <!-- Timeline line -->
                <div class="absolute top-0 left-4 bottom-0 w-px bg-stone-200"></div>

                <!-- Timeline points -->
                <div class="relative mb-10">
                  <div class="absolute left-[-12px] top-1 w-4 h-4 bg-stone-400"></div>
                  <div class="pl-8">
                    <div class="text-sm font-medium mb-1">June 1</div>
                    <div class="text-xs text-stone-500">Earliest move-in</div>
                  </div>
                </div>

                <div class="relative mb-10">
                  <div class="absolute left-[-12px] top-1 w-4 h-4 bg-stone-300"></div>
                  <div class="pl-8">
                    <div class="text-sm font-medium mb-1">June 15-30</div>
                    <div class="text-xs text-stone-500">Preferred move-in</div>
                  </div>
                </div>

                <div class="relative">
                  <div class="absolute left-[-12px] top-1 w-4 h-4 bg-stone-200"></div>
                  <div class="pl-8">
                    <div class="text-sm font-medium mb-1">July 1</div>
                    <div class="text-xs text-stone-500">Alternative move-in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Rent to Me Section -->
    <section id="why-me" class="py-20 bg-white" v-intersect="onIntersect">
      <div class="max-w-2xl mx-auto px-6">
        <h2 class="text-2xl font-medium mb-12 text-center">Why Rent to Me <span
            class="text-sm font-normal text-stone-500 block mt-2">(Other than this over-the-top website)</span></h2>

        <!-- Value proposition stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div class="bg-white p-6 text-center border border-stone-200">
            <div class="text-xs uppercase tracking-wider text-stone-500 mb-3">Income Stability</div>
            <div class="text-2xl font-medium text-stone-700 mb-2">5+ years</div>
            <div class="text-xs text-stone-500 mb-2">Same business</div>
            <div class="text-[10px] italic text-stone-400">(Yes, I survived the pandemic)</div>
          </div>
          <div class="bg-white p-6 text-center border border-stone-200">
            <div class="text-xs uppercase tracking-wider text-stone-500 mb-3">Payment History</div>
            <div class="text-2xl font-medium text-stone-700 mb-2">Reliable</div>
            <div class="text-xs text-stone-500 mb-2">On-time payments</div>
            <div class="text-[10px] italic text-stone-400">(Like clockwork, seriously)</div>
          </div>
          <div class="bg-white p-6 text-center border border-stone-200">
            <div class="text-xs uppercase tracking-wider text-stone-500 mb-3">Remote Work</div>
            <div class="text-2xl font-medium text-stone-700 mb-2">100%</div>
            <div class="text-xs text-stone-500 mb-2">Work from home</div>
            <div class="text-[10px] italic text-stone-400">(I'm always watching the place)</div>
          </div>
          <div class="bg-white p-6 text-center border border-stone-200">
            <div class="text-xs uppercase tracking-wider text-stone-500 mb-3">Rental History</div>
            <div class="text-2xl font-medium text-stone-700 mb-2">10+ years</div>
            <div class="text-xs text-stone-500 mb-2">No evictions</div>
            <div class="text-[10px] italic text-stone-400">(Shocking, I know)</div>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-6">
            <ul class="space-y-6">
              <li>
                <div class="p-6 bg-white border border-stone-200">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="text-2xl">💸</div>
                    <h3 class="font-medium text-stone-700">Consistent Payment History</h3>
                  </div>
                  <p class="text-stone-600">Prioritize rent payments above all else</p>
                </div>
              </li>
              <li>
                <div class="p-6 bg-white border border-stone-200">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="text-2xl">🏡</div>
                    <h3 class="font-medium text-stone-700">Property Care</h3>
                  </div>
                  <p class="text-stone-600">Treat your property like my own</p>
                </div>
              </li>
              <li>
                <div class="p-6 bg-white border border-stone-200">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="text-2xl">🤫</div>
                    <h3 class="font-medium text-stone-700">Peace & Quiet</h3>
                  </div>
                  <p class="text-stone-600">Work-focused, no parties</p>
                </div>
              </li>
              <li>
                <div class="p-6 bg-white border border-stone-200">
                  <div class="flex items-center gap-4 mb-4">
                    <div class="text-2xl">📈</div>
                    <h3 class="font-medium text-stone-700">Long-term Potential</h3>
                  </div>
                  <p class="text-stone-600">Looking for a lasting home</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="space-y-10">
            <div class="p-8 bg-white border border-stone-200">
              <h3 class="font-medium text-stone-700 mb-6 text-xl">What Others Say</h3>
              <div class="space-y-8">
                <div class="p-6 bg-stone-50 border border-stone-200">
                  <div class="flex items-center mb-4">
                    <div class="text-stone-400">★★★★★</div>
                  </div>
                  <p class="text-stone-600 italic">
                    "Testimonials from previous landlords coming soon..."
                  </p>
                  <div class="mt-4 text-sm text-stone-500">
                    - Previous Landlord
                  </div>
                </div>
                <div class="flex items-center gap-2 text-stone-600 text-sm">
                  <span>📝</span>
                  <span>References available upon request</span>
                </div>
              </div>
            </div>

            <!-- Feltron-style comparative chart -->
            <div class="p-6 bg-white border border-stone-200">
              <div class="text-xs uppercase tracking-wider text-stone-600 mb-4">Average Tenant vs. Me</div>
              <div class="space-y-6">
                <div>
                  <div class="flex justify-between text-xs text-stone-500 mb-2">
                    <span>Maintenance Requests</span>
                    <span>Few ← → Many</span>
                  </div>
                  <div class="flex w-full h-6">
                    <div class="w-3/4 bg-stone-100 flex justify-end items-center px-2">
                      <span class="text-[10px] text-stone-500">Avg</span>
                    </div>
                    <div class="w-1/4 bg-stone-200 flex justify-start items-center px-2">
                      <span class="text-[10px] text-stone-600">Me</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-xs text-stone-500 mb-2">
                    <span>Lease Duration</span>
                    <span>Short ← → Long</span>
                  </div>
                  <div class="flex w-full h-6">
                    <div class="w-1/2 bg-stone-100 flex justify-end items-center px-2">
                      <span class="text-[10px] text-stone-500">Avg</span>
                    </div>
                    <div class="w-1/2 bg-stone-200 flex justify-start items-center px-2">
                      <span class="text-[10px] text-stone-600">Me</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex justify-between text-xs text-stone-500 mb-2">
                    <span>Property Care</span>
                    <span>Basic ← → Excellent</span>
                  </div>
                  <div class="flex w-full h-6">
                    <div class="w-2/3 bg-stone-100 flex justify-end items-center px-2">
                      <span class="text-[10px] text-stone-500">Avg</span>
                    </div>
                    <div class="w-1/3 bg-stone-200 flex justify-start items-center px-2">
                      <span class="text-[10px] text-stone-600">Me</span>
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
    <section id="contact" class="py-20 bg-stone-50 relative overflow-hidden" v-intersect="onIntersect">
      <div class="max-w-2xl mx-auto px-6">
        <h2 class="text-2xl font-medium mb-12 text-center slide-up">Contact Me</h2>

        <!-- Tongue-in-cheek message -->
        <div class="max-w-2xl mx-auto mb-16 text-center slide-up">
          <div class="bg-white border border-stone-200 p-6 italic text-stone-600">
            "Yes, I made an entire website to rent your apartment. I know it's ridiculous, but have you <span
              class="font-medium">seen</span> the housing market lately? Let's skip the absurdity and just rent to me
            already."
          </div>
        </div>

        <!-- Big Email CTA -->
        <div class="py-10 slide-up">
          <div class="bg-white border border-stone-200 overflow-hidden">
            <div class="p-16 text-center">
              <div class="text-2xl font-medium text-stone-700 mb-8">EMAIL ME</div>
              <div class="text-3xl md:text-4xl font-medium tracking-tight mb-16 text-stone-800">
                ejfox@ejfox.com
              </div>

              <a href="mailto:ejfox@ejfox.com" class="inline-block bg-stone-700 text-white px-8 py-4 text-lg">
                Send Email Now
              </a>
            </div>

            <div class="px-8 py-4 bg-stone-100 border-t border-stone-200 text-center">
              <div class="text-stone-600">Quick response guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-20 bg-white">
      <div class="max-w-2xl mx-auto px-6 text-center">
        <p class="text-stone-600 mb-4">© 2024 EJ Fox</p>
        <p class="mb-6">
          <a href="https://ejfox.com" class="text-stone-600 border-b border-stone-300 pb-1">ejfox.com</a>
        </p>
        <p class="text-xs italic text-stone-500 max-w-md mx-auto">This site was built with equal parts desperation and
          humor. No
          landlords were harmed in its making.</p>
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
      // Force visibility after a small delay for reliability
      setTimeout(() => {
        entry.target.classList.add('visible')
      }, 100)
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
.slide-up {
  opacity: 0.9;
  transform: translateY(8px);
  transition: all 0.4s ease-out;
}

.slide-up.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Smooth transitions */
* {
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Add a subtle texture to backgrounds */
.texture {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}

/* More space between sections */
section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

/* Note: We're using Tailwind's utility classes directly in the HTML markup 
   so we don't need to redefine them here */
</style>
