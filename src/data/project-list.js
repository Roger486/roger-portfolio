export const projects = [
  {
    key: 'hostcontrol',
    name: 'HostControl',
    roles: ['Backend Developer', 'Database Design', 'Technical & API Documentation'],
    mainSkillsKeys: ['laravel', 'php', 'api-rest', 'mvc'],
    secondarySkillsKeys: ['git', 'github', 'docker', 'agile', 'raspi'],
    repoUrls: [
      { url: 'https://github.com/Roger486/HostControl/tree/main/backend', label: 'API Repo', destination: 'github' },
      { url: 'https://github.com/Roger486/HostControl', label: 'Main Repo', destination: 'github' }
    ],
    demoUrls: [
      { url: 'https://hostcontrol-api.rogerdev.xyz/api/accommodations', label: 'API', destination: 'default' },
      { url: 'https://hostcontrol-vicentedev.rogerdev.xyz/', label: 'Frontend', destination: 'default' }
    ],
    thumbnail: '/projects/hostcontrol/hostcontrol-thumb.jpg',
    images: [
      { key: 'stack', src: '/projects/hostcontrol/hostcontrol-stack.jpg' },
      { key: 'relational', src: '/projects/hostcontrol/hostcontrol-relational.jpg' },
      { key: 'postman', src: '/projects/hostcontrol/hostcontrol-postman.jpg' },
      { key: 'home', src: '/projects/hostcontrol/hostcontrol-home.jpg' },
      { key: 'panel', src: '/projects/hostcontrol/hostcontrol-panel.jpg' },
    ],
    featured: true
  },
  {
    key: 'raspi-server',
    name: 'Raspberry Pi Web Server',
    roles: ['Deployment Automation', 'Infrastructure Scripting', 'Technical Documentation'],
    mainSkillsKeys: ['raspi', 'docker', 'bash'],
    secondarySkillsKeys: ['git', 'github'],
    repoUrls: [
      { url: 'https://github.com/Roger486/raspi-server', label: 'Main Repo', destination: 'github' }

    ],
    demoUrls: [],
    thumbnail: '/projects/raspi-server/raspi-server-thumb.jpg',
    images: [
      { key: 'cover', src: '/projects/raspi-server/raspi-server-cover.jpg' },
      { key: 'hardware', src: '/projects/raspi-server/raspi-server-hardware.jpg' },
      { key: 'code', src: '/projects/raspi-server/raspi-server-code.jpg' },
      { key: 'script-running', src: '/projects/raspi-server/raspi-server-script-running.jpg' }
    ],
    featured: false
  },
  {
    key: 'coffee-haven',
    name: 'Coffee Haven',
    roles: ['Frontend Developer'],
    mainSkillsKeys: ['angular', 'typescript', 'htmlcss'],
    secondarySkillsKeys: ['git', 'github', 'docker', 'raspi'],
    repoUrls: [
      { url: 'https://github.com/Roger486/CoffeeHaven-Angular', label: 'Main Repo', destination: 'github' }

    ],
    demoUrls: [
      { url: 'https://coffee-haven.rogerdev.xyz/', label: 'Frontend', destination: 'default' }
    ],
    thumbnail: '/projects/coffee-haven/coffee-haven-thumb.jpg',
    images: [
      { key: 'home', src: '/projects/coffee-haven/coffee-haven-home.jpg' },
      { key: 'form', src: '/projects/coffee-haven/coffee-haven-form.jpg' },
      { key: 'panel', src: '/projects/coffee-haven/coffee-haven-panel.jpg' },
      { key: 'detail', src: '/projects/coffee-haven/coffee-haven-detail.jpg' }
    ],
    featured: false
  },
  {
    key: 'roger-portfolio',
    name: 'Personal Portfolio',
    roles: ['Frontend Developer'],
    mainSkillsKeys: ['react', 'javascript', 'tailwind', 'htmlcss'],
    secondarySkillsKeys: ['git', 'github', 'docker', 'raspi'],
    repoUrls: [
      { url: 'https://github.com/Roger486/roger-portfolio', label: 'Main Repo', destination: 'github' }
    ],
    demoUrls: [
      { url: 'https://roger-portfolio.rogerdev.xyz/', label: 'Frontend', destination: 'default' }
    ],
    thumbnail: '/projects/roger-portfolio/roger-portfolio-thumb.jpg',
    images: [
      { key: 'home', src: '/projects/roger-portfolio/roger-portfolio-home.jpg' },
      { key: 'responsive', src: '/projects/roger-portfolio/roger-portfolio-responsive.jpg' }
    ],
    featured: false
  },
];