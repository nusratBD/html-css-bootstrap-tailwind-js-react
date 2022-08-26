/* 
After parsing js code, synchronous elements are kept on stack and asynchronous are at qeue section. 
Code executes from stack. 
So first it executes the existing synchronous elements then asynchronous. 
If any synchronous element needs long time to execute, 
stack sends it to qeue for execution and starts execution the next. 
While staying at qeue, asynchronous elements continued its operation 
and when it gets space at stack but didn't finish the full operation, 
it submits the output that is finished and continue to work untill the next call.
*/
