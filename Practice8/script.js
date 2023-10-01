
var arr = [
    
    {dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREIXVB6ss_6LcIutFvygP9V0V0NdJgJZcK4Q&usqp=CAU",
    story:" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_4uxUOkIywBR-B8OQZZ8k82fze1mw9lxEbw5rDwg7BfZGeYE4NicWxUKuD9eL-Uh0UoU&usqp=CAU  "},
    {dp:"https://media.gettyimages.com/id/902654634/photo/studioshot-of-young-beautiful-woman.jpg?s=612x612&w=gi&k=20&c=rEprxdMJK4NNtrtSx2TAPVo8v8B0TkDjyPliAKsMxW4=",
    story:"https://media.gettyimages.com/id/1201002485/photo/zhenya-katava-prepares-backstage-before-the-stephane-rolland-haute-couture-spring-summer-2020.jpg?s=612x612&w=gi&k=20&c=dIbg5yn8eTWH2XRxEruiyDuSLtTjs6hanC_yrdTkMoA="},
    {dp:"https://media.voguebusiness.com/photos/6317a1b08dc73d4c5a64c687/4:3/w_2000,h_1500,c_limit/avatar-models-voguebus-photographer-month-22-story.jpg",
    story:"https://media.voguebusiness.com/photos/6317a1b08dc73d4c5a64c687/master/pass/avatar-models-voguebus-photographer-month-22-story.jpg"},
    {dp:"https://www.topmodeloftheworld.com/wp-content/uploads/2023/03/Top-Model-of-the-World-finale-2023-Winner-mexico-1.jpg",
    story:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94VXsuaTVacr8_6xFChPMpW0u2FxzZEVUEA&usqp=CAU"},
    
]

var clutter =""
arr.forEach(function(elem,idx){
    clutter +=`  <div id="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`;
});

storiya.innerHTML = clutter;

storiya.addEventListener("click" , function(dets){
    document.querySelector("#full-screen").style.display ="block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
   setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
   },3000)
    
  });



// arr.forEach(function(elem,idx){
//     console.log(elem,idx);
// })