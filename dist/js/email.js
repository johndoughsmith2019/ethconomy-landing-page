$('#earlyAccessFormTop').on('submit', function(e) {
  $('#earlyAccessFormTop *').fadeOut(0);
  $('#earlyAccessFormTop').prepend('Thank you and stay tuned for our release!');
});

$('#earlyAccessFormBottom').on('submit', function(e) {
  $('#earlyAccessFormBottom *').fadeOut(0);
  $('#earlyAccessFormBottom').prepend('Thank you and stay tuned for our release!');
});
