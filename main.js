

$.get("questions.json",function(data){
  console.log(data);
});
function setQuest (json) {
  var wrapper = $("#wrapper");
  var form = $("<form>", {id:index});
  var text,answer,correct,multi;
  var questions = json.questions;
  for(var i = 0; i < questions.length; i++) {
    text = questions[i].text;
    answers = questions[i].answers;
    correct = questions[i].correct;
    multi = questions[i].multi;
    form.append($("<p>").html(text));
    for(var j = 0; j < answers.length; j++) {
      form.append($("<div>").html("<lable for='" + i + "" + j + "'>" + answers[j] + "</lable>"));
    }
  }
}
