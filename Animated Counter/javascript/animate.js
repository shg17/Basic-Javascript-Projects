// this will return a node list 
 const counters=document.querySelectorAll('.counter');
//  console.log(counters);

const speed=200;


counters.forEach(counter=>{
    const updateCount=()=>{
        // har counter ka data target grab kr lenge
        // these data targets are of type string
        // by adding +sign we can convert them back to numbers
        const target=+counter.getAttribute('data-target');

        // to grab the innertext of the counter
        const count=+counter.innerText;


        // lower the speed higher is the inc
        const inc=target/speed;

        console.log(count);


        if(count<target){
            counter.innerText=Math.ceil(count+inc);
            setTimeout(updateCount,1);
        }else{
            count.innerText=target;
        }
    }
updateCount();

});
