export const projects = [
  {
    key: 'hostcontrol',
    roles: ['Backend Developer', 'Database Design', 'Technical & API Documentation'],
    mainSkillsKeys : ['laravel', 'php', 'api-rest', 'mvc'],
    secondarySkillsKeys: ['raspi-web-server', 'git', 'github', 'docker', 'agile'],
    repoUrls: [
      {url: 'https://github.com/Roger486/HostControl', label: 'Main Repo'},
      {url: 'https://github.com/Roger486/HostControl/tree/main/backend', label: 'API Repo'},
    ],
    demoUrls: [
      { url: 'https://hostcontrol-vicentedev.rogerdev.xyz/', label: 'API' },
      { url: 'https://hostcontrol-api.rogerdev.xyz/api/accommodations', label: 'Frontend' }
    ],
    images: [
      { key: 'home', src: '/assets/projects/hostcontrol/home.png' }
    ],
    featured: true
  },
  {
    key: 'raspi-server',
    roles: ['Deployment Automation', 'Infrastructure Scripting', 'Technical Documentation'],
    mainSkillsKeys : ['raspi-web-server', 'docker', 'bash'],
    secondarySkillsKeys: ['git', 'github'],
    repoUrls: [
      {url: 'https://github.com/Roger486/raspi-server', label: 'Main Repo'}

    ],
    demoUrls: [],
    images: [
      { key: 'home', src: '/assets/projects/raspi-server/home.png' }
    ],
    featured: false
  },
  {
    key: 'coffee-haven',
    roles: ['Frontend Developer'],
    mainSkillsKeys : ['angular', 'typescript', 'htmlcss'],
    secondarySkillsKeys: ['docker', 'raspi-web-server', 'git', 'github'],
    repoUrls: [
      {url: 'https://github.com/Roger486/CoffeeHaven-Angular', label: 'Main Repo'}

    ],
    demoUrls: [
      { url: 'https://coffee-haven.rogerdev.xyz/', label: 'Frontend' }
    ],
    images: [
      { key: 'home', src: '/assets/projects/coffee-haven/home.png' }
    ],
    featured: false
  },
  {
    key: 'roger-portfolio',
    roles: ['Frontend Developer'],
    mainSkillsKeys : ['react', 'javascript', 'tailwind', 'htmlcss'],
    secondarySkillsKeys: ['docker', 'raspi-web-server', 'git', 'github'],
    repoUrls: [
      {url: 'https://github.com/Roger486/roger-portfolio', label: 'Main Repo'}
    ],
    demoUrls: [
      { url: 'https://roger-portfolio.rogerdev.xyz/', label: 'Frontend' }
    ],
    images: [
      { key: 'home', src: '/assets/projects/roger-portfolio/home.png' }
    ],
    featured: false
  },
];