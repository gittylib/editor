function bold(){
				    var span = document.createElement("b");
       
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}


function h2(){
var node = document.createElement("h2"); 
node.innerHTML="Give a Sub Heading";       

var span = document.createElement("p");
span.innerHTML="Continue with your story";

document.getElementById("canvas").appendChild(node);

 document.getElementById("canvas").appendChild(span);
 
}

function link(){
			var link = prompt("Paste your link");
			
		if (link != null){
						
			var span = document.createElement("a");
       span.setAttribute("href", link);
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
    
} else{
				console.log("Nothing")
				}
				}


function img(){
				
var imgLink = prompt("Paste your link");

if (imgLink != null){
				var img = document.createElement("img");
       img.setAttribute("src", imgLink);       


var span = document.createElement("p");
span.innerHTML="Continue with your story";

document.getElementById("canvas").appendChild(img);

 document.getElementById("canvas").appendChild(span);
				}
				else {
								console.log("nothing");
								}
				
 
}

function textColor() {
				var textColor = prompt("Hex Color code #F1F1F1");
				
				if (textColor != null){
    var span = document.createElement("span");
    span.style.color = textColor;
    
    
    
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount) {
            var range = sel.getRangeAt(0).cloneRange();
            range.surroundContents(span);
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
    }
}


function ul(){
var node = document.createElement("ul");
var li = document.createElement("li");
li.innerHTML="List item";       

var span = document.createElement("p");
span.innerHTML="Continue with your story";


document.getElementById("canvas").appendChild(node);
node.appendChild(li);
 document.getElementById("canvas").appendChild(span);
 
}

function ol(){
var node = document.createElement("ol");
var li = document.createElement("li");
li.innerHTML="List item";       

var span = document.createElement("p");
span.innerHTML="Continue with your story";


document.getElementById("canvas").appendChild(node);
node.appendChild(li);
 document.getElementById("canvas").appendChild(span);
 
}



function getCode(){
		var code = document.getElementById("canvas").innerHTML;

var $temp = $("<input>");
  $("body").append($temp);
  +$temp.val('<link rel="stylesheet" href="https://raw.githubusercontent.com/gittylib/editor/master/gittylib.css">'+code).select();
  document.execCommand("copy");
  $temp.remove();
  alert("Copied");
  
				}
