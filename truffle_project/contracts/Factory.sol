pragma solidity ^0.5.0;

import './Voucher.sol';
import './DataSale.sol';
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract Factory is Ownable{
    mapping(bytes32 => Voucher) public vouchers;
    mapping(bytes32 => DataSale) public datasales;

    event DataOfferCreated(bytes32 id);
    event EmitedVouchers(bytes32 id, address to, uint amount);
    event FundsForward(address from, uint value, bytes32 id);

    function createDataOffer(bytes32 id) public {
        Voucher v = new Voucher(id);
        DataSale d = new DataSale(id, v);
        vouchers[id] = v;
        datasales[id] = d;
        emit DataOfferCreated(id);
    }

    function emitVouchers(bytes32 id, address to, uint amount) public onlyOwner{
        Voucher v = vouchers[id];
        v.mint(to, amount);
        emit EmitedVouchers(id, to, amount);
    }

    function forwardFunds(bytes32 hash) public payable{
        Voucher v = vouchers[hash];
        address(v).transfer(msg.value);
        emit FundsForward(msg.sender, msg.value, hash);
    }


    Voucher v = new Voucher("asd");
}
