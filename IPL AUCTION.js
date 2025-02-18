


const player_count_obj = {
  18:{
    indian_cap_batter : 1,
    indian_uncap_batter : 1,
    indian_cap_bowler : 1,
    indian_uncap_bowler : 1,
    indian_cap_all : 1,
    indian_uncap_all : 1,
    overseas_batter : 1,
    overseas_bowler : 1,
    overseas_all : 1,
    wicket_keeper : 2,
    max_overseas : 7
  },

  15:{
    indian_cap_batter : 1,
    indian_uncap_batter : 1,
    indian_cap_bowler : 1,
    indian_uncap_bowler : 1,
    indian_cap_all : 1,
    indian_uncap_all : 1,
    overseas_batter : 1,
    overseas_bowler : 1,
    overseas_all : 1,
    wicket_keeper : 2,
    max_overseas : 5,
  },

  11:{
    indian_cap_batter : 1,
    indian_uncap_batter : 1,
    indian_cap_bowler : 1,
    indian_uncap_bowler : 1,
    indian_cap_all : 1,
    indian_uncap_all : 1,
    overseas_batter : 1,
    overseas_bowler : 1,
    overseas_all : 1,
    wicket_keeper : 1,
    max_overseas : 4,
  }
};

const team_id_list = ["CSK","RCB","RR","LSG","DC","KKR","SRH","MI","GT","PBKS"];

const new_obj = {};




function navigate_to_team_page(teamId) {
    if (!teamId) {
      console.error('Team ID is missing');
      return;
    }
    // Redirect to team.html with the team query parameter
    window.location.href = "file:///C:/Users/vipul/OneDrive/Desktop/web%20dev/Collage%20projects/IPL%20AUCTION/IPL%20TEAMS/team.html?team_id=" + encodeURIComponent(teamId);
}

function navigate_to_player_list_page(player_list_type){
    if (!player_list_type) {
        console.error('Player list type missing.');
        return;
      }
     
      window.location.href = "file:///C:/Users/vipul/OneDrive/Desktop/web%20dev/Collage%20projects/IPL%20AUCTION/Player_list/Player_list.html?player_list_type=" + encodeURIComponent(player_list_type);
    
}



function onpopup() {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("play_game").style.display = "none";
}

function oncloseup(){
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("play_game").style.display = "block";
}

function create_auction(){
  console.log("game is creating..");
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("auction_info").style.display = "flex";
}

function play_auction(){
  console.log("playing auction..");
  oncloseup();
}



function get_value_from_team_count(){
  const no_teams_selected = document.getElementById("team_count").value;
  if(no_teams_selected < 10){
    document.getElementById("no_of_team_limit").style.display = "block";
  }else if(no_teams_selected > 10){
    alert("Maximum number of team is 10.")
    document.getElementById("no_of_team_limit").style.display = "none";
  }
  else{
    document.getElementById("no_of_team_limit").style.display = "none";
  }
}

function team_limit_func(){
  const no_teams_selected = document.getElementById("team_count").value;
  const check_box_length = document.querySelectorAll('.dropdown-menu input[type="checkbox"]:checked').length;
  const check_box = document.querySelectorAll('.dropdown-menu input[type="checkbox"]');

  if(check_box_length >= no_teams_selected){
    check_box.forEach(box=>{
      if(!box.checked){
        box.disabled = true;
      }
    });
  }else{
    check_box.forEach(box=>{
      box.disabled = false;
    });
  }
}


function update_info(Obj){
  
  document.getElementById("ind_cap_bat").innerText = `Indian Cap : ${Obj.indian_cap_batter}`;
  document.getElementById("ind_uncap_bat").innerText = `Indian Uncap : ${Obj.indian_uncap_batter}`;
  document.getElementById("over_bat").innerText = `Overseas : ${Obj.overseas_batter}`;
  document.getElementById("ind_cap_ball").innerText = `Indian Cap : ${Obj.indian_cap_bowler}`;
  document.getElementById("ind_uncap_ball").innerText = `Indian Uncap : ${Obj.indian_uncap_bowler}`;
  document.getElementById("over_ball").innerText = `Overseas : ${Obj.overseas_bowler}`;
  document.getElementById("ind_cap_all").innerText = `Indian Cap : ${Obj.indian_cap_all}`;
  document.getElementById("ind_uncap_all").innerText = `Indian Uncap : ${Obj.indian_uncap_all}`;
  document.getElementById("over_all").innerText = `Overseas : ${Obj.overseas_all}`;
  document.getElementById("min_wk").innerText = `Minimum Wicketkeeper : ${Obj.wicket_keeper}`;
  document.getElementById("max_os").innerText = `Maximum Overseas : ${Obj.max_overseas}`;

}


function Limitations(player_count){
  document.getElementById("player_limitations").style.display = "block";
  update_info(player_count_obj[player_count]);
}



document.querySelector("#next_btn").addEventListener("click",()=>{
  const team_count = document.getElementById("team_count").value;
  const max_player_count = document.getElementById("player_count").value;
  const check_box_length = document.querySelectorAll('.dropdown-menu input[type="checkbox"]:checked').length;
  if(team_count < 10 && check_box_length != team_count){
    let diff = team_count-check_box_length;
    alert(`Select ${diff} more teams.`);
  }else if(team_count && max_player_count){
    console.log("Info is filled",team_count," and ", max_player_count);
    document.getElementById("info").style.display = "none";
    Limitations(max_player_count);
  }else{
    alert("Please fill all info.");
  }

});




document.getElementById("prev_btn").addEventListener("click",()=>{
  document.getElementById("player_limitations").style.display = "none";
  document.getElementById("info").style.display = "block";
});


document.querySelector("#btn_holder #next_btn").addEventListener("click",()=>{
  window.location.href = "file:///C:/Users/vipul/OneDrive/Desktop/web%20dev/Collage%20projects/IPL%20AUCTION/Auction%20Page/Auction_page.html";
});

document.getElementById("cancel").addEventListener("click",()=>{
  document.getElementById("popup").style.display = "flex";
  document.getElementById("overlay").style.display = "block";
  document.getElementById("auction_info").style.display = "none";
});




document.getElementById("player_side_submit_btn").addEventListener("click",()=>{

  const id_of_team = document.getElementById("player_side_team_id").value;

  if(id_of_team == ""){
    alert("Enter team id.");
  }else if(team_id_list.includes(id_of_team)){
    window.location.href = `file:///C:/Users/vipul/OneDrive/Desktop/web%20dev/Collage%20projects/IPL%20AUCTION/Player_Side_Page/Player_Side_Page.html?team_id=${id_of_team}`;
  }else{
    alert("Enter Valid team id.");
  }
});



document.getElementById("player_side_back_btn").addEventListener("click",()=>{
  document.getElementById("player_side").style.display = "none";
  document.getElementById("popup").style.display = "flex";
  document.getElementById("overlay").style.display = "block";
});


document.getElementById("player").addEventListener("click",()=>{
  document.getElementById("player_side").style.display = "flex";
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("play_game").style.display = "none";
});





