/* 
browser, nodejs: browser and node js are the environments to run js.
*/

/* 
Browser andjs don't run the code. Actually browser and nodejs have a engine(v8) to run the js code.

How v8 engine run the code:
1. It parses js code unto different parts.
2. Then it checks whether there is any error or not. If any error exists, it stops compilation process, and throws error message.
3. If there is no error, it converts the parse code into machine code.
4. Finally it runs the machine code and shows the output.
*/