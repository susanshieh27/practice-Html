var msg = "Hello JavaScript";
console.log(msg);
        
var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from Javascript</p>";

/*var result = {
    name: "JQuery",
    language: "javascript",
    score: 4.5,
    showLog: function() {
        
    },
    owner: {
        login: "sshieh",
        id: 73007
    }
};

result.phNumber = "9108064198";
console.log(result.phNumber);*/

var results = [{
    name: "JQuery",
    language: "javascript",
    score: 4.5,
    showLog: function() {
        
    },
    owner: {
        login: "sshieh",
        id: 73007
    }
},{
    name: "JQuery UI",
    language: "javascript",
    score: 3.5,
    showLog: function() {
        
    },
    owner: {
        login: "sshieh",
        id: 73007
    }
}];

/*console.log(results.length);
console.log(results[0].name);*/

for(var x = 0; x < results.length; x++){
    var result = results[x];
    /*if(result.score < 4) break;*/
    if(result.score > 4) continue;
    console.log(result.name);
}

/*results.push(result);
results.push({
    name: "dummmy project"
});*/

/*console.log("msg is " + typeof (msg));
console.log("resultsDiv is " + typeof (resultsDiv));

var none;
console.log("none is " + typeof (none));

var aNumber = 0;
console.log("aNumber is " + typeof (aNumber));

var trueFalse = true;
console.log("trueFalse is " + typeof (trueFalse));

if (!none){
    console.log("none is undefined");
}

if (aNumber === "10"){
    console.log("10 is 10");
}*/

/*function showMsg(msg){
    console.log("showMsg: " + msg);
}*/

/*function showMsg(msg, more) {
    if(more){
         console.log("showMsg: " + msg + more);
    }else{
        console.log("showMsg: " + msg);
    }   
}

showMsg("Some information ");
showMsg("more information", " and even more");

var showIt = function(msg) {
    console.log(msg);
}

showIt("Some msg");

function showItThen(msg, callback) {
    showIt(msg);
    callback();
}

showItThen("showItThen called", function(){
    console.log("callback called");
})
   
var inGlobal = true;

function testMe() {
    console.log("testMe(): " + inGlobal);
    
    var someMsg = "Some msg";
    console.log("testMe(): " + testMe);
    
    showItThen("with closure ", function(){
        showIt("testMe with closure() " + someMsg);
    });
}

testMe();*/