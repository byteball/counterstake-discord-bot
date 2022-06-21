const counterstakeAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "claim_num",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum CounterstakeLibrary.Side",
				"name": "outcome",
				"type": "uint8"
			}
		],
		"name": "FinishedClaim",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "claim_num",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "author_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stake",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "enum CounterstakeLibrary.Side",
				"name": "outcome",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "enum CounterstakeLibrary.Side",
				"name": "current_outcome",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "yes_stake",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "no_stake",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "expiry_ts",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "challenging_target",
				"type": "uint256"
			}
		],
		"name": "NewChallenge",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "claim_num",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "author_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "sender_address",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "recipient_address",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "txid",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "txts",
				"type": "uint32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "reward",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "stake",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "data",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint32",
				"name": "expiry_ts",
				"type": "uint32"
			}
		],
		"name": "NewClaim",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "claim_nums",
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
		"name": "governance",
		"outputs": [
			{
				"internalType": "contract Governance",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "last_claim_num",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
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
		"name": "num2index",
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ongoing_claim_nums",
		"outputs": [
			{
				"internalType": "uint64",
				"name": "",
				"type": "uint64"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "settings",
		"outputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			},
			{
				"internalType": "uint16",
				"name": "ratio100",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "counterstake_coef100",
				"type": "uint16"
			},
			{
				"internalType": "uint32",
				"name": "min_tx_age",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "min_stake",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "large_threshold",
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
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "enum CounterstakeLibrary.Side",
				"name": "",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakes",
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
				"internalType": "string",
				"name": "claim_id",
				"type": "string"
			}
		],
		"name": "getClaim",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "recipient_address",
						"type": "address"
					},
					{
						"internalType": "uint32",
						"name": "txts",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "ts",
						"type": "uint32"
					},
					{
						"internalType": "address payable",
						"name": "claimant_address",
						"type": "address"
					},
					{
						"internalType": "uint32",
						"name": "expiry_ts",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "period_number",
						"type": "uint16"
					},
					{
						"internalType": "enum CounterstakeLibrary.Side",
						"name": "current_outcome",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "is_large",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "withdrawn",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "finished",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "sender_address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "data",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "yes_stake",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "no_stake",
						"type": "uint256"
					}
				],
				"internalType": "struct CounterstakeLibrary.Claim",
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
				"name": "claim_num",
				"type": "uint256"
			}
		],
		"name": "getClaim",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "address payable",
						"name": "recipient_address",
						"type": "address"
					},
					{
						"internalType": "uint32",
						"name": "txts",
						"type": "uint32"
					},
					{
						"internalType": "uint32",
						"name": "ts",
						"type": "uint32"
					},
					{
						"internalType": "address payable",
						"name": "claimant_address",
						"type": "address"
					},
					{
						"internalType": "uint32",
						"name": "expiry_ts",
						"type": "uint32"
					},
					{
						"internalType": "uint16",
						"name": "period_number",
						"type": "uint16"
					},
					{
						"internalType": "enum CounterstakeLibrary.Side",
						"name": "current_outcome",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "is_large",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "withdrawn",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "finished",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "sender_address",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "data",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "yes_stake",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "no_stake",
						"type": "uint256"
					}
				],
				"internalType": "struct CounterstakeLibrary.Claim",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getOngoingClaimNums",
		"outputs": [
			{
				"internalType": "uint64[]",
				"name": "",
				"type": "uint64[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenAddr",
				"type": "address"
			},
			{
				"internalType": "uint16",
				"name": "_counterstake_coef100",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "_ratio100",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "_large_threshold",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "_challenging_periods",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_large_challenging_periods",
				"type": "uint256[]"
			}
		],
		"name": "initCounterstake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ratio100",
				"type": "uint256"
			}
		],
		"name": "validateRatio",
		"outputs": [],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ratio100",
				"type": "uint256"
			}
		],
		"name": "setRatio",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_counterstake_coef100",
				"type": "uint256"
			}
		],
		"name": "validateCounterstakeCoef",
		"outputs": [],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_counterstake_coef100",
				"type": "uint256"
			}
		],
		"name": "setCounterstakeCoef",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_min_stake",
				"type": "uint256"
			}
		],
		"name": "validateMinStake",
		"outputs": [],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_min_stake",
				"type": "uint256"
			}
		],
		"name": "setMinStake",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_min_tx_age",
				"type": "uint256"
			}
		],
		"name": "validateMinTxAge",
		"outputs": [],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_min_tx_age",
				"type": "uint256"
			}
		],
		"name": "setMinTxAge",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_large_threshold",
				"type": "uint256"
			}
		],
		"name": "validateLargeThreshold",
		"outputs": [],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_large_threshold",
				"type": "uint256"
			}
		],
		"name": "setLargeThreshold",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "periods",
				"type": "uint256[]"
			}
		],
		"name": "validateChallengingPeriods",
		"outputs": [],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_challenging_periods",
				"type": "uint256[]"
			}
		],
		"name": "setChallengingPeriods",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[]",
				"name": "_large_challenging_periods",
				"type": "uint256[]"
			}
		],
		"name": "setLargeChallengingPeriods",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "period_number",
				"type": "uint16"
			},
			{
				"internalType": "bool",
				"name": "bLarge",
				"type": "bool"
			}
		],
		"name": "getChallengingPeriod",
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
		"name": "getRequiredStake",
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
				"name": "claim_num",
				"type": "uint256"
			},
			{
				"internalType": "enum CounterstakeLibrary.Side",
				"name": "stake_on",
				"type": "uint8"
			}
		],
		"name": "getMissingStake",
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
				"internalType": "string",
				"name": "txid",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "txts",
				"type": "uint32"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "reward",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "stake",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "sender_address",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "recipient_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "data",
				"type": "string"
			}
		],
		"name": "claim",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "claim_num",
				"type": "uint256"
			},
			{
				"internalType": "enum CounterstakeLibrary.Side",
				"name": "stake_on",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "stake",
				"type": "uint256"
			}
		],
		"name": "challenge",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "claim_id",
				"type": "string"
			},
			{
				"internalType": "enum CounterstakeLibrary.Side",
				"name": "stake_on",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "stake",
				"type": "uint256"
			}
		],
		"name": "challenge",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "claim_num",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "to_address",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "claim_num",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "claim_id",
				"type": "string"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "claim_id",
				"type": "string"
			},
			{
				"internalType": "address payable",
				"name": "to_address",
				"type": "address"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

module.exports = {
	counterstakeAbi,
}
