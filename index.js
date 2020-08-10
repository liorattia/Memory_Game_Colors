let clickedcard = null;
let preventclick = false;
let combosfound = 0;

const colors = [
    'red',
    'purple',
    'yellow',
    'lightgreen',
    'navy',
    'grey',
    'mediumpurple',
    'darkgreen'
]

const cards = [...document.querySelectorAll('.card')];

for (let color of colors) {
    const cardAindex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAindex];
    cards.splice(cardAindex,1);
    cardA.className += ` ${color}`;
    cardA.setAttribute('data-color', color);

    const cardBindex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBindex];
    cards.splice(cardBindex, 1);
    cardB.className += ` ${color}`;
    cardB.setAttribute('data-color',color);
    
}

function oncardclick(e){
    
    //set target card
    const target = e.currentTarget;

    //if press twice target card
    if (target === clickedcard ||
            target.className.includes('done')) 
            {
        return;
    }

    target.className = target.className
    .replace('color-hidden','')
    .trim();

    target.className +=' done';

    if(!clickedcard)
    {
        clickedcard = target;
    
    } else if (clickedcard){
        
        if (clickedcard.getAttribute('data-color') !== target.getAttribute('data-color') ) {
            preventclick = true;

            setTimeout(() => {
                clickedcard.className = 
                    clickedcard.className.replace('done','').trim() + ' color-hidden';
                    target.className = 
                    target.className.replace('done','').trim() + ' color-hidden';
                    
                    clickedcard = null;
                    preventclick = false;

                }, 500);
        }
        else{
            clickedcard = null;
            combosfound++;

            if (combosfound == 8 ) {
                alert("כל הכבוד!!!");
            }
            }
    }
}