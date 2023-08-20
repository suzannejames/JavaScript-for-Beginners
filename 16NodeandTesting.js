//After Node.js became available, it was possible to use JavaScript on the backend or on the server-side. This means that today you can write full-stack JavaScript programs. In other words, you can write JavaScript on the client and on the server. Node.js comes with a package manager called npm, which stands for Node Package Manager.

/*
When you want to start a new project, 
first, open a folder on your machine where 
you want to place your project files, then
 run the npm command. These projects can be 
 different shapes and sizes, but they all have at least one thing in common, 
 the package.json file that gets created after you run the npm command. The package.json file 
 holds all the instructions on all the node modules that are pulled from the npm repository 
 of open source modules
 */

//TESTING


//in testing like JEST
function concat(strA,strB)
{
    return strA+strB
}
concat("abc","def")
expect(concat("abc","def")).toBe("abcdef") 
//when tests fail you say that it is red and if passed green

//Refactoring
//Is the process in which you are updating code without affecting the results it produces

//Red-Green-refactor cycle is the basis of test driven development approach(TDD)
//TDD - 1. Write failing test, 2. Write source code in a way that failing test passes, 3. optimize source code

 