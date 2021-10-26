/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { NFTTicketGenerator } from "../NFTTicketGenerator";

export class NFTTicketGenerator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    adminAddr_: string,
    slottingFee_: BigNumberish,
    overrides?: Overrides
  ): Promise<NFTTicketGenerator> {
    return super.deploy(adminAddr_, slottingFee_, overrides || {}) as Promise<
      NFTTicketGenerator
    >;
  }
  getDeployTransaction(
    adminAddr_: string,
    slottingFee_: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      adminAddr_,
      slottingFee_,
      overrides || {}
    );
  }
  attach(address: string): NFTTicketGenerator {
    return super.attach(address) as NFTTicketGenerator;
  }
  connect(signer: Signer): NFTTicketGenerator__factory {
    return super.connect(signer) as NFTTicketGenerator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTTicketGenerator {
    return new Contract(address, _abi, signerOrProvider) as NFTTicketGenerator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "adminAddr_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "slottingFee_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "adminAddr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "client",
        type: "address",
      },
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "payees",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "shares",
            type: "uint256[]",
          },
          {
            internalType: "uint32",
            name: "typeOfNFT",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "maxSupply",
            type: "uint32",
          },
        ],
        internalType: "struct BaseSettings",
        name: "baseSettings",
        type: "tuple",
      },
    ],
    name: "genNFTContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "slottingFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newSlottingFee",
        type: "uint256",
      },
    ],
    name: "updateSlottingFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161398a38038061398a83398101604081905261002f916100b6565b818161003a33610066565b600180546001600160a01b0319166001600160a01b039390931692909217909155600255506100ee9050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100c8578182fd5b82516001600160a01b03811681146100de578283fd5b6020939093015192949293505050565b61388d806100fd6000396000f3fe60806040523480156200001157600080fd5b5060043610620000765760003560e01c80632e20f03f146200007b578063715018a6146200009457806381830593146200009e5780638da5cb5b14620000ca578063e962371314620000d4578063ea88a3b814620000eb578063f2fde38b1462000104575b600080fd5b620000926200008c36600462000444565b6200011b565b005b620000926200015d565b600154620000b2906001600160a01b031681565b604051620000c19190620004bb565b60405180910390f35b620000b26200019f565b620000b2620000e5366004620003ed565b620001ae565b620000f560025481565b604051908152602001620000c1565b6200009262000115366004620003c9565b6200024f565b33620001266200019f565b6001600160a01b031614620001585760405162461bcd60e51b81526004016200014f90620004cf565b60405180910390fd5b600255565b33620001686200019f565b6001600160a01b031614620001915760405162461bcd60e51b81526004016200014f90620004cf565b6200019d6000620002f8565b565b6000546001600160a01b031690565b6001546000906001600160a01b0316336001600160a01b031614620001d257600080fd5b6000620001df8362000348565b60405163f2fde38b60e01b815290915081906001600160a01b0382169063f2fde38b9062000212908890600401620004bb565b600060405180830381600087803b1580156200022d57600080fd5b505af115801562000242573d6000803e3d6000fd5b5093979650505050505050565b336200025a6200019f565b6001600160a01b031614620002835760405162461bcd60e51b81526004016200014f90620004cf565b6001600160a01b038116620002ea5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016200014f565b620002f581620002f8565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600081604051620003599062000389565b62000365919062000504565b604051809103906000f08015801562000382573d6000803e3d6000fd5b5092915050565b61319c80620006bc83390190565b80356001600160a01b0381168114620003af57600080fd5b919050565b803563ffffffff81168114620003af57600080fd5b600060208284031215620003db578081fd5b620003e68262000397565b9392505050565b6000806040838503121562000400578081fd5b6200040b8362000397565b9150602083013567ffffffffffffffff81111562000427578182fd5b830160c0818603121562000439578182fd5b809150509250929050565b60006020828403121562000456578081fd5b5035919050565b81835260006001600160fb1b0383111562000476578081fd5b8260051b80836020870137939093016020019283525090919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b0391909116815260200190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6000602080835262000517848562000673565b60c0838601526200052d60e08601828462000492565b9150506200053e8286018662000673565b601f19808785030160408801526200055884838562000492565b935062000569604089018962000621565b888603830160608a0152808652909490935086925085015b83831015620005b3576001600160a01b036200059d8662000397565b1681529385019360019290920191850162000581565b620005c260608a018a62000621565b9650945081888203016080890152620005dd8187876200045d565b95505050505050620005f260808501620003b4565b63ffffffff811660a0850152506200060d60a08501620003b4565b63ffffffff811660c0850152509392505050565b6000808335601e1984360301811262000638578283fd5b830160208101925035905067ffffffffffffffff8111156200065957600080fd5b8060051b36038313156200066c57600080fd5b9250929050565b6000808335601e198436030181126200068a578283fd5b830160208101925035905067ffffffffffffffff811115620006ab57600080fd5b8036038313156200066c57600080fdfe60806040523480156200001157600080fd5b506040516200319c3803806200319c8339810160408190526200003491620006a1565b608081015160a082015182516020840151604085015160608601516200005a3362000223565b8051825114620000cc5760405162461bcd60e51b815260206004820152603260248201527f5061796d656e7453706c69747465723a2070617965657320616e6420736861726044820152710cae640d8cadccee8d040dad2e6dac2e8c6d60731b60648201526084015b60405180910390fd5b60008251116200011f5760405162461bcd60e51b815260206004820152601a60248201527f5061796d656e7453706c69747465723a206e6f207061796565730000000000006044820152606401620000c3565b60005b8251811015620001a3576200018e8382815181106200015157634e487b7160e01b600052603260045260246000fd5b60200260200101518383815181106200017a57634e487b7160e01b600052603260045260246000fd5b60200260200101516200027360201b60201c565b806200019a8162000885565b91505062000122565b50508251620001bb9150600690602085019062000460565b508051620001d190600790602084019062000460565b5050600c805463ffffffff63ffffffff60601b0119166c0100000000000000000000000063ffffffff9586160263ffffffff19161792909316919091179091555050600e805460ff19169055620008cf565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038216620002e05760405162461bcd60e51b815260206004820152602c60248201527f5061796d656e7453706c69747465723a206163636f756e74206973207468652060448201526b7a65726f206164647265737360a01b6064820152608401620000c3565b60008111620003325760405162461bcd60e51b815260206004820152601d60248201527f5061796d656e7453706c69747465723a207368617265732061726520300000006044820152606401620000c3565b6001600160a01b03821660009081526003602052604090205415620003ae5760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e7420616c726561647960448201526a206861732073686172657360a81b6064820152608401620000c3565b6005805460018082019092557f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db00180546001600160a01b0319166001600160a01b038516908117909155600090815260036020526040902082905554620004179082906200082d565b600155604080516001600160a01b0384168152602081018390527f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac910160405180910390a15050565b8280546200046e9062000848565b90600052602060002090601f016020900481019282620004925760008555620004dd565b82601f10620004ad57805160ff1916838001178555620004dd565b82800160010185558215620004dd579182015b82811115620004dd578251825591602001919060010190620004c0565b50620004eb929150620004ef565b5090565b5b80821115620004eb5760008155600101620004f0565b600082601f83011262000517578081fd5b81516020620005306200052a8362000807565b620007d4565b80838252828201915082860187848660051b890101111562000550578586fd5b855b85811015620005855781516001600160a01b038116811462000572578788fd5b8452928401929084019060010162000552565b5090979650505050505050565b600082601f830112620005a3578081fd5b81516020620005b66200052a8362000807565b80838252828201915082860187848660051b8901011115620005d6578586fd5b855b858110156200058557815184529284019290840190600101620005d8565b600082601f83011262000607578081fd5b81516001600160401b03811115620006235762000623620008b9565b602062000639601f8301601f19168201620007d4565b82815285828487010111156200064d578384fd5b835b838110156200066c5785810183015182820184015282016200064f565b838111156200067d57848385840101525b5095945050505050565b805163ffffffff811681146200069c57600080fd5b919050565b600060208284031215620006b3578081fd5b81516001600160401b0380821115620006ca578283fd5b9083019060c08286031215620006de578283fd5b620006e8620007a9565b825182811115620006f7578485fd5b6200070587828601620005f6565b8252506020830151828111156200071a578485fd5b6200072887828601620005f6565b60208301525060408301518281111562000740578485fd5b6200074e8782860162000506565b60408301525060608301518281111562000766578485fd5b620007748782860162000592565b606083015250620007886080840162000687565b60808201526200079b60a0840162000687565b60a082015295945050505050565b60405160c081016001600160401b0381118282101715620007ce57620007ce620008b9565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620007ff57620007ff620008b9565b604052919050565b60006001600160401b03821115620008235762000823620008b9565b5060051b60200190565b60008219821115620008435762000843620008a3565b500190565b600181811c908216806200085d57607f821691505b602082108114156200087f57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156200089c576200089c620008a3565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6128bd80620008df6000396000f3fe60806040526004361061015b5760003560e01c8063715018a6116100bc578063715018a6146103785780638b83209b1461038d5780638da5cb5b146103ad57806395d89b41146103c25780639852595c146103d7578063a22cb4651461040d578063b145a5b81461042d578063b88d4fde14610447578063c87b56dd14610467578063ce7c2ac214610487578063e06174e4146104bd578063e33b7de31461054d578063e985e9c514610562578063f2fde38b1461058257600080fd5b806301ffc9a7146101a057806306fdde03146101d5578063081812fc146101f7578063095ea7b31461022f578063191655871461025157806323b872dd146102715780633a98ef391461029157806342842e0e146102b0578063445e6058146102d05780636352211e146102f05780636456c30f146103105780636c0360eb146103235780636fecc2491461033857806370a082311461035857600080fd5b3661019b577f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be7703334604051610191929190612597565b60405180910390a1005b600080fd5b3480156101ac57600080fd5b506101c06101bb366004612341565b6105a2565b60405190151581526020015b60405180910390f35b3480156101e157600080fd5b506101ea6105f4565b6040516101cc91906125ed565b34801561020357600080fd5b5061021761021236600461244a565b610686565b6040516001600160a01b0390911681526020016101cc565b34801561023b57600080fd5b5061024f61024a3660046122ae565b610713565b005b34801561025d57600080fd5b5061024f61026c36600461210a565b610824565b34801561027d57600080fd5b5061024f61028c366004612165565b6109ec565b34801561029d57600080fd5b506001545b6040519081526020016101cc565b3480156102bc57600080fd5b5061024f6102cb366004612165565b610a1d565b3480156102dc57600080fd5b5061024f6102eb366004612379565b610a38565b3480156102fc57600080fd5b5061021761030b36600461244a565b610d4a565b61024f61031e3660046122d9565b610dc1565b34801561032f57600080fd5b506101ea6112ba565b34801561034457600080fd5b5061024f6103533660046122ae565b611348565b34801561036457600080fd5b506102a261037336600461210a565b6113d1565b34801561038457600080fd5b5061024f611458565b34801561039957600080fd5b506102176103a836600461244a565b611493565b3480156103b957600080fd5b506102176114d1565b3480156103ce57600080fd5b506101ea6114e0565b3480156103e357600080fd5b506102a26103f236600461210a565b6001600160a01b031660009081526004602052604090205490565b34801561041957600080fd5b5061024f61042836600461227d565b6114ef565b34801561043957600080fd5b50600e546101c09060ff1681565b34801561045357600080fd5b5061024f6104623660046121a5565b6115b0565b34801561047357600080fd5b506101ea61048236600461244a565b6115e8565b34801561049357600080fd5b506102a26104a236600461210a565b6001600160a01b031660009081526003602052604090205490565b3480156104c957600080fd5b50600c5461050d9063ffffffff808216916401000000008104821691600160401b8204811691600160601b810490911690600160801b90046001600160801b031685565b6040805163ffffffff968716815294861660208601529285169284019290925290921660608201526001600160801b03909116608082015260a0016101cc565b34801561055957600080fd5b506002546102a2565b34801561056e57600080fd5b506101c061057d36600461212d565b61170a565b34801561058e57600080fd5b5061024f61059d36600461210a565b611738565b60006001600160e01b031982166380ac58cd60e01b14806105d357506001600160e01b03198216635b5e139f60e01b145b806105ee57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606006805461060390612790565b80601f016020809104026020016040519081016040528092919081815260200182805461062f90612790565b801561067c5780601f106106515761010080835404028352916020019161067c565b820191906000526020600020905b81548152906001019060200180831161065f57829003601f168201915b5050505050905090565b6000610691826117d8565b6106f75760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600a60205260409020546001600160a01b031690565b600061071e82610d4a565b9050806001600160a01b0316836001600160a01b0316141561078c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016106ee565b336001600160a01b03821614806107a857506107a8813361170a565b6108155760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b60648201526084016106ee565b61081f83836117f5565b505050565b6001600160a01b0381166000908152600360205260409020546108985760405162461bcd60e51b815260206004820152602660248201527f5061796d656e7453706c69747465723a206163636f756e7420686173206e6f2060448201526573686172657360d01b60648201526084016106ee565b6000600254476108a891906126d8565b6001600160a01b03831660009081526004602090815260408083205460015460039093529083205493945091926108df908561272e565b6108e9919061271a565b6108f3919061274d565b9050806109565760405162461bcd60e51b815260206004820152602b60248201527f5061796d656e7453706c69747465723a206163636f756e74206973206e6f742060448201526a191d59481c185e5b595b9d60aa1b60648201526084016106ee565b6001600160a01b03831660009081526004602052604090205461097a9082906126d8565b6001600160a01b0384166000908152600460205260409020556002546109a19082906126d8565b6002556109ae8382611863565b7fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b05683826040516109df929190612597565b60405180910390a1505050565b6109f63382611979565b610a125760405162461bcd60e51b81526004016106ee90612687565b61081f838383611a43565b61081f838383604051806020016040528060008152506115b0565b33610a416114d1565b6001600160a01b031614610a675760405162461bcd60e51b81526004016106ee90612652565b600e5460ff1615610aa95760405162461bcd60e51b815260206004820152600c60248201526b696e697420616c726561647960a01b60448201526064016106ee565b600e805460ff19166001179055828181148015610ac65750600081115b8015610ad457506101008111155b610b165760405162461bcd60e51b81526020600482015260136024820152722a34b1b5b2ba1d103632bb32b61032b93937b960691b60448201526064016106ee565b6000805b828160ff161015610c9f57600f80546001810182556000919091527f8d1108e10bcb7c27dddfc02ed9d693a074039d026cf4ea4240b40f7d581ac8026005808304919091018054919092066006026101000a65ffffffffffff8181021990921691851602179055868660ff8316818110610ba457634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610bb99190612462565b610bc390836126f0565b601080546001810182556000919091527f1b6847dc741a1b0cd08d278845f9d819d87b734759afb55fe2de5cb82a9ae6726005808304919091018054919092066006026101000a65ffffffffffff818102199092169184160217905591506011858560ff8416818110610c4657634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610c5b919061210a565b81546001810183556000928352602090922090910180546001600160a01b0319166001600160a01b0390921691909117905580610c97816127e6565b915050610b1a565b50600c5463ffffffff1665ffffffffffff821614610d155760405162461bcd60e51b815260206004820152602d60248201527f5469636b65743a2073756d206f6620737570706c79206f662065616368206c6560448201526c0eccad840dcdee840dac2e8c6d609b1b60648201526084016106ee565b610d21600d8a8a61200c565b5050600c80546001600160801b03978816600160801b0297169690961790955550505050505050565b6000818152600860205260408120546001600160a01b0316806105ee5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016106ee565b600e5460ff16610e0d5760405162461bcd60e51b8152602060048201526017602482015276151a58dad95d0e881b9bdd081a5b9a5d1a585b1a5e9959604a1b60448201526064016106ee565b600c54600160801b90046001600160801b03164211610e675760405162461bcd60e51b8152602060048201526016602482015275151a58dad95d0e881cd85b19481b9bdd081cdd185c9d60521b60448201526064016106ee565b6000805b60ff811685111561112c57600086868360ff16818110610e9b57634e487b7160e01b600052603260045260246000fd5b9050602002016020810190610eb09190612488565b60115490915060ff821610610eff5760405162461bcd60e51b8152602060048201526015602482015274151a58dad95d0e881b9bc81cdd58da081b195d995b605a1b60448201526064016106ee565b6000600186868560ff16818110610f2657634e487b7160e01b600052603260045260246000fd5b90506020020135600f6000018460ff1681548110610f5457634e487b7160e01b600052603260045260246000fd5b90600052602060002090600591828204019190066006029054906101000a900465ffffffffffff1665ffffffffffff16610f8e91906126d8565b610f98919061274d565b9050600f6001018260ff1681548110610fc157634e487b7160e01b600052603260045260246000fd5b90600052602060002090600591828204019190066006029054906101000a900465ffffffffffff1665ffffffffffff16811061103f5760405162461bcd60e51b815260206004820152601e60248201527f5469636b65743a20736f6c64206f75742061742074686973206c6576656c000060448201526064016106ee565b85858460ff1681811061106257634e487b7160e01b600052603260045260246000fd5b90506020020135600f6002018360ff168154811061109057634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546110af91906001600160a01b031661272e565b6110b990856126d8565b9350833410156111175760405162461bcd60e51b815260206004820152602360248201527f5469636b65743a206e6f7420656e6f75676820666f72207469636b657420707260448201526269636560e81b60648201526084016106ee565b50508080611124906127e6565b915050610e6b565b5060005b848110156112b257600086868381811061115a57634e487b7160e01b600052603260045260246000fd5b905060200201602081019061116f9190612488565b60ff16905060005b85858481811061119757634e487b7160e01b600052603260045260246000fd5b9050602002013581101561129d576000600f60000183815481106111cb57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600591828204019190066006029054906101000a900465ffffffffffff1690506001600f600001848154811061121b57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600591828204019190066006028282829054906101000a900465ffffffffffff1661125091906126f0565b92506101000a81548165ffffffffffff021916908365ffffffffffff16021790555061128a61127c3390565b8265ffffffffffff16611be3565b5080611295816127cb565b915050611177565b505080806112aa906127cb565b915050611130565b505050505050565b600d80546112c790612790565b80601f01602080910402602001604051908101604052809291908181526020018280546112f390612790565b80156113405780601f1061131557610100808354040283529160200191611340565b820191906000526020600020905b81548152906001019060200180831161132357829003601f168201915b505050505081565b336113516114d1565b6001600160a01b0316146113775760405162461bcd60e51b81526004016106ee90612652565b600c5463ffffffff1681116113c35760405162461bcd60e51b815260206004820152601260248201527139b832b1b4b0b61036b4b73a1032b93937b960711b60448201526064016106ee565b6113cd8282611be3565b5050565b60006001600160a01b03821661143c5760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016106ee565b506001600160a01b031660009081526009602052604090205490565b336114616114d1565b6001600160a01b0316146114875760405162461bcd60e51b81526004016106ee90612652565b6114916000611bfd565b565b6000600582815481106114b657634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031692915050565b6000546001600160a01b031690565b60606007805461060390612790565b6001600160a01b0382163314156115445760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b60448201526064016106ee565b336000818152600b602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6115ba3383611979565b6115d65760405162461bcd60e51b81526004016106ee90612687565b6115e284848484611c4d565b50505050565b60606115f3826117d8565b61164d5760405162461bcd60e51b815260206004820152602560248201527f5469636b65743a20717565727920666f72206e6f6e2d6578697374696e6720746044820152641a58dad95d60da1b60648201526084016106ee565b60105460005b818160ff161015611703576010805460ff831690811061168357634e487b7160e01b600052603260045260246000fd5b90600052602060002090600591828204019190066006029054906101000a900465ffffffffffff1665ffffffffffff168410156116f157600d6116c88260ff16611c80565b6040516020016116d99291906124f1565b60405160208183030381529060405292505050919050565b806116fb816127e6565b915050611653565b5050919050565b6001600160a01b039182166000908152600b6020908152604080832093909416825291909152205460ff1690565b336117416114d1565b6001600160a01b0316146117675760405162461bcd60e51b81526004016106ee90612652565b6001600160a01b0381166117cc5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106ee565b6117d581611bfd565b50565b6000908152600860205260409020546001600160a01b0316151590565b6000818152600a6020526040902080546001600160a01b0319166001600160a01b038416908117909155819061182a82610d4a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b804710156118b35760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016106ee565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611900576040519150601f19603f3d011682016040523d82523d6000602084013e611905565b606091505b505090508061081f5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c20726044820152791958da5c1a595b9d081b585e481a185d99481c995d995c9d195960321b60648201526084016106ee565b6000611984826117d8565b6119e55760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016106ee565b60006119f083610d4a565b9050806001600160a01b0316846001600160a01b03161480611a2b5750836001600160a01b0316611a2084610686565b6001600160a01b0316145b80611a3b5750611a3b818561170a565b949350505050565b826001600160a01b0316611a5682610d4a565b6001600160a01b031614611abe5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016106ee565b6001600160a01b038216611b205760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016106ee565b611b2b6000826117f5565b6001600160a01b0383166000908152600960205260408120805460019290611b5490849061274d565b90915550506001600160a01b0382166000908152600960205260408120805460019290611b829084906126d8565b909155505060008181526008602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6113cd828260405180602001604052806000815250611d99565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611c58848484611a43565b611c6484848484611dcc565b6115e25760405162461bcd60e51b81526004016106ee90612600565b606081611ca45750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611cce5780611cb8816127cb565b9150611cc79050600a8361271a565b9150611ca8565b6000816001600160401b03811115611cf657634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611d20576020820181803683370190505b5090505b8415611a3b57611d3560018361274d565b9150611d42600a86612806565b611d4d9060306126d8565b60f81b818381518110611d7057634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611d92600a8661271a565b9450611d24565b611da38383611ed9565b611db06000848484611dcc565b61081f5760405162461bcd60e51b81526004016106ee90612600565b60006001600160a01b0384163b15611ece57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611e109033908990889088906004016125b0565b602060405180830381600087803b158015611e2a57600080fd5b505af1925050508015611e5a575060408051601f3d908101601f19168201909252611e579181019061235d565b60015b611eb4573d808015611e88576040519150601f19603f3d011682016040523d82523d6000602084013e611e8d565b606091505b508051611eac5760405162461bcd60e51b81526004016106ee90612600565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611a3b565b506001949350505050565b6001600160a01b038216611f2f5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016106ee565b611f38816117d8565b15611f855760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016106ee565b6001600160a01b0382166000908152600960205260408120805460019290611fae9084906126d8565b909155505060008181526008602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461201890612790565b90600052602060002090601f01602090048101928261203a5760008555612080565b82601f106120535782800160ff19823516178555612080565b82800160010185558215612080579182015b82811115612080578235825591602001919060010190612065565b5061208c929150612090565b5090565b5b8082111561208c5760008155600101612091565b60008083601f8401126120b6578081fd5b5081356001600160401b038111156120cc578182fd5b6020830191508360208260051b85010111156120e757600080fd5b9250929050565b80356001600160801b038116811461210557600080fd5b919050565b60006020828403121561211b578081fd5b81356121268161285c565b9392505050565b6000806040838503121561213f578081fd5b823561214a8161285c565b9150602083013561215a8161285c565b809150509250929050565b600080600060608486031215612179578081fd5b83356121848161285c565b925060208401356121948161285c565b929592945050506040919091013590565b600080600080608085870312156121ba578081fd5b84356121c58161285c565b935060208501356121d58161285c565b92506040850135915060608501356001600160401b03808211156121f7578283fd5b818701915087601f83011261220a578283fd5b81358181111561221c5761221c612846565b604051601f8201601f19908116603f0116810190838211818310171561224457612244612846565b816040528281528a602084870101111561225c578586fd5b82602086016020830137918201602001949094529598949750929550505050565b6000806040838503121561228f578182fd5b823561229a8161285c565b91506020830135801515811461215a578182fd5b600080604083850312156122c0578182fd5b82356122cb8161285c565b946020939093013593505050565b600080600080604085870312156122ee578384fd5b84356001600160401b0380821115612304578586fd5b612310888389016120a5565b90965094506020870135915080821115612328578384fd5b50612335878288016120a5565b95989497509550505050565b600060208284031215612352578081fd5b813561212681612871565b60006020828403121561236e578081fd5b815161212681612871565b60008060008060008060006080888a031215612393578485fd5b87356001600160401b03808211156123a9578687fd5b818a0191508a601f8301126123bc578687fd5b8135818111156123ca578788fd5b8b60208285010111156123db578788fd5b602083019950809850506123f160208b016120ee565b965060408a0135915080821115612406578485fd5b6124128b838c016120a5565b909650945060608a013591508082111561242a578384fd5b506124378a828b016120a5565b989b979a50959850939692959293505050565b60006020828403121561245b578081fd5b5035919050565b600060208284031215612473578081fd5b813565ffffffffffff81168114612126578182fd5b600060208284031215612499578081fd5b813560ff81168114612126578182fd5b600081518084526124c1816020860160208601612764565b601f01601f19169290920160200192915050565b600081516124e7818560208601612764565b9290920192915050565b600080845482600182811c91508083168061250d57607f831692505b602080841082141561252d57634e487b7160e01b87526022600452602487fd5b81801561254157600181146125525761257e565b60ff1986168952848901965061257e565b60008b815260209020885b868110156125765781548b82015290850190830161255d565b505084890196505b50505050505061258e81856124d5565b95945050505050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906125e3908301846124a9565b9695505050505050565b60208152600061212660208301846124a9565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b600082198211156126eb576126eb61281a565b500190565b600065ffffffffffff8083168185168083038211156127115761271161281a565b01949350505050565b60008261272957612729612830565b500490565b60008160001904831182151516156127485761274861281a565b500290565b60008282101561275f5761275f61281a565b500390565b60005b8381101561277f578181015183820152602001612767565b838111156115e25750506000910152565b600181811c908216806127a457607f821691505b602082108114156127c557634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156127df576127df61281a565b5060010190565b600060ff821660ff8114156127fd576127fd61281a565b60010192915050565b60008261281557612815612830565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146117d557600080fd5b6001600160e01b0319811681146117d557600080fdfea2646970667358221220c5852d8a758c9e072fbe5eb3a8c64d0dcd344c4a74869c12f9ba28f9d58cccb964736f6c63430008040033a2646970667358221220d91edfbc37a30c62f0912d6352f10566393b9af6eb00d2a036cd72e3ba644da564736f6c63430008040033";
