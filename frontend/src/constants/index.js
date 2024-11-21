export const MeowsNFTAddress =
  "0x962D556b76A8372b5b9f0cc28c46D4e0a628bB87";
export const FakeNFTMarketplaceAddress =
  "0x7B59E0bC6B67b8d1Ae1804A25Aa9AF8778893912";
export const MeowsDAOAddress =
  "0x944123a3d01Ed92f22239eebf0fdA2924E8F513c";

export const MeowsNFTABI =  [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "type": "error",
      "name": "ERC721EnumerableForbiddenBatchMint"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "sender", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
        { "internalType": "address", "name": "owner", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721IncorrectOwner"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "type": "error",
      "name": "ERC721InsufficientApproval"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "approver", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721InvalidApprover"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "operator", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721InvalidOperator"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721InvalidOwner"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "receiver", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721InvalidReceiver"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "sender", "type": "address" }
      ],
      "type": "error",
      "name": "ERC721InvalidSender"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "type": "error",
      "name": "ERC721NonexistentToken"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "uint256", "name": "index", "type": "uint256" }
      ],
      "type": "error",
      "name": "ERC721OutOfBoundsIndex"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "approved",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256",
          "indexed": true
        }
      ],
      "type": "event",
      "name": "Approval",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool",
          "indexed": false
        }
      ],
      "type": "event",
      "name": "ApprovalForAll",
      "anonymous": false
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address",
          "indexed": true
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256",
          "indexed": true
        }
      ],
      "type": "event",
      "name": "Transfer",
      "anonymous": false
    },
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "approve"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "balanceOf",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "getApproved",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "address", "name": "operator", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "isApprovedForAll",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "mint"
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "name",
      "outputs": [
        { "internalType": "string", "name": "", "type": "string" }
      ]
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "ownerOf",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "safeTransferFrom"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
        { "internalType": "bytes", "name": "data", "type": "bytes" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "safeTransferFrom"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        { "internalType": "bool", "name": "approved", "type": "bool" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "setApprovalForAll"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "supportsInterface",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }]
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "symbol",
      "outputs": [
        { "internalType": "string", "name": "", "type": "string" }
      ]
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "index", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "tokenByIndex",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "uint256", "name": "index", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function",
      "name": "tokenURI",
      "outputs": [
        { "internalType": "string", "name": "", "type": "string" }
      ]
    },
    {
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "name": "totalSupply",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ]
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "tokenId", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "name": "transferFrom"
    }
  ]; 
export const FakeNFTMarketplaceABI = [  {
    "type": "function",
    "name": "available",
    "inputs": [
      { "name": "_tokenId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getPrice",
    "inputs": [],
    "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "purchase",
    "inputs": [
      { "name": "_tokenId", "type": "uint256", "internalType": "uint256" }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "tokens",
    "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
    "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
    "stateMutability": "view"
  }]; 
export const MeowsDAOABI = [
    {
      "type": "constructor",
      "inputs": [
        {
          "name": "_nftMarketplace",
          "type": "address",
          "internalType": "address"
        },
        { "name": "_meowsNFT", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "payable"
    },
    { "type": "fallback", "stateMutability": "payable" },
    { "type": "receive", "stateMutability": "payable" },
    {
      "type": "function",
      "name": "createProposal",
      "inputs": [
        { "name": "_nftTokenId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "executeProposal",
      "inputs": [
        {
          "name": "proposalIndex",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "numProposals",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "proposals",
      "inputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "outputs": [
        { "name": "nftTokenId", "type": "uint256", "internalType": "uint256" },
        { "name": "deadline", "type": "uint256", "internalType": "uint256" },
        { "name": "yayVotes", "type": "uint256", "internalType": "uint256" },
        { "name": "nayVotes", "type": "uint256", "internalType": "uint256" },
        { "name": "executed", "type": "bool", "internalType": "bool" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        { "name": "newOwner", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "voteOnProposal",
      "inputs": [
        {
          "name": "proposalIndex",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "vote",
          "type": "uint8",
          "internalType": "enum MeowsDAO.Vote"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawEther",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
        {
          "name": "previousOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "newOwner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "error",
      "name": "OwnableInvalidOwner",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "OwnableUnauthorizedAccount",
      "inputs": [
        { "name": "account", "type": "address", "internalType": "address" }
      ]
    }
  
]; 