var quotes = [['We want to thank you from the bottom of our hearts for everything you have done and are still doing to enable us to purchase the house'
,'Kevin and Lina']
,['Thanks for the top service.','David B']
,['Hi Sarah, Thanks for your help on this, it is a nice change to work with someone who does as they say.'
,'Steve B – Financial Adviser']
,['Talked to Kathryn yesterday and she had all awesome things to say about you and how easy and informative you made the process for them.  She said you did everything so well and were so friendly that she’d recommend you to anyone.'
,'Rachel – Financial Consultant']];
var currentQuote = 0;
var changeNext = function () {
  if(currentQuote >= 3){
    currentQuote = 0;
  }else{
    currentQuote = currentQuote + 1;
  }
  $("#testimonial").fadeOut();
  $("#testimonialName").fadeOut();
  var interv = setTimeout(function(){changeText()},1000);
};

var changeText = function () {
  var testimonial =  document.getElementById("testimonial");
  document.getElementById("testimonial").innerHTML = quotes[currentQuote][0];
  document.getElementById("testimonialName").innerHTML = quotes[currentQuote][1];
  $("#testimonial").fadeIn();
  $("#testimonialName").fadeIn();
}

var changeLeft = function () {
  if(currentQuote != 0){
  currentQuote = currentQuote - 1;
  $("#testimonial").fadeOut();
  var interv = setTimeout(function(){changeText()},1000);
}
};
