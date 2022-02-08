// https://eth-ropsten.alchemyapi.io/v2/2brd5aYPyEwP34Ji6dS2EdeMDZrAVK-u

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/2brd5aYPyEwP34Ji6dS2EdeMDZrAVK-u',
      accounts: ['1d95099b663042c3e13454bef151cb14d9b2d7163eac941402119e61502803f5'],
    },
  },
};