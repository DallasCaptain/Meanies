//combine 2 sorted ARRAYS in an array containing the SORTED MUTLISET INTERSECTION of the 2.
//[1,2,2,2,2,2,7]
//[2,2,6,6,7]

//[2,2,7]

//MULTISET
////a collection with more than one of each value
////MULTI
//more than one of each

////SET
    //complete COLLECTION
    //COLLECTION IS AN OBJECT thats ITERABLE
        //Iterable means we can access values in some order

//INTERSECTION
////road 1 and road 2


//.....%%.....//
//-----%%------//



//UNION

// [1,1,7] || 
// [1,1,2]
// [1,1,2,7]

// {val:Number,
// next:Node,
// pri:Number}


function SLNode(val,pri){
    this.val = val
    this.pri = pri
    this.next = null
}

function SLPriQueue(){
    this.head = null
    this.queue = (val,pri)=>{
        //create a node from val pri
        let nn = new SLNode(val,pri)
        let runner = this.head;
        //what if there is no head
        if(runner==null){
            this.head = nn
            return this
        }
        //find the place that it belongs
        //what if there is a head and we need to be first
        if(nn.pri < runner.pri){
            nn.next = runner
            this.head = nn
            return this
        }
        //change pointers to add it to the queue
        while(runner.next != null){
            if(runner.pri <= nn.pri && nn.pri < runner.next.pri ){
                //we found the spot now add to the queue
                nn.next = runner.next
                runner.next = nn
                return this
            }
            //we didn't find the spot now what?
            //just iterate
            runner = runner.next
        }
        //if we never find the spot, sticker on the end
        runner.next = nn
        return this
    }
    //console.log the status
    this.status = ()=>{
        runner = this.head
        while(runner){
            console.log(runner.pri,runner.val)
            runner = runner.next 
        }
    }
}

que = new SLPriQueue()
que.queue(4,5)
que.queue(100,4)
que.queue(99,2)
que.queue(77,4)
que.queue(50,4)
que.status()