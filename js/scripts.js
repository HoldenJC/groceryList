$(function(){
  $("#groceryList").submit(function(event){
    // debugger;
    var secondToFinalArray = [];
    for (var i = 0; i < 4; i++){
      secondToFinalArray.push($("input#item" + (i + 1)).val());
    }
    secondToFinalArray.sort();
    finalArray = secondToFinalArray.map(function(listItem){
      return listItem.toUpperCase();
    });
    $("#groceryList").addClass("hideMe");
      finalArray.forEach(function(listItem){
        $(".finalList").append('<li>' + listItem+ '</li>');
      })
      event.preventDefault();
  });

});
