export const CENSUS_ADDRESS = '0x08fad5B7fD43F616CCC2d0b1F8dCe3B6B4Cc0a7B'

export const CENSUS_ABI =[
  {
    "constant": true,
    "inputs": [],
    "name": "height",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x0ef26743"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "blockArray",
    "outputs": [
      {
        "name": "height",
        "type": "uint256"
      },
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "add",
        "type": "string"
      },
      {
        "name": "phoneNumber",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x88c86d1d"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_add",
        "type": "string"
      },
      {
        "name": "_phoneNumber",
        "type": "uint256"
      }
    ],
    "name": "addBlock",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x1bde95fb"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAllBlockDetails",
    "outputs": [
      {
        "components": [
          {
            "name": "height",
            "type": "uint256"
          },
          {
            "name": "id",
            "type": "uint256"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "add",
            "type": "string"
          },
          {
            "name": "phoneNumber",
            "type": "uint256"
          }
        ],
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xbc097348"
  }
]
