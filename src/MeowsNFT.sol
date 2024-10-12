// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MeowsNFT is ERC721Enumerable {
    constructor() ERC721("Meows", "MEO") {}

    function mint() public {
        _safeMint(msg.sender, totalSupply());
    }
}
