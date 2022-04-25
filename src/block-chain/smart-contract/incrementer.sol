pargma solidity ^0.6.0;

constract Incrementer {
  uint public number;

  constructor(unit256 _initialValue) public {
    number = _initialValue;
  }

  function increment(uint256 _value ) public {
    number = number + _value;
  }

  function reset() public {
    number = 0;
  }

}
