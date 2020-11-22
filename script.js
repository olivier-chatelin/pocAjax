$(function () {
    // photos aside gauche

    var newIndex = 0
    var oldIndex = 0;
    var id;

    chargePortrait(0);
    chargeCouleur(0);
        // function pour changer photo aside
        function effacePortrait(z){
            $('.photoCharac').eq(z).animate({
                opacity:"0"
            },125);
        }
        function chargePortrait(z){
            $('.photoCharac').eq(z).animate({
                opacity:"1"
            },125);
        }
        function chargeCouleur(z){
            $(('.bw-'+String(z+1))).animate({
                opacity:"0"
            },125);
      

            
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
            a += add; 
            newIndex = a;
            $(this).css("cursor","pointer");
            ajaxLaunch();
            animer();
            
            
            
        });
    $('#characGrid').mouseleave(function () { 
            newIndex = 0;
            animer();        
    });

    // les touches
    $(document).keyup(function (e) {
        var add;
        var key = e.keyCode;
        switch (key){
            case 39:
                add = (oldIndex == 7)? -7:1;
                break;
            case 37:
                add = (oldIndex == 0)? 7:-1;
                break;
            case 38:
                add = (oldIndex > 3)? -4:4;
                break;
            case 40:
                add = (oldIndex > 3)? -4:4;
                break;
            default:
                add = 0;
        } 
        newIndex += add;
        ajaxLaunch();
        animer();
        
    });
 
    //************************************************ */
    //*         Ajax                                   *
    //************************************************ */
    function ajaxLaunch(){
        id = newIndex+1;
        $.ajax({
            type: "get",
            url: "controller.php",
            data: "id=" + id,
            dataType: "json",
            success: function(obj){
                
                $('#name').text(obj['name']);
                $('#history').text(obj['story']);
                $('#strength').css("width",convert(obj['strength']));
                $('#speed').css("width",convert(obj['speed']));
                $('#resistance').css("width",convert(obj['resistance']));
                $('#combo').css("width",convert(obj['combo']));
            }
        });
    }
    function convert(number){
        console.log(number);
        var percent = (number/5)*100;
        return String(percent)+"%";
    }
    


        

    
});