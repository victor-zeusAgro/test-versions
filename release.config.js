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
        // Adicione a opção para utilizar o squash merge
        // Substitua `develop` pelo nome da sua branch
        // Certifique-se de que o squash merge está habilitado nessa branch
        // Você também pode precisar ajustar o remote
        'mergeStrategy': 'squash',
        'mergeOptions': '--squash --no-ff --no-commit',
        'releaseBranch': 'main'
      },
    ],
    '@semantic-release/github',
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