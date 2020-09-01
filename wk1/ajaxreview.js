function cb (){
    
    function theclickfunction(event){
        $.get('https://pokeapi.co/api/v2/pokemon/', function(data){
           
            for(poke of data.results){
                $.get(poke.url,function(data){
                    addPokemon({
                        name:data.name,
                        img:data.sprites.front_default
                    })
                })
            }
            
        })
        
        


     
    } 
    $('#dabutton').click(theclickfunction);

    function addPokemon(obj){
        
        let nametd = document.createElement('td');
        let imgtd = document.createElement('td');
        let img = document.createElement('img');
        let trow = document.createElement('tr');
        img.src = obj.img
        imgtd.appendChild(img)
        nametd.innerText = obj.name
        trow.appendChild(nametd)
        trow.appendChild(imgtd)
        $('tbody').append(trow)
    }
}


$(document).ready(cb)