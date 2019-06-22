pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol';
import 'openzeppelin-solidity/contracts/lifecycle/Pausable.sol';


contract Voucher is ERC20Mintable, Pausable{
    string public name = "Voucher";
    bytes32 public id;

    constructor(bytes32 _id) public {
        id = _id;
    }

}
