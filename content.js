var hrefFB = $(location).attr('href');

console.log(hrefFB);

var isFacebook = "facebook.com";

if (hrefFB.indexOf(isFacebook) >= 0) {
    alert('Facebook Found');
    // Redirect to Google
    window.location.replace("http://google.com");
}
