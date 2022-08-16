/* 
২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 
*/

const obj = {
    name: 'Nusrat',
    profession: 'Software Engineer',
    skills:{
        programming: 'JS, Python',
        os: 'Ubuntu, Windows'
    },
    priorities: ['Ibadah', 'Family', 'Career', 'Social Work'],
    timeManagement: function(){
        return this.priorities;//It is working like spread operator.
    }
}


const result = `
Skills: ${obj.skills.programming}
Second Priority: ${obj.priorities[1]}
All the Priorities: ${obj.timeManagement()}
`;
console.log(result);

/* 
output:
Skills: JS, Python
Second Priority: Family
All the Priorities: Ibadah,Family,Career,Social Work
*/