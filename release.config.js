const { execSync } = require('child_process');

const config = {
  branches: ['main'],

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

  // Executa um comando de squash merge antes do Semantic Release
  prepare: [
    {
      path: '@semantic-release/exec',
      cmd: 'git merge --squash origin/main',
    },
  ],

  // Ajusta o remote
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