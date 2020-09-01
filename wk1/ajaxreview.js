function cb (){
    
    function theclickfunction(event){
        $.get('https://pokeapi.co/api/v2/pokemon/charizard', function(data){
            console.log(data)
        })

        console.log(event)
    } 
    $('#dabutton').click(theclickfunction);

    
}


$(document).ready(cb)