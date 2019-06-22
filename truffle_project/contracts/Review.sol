pragma solidity ^0.5.0;

import './DataConsumer.sol';
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract Review is Ownable{
 
    mapping(bytes32 => Reviews) public reviewid;
    event ReviewSubmitted(bytes32 id, address from);

    struct Review{
        uint contributor;
        bytes Reviews;
    }
    function SubmitReview(bytes32 id, bytes32 metadata) public onlyOwner{
        Review r = new Reviews(id, metadata);
        vouchers[id] = r;
        emit ReviewSubmitted(id, msg.sender);
    }

    function EvaluateReview() public onlyOwner{

    }

}