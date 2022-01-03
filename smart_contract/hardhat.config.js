require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/QxkelHr6eXYQAzZwLR2--XDNnb7OSlLY',
      accounts: ['5e569118014626b3db8682dc90f9b0877ff451cbe0619e365d5bb69558db4c98'],
    },
  },
};