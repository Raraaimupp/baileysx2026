module.exports = {
  token: 'ISI_BOT_TOKEN',
  domain: 'https://panel.example.com',
  plta: 'ISI_PTERODACTYL_APPLICATION_API_KEY',
  pltc: 'ISI_PTERODACTYL_CLIENT_API_KEY',
  securityGroupId: -1003842645536,
  monitorIntervalMs: 15000,
  autoScanAllOnStart: true,
  refreshServerListIntervalMs: 300000,
  limits: {
    cpuPercent: 170,
    memoryMb: 5120,
    diskMb: 5120
  },
  scanDirs: ['/', '/plugins', '/mods', '/scripts', '/src', '/bot', '/dist'],
  dangerousKeywords: [
    'ddos', 'flood', 'layer4', 'layer7', 'udp', 'tcp', 'syn',
    'storm', 'attack', 'botnet', 'proxy', 'bypass', 'cfb',
    'tls', 'httpraw', 'socket', 'nuker', 'crash', 'spam',
    'scanner', 'exploit'
  ],
  suspiciousExtensions: ['.sh', '.py', '.pl', '.php', '.jar', '.exe', '.bin']
};
