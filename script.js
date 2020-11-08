$(function () {
    // photos aside gauche
    var newIndex = 0
    var index = 0;
    chargePortrait(0);
        // function pour changer photo aside
        function effacePortrait(z){
            $('.photoCharac').eq(z).animate({
                opacity:"0"
            },1000);
        }
        function chargePortrait(z){
            $('.photoCharac').eq(z).animate({
                opacity:"1"
            },1000);
            index = z;
        }



        
    $('.photoCharac').click(function(){

        (newIndex == 7)? newIndex = 0 : newIndex++;
        console.log(newIndex);

        effacePortrait(index);
        chargePortrait(newIndex);


    });
    
});