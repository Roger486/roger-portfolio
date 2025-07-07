export const projects = [
  {
    key: 'hostcontrol',
    name: 'HostControl',
    roles: ['Backend Developer', 'Database Design', 'Technical & API Documentation'],
    mainSkillsKeys : ['laravel', 'php', 'api-rest', 'mvc'],
    secondarySkillsKeys: ['raspi-web-server', 'git', 'github', 'docker', 'agile'],
    repoUrls: [
      {url: 'https://github.com/Roger486/HostControl', label: 'Main Repo'},
      {url: 'https://github.com/Roger486/HostControl/tree/main/backend', label: 'API Repo'},
    ],
    demoUrls: [
      { url: 'https://hostcontrol-api.rogerdev.xyz/api/accommodations', label: 'API' },
      { url: 'https://hostcontrol-vicentedev.rogerdev.xyz/', label: 'Frontend' }
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
    name: 'Coffee Haven',
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
    name: 'Personal Portfolio',
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