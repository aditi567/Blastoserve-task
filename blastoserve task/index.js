var submitButton = $("#btn");
submitButton.click(function(){
    var count = $("#box .rectangle").length;
    if(count !== 0){
        $("#box").empty();
    }

   const noOfRectangles = document.getElementById('input').value ;
   for(var i=0; i<noOfRectangles; i++){
       
      this.element= $('#box').append($('<canvas></canvas>').addClass("rectangle"));
      var $canvas = $('.rectangle:eq('+i+')');
      const canvas = $('.rectangle')
      var canvasPosition = {
          x: $canvas.offset().left,
          y: $canvas.offset().top
      };
      var $box = $('#box');
      var boxPosition = {
          x: $box.offset().left,
          y: $box.offset().top
      };
      var x= Math.round(canvasPosition.x - boxPosition.x);
      var y= Math.round(canvasPosition.y - boxPosition.y);
      var ctx = canvas[i].getContext("2d");
      ctx.font = "25px Arial";
      ctx.fillText("["+x+","+y+"]",105,85);
  
}

});




