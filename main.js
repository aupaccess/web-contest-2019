let rulesClicked = false;
let mechanicsClicked = false;
let criteriaClicked = false;
let rewardClicked = false;

function clickRules(){
    console.log(rulesClicked);
    if (!rulesClicked){
        document.getElementById('rules-content').style.display = "block";
        
        if (mechanicsClicked){
            clickMechanics();
        } else if (criteriaClicked){
            clickCriteria();
        } else if (rewardClicked){
            clickReward();
        }
        
        
        rulesClicked = true;
    } else{
        document.getElementById('rules-content').style.display = "none";
        rulesClicked = false;
    }
}

function clickMechanics(){
    console.log(rulesClicked);
    if (!mechanicsClicked){
        document.getElementById('mechanics-content').style.display = "block";

        if (rulesClicked){
            clickRules();
        } else if (criteriaClicked){
            clickCriteria();
        } else if (rewardClicked){
            clickReward();
        }

        mechanicsClicked = true;
    } else{
        document.getElementById('mechanics-content').style.display = "none";
        mechanicsClicked = false;
    }
}

function clickCriteria(){
    console.log(criteriaClicked);
    if (!criteriaClicked){
        document.getElementById('criteria').style.display = "block";

        if (mechanicsClicked){
            clickMechanics();
        } else if (rulesClicked){
            clickRules();
        } else if (rewardClicked){
            clickReward();
        }

        criteriaClicked = true;
    } else{
        document.getElementById('criteria').style.display = "none";
        criteriaClicked = false;
    }
}

function clickReward(){
    console.log(rewardClicked);
    if (!rewardClicked){
        document.getElementById('reward-content').style.display = "block";

        if (mechanicsClicked){
            clickMechanics();
        } else if (criteriaClicked){
            clickCriteria();
        } else if (rulesClicked){
            clickRules();
        }

        rewardClicked = true;
    } else{
        document.getElementById('reward-content').style.display = "none";
        rewardClicked = false;
    }
}

