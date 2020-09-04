class Bios{
    constructor(){

        setInterval(() => {
            this.getRoomsLobby();
            this.getRoomschallenge();
        }, 1000);
           
        
        
    }
    getRoomsLobby(){
        let roomsEl = $(".lobby-room-list-item.sala-card-wrapper");
        

        for (let i = 0; i < roomsEl.length; i++) {
            let playersEl;
            let somaLvl = 0;
            let qtdPlayers = 0;
            
            playersEl = $(roomsEl[i]).find('.sala-lineup-player').not('.player-placeholder');
            qtdPlayers = $(roomsEl[i]).find('.sala-lineup-player').not('.player-placeholder').length;
            for (let p = 0; p < playersEl.length; p++) {
                somaLvl = parseInt($(playersEl[p]).text()) + somaLvl;
            }
            $(roomsEl[i]).find('.badge.badge--lite span').text((somaLvl/qtdPlayers).toFixed(1))
        }
       
    }
    getRoomschallenge(){
        let roomsEl = $(".sidebar-desafios-salas .sidebar-item");
        for (let i = 0; i < roomsEl.length; i++) {
            let playersEl;
            let somaLvl = 0;
            let qtdPlayers = 0;
            
            playersEl = $(roomsEl[i]).find('.sala-lineup-player').not('.player-placeholder');
            qtdPlayers = $(roomsEl[i]).find('.sala-lineup-player').not('.player-placeholder').length;
            for (let p = 0; p < playersEl.length; p++) {
                somaLvl = parseInt($(playersEl[p]).text()) + somaLvl;
            }
            $(roomsEl[i]).find('.sidebar-sala-lobby-level').text((somaLvl/qtdPlayers).toFixed(1))
        }
    }
}


const bios = new Bios();
