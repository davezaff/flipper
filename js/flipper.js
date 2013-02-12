 $(document).ready (function(){
	    $( "#selectable" ).selectable();	
		$('#txtArea').focus();
		var day = new Date();
		var x = 1;
		
		$('#btnAdd').click(function(){
		
        var val = $('#txtArea').val(); 
			$('ol').append('<li id='+x +'>' + x +'.   '+ val + '</li>');
			 x++;
			$( "#selectable" ).selectable('destroy');
			$( "#selectable" ).selectable();
			$('#txtArea').val('');
			$('#txtArea').focus();
		
		});
		$('#btnDel').click (function(){
		
		$('#selectable').empty();
		$( "#selectable" ).selectable('destroy');
		$( "#selectable" ).selectable();
		
		
		});
		
		
		});
  
    
  


