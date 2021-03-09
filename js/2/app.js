
function assign(){
    let x, anwser;
    x = 1;
    while(x <= 1000){
        switch (x) {
            case 1:
                anwser = "penisa twoja mamusia miała w buzi.";
                console.log(x + " " + anwser);
                break;
            case 2:
                anwser = "penisy twoja mamusia w buzi schowała.";
                console.log(x + " " + anwser);
                break;
                
            case 3: anwser = "penisy twoja stara w buzi zachowała.";
                console.log(x + " " + anwser);
                break;
            case 4: 
                anwser = "chuje twoja stara w buzi dziś miała.";
                console.log(x + " " + anwser) ;
                break;
            case 1000:
                anwser = "penisów w buzi, a i tak pocałowała cie na dobra noc.";
                console.log(`Twoja stara miała ${x} ${anwser}`);
                break;
            default:
                anwser = "penisów miała twoja stara w ryju!";
                console.log(x + " " + anwser);
        }
        x++;
    }
}


const assignButton = document.querySelector('.task-button');



assignButton.addEventListener('click', function(e){console.log(e);});





