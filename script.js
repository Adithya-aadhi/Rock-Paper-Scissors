const buttons=document.querySelectorAll('.choice button');
const output=document.getElementById('output');

    function computerchoice(){
        const choice=['rock','paper','scissor'];
        const random=Math.floor(Math.random()*choice.length);
        return choice[random];
    }

    function finalwinner(user,computer){
        if(user===computer){
            return 'draw';
        }
        if((user==='rock' && computer==='scissor')||(user==='scissor' && computer==='paper')||(user==='paper' && computer==='rock')){
            return 'user';
        }
        return 'computer';
    }
    function result(winner, computer,user) {
        if (winner === 'draw') {
            output.innerText = `User:${user} \nComputer:${computer} \nIt's a draw!`;
        } else if (winner === 'user') {
            output.innerText = `User:${user} \nComputer:${computer} \nYou win!!`;
        } else {
            output.innerText = `User:${user} \nComputer:${computer} \nYou lose.`;
        }
    }

    for(let i=0;i<buttons.length;i++){
        buttons[i].addEventListener('click',function(){
            const user=this.className;
            const computer=computerchoice();
            const winner=finalwinner(user,computer);
            result(winner,computer,user);
        });
}   