arr = [{name:'bob',fun:[{name:'chess'},'volleyball']},{name:'carl',fun:['poker','music']},{name:'nick',fun:[]}]

for (let i = 0; i< arr.length; i++){
    console.log(arr[i].fun[0])
    for(let y = 0; y<arr[i].fun.length; y++){
        console.log(arr[i].fun[y].name)
    }
}


