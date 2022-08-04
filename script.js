let container = document.createElement("container");
let ele = document.createElement("div");
let span = document.createElement("span");
span.innerHTML= 10;
ele.append(span);
container.append(ele);
document.body.append(container);

let count=10;
setTimeout(()=>{
    count = count-1
    span.innerHTML = count
    setTimeout(()=>{
        count = count-1
        span.innerHTML =count
        setTimeout(()=>{
            count = count-1
            span.innerHTML = count
            setTimeout(()=>{
                count = count-1
                span.innerHTML =count
                setTimeout(()=>{
                    count = count-1
                    span.innerHTML = count
                    setTimeout(()=>{
                        count = count-1
                        span.innerHTML =count
                        setTimeout(()=>{
                            count = count-1
                            span.innerHTML = count
                            setTimeout(()=>{
                                count = count-1
                                span.innerHTML =count
                                setTimeout(()=>{
                                    count =count-1
                                    span.innerHTML =count
                                    setTimeout(()=>{
                                        count = "HAPPY INDEPENDENCE DAY";
                                        span.innerHTML =count
                                    },1000)
                                },1000)
                                
                            },1000)
                        },1000)
                
                    },1000)
                },1000)
                
            },1000)
        },1000)

    },1000)
},1000)