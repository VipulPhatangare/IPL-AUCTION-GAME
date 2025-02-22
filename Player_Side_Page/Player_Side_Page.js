

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

