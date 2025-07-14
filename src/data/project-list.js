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
    images: [
      {
        key: 'img-001',
        descriptionKey: 'hostcontrol-stack',
        src: '/projects/hostcontrol/hostcontrol-stack.jpg',
        thumb: '/projects/hostcontrol/hostcontrol-stack-thumb.jpg'
      },
      {
        key: 'img-002',
        descriptionKey: 'hostcontrol-relational',
        src: '/projects/hostcontrol/hostcontrol-relational.jpg',
        thumb: '/projects/hostcontrol/hostcontrol-relational-thumb.jpg'
      },
      {
        key: 'img-003',
        descriptionKey: 'hostcontrol-postman',
        src: '/projects/hostcontrol/hostcontrol-postman.jpg',
        thumb: '/projects/hostcontrol/hostcontrol-postman-thumb.jpg'
      },
      {
        key: 'img-004',
        descriptionKey: 'hostcontrol-home',
        src: '/projects/hostcontrol/hostcontrol-home.jpg',
        thumb: '/projects/hostcontrol/hostcontrol-home-thumb.jpg'
      },
      {
        key: 'img-005',
        descriptionKey: 'hostcontrol-panel',
        src: '/projects/hostcontrol/hostcontrol-panel.jpg',
        thumb: '/projects/hostcontrol/hostcontrol-panel-thumb.jpg'
      }
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
    images: [
      {
        key: 'img-001',
        descriptionKey: 'raspi-server-cover',
        src: '/projects/raspi-server/raspi-server-cover.jpg',
        thumb: '/projects/raspi-server/raspi-server-cover-thumb.jpg'
      },
      {
        key: 'img-002',
        descriptionKey: 'raspi-server-hardware',
        src: '/projects/raspi-server/raspi-server-hardware.jpg',
        thumb: '/projects/raspi-server/raspi-server-hardware-thumb.jpg'
      },
      {
        key: 'img-003',
        descriptionKey: 'raspi-server-code',
        src: '/projects/raspi-server/raspi-server-code.jpg',
        thumb: '/projects/raspi-server/raspi-server-code-thumb.jpg'
      },
      {
        key: 'img-004',
        descriptionKey: 'raspi-server-script-running',
        src: '/projects/raspi-server/raspi-server-script-running.jpg',
        thumb: '/projects/raspi-server/raspi-server-script-running-thumb.jpg'
      }
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
    images: [
      {
        key: 'img-001',
        descriptionKey: 'coffee-haven-home',
        src: '/projects/coffee-haven/coffee-haven-home.jpg',
        thumb: '/projects/coffee-haven/coffee-haven-home-thumb.jpg'
      },
      {
        key: 'img-002',
        descriptionKey: 'coffee-haven-form',
        src: '/projects/coffee-haven/coffee-haven-form.jpg',
        thumb: '/projects/coffee-haven/coffee-haven-form-thumb.jpg'
      },
      {
        key: 'img-003',
        descriptionKey: 'coffee-haven-panel',
        src: '/projects/coffee-haven/coffee-haven-panel.jpg',
        thumb: '/projects/coffee-haven/coffee-haven-panel-thumb.jpg'
      },
      {
        key: 'img-004',
        descriptionKey: 'coffee-haven-detail',
        src: '/projects/coffee-haven/coffee-haven-detail.jpg',
        thumb: '/projects/coffee-haven/coffee-haven-detail-thumb.jpg'
      }
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
    images: [
      {
        key: 'img-001',
        descriptionKey: 'roger-portfolio-home',
        src: '/projects/roger-portfolio/roger-portfolio-home.jpg',
        thumb: '/projects/roger-portfolio/roger-portfolio-home-thumb.jpg'
      },
      {
        key: 'img-002',
        descriptionKey: 'roger-portfolio-responsive',
        src: '/projects/roger-portfolio/roger-portfolio-responsive.jpg',
        thumb: '/projects/roger-portfolio/roger-portfolio-responsive-thumb.jpg'
      }
    ],
    featured: false
  },
  {
    key: 'horse-race-game',
    name: 'Horse Race Game',
    roles: ['Fullstack Developer'],
    mainSkillsKeys: ['java', 'JavaFX', 'mvc', 'sql'],
    secondarySkillsKeys: ['agile', 'git', 'github'],
    repoUrls: [
      { url: 'https://github.com/Roger486/HorseRaceGame', label: 'Main Repo', destination: 'github' }
    ],
    demoUrls: [
      { url: 'https://www.youtube.com/watch?v=TkPmkwNKTX4', label: 'Video', destination: 'youtube' }
    ],
    images: [
      {
        key: 'img-001',
        descriptionKey: 'horse-race-game-home',
        src: '/projects/horse-race-game/horse-race-game-home.jpg',
        thumb: '/projects/horse-race-game/horse-race-game-home-thumb.jpg'
      },
      {
        key: 'img-002',
        descriptionKey: 'horse-race-game-setup',
        src: '/projects/horse-race-game/horse-race-game-setup.jpg',
        thumb: '/projects/horse-race-game/horse-race-game-setup-thumb.jpg'
      },
      {
        key: 'img-003',
        descriptionKey: 'horse-race-game-bets',
        src: '/projects/horse-race-game/horse-race-game-bets.jpg',
        thumb: '/projects/horse-race-game/horse-race-game-bets-thumb.jpg'
      },
      {
        key: 'img-004',
        descriptionKey: 'horse-race-game-board',
        src: '/projects/horse-race-game/horse-race-game-board.jpg',
        thumb: '/projects/horse-race-game/horse-race-game-board-thumb.jpg'
      },
      {
        key: 'img-005',
        descriptionKey: 'horse-race-game-result',
        src: '/projects/horse-race-game/horse-race-game-result.jpg',
        thumb: '/projects/horse-race-game/horse-race-game-result-thumb.jpg'
      }
    ],
    featured: false
  }
];
