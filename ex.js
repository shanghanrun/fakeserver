const fakeServer ={
    data: {name: 'haha', age: 20},
    runFunction: function(){
        return this.fetchData();
    },
    
    fetchData: function(){
        return this.data.name
    }
}


console.log(fakeServer.runFunction() )