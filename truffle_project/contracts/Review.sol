pragma solidity ^0.5.0;

import './DataConsumer.sol';
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';

contract Review is Ownable{
 
    mapping(bytes32 => Review) public reviewid;
    event ReviewSubmitted(bytes32 id, address from);

    struct Review{
        bytes32 contributor;
        bytes32 data;
    }
    function SubmitReview(bytes32 id, bytes32 metadata) public onlyOwner{
        Review memory r = Review(id, metadata);
        emit ReviewSubmitted(id, msg.sender);
    }

    function EvaluateReview() public onlyOwner{

    }

}
