function deletevalidate(event) {
	var deleteID = recID;
	var deletemarkerID;
	event.preventDefault();

	var dataString6 = '&recipeID=' + deleteID;
  	console.log(deleteID);

      $.ajax({
            type: "POST",
            url: "/findRecipeOnMap",
            data: dataString6,
            success: function(data) {
              //var latitude = data.latitude;
              //var longitude = data.longitude;
              deletemarkerID = data.markerID;
              //console.log('markerid: '+deletemarkerID);
            },
            async: false
          });

      //console.log(deletemarkerID);

    var datadelete = '&recipeID=' + deleteID + '&markerID=' + deletemarkerID;

      $.ajax({
			type: "POST",
			url: "/deleteRecipe",
			data: datadelete,
			success: function(data){
				//if (data.success===true) {
					$("#"+String(deleteID)).hide();
          $("#close_modal").click();
          $(".recipetitle").html('Recipe deleted from our database!  This marker or recipe will not show up on our home map, or when you come back to our profile!');
          $(".recipeimage").html("");
          $(".viewsvotes").html("");
          $(".est_time").html("");
          $(".recipetype").html("");
          $(".ingredients").html("");
          $(".instructions").html("");
          $(".extra_info").html('');	
          $(".deletebutton").hide();				
				//}
			}
      })
}


