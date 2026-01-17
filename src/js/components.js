export function renderNavbar(activePage = 'home') {
    // STRICT BOOTSTRAP 5 structure.
    // navbar-dark ensures text is light and toggler is visible on dark bg.
    // fixed-top ensures it sticks.
    return `
    <nav id="main-navbar" class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container-fluid px-4 px-md-5">
            <a class="navbar-brand fw-bold text-uppercase" href="./index.html" style="font-family: 'Outfit', sans-serif; letter-spacing: -0.05em; font-size: 1.5rem;">
                <span style="color: #66FCF1;">Naokash</span><span class="text-white">.</span>
            </a>
            
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav align-items-center gap-3">
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'home' ? 'active' : ''}" href="./index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'services' ? 'active' : ''}" href="./services.html">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'portfolio' ? 'active' : ''}" href="./portfolio.html">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'about' ? 'active' : ''}" href="./about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'contact' ? 'active' : ''}" href="./contact.html">Contact Us</a>
                    </li>
                    <li class="nav-item ms-lg-3">
                        <a href="./contact.html" class="btn btn-outline-info rounded-0 font-weight-bold text-uppercase" style="border-color: #66FCF1; color: #66FCF1; font-size: 0.85rem; letter-spacing: 0.1em; padding: 0.5rem 1.5rem;">Get a Quote</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
}

export function renderFooter() {
    return `
    <footer class="bg-dark-light border-t border-white/5 py-12 mt-auto">
        <div class="container px-6">
            <div class="grid md:grid-cols-4 gap-8 mb-8">
                <div class="col-span-1 md:col-span-2">
                    <h3 class="text-2xl font-bold text-white mb-4">Naokash<span class="text-cyan">.</span></h3>
                    <p class="text-gray-400 max-w-sm">
                        Engineering the future with precision and innovation. We turn complex ideas into refined, functional realities.
                    </p>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-4">Quick Links</h4>
                    <ul class="space-y-2 text-gray-400 text-sm">
                        <li><a href="./services.html" class="hover:text-cyan transition-colors">Services</a></li>
                        <li><a href="./portfolio.html" class="hover:text-cyan transition-colors">Portfolio</a></li>
                        <li><a href="./about.html" class="hover:text-cyan transition-colors">About Us</a></li>
                        <li><a href="./contact.html" class="hover:text-cyan transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-white font-bold mb-4">Contact</h4>
                    <ul class="space-y-2 text-gray-400 text-sm">
                        <li>info@naokash.com</li>
                        <li>Global Remote Engineering</li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
                &copy; ${new Date().getFullYear()} Naokash. All rights reserved.
            </div>
        </div>
    </footer>
    `;
}

export function renderClientsMarquee() {
    const clients = ['TechCore', 'Nexus', 'AeroSystems', 'Voltaic', 'CyberDyne', 'InnovateX', 'FutureLab'];
    const logos = clients.map(c => `<div class="mx-8 text-2xl font-bold text-gray-600 uppercase tracking-widest font-heading opacity-50 hover:opacity-100 hover:text-cyan transition-all cursor-default">${c}</div>`).join('');

    return `
    <div class="w-full bg-dark-light/30 border-y border-white/5 py-8 overflow-hidden">
        <div class="flex whitespace-nowrap animate-marquee">
            ${logos}
            ${logos}
        </div>
    </div>
    <style>
    @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
    .animate-marquee {
        display: inline-flex;
        animation: marquee 20s linear infinite;
    }
    </style>
    `;
}
