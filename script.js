$(function () {
    // photos aside gauche
    var newIndex = 0
    var index = 0;
    chargePortrait(0);
    chargeCouleur(0);
        // function pour changer photo aside
        function effacePortrait(z){
            $('.photoCharac').eq(z).animate({
                opacity:"0"
            },500);
        }
        function chargePortrait(z){
            $('.photoCharac').eq(z).animate({
                opacity:"1"
            },500);
            index = z;
        }
        function chargeCouleur(z){
            $(('.bw-'+String(z+1))).animate({
                opacity:"0"
            },250);
        }
        function chargeBw(z){
            if(z == 0)z=8;
            $(('.bw-'+String(z))).animate({
                opacity:"1"
            },250);
        }



        
    $('.photoCharac').click(function(){

        (newIndex == 7)? newIndex = 0 : newIndex++;
        console.log(newIndex);

        effacePortrait(index);
        chargePortrait(newIndex);
        chargeBw(index);
        chargeCouleur(newIndex);


    });
    
});