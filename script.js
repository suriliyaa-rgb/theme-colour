
$(document).ready(function() {
    
    
    $('.btn-tema').click(function() {
        
       
        let warnaLatar = $(this).data('bg');
        
        
        let warnaFont = $(this).data('text');

        
        $('body').css({
            'background-color': warnaLatar,
            'color': warnaFont
        });
        
    });

});