//your JS code here. If required.
const num=document.querySelector("#num");

let numberArr=[];
for(let i=1;i<=20;i++){
	if(i%3==0 && i%5==0){
		numberArr.push("FizzBuzz");
	}else if(i%5==0){
		numberArr.push("Buzz")
	}else if(i%3==0){
		numberArr.push("Fizz")
	}else{
		numberArr.push(i);
	}
}

numberArr.join("/n");
numberArr.map((i)=>{
	let p=document.createElement("p")
	p.innerText=i;
	num.append(p)
})