export const tokenAddress = process.env.REACT_APP_TOKEN_MAT;
export const contractAddress = process.env.REACT_APP_ICO_ADDRESS;

export const abi =  [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_tokenMembrecy",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_contractsLibrary",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_vault",
        "type": "address"
      },
      {
        "internalType": "address[8]",
        "name": "_addresses",
        "type": "address[8]"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalAmount",
        "type": "uint256"
      }
    ],
    "name": "FeePayed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "ForceWithdraw",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "NewDeposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "Newbie",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "referral",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "RefBonus",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Reinvestment",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Withdrawn",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "MAX_MEMBRECY_PERCENT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TOKEN_MEMBRECY",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TOKEN_REWARD",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "addressByIndex",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "checkUser",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractsLibrary",
    "outputs": [
      {
        "internalType": "contract IContractsLibrary",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fees",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "dev",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "owner",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "vip",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "ranking",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "withdrawOwner",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "withdrawDev",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getAllDeposits",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "acumulated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountBnb",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "withdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "start",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "checkpoint",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonusStart",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonusEnd",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonusRoi",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "force",
            "type": "bool"
          }
        ],
        "internalType": "struct IBioticGenerator.Deposit[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllInvestors",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllUsers",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "totalInvested",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalInvestedBnb",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalWithdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenWithdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "depositsLength",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonus",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reinvest",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalBonus",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "checkpoint",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "acumulated",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amountBnb",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "withdrawn",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "start",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "checkpoint",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusStart",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusEnd",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusRoi",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "force",
                "type": "bool"
              }
            ],
            "internalType": "struct IBioticGenerator.Deposit[]",
            "name": "deposits",
            "type": "tuple[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv0",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv1",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv2",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv3",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv4",
            "type": "address[]"
          },
          {
            "internalType": "uint256[5]",
            "name": "referrerCount",
            "type": "uint256[5]"
          },
          {
            "internalType": "uint256[5]",
            "name": "referrerBonus",
            "type": "uint256[5]"
          }
        ],
        "internalType": "struct IBioticGenerator.User[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getConstans",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_refLenght",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_investMinAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_minWithdraw",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_percentsDivider",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_timeStep",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_memrecyStep",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_forceWithdrawPercent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_roiBonus",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_membrecyPercent",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getContracDate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getContractBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getDAte",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getDeposit",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "acumulated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountBnb",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "withdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "start",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "checkpoint",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonusStart",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonusEnd",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonusRoi",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "force",
            "type": "bool"
          }
        ],
        "internalType": "struct IBioticGenerator.Deposit",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      }
    ],
    "name": "getNextUserAssignment",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getPublicData",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "totalUsers_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalInvested_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalInvestedUsd_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWithdrawn_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalDeposits_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "balance_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_totalWithdrawnTokens",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minDeposit",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "daysFormdeploy",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getReferrerBonus",
    "outputs": [
      {
        "internalType": "uint256[5]",
        "name": "",
        "type": "uint256[5]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRewardsBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUser",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "totalInvested",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalInvestedBnb",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalWithdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenWithdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "depositsLength",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonus",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reinvest",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalBonus",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "checkpoint",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "acumulated",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amountBnb",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "withdrawn",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "start",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "checkpoint",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusStart",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusEnd",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusRoi",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "force",
                "type": "bool"
              }
            ],
            "internalType": "struct IBioticGenerator.Deposit[]",
            "name": "deposits",
            "type": "tuple[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv0",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv1",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv2",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv3",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv4",
            "type": "address[]"
          },
          {
            "internalType": "uint256[5]",
            "name": "referrerCount",
            "type": "uint256[5]"
          },
          {
            "internalType": "uint256[5]",
            "name": "referrerBonus",
            "type": "uint256[5]"
          }
        ],
        "internalType": "struct IBioticGenerator.User",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getUserByindex",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "totalInvested",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalInvestedBnb",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalWithdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenWithdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "depositsLength",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonus",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reinvest",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalBonus",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "checkpoint",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "acumulated",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amountBnb",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "withdrawn",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "start",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "checkpoint",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusStart",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusEnd",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusRoi",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "force",
                "type": "bool"
              }
            ],
            "internalType": "struct IBioticGenerator.Deposit[]",
            "name": "deposits",
            "type": "tuple[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv0",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv1",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv2",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv3",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv4",
            "type": "address[]"
          },
          {
            "internalType": "uint256[5]",
            "name": "referrerCount",
            "type": "uint256[5]"
          },
          {
            "internalType": "uint256[5]",
            "name": "referrerBonus",
            "type": "uint256[5]"
          }
        ],
        "internalType": "struct IBioticGenerator.User",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      }
    ],
    "name": "getUserData",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "totalWithdrawn_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalDeposits_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalBonus_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalReinvest_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "balance_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "nextAssignment_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amountOfDeposits",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "checkpoint",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "referrer_",
        "type": "address"
      },
      {
        "internalType": "uint256[5]",
        "name": "referrerCount_",
        "type": "uint256[5]"
      },
      {
        "internalType": "uint256[5]",
        "name": "referrerBonus_",
        "type": "uint256[5]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getUserDepositInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "withdrawn_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "timeStart_",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxProfit",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      }
    ],
    "name": "getUserPlans",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "acumulated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "amountBnb",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "withdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "start",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "checkpoint",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonusStart",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonusEnd",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonusRoi",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "force",
            "type": "bool"
          }
        ],
        "internalType": "struct IBioticGenerator.Deposit[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_init",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "end",
        "type": "uint256"
      }
    ],
    "name": "getUsersByRange",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "user",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "totalInvested",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalInvestedBnb",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalWithdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenWithdrawn",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "depositsLength",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "bonus",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "reinvest",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalBonus",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "checkpoint",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "acumulated",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amountBnb",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "withdrawn",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "start",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "checkpoint",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusStart",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusEnd",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "bonusRoi",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "force",
                "type": "bool"
              }
            ],
            "internalType": "struct IBioticGenerator.Deposit[]",
            "name": "deposits",
            "type": "tuple[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv0",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv1",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv2",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv3",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "referralsv4",
            "type": "address[]"
          },
          {
            "internalType": "uint256[5]",
            "name": "referrerCount",
            "type": "uint256[5]"
          },
          {
            "internalType": "uint256[5]",
            "name": "referrerBonus",
            "type": "uint256[5]"
          }
        ],
        "internalType": "struct IBioticGenerator.User[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      }
    ],
    "name": "invest",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isPaused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "lastBlock",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "membrecyPercent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "membrecyPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "membrecyVault",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "oWalletIn",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "oWalletOut",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "payMembrecy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "plan",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "cycle",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "percent",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "MAX_PROFIT",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rewardsVault2Percent",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rewardsVaultB",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rewardsVaultX",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_contractsLibrary",
        "type": "address"
      }
    ],
    "name": "setContractsLibrary",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_default",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_membrecy",
        "type": "uint256"
      }
    ],
    "name": "setDefaultAndMembrecyDevFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_dev",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_owner",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_vip",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_ranking",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_withdrawOwner",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_withdrawDev",
        "type": "uint256"
      }
    ],
    "name": "setFees",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "setMebrecyPercent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setMembrecyVault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      }
    ],
    "name": "setMenbrecyToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "setMinInvest",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      }
    ],
    "name": "setReWardToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[5]",
        "name": "_referralPercents",
        "type": "uint256[5]"
      }
    ],
    "name": "setReferralPercents",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setRewardsVaultB",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setRewardsVaultX",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "setRoiBonus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_vault",
        "type": "address"
      }
    ],
    "name": "setVault",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setdAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setoWalletIn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setoWalletOut",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setrAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "setvAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "takeETH",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "takeTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "totalInvested",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalInvestedBnb",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalWithdrawn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "tokenWithdrawn",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "depositsLength",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "bonus",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "reinvest",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalBonus",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "checkpoint",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vault",
    "outputs": [
      {
        "internalType": "contract IVault",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]

export const BUSD =[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "src",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "guy",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "guy",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "guy",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "src",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]