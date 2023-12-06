const { execSync } = require('child_process');

const config = {
  branches: ['main'], // Ramificações para as quais o Semantic Release deve ser acionado
  
  // Plugins a serem utilizados
  plugins: [
    '@semantic-release/commit-analyzer', // Analisa os commits para determinar o tipo de versão
    '@semantic-release/release-notes-generator', // Gera as notas de lançamento
    [
      '@semantic-release/changelog', // Atualiza o arquivo CHANGELOG.md
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    [
      '@semantic-release/git', // Prepara o commit no repositório
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    '@semantic-release/github', // Publica o lançamento no GitHub
  ],
  
  // Executa um comando de squash merge antes do Semantic Release
  prepare: [
    {
      path: '@semantic-release/exec', // Utiliza o plugin exec
      cmd: 'git merge --squash origin/main',
    },
  ],

  // Você também pode precisar ajustar o remote
  verifyRelease: {
    path: '@semantic-release/exec',
    cmd: 'git remote set-url origin https://github.com/victor-zeusAgro/test-versions.git',
  },
};

module.exports = config;



  /*
const config = {
    branches: ['main'], // only run in "main" branch
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      [
        '@semantic-release/changelog',
        {
          changelogFile: 'CHANGELOG.md',
        },
      ],
      [
        '@semantic-release/git',
        {
          assets: ['CHANGELOG.md', 'package.json'],
          message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        },
      ],
      '@semantic-release/github',
    ],
  };
  
  module.exports = config;
  */