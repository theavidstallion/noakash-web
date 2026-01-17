import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import 'bootstrap'; // Import for side-effects (Data API)
import { renderNavbar, renderFooter, renderClientsMarquee } from './components.js';
import { projects, services, team } from './data.js';

// --- Initialization ---

document.addEventListener('DOMContentLoaded', () => {

    // Inject Components
    // Navbar is now hardcoded in HTML pages

    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) footerContainer.innerHTML = renderFooter();

    const clientsContainer = document.getElementById('clients-container');
    if (clientsContainer) clientsContainer.innerHTML = renderClientsMarquee();

    // Specific Page Logic
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        initHomePage();
    } else if (window.location.pathname.includes('portfolio')) {
        initPortfolioPage();
    } else if (window.location.pathname.includes('services')) {
        initServicesPage();
    } else if (window.location.pathname.includes('about')) {
        initAboutPage();
    }

    // --- Manual Navbar Toggle (Nuclear Fix) ---
    // Bootstrap's collapse plugin is fighting with our styles. We are taking full control.

    const toggler = document.querySelector('.navbar-toggler');
    const collapse = document.querySelector('.navbar-collapse');

    if (toggler && collapse) {
        // 1. Remove Bootstrap triggers to prevent double-handling
        toggler.removeAttribute('data-bs-toggle');
        toggler.removeAttribute('data-bs-target');

        // 2. Clone to strip any existing listeners attached by Bootstrap
        const newToggler = toggler.cloneNode(true);
        toggler.parentNode.replaceChild(newToggler, toggler);

        // 3. Add Manual Toggle Listener
        newToggler.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent bubbling
            collapse.classList.toggle('show');
        });

        // 4. Close when clicking outside
        document.addEventListener('click', (e) => {
            if (collapse.classList.contains('show')) {
                // If click is outside navbar and toggler
                if (!collapse.contains(e.target) && !newToggler.contains(e.target)) {
                    collapse.classList.remove('show');
                }
            }
        });

        // 5. Close when clicking a link
        const links = collapse.querySelectorAll('.nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                collapse.classList.remove('show');
            });
        });
    }

    // Initialize Scroll Animations
    initScrollAnimations();

    // Navbar scroll effect handled nicely by CSS transition, removing manual JS listener 
    // to prevent any conflict with mobile menu toggling.
    // initNavbarScroll(); 
});

// --- Helpers ---

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('services')) return 'services';
    if (path.includes('portfolio')) return 'portfolio';
    if (path.includes('contact')) return 'contact';
    if (path.includes('about')) return 'about';
    return 'home';
}

/* 
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}
*/




function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% visible

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
}

function initHomePage() {
    const featuredContainer = document.getElementById('featured-projects-grid');
    if (!featuredContainer) return;

    // Select 4 distinct projects. Let's pick a mix of visuals.
    const featuredIds = ['portable-mini-hydro', 'paragliding-tracker', 'neopixel-artwork', 'tesla-key'];
    const featured = featuredIds.map(id => projects.find(p => p.id === id)).filter(Boolean);

    if (featured.length < 4) {
        const remaining = projects.filter(p => !featuredIds.includes(p.id)).slice(0, 4 - featured.length);
        featured.push(...remaining);
    }

    featured.forEach(project => {
        const hasImage = project.image && project.image.length > 0;
        const html = `
            <div class="group relative overflow-hidden rounded-sm bg-dark-light border border-white/5 h-[400px] fade-in-up cursor-pointer">
                <!-- Image Background -->
                <div class="absolute inset-0">
                    <img src="${hasImage ? project.image : 'https://placehold.co/600x400/112240/64ffda?text=No+Image'}" 
                         alt="${project.title}" 
                         class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40">
                </div>
                
                <!-- Gradient Overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-90"></div>

                <!-- Content -->
                <div class="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-300 group-hover:-translate-y-2">
                    <p class="text-cyan text-xs font-bold uppercase tracking-widest mb-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 delay-100">Featured</p>
                    <h3 class="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-cyan transition-colors">${project.title}</h3>
                    <p class="text-gray-400 text-sm line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        ${project.overview}
                    </p>
                    <a href="./portfolio.html" class="inline-flex items-center text-white text-sm font-bold uppercase tracking-wider hover:text-cyan transition-colors">
                        View Case Study <i class="fa-solid fa-arrow-right ml-2 text-cyan"></i>
                    </a>
                </div>
            </div>
        `;
        featuredContainer.innerHTML += html;
    });
}

// --- Portfolio Page Logic ---

function initPortfolioPage() {
    const grid = document.getElementById('portfolio-grid');
    const filtersContainer = document.getElementById('portfolio-filters');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    if (!grid || !filtersContainer) return;

    // Filters
    const allTags = new Set(projects.flatMap(p => p.tags));
    const tags = ['All', ...Array.from(allTags).sort()];

    tags.forEach(tag => {
        const btn = document.createElement('button');
        btn.textContent = tag;
        btn.className = `px-6 py-2 rounded-full text-sm font-heading font-medium tracking-wide transition-all duration-300 border ${tag === 'All' ? 'bg-cyan text-dark border-cyan' : 'bg-transparent text-gray-400 border-white/10 hover:border-cyan hover:text-cyan'}`;
        btn.onclick = () => {
            filtersContainer.querySelectorAll('button').forEach(b => {
                b.className = 'px-6 py-2 rounded-full text-sm font-heading font-medium tracking-wide transition-all duration-300 border bg-transparent text-gray-400 border-white/10 hover:border-cyan hover:text-cyan';
            });
            btn.className = 'px-6 py-2 rounded-full text-sm font-heading font-medium tracking-wide transition-all duration-300 border bg-cyan text-dark border-cyan';

            renderPortfolioGrid(grid, tag);
        };
        filtersContainer.appendChild(btn);
    });

    // Initial Render
    renderPortfolioGrid(grid, 'All');

    // Modal Events
    const closeModalFn = () => {
        modal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Re-enable scroll
        }, 300);
    };

    modalClose.onclick = closeModalFn;
    modal.onclick = (e) => {
        if (e.target === modal) closeModalFn();
    };
}

function renderPortfolioGrid(container, filter) {
    container.innerHTML = '';
    const filtered = filter === 'All' ? projects : projects.filter(p => p.tags.includes(filter));

    filtered.forEach((p, index) => {
        const hasImage = p.image && p.image.length > 0;
        const card = document.createElement('div');
        card.style.animationDelay = `${index * 0.1}s`;
        card.className = 'group bg-dark-light rounded-sm overflow-hidden border border-white/5 hover:border-cyan/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(102,252,241,0.1)] fade-in-up cursor-pointer';

        card.innerHTML = `
            <div class="h-56 overflow-hidden relative">
                 <img src="${hasImage ? p.image : 'https://placehold.co/600x400/112240/64ffda?text=No+Image'}" 
                      alt="${p.title}" 
                      class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                 <div class="absolute inset-0 bg-dark/50 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div class="p-6">
                <div class="mb-4">
                    <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">${p.title}</h3>
                    <div class="flex flex-wrap gap-2 mb-3">
                         ${p.tags.slice(0, 3).map(t => `<span class="text-xs text-gray-500 font-mono bg-black/30 px-2 py-1 rounded">${t}</span>`).join('')}
                    </div>
                </div>
                <div class="flex items-center text-cyan text-sm font-bold uppercase tracking-wider">
                    View Details <i class="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </div>
            </div>
        `;
        card.onclick = () => openModal(p);
        container.appendChild(card);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    });
    container.querySelectorAll('.fade-in-up').forEach(c => observer.observe(c));
}

function openModal(project) {
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalBody = document.getElementById('modal-body');

    // Increase Z-Index to overlap fixed navbar (Bootstrap fixed-top is 1030)
    modal.classList.remove('z-50');
    modal.classList.add('z-[2000]');

    const hasMedia = project.media && project.media.images.length > 0;

    let mediaHTML = '';
    if (hasMedia) {
        mediaHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                ${project.media.images.slice(0, 4).map(img => `<img src="${img}" class="rounded-lg border border-white/10 w-full h-48 object-cover">`).join('')}
            </div>
        `;
    }

    modalBody.innerHTML = `
        <div class="h-64 sm:h-80 w-full relative">
            <img src="${project.image}" class="w-full h-full object-cover mask-image-b">
            <div class="absolute inset-0 bg-gradient-to-t from-dark-light to-transparent"></div>
            <div class="absolute bottom-0 left-0 p-8">
                <h2 class="text-3xl md:text-5xl font-bold text-white mb-2">${project.title}</h2>
                <div class="flex flex-wrap gap-2">
                    ${project.tags.map(t => `<span class="px-3 py-1 bg-cyan/10 text-cyan border border-cyan/20 rounded-full text-xs font-bold uppercase tracking-wider">${t}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="p-8">
            <div class="grid lg:grid-cols-3 gap-12">
                <div class="lg:col-span-2 space-y-8">
                    <div>
                        <h3 class="text-xl font-bold text-white mb-4 border-l-4 border-cyan pl-4">Overview</h3>
                        <p class="text-gray-400 leading-relaxed">${project.overview}</p>
                    </div>
                    
                    ${project.challenge ? `
                    <div>
                        <h3 class="text-xl font-bold text-white mb-4 border-l-4 border-cyan pl-4">The Challenge</h3>
                        <p class="text-gray-400 leading-relaxed">${project.challenge}</p>
                    </div>` : ''}
                    
                    ${project.solution ? `
                    <div>
                        <h3 class="text-xl font-bold text-white mb-4 border-l-4 border-cyan pl-4">The Solution</h3>
                         <div class="bg-black/20 p-6 rounded-lg border border-white/5">
                            <h4 class="text-white font-bold mb-3">Hardware</h4>
                            <p class="text-sm text-gray-400 mb-4">${project.solution.hardware.join(', ')}</p>
                            <h4 class="text-white font-bold mb-3">Software</h4>
                            <ul class="text-sm text-gray-400 list-disc list-inside space-y-1">
                                ${project.solution.software.map(s => `<li><span class="text-cyan">${s.title}:</span> ${s.details}</li>`).join('')}
                            </ul>
                         </div>
                    </div>` : ''}

                    ${mediaHTML}

                </div>
                
                <div class="space-y-8">
                     <div class="bg-black/20 p-6 rounded-lg border border-white/5">
                        <h3 class="text-lg font-bold text-white mb-4">Key Features</h3>
                        <ul class="space-y-3">
                            ${project.features.map(f => `<li class="flex items-start text-sm text-gray-400"><i class="fa-solid fa-check text-cyan mt-1 mr-3"></i> ${f}</li>`).join('')}
                        </ul>
                     </div>
                     
                     <div class="bg-black/20 p-6 rounded-lg border border-white/5">
                        <h3 class="text-lg font-bold text-white mb-4">Outcome</h3>
                        <p class="text-sm text-gray-400 italic">"${project.impact}"</p>
                     </div>
                </div>
            </div>
        </div>
    `;

    document.body.style.overflow = 'hidden';
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
}

// --- Services Page Logic ---

function initServicesPage() {
    const container = document.getElementById('services-grid');
    if (!container) return;

    services.forEach((s, index) => {
        const html = `
            <div class="glass p-8 rounded-sm border ${s.recommended ? 'border-cyan/50 shadow-[0_0_30px_rgba(102,252,241,0.1)]' : 'border-white/5'} flex flex-col h-full fade-in-up relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300" style="animation-delay: ${index * 0.1}s">
                ${s.recommended ? '<div class="absolute top-0 right-0 bg-cyan text-dark text-xs font-bold uppercase tracking-widest px-3 py-1">Recommended</div>' : ''}
                
                <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">${s.title}</h3>
                <p class="text-gray-400 text-sm mb-6 h-10">${s.description}</p>
                <div class="text-3xl font-bold text-cyan font-heading mb-8">${s.price}</div>
                
                <ul class="space-y-4 mb-8 flex-grow">
                    ${s.features.map(f => `<li class="flex items-start text-sm text-gray-300"><i class="fa-solid fa-check text-cyan mt-1 mr-3"></i> ${f}</li>`).join('')}
                </ul>
                
                <a href="./contact.html" class="w-full text-center py-3 border border-white/20 hover:border-cyan hover:bg-cyan hover:text-dark transition-all duration-300 font-heading font-bold uppercase tracking-widest text-sm rounded-sm">Select Plan</a>
            </div>
        `;
        container.innerHTML += html;
    });
}

// --- About Page Logic ---

function initAboutPage() {
    const container = document.getElementById('team-grid');
    if (!container) return;

    team.forEach(member => {
        const html = `
            <div class="glass p-8 flex items-center gap-6 rounded-sm border border-white/5 hover:border-cyan/30 transition-colors fade-in-up">
                <div class="relative w-24 h-24 shrink-0">
                    <img src="${member.image}" alt="${member.name}" class="w-full h-full rounded-full object-cover border-2 border-cyan/50 p-1">
                    <div class="absolute bottom-0 right-0 w-6 h-6 bg-dark border border-cyan rounded-full flex items-center justify-center">
                        <i class="fa-brands fa-linkedin text-cyan text-xs"></i>
                    </div>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-white mb-1">${member.name}</h3>
                    <p class="text-cyan font-mono text-xs uppercase tracking-wider mb-3">${member.role}</p>
                     <div class="flex flex-wrap gap-2">
                        ${member.skills.slice(0, 3).map(s => `<span class="text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}
