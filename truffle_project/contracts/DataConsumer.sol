pragma solidity ^0.5.0;

import 'openzeppelin-solidity/contracts/token/ERC721/ERC721.sol';
import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';


contract DataConsumer is ERC721, Ownable{
    string public name;
    string public symbol;
    constructor (string memory _name, string memory _symbol) public
    {
        name = _name;
        symbol = _symbol;
        
    }

    /**
    * Custom accessor to create a unique token with metadata
    */
    function mintUniqueTokenTo(
        address _to,
        uint256 _tokenId,
        string  memory _tokenURI
    ) public
    {
        //super._mint(_to, _tokenId);
        //super._setTokenURI(_tokenId, _tokenURI);
    }
}
