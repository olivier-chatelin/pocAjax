$(function () {
    // photos aside gauche

    var newIndex = 0
    var oldIndex = 0;
    chargePortrait(0);
    chargeCouleur(0);
        // function pour changer photo aside
        function effacePortrait(z){
            $('.photoCharac').eq(z).animate({
                opacity:"0"
            },250);
        }
        function chargePortrait(z){
            $('.photoCharac').eq(z).animate({
                opacity:"1"
            },250);
        }
        function chargeCouleur(z){
            $(('.bw-'+String(z+1))).animate({
                opacity:"0"
            },250);
      

            
        }
        function chargeBw(z){
            // if(z == 0)z=8;
            $(('.bw-'+String(z+1))).animate({
                opacity:"1"
            },250);
       

          
        }
        function animer(){
            effacePortrait(oldIndex);
            chargePortrait(newIndex);
            chargeBw(oldIndex);
            chargeCouleur(newIndex);
            oldIndex = newIndex;
        }

    //************************************************ */
    //* Les listners                                 *
    //************************************************ */

    // Le hover

    $('.charac').mouseenter(function (e) {
            // over
            var a = $(this).index();
            var add = ($(this).parent().attr('id') == "characList2")?4:0;
            console.log(add);
            a += add; 
            newIndex = a;
            $(this).css("cursor","pointer");
            animer();
            
            
            
        });
    $('#characGrid').mouseleave(function () { 
            newIndex = 0;
            animer();        
    });

        

    
});