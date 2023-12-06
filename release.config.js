const { execSync } = require('child_process');

const config = {
  branches: ['main'], // Apenas executa na branch "main"
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    // Script para realizar o squash dos commits antes do commit de lançamento
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        // Executa um script para realizar o squash dos commits antes do commit de lançamento
        // Isso vai aglutinar os commits em um único commit de lançamento
        // Certifique-se de ajustar o comando conforme necessário para o seu fluxo de trabalho
        beforeRelease: 'git merge --squash HEAD~${commits.length} && git commit -m "chore(release): ${nextRelease.version}"',
      },
    ],
  ],
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