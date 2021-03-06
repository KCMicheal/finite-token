//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4; // tells the solidity version to the complier

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; // inherit the erc20 contract

import "hardhat/console.sol"; // built in hardhat local environment 

contract Eda is ERC20 {
  constructor(string memory name, string memory symbol) ERC20(name, symbol) {
      _mint(msg.sender, 100 * (10 ** 18)); // mint tokens: supply 100 tokens, 18 is the decimal 
  }
}
