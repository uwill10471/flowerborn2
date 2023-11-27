
const loveArray = ["I am who I am because of you. You are every reason, every hope, and every dream I've ever had.",
"If I had a flower for every time I thought of you... I could walk through my garden forever.",
"If I know what love is, it is because of you.",
"I love you more than I have ever found a way to say to you.",
"In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
"My love for you has no depth, its boundaries are ever-expanding.",
"If I had to choose between breathing and loving you I would use my last breath to tell you I love you.",
"For thousands of nights I dreamed of making love to you. No man on earth has ever hated sunrise as I do.",
"You are the last thought in my mind before I drift off to sleep and the first thought when I wake up each morning.",
"I love you - I am at rest with you - I have come home.",
"Love starts as a feeling, but to continue is a choice. And I find myself choosing you, more and more everyday."
]



const btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
   const i = Math.floor(Math.random()*10+1)
 //console.log(i);
    h2.innerText =loveArray[i];
 //alert("Take love, multiply it by infinity and take it to the depths of forever, and you still have only a glimpse of how I feel for you.")
   
    
})


//w3code


//end