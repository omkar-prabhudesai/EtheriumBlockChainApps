pragma solidity ^0.4.17;

contract Inbox {

    // Solidity automatically generate "Get" method for public properties
    string public message;
    
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
    
}