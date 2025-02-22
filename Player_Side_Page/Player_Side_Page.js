

document.getElementById("retention_navigate_btn").addEventListener("click",()=>{

    document.getElementById("left_side_bar").style.display = "none";
    document.getElementById("retention_side_bar").style.display = "flex";
});


document.getElementById("retention_bar_name").addEventListener("click",()=>{

    document.getElementById("left_side_bar").style.display = "flex";
    document.getElementById("retention_side_bar").style.display = "none";
});




document.getElementById("bar_icon").addEventListener("click",()=>{

    let side = document.getElementById("left_side_bar");
    console.log(side);
    if(side.style.display == "none" || side.style.display == ""){
        side.style.display = "flex";
    }else{
        side.style.display = "none";
    }
});


document.getElementById("side_bar_team_name").addEventListener("click",()=>{
    document.getElementById("left_side_bar").style.display = "none";
});



document.getElementById("soldBtn").addEventListener("click", function() {
    document.getElementById("soldStamp").style.display = "block";
});

document.getElementById("unsoldBtn").addEventListener("click", function() {
    document.getElementById("unsoldStamp").style.display = "block";
});



function navigate_to_team_page(teamId) {
    if (!teamId) {
      console.error('Team ID is missing');
      return;
    }
    // Redirect to team.html with the team query parameter
    window.location.href = "file:///C:/Users/vipul/OneDrive/Desktop/web%20dev/Collage%20projects/IPL%20AUCTION/IPL%20TEAMS/team.html?team_id=" + encodeURIComponent(teamId);
}