const config = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "docs/CHANGELOG.md"
            }
        ],
        [
            "@semantic-release/git",{
                "assets": ["docs/CHANGELOG.md"],
                "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ],
        '@semantic-release/github'
    ]
};

module.exports = config;



// [
//     "@semantic-release/changelog",
//     {
//       "changelogFile": "docs/CHANGELOG.md"
//     }
//   ],
//   [
//     "@semantic-release/git",
//     {
//       "assets": ["docs/CHANGELOG.md"]
//     }
//   ]

// const config = {
//     branches: ['main'],
//     plugins: [
//         '@semantic-release/commit-analyzer',
//         '@semantic-release/release-notes-generator',
//         [
//             "@semantic-release/git",{
//                 "assets": ["dist/*.js", "dist/*.js.map"],
//                 "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
//             }
//         ],
//         '@semantic-release/github'
//     ]
// };

// module.exports = config;