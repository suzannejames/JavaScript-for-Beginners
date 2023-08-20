/*
Used for testing. It is a JS testing framework.
Besides plain JavaScript and React code just allows you to test Babel, TypeScript, Node, Angular, Vue, and various other frameworks. Jest also supports code coverage. 
Code coverage is a measure of what percentage of my code is covered by tests.
The higher the code coverage, the lower the chance of having unidentified bugs. 
As a rule, the higher the percentage of code coverage, the lower the amount of time required to write new tests. 
*/

/*MOCKING
Mocking allows you to separate the code that you are testing from it's related dependencies. 
In other words, you can use the mocking features to make sure that your unit testing is stand-alone.
Mocks, allow you to pretend that the users are already there. 
The needed data comes from the mock rather than from the backend. 
This allows the front-end developers to finish their site of the new feature independently. 
*/

//Writing Tests with JEST

function addFive(val)
{
    return val+5;
}
module.exports=addFive;
//check for node version, node and jest version