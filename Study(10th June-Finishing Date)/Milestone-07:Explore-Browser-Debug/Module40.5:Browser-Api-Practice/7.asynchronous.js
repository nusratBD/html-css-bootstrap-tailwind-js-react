/* 
 জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে সার্চ দিয়ে বের করে ফেলো। 
 এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে রাখো। 
*/
/* 
The term asynchronous refers to two or more objects or events not existing or happening 
at the same time (or multiple related things happening without waiting for the previous
one to complete).
*/

/* 
List of asynchronous:
1. setTimeout()
2. setInterval()
3. waiting for a file
4, fetch
5. callback function
*/

/* 
How does the aysnchronous work?

Ans: After parsing js code, synchronous elements are kept to stack, and
asynchronous are at qeue. The code executes from stack. So it first executes
the synchronous and then asynchronous. If any synchronous item needs time 
to execute, it is sent to qeue to complete its work. While asynchronous stays
at qeue, it continues its operation. And when stack becomes free asynchronous comes to
stack for execution. If the full task of asynchronous doesn't complete on that
time, it just gives the completed portion to execute.
*/