// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Calculator
{
    int private value;
    event initialEvent(int);
    event addEvent(int, int);
    event subEvent(int, int);
    event resetEvent(int);
    
    constructor()
    {
        emit initialEvent(value);
    }

    function add(int _value) public
    {
        value += _value;
        emit addEvent(value, _value);
    }

    function sub(int _value) public
    {
        value -= _value;
        emit subEvent(value, _value);
    }

    function reset() public
    {
        value = 0;
        emit resetEvent(value);
    }

    function getValue() public view returns (int)
    {
        return value;
    }
}