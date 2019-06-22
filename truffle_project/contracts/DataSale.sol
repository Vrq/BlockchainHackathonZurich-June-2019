import './Voucher.sol';
import 'openzeppelin-solidity/contracts/lifecycle/Pausable.sol';
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract DataSale is Ownable,Pausable{

    bytes32 public id;
    Voucher voucher;

    event FundsReceived(uint account);

    constructor(bytes32 _id, Voucher _voucher) public {
        id = _id;
        voucher = _voucher;
    }


    function () external payable{
        emit FundsReceived(msg.value);
    }
}
