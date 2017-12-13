  
         $(window).load(function(){
         $('img').on('click', function(){
             var src=$(this).attr('src');
             $("#model-img").attr('src',src);
             $("#joes").modal('show');
         });
        });
