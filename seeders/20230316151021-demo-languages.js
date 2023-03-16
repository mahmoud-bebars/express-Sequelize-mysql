'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Languages',
      [
        {
          name: 'JavaScript',
          released_year: 1995,
          github_rank: 1,
          pypl_rank: 3,
          tiobe_rank: 7,
          link: 'https://www.javascript.com',
          thumbnail: '/images/languages-pics/JavaScript.jpg',
          description:
            'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'TypeScript',
          released_year: 2012,
          github_rank: 7,
          pypl_rank: 10,
          tiobe_rank: 42,
          link: 'https://www.typescriptlang.org/',
          thumbnail: '/images/languages-pics/TypeScript.jpg',
          description:
            'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Swift',
          released_year: 2015,
          github_rank: 16,
          pypl_rank: 9,
          tiobe_rank: 13,
          link: 'https://swift.org/',
          thumbnail: '/images/languages-pics/Swift.jpg',
          description:
            'Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Kotlin',
          released_year: 2011,
          github_rank: 15,
          pypl_rank: 12,
          tiobe_rank: 40,
          link: 'https://kotlinlang.org',
          thumbnail: '/images/languages-pics/Kotlin.jpg',
          description:
            'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'nodejs',
          released_year: 2009,
          github_rank: 12,
          pypl_rank: 10,
          tiobe_rank: 20,
          link: 'https://nodejs.org/en/',
          thumbnail: '/images/languages-pics/NodeJs.jpg',
          description:
            'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Languages', null, {})
  },
}
