

const list_id = {
    Indian_capped : {

        Heading_name : "Indian Capped Player",
        Batter : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ],

        Bowler : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ],

        Wicketkeeper : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ],

        All_rounder : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ]
    },

    Indian_uncapped : {
        Heading_name : "Indian Uncapped Player",
        Batter : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ],

        Bowler : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ],

        Wicketkeeper : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ],

        All_rounder : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ]
    },

    Overseas: {
        Heading_name : "Overseas Player",
        Batter : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ],

        Bowler : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ],

        Wicketkeeper : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ],

        All_rounder : [
            {
                player_id : "P1001",
                player_img : "./assets/virat_kohli.jpg",
                player_name : "Virat Kohli",
                Counrty : "India",
                RHB_LHB : "RHB",
                Age : 36,
                BALLING_TYPE : "-",
            },
        ]
    }    
}




document.addEventListener('DOMContentLoaded', () => {
    
    const params = new URLSearchParams(window.location.search);
    const player_list_id = params.get('player_list_type');

    const player_list_type = list_id[player_list_id];

    document.title = player_list_type.Heading_name;

    document.getElementById("nav_bar").innerText = player_list_type.Heading_name;



    function update_player_info(container_id, players){

        const container = document.getElementById(container_id);
        container.innerHTML = '';

        players.forEach(player => {
            
            const card = document.createElement('div');
            card.className = "cards";

            // add image
            const img = document.createElement('img');
            img.src = player.player_img;
            img.alt = player.player_name;
            card.appendChild(img);

            // add player name
            const name_link = document.createElement('a');
            name_link.innerText = player.player_name;
            card.appendChild(name_link);

            // add country
            const country_name = document.createElement('a');
            country_name.innerText = player.Counrty;
            card.appendChild(country_name);

            // add Age
            const Age_link = document.createElement('a');
            Age_link.innerText = "Age : " + player.Age;
            card.appendChild(Age_link);

            // add LHB / RHB
            const LHB_RHB = document.createElement('a');
            LHB_RHB.innerText = player.RHB_LHB;
            card.appendChild(LHB_RHB);

            // add Bowling type
            const Bowling_type_link = document.createElement('a');
            Bowling_type_link.innerText = player.BALLING_TYPE;
            card.appendChild(Bowling_type_link);

            container.appendChild(card);
        });

    }



    if(player_list_type.Batter){
        update_player_info('batters', player_list_type.Batter)
    };

    if(player_list_type.Bowler){
        update_player_info('bowlers', player_list_type.Bowler)
    };

    if(player_list_type.All_rounder){
        update_player_info('all_rounders', player_list_type.All_rounder)
    };

    if(player_list_type.Wicketkeeper){
        update_player_info('wicketkeepers', player_list_type.Wicketkeeper)
    };

    
    let cardObj = document.querySelectorAll(".cards");

    cardObj.forEach(card => {
        card.addEventListener("click", function () {
        window.location.href = "file:///C:/Users/vipul/OneDrive/Desktop/web%20dev/Collage%20projects/IPL%20AUCTION/Player%20Info/player_info.html#" + encodeURIComponent(card.id);
        });
    });
});





























