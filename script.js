/*
$(`[id]`).click(function(e){
    e.preventDefault();
    window.location = `https://en.wikipedia.org/wiki/${"[alt]"}`;
}) */

//$("span").element($(<a href=""></a>))
$(document).ready(function(){
const Item = ({img,url}) => `
<img class="image_" src="${img}" onclick="window.location.href='${url}'" />
`;

$('.list-items').html([

  { url: "https://en.wikipedia.org/wiki/Cricket", img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2018-09/19/full/1537318309-6013.jpg'},
  { url: "https://en.wikipedia.org/wiki/Badminton", img: 'https://img.freepik.com/premium-vector/badminton-player-smash-match-competition-sport-stadium-cartoon-illustration-vector_201904-955.jpg?w=2000'},
  { url: "https://en.wikipedia.org/wiki/Tennis", img: 'https://upload.wikimedia.org/wikipedia/commons/9/94/2013_Australian_Open_-_Guillaume_Rufin.jpg'},
  { url: "https://en.wikipedia.org/wiki/Hockey", img: 'https://olympic.ca/wp-content/uploads/2015/07/canvchil_w-bronze_july-24_mikeridewoodphoto92.jpg?quality=100&w=1030'},
  { url: "https://en.wikipedia.org/wiki/Football", img: 'https://media.gettyimages.com/id/1298121663/photo/cristiano-ronaldo-of-juventus-kicks-the-ball-during-the-serie-a-match-between-juventus-and.jpg?s=612x612&w=gi&k=20&c=dxfbi3psRxDOZn8LgsMgiMa0libCg2dY1Zk4fZUo3vI='},
  { url: "https://en.wikipedia.org/wiki/Basketball", img: 'https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dwb5244da4/images/page-designer/2021/april/12472_Comp_E1_ImageA.jpg?sw=808&sfrm=jpg'},
  { url: "https://en.wikipedia.org/wiki/Throwball", img: 'https://3.bp.blogspot.com/-uet1vhiIwuA/WqD4RzesbBI/AAAAAAAAAfE/CCGuOsjSdZEVEhxqXG5oWRZGLWyvWIWJQCLcBGAs/s1600/24PATNA%2BSUDARSHAN%2BCENTRAL%2BSCHOOL%2BMAI%2BTHROWBALL%2BTOURNAMENT.jpg'},
  { url: "https://en.wikipedia.org/wiki/Volleyball", img: 'https://cdn.britannica.com/81/198481-050-10CED2D9/Gilberto-Godoy-Filho-ball-Brazil-Argentina-volleyball-2007.jpg'},
  { url: "https://en.wikipedia.org/wiki/Baseball", img: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Mookie_Betts_hitting_the_ball_%2836478781664%29.jpg'},
  { url: "https://en.wikipedia.org/wiki/Shot_put", img: 'https://media.aws.iaaf.org/media/Original/5e224a67-bc34-4337-a64f-6afbe96e361d.jpg?v=-1970417484'},
  { url: "https://en.wikipedia.org/wiki/Handball", img: 'https://img.olympicchannel.com/images/image/private/t_16-9_640/f_auto/v1538355600/primary/hoo0xhp3azgxg78wb8ka'},
  { url: "https://en.wikipedia.org/wiki/Rugby", img: 'https://images.unsplash.com/photo-1568629273035-78d3fea6506f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80'},
  
].map(Item).join(''));

// Add id Dynamically
let myRow=0;
$(".image_").each(function(){
  myRow+=1;
  $(this).attr("id", myRow);
});
});
