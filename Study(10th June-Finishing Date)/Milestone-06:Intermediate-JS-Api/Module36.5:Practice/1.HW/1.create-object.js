/* 
১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 
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
        let count = 1;
        const priorities = this.priorities;
        for(const priority of priorities){
            console.log(count,'=>',priority);
            count++;
        }
    }
}
obj.timeManagement();