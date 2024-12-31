document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const fullPageContents = document.createElement('div');
    fullPageContents.className = 'full-page-content';
    document.body.appendChild(fullPageContents);

    // Background Music Initialization
    let backgroundMusic = null;

    function initializeBackgroundMusic() {
        if (!backgroundMusic) {
            backgroundMusic = new Audio('path-to-your-music.mp3');
            backgroundMusic.loop = true;
            backgroundMusic.volume = 0.6;
        }
    }

    function playBackgroundMusic() {
        if (backgroundMusic) {
            backgroundMusic.play().catch(error => {
                console.warn('Autoplay of background music failed:', error);
            });
        }
    }

    // Voice Over Functionality
    function speakCardTitle(card) {
        const cardTitle = card.querySelector('h3');
        if (cardTitle && 'speechSynthesis' in window) {
            const synth = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(cardTitle.textContent);
            synth.speak(utterance);
        }
    }

    // Event Delegation for Card Clicks
    document.body.addEventListener('click', (event) => {
        const card = event.target.closest('.card');
        if (card) {
            const target = card.getAttribute('data-target');
            
            // Initialize music on first interaction
            initializeBackgroundMusic();
            playBackgroundMusic();

            // Check if it's a home page card for voice-over
            const homePageCards = document.querySelector('.home-page .card-container');
            if (homePageCards && homePageCards.contains(card)) {
                speakCardTitle(card);
            }
            
            // Handle card navigation
            if (['project1', 'project2', 'project3'].includes(target)) {
                loadProjectContent(target);
            } else {
                // For section navigation like 'contact', 'resume', 'portfolio'
                loadFullPageContent(target);
            }
        }
    });

    function createCloseButton() {
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.className = 'close-btn';
        closeBtn.onclick = () => {
            fullPageContents.style.display = 'none';
        };
        return closeBtn;
    }

    function loadProjectContent(project) {
        fullPageContents.innerHTML = '';
        fullPageContents.appendChild(createCloseButton());

        const projectContent = document.createElement('div');
        projectContent.className = 'project-content';

        // Set content based on project target
        switch (project) {
            case 'project1':
                projectContent.innerHTML = `
                    <h2>Project One: Portfolio Website</h2>
                    <p>This is a personal portfolio website built using HTML, CSS, and JavaScript. It showcases my projects, skills, and contact information.</p>
                `;
                break;
            case 'project2':
                projectContent.innerHTML = `
                    <h2>Project Two: E-commerce Website</h2>
                    <p>An e-commerce platform that integrates with a payment gateway and features a user-friendly shopping cart system.</p>
                `;
                break;
            case 'project3':
                projectContent.innerHTML = `
                    <h2>Project Three: Computer Hardware Technician</h2>
                    
                    <p>Diagnosing, repairing, and upgrading a wide range of computer hardware components, including motherboards, CPUs, RAM, hard drives, and peripheral devices.</p>
                `;
                break;
            default:
                projectContent.innerHTML = `
                    <h2>Unknown Project</h2>
                    <p>No details available for this project.</p>
                `;
                break;
        }

        fullPageContents.appendChild(projectContent);
        fullPageContents.style.display = 'block';
    }

    function createContactCard(icon, title, value, link) {
        const card = document.createElement('div');
        card.className = 'contact-card';
        card.innerHTML = `
            <div class="contact-card-icon">${icon}</div>
            <div class="contact-card-content">
                <h3>${title}</h3>
                <p>${value}</p>
            </div>
        `;
        
        // Add click event to open link
        card.addEventListener('click', () => {
            window.open(link, '_blank');
        });

        return card;
    }

    function loadFullPageContent(page) {
        fullPageContents.innerHTML = '';
        fullPageContents.appendChild(createCloseButton());

        const sectionContent = document.createElement('div');
        sectionContent.className = 'section-content';

        switch (page) {
            case 'resume':
                sectionContent.innerHTML = `
                    <div id="resume-page">
                        <div class="resume-card">
                            <div class="resume-header">
                                <h1>Ariel Bonifacio</h1>
                                <p class="subtitle">Front End Developer | Problem Solver | Tech Enthusiast</p>
                            </div>
        
                            <section class="education">
                                <h2>Education</h2>
                                <div class="info-item">
                                    <div class="icon"><i class="fas fa-graduation-cap"></i></div>
                                    <div class="details">
                                        <h3>Bachelor of Science in Computer Science</h3>
                                        <p>Cavite State University - Naic Campus</p>
                                        <p class="location">Naic, Cavite 4108 PH, 2028</p>
                                    </div>
                                </div>
                                <div class="info-item">
                                    <div class="icon"><i class="fas fa-tools"></i></div>
                                    <div class="details">
                                        <h3>TVL - Electrical Installation and Maintenance NCII</h3>
                                        <p>Amaya School of Home Industries</p>
                                        <p class="location">Sahud - Ulan, Tanza, Cavite 4108 PH, 2020</p>
                                    </div>
                                </div>
                            </section>
        
                            <section class="experience">
                                <h2>Experience</h2>
                                <div class="info-item">
                                    <div class="icon"><i class="fas fa-briefcase"></i></div>
                                    <div class="details">
                                        <h3>Front End Developer</h3>
                                        <p>Cavite State University</p>
                                        <p class="duration">2024 - Present</p>
                                    </div>
                                </div>
                            </section>
        
                            <section class="skills">
                                <h2>Skills</h2>
                                <div class="skills-list">
                                    <div class="info-item">
                                        <div class="icon"><i class="fas fa-code"></i></div>
                                        <div class="details">JavaScript (React, Node.js, Express)</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="icon"><i class="fab fa-html5"></i></div>
                                        <div class="details">HTML5, CSS3, Bootstrap, Tailwind CSS</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="icon"><i class="fas fa-code-branch"></i></div>
                                        <div class="details">Git, GitHub, GitLab</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="icon"><i class="fas fa-network-wired"></i></div>
                                        <div class="details">API Development (RESTful APIs)</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="icon"><i class="fas fa-pencil-ruler"></i></div>
                                        <div class="details">UI/UX Design Principles</div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                `;
                break;

            case 'portfolio':
                sectionContent.innerHTML = `
                    <div id="portfolio-page">
                        <h1>Portfolio</h1>
                        <div class="card-container">
                            <div class="card" data-target="project1">
                                <div class="card-icon">📂</div>
                                <div class="card-content">
                                    <h3>PROJECT ONE</h3>
                                    <p>Highlight key technologies, your role, and significant achievements in this comprehensive project overview.</p>
                                </div>
                            </div>
                            <div class="card" data-target="project2">
                                <div class="card-icon">🔧</div>
                                <div class="card-content">
                                    <h3>PROJECT TWO</h3>
                                    <p>Describe the challenges solved and the impact of the project, showcasing your technical expertise and problem-solving skills.</p>
                                </div>
                            </div>
                            <div class="card" data-target="project3">
                                <div class="card-icon">🖥️</div>
                                <div class="card-content">
                                    <h3>COMPUTER HARDWARE TECHNICIAN</h3>
                                    <p>This project involves diagnosing, repairing, and upgrading hardware components such as motherboards, RAM, and CPUs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'contact':
                sectionContent.innerHTML = `<h1>Contact Information</h1>`;

                const contactGrid = document.createElement('div');
                contactGrid.className = 'contact-grid';

                const contactLinks = [
                    {
                        icon: '📧',
                        title: 'Email',
                        value: 'arielboni74@gmail.com',
                        link: 'mailto:arielboni74@gmail.com'
                    },
                    {
                        icon: '📱',
                        title: 'Phone',
                        value: '+63 968 2398795',
                        link: 'tel:+63968239879'
                    },
                    {
                        icon: '🌐',
                        title: 'Website',
                        value: 'arielportfolio.com',
                        link: 'https://arielportfolio.com'
                    },
                    {
                        icon: '💼',
                        title: 'LinkedIn',
                        value: 'linkedin.com/in/arl.bnfc',
                        link: 'https://www.linkedin.com/in/arl.bnfc'
                    },
                    {
                        icon: '👥',
                        title: 'Facebook',
                        value: '@Ariel Bonifacio',
                        link: 'https://www.facebook.com/ariel.bonifacio'
                    },
                    {
                        icon: '📸',
                        title: 'Instagram',
                        value: '@Ariel Bonifacio',
                        link: 'https://www.instagram.com/ariel.bonifacio'
                    },
                    {
                        icon: '💻',
                        title: 'GitHub',
                        value: '@dragobb',
                        link: 'https://github.com/dragobb'
                    },
                    {
                        icon: '🎥',
                        title: 'TikTok',
                        value: '@Ariel Bonifacio',
                        link: 'https://www.tiktok.com/@ariel.bonifacio'
                    }
                ];

                contactLinks.forEach(contact => {
                    const contactCard = createContactCard(
                        contact.icon, 
                        contact.title, 
                        contact.value, 
                        contact.link
                    );
                    contactGrid.appendChild(contactCard);
                });

                sectionContent.appendChild(contactGrid);
                break;
        }

        fullPageContents.appendChild(sectionContent);
        fullPageContents.style.display = 'block';
    }

    // Image Upload Functionality
    const profileImage = document.getElementById('profile-image');
    if (profileImage) {
        profileImage.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = (e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = (event) => {
                    profileImage.src = event.target.result;
                };
                reader.readAsDataURL(file);
            };
            input.click();
        });
    }
});

