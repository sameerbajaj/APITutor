document.getElementById("zeroth-next").addEventListener("click", function(){
  if (true) {
    $('#myCarousel').carousel(1);
    document.getElementById("call-icon1").style.opacity=1;
    document.getElementById("overview-icon").style.border="0px";
    document.getElementById("call-icon1").style.border="3px #333 solid";
    document.getElementById("call-icon1").style.borderRadius="25px";    


  }
}); 
// step 1 //


var stepOneComplete = false;

document.getElementById("first-call").addEventListener("click", function(){
  //update image: turn lights on
  document.getElementById("stages").src = "./spotify_1.png";
  document.getElementById("json-text").innerHTML="{\n\
 {\n\
  \"artists\": {\n\
    \"href\": \"https:\/\/api.spotify.com\/v1\/search?query=adele&offset=0&limit=20&type=artist\",\n\
    \"items\": [\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/4dpARuHxo51G3z768sgnrY\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/4dpARuHxo51G3z768sgnrY\",\n\
        \"id\": \"4dpARuHxo51G3z768sgnrY\",\n\
        \"name\": \"Adele\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:4dpARuHxo51G3z768sgnrY\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/19RHMn8FFkEFmhPwyDW2ZC\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/19RHMn8FFkEFmhPwyDW2ZC\",\n\
        \"id\": \"19RHMn8FFkEFmhPwyDW2ZC\",\n\
        \"name\": \"Robyn Adele Anderson\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:19RHMn8FFkEFmhPwyDW2ZC\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/5yUp79jSBSGdkbufl2hmcY\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/5yUp79jSBSGdkbufl2hmcY\",\n\
        \"id\": \"5yUp79jSBSGdkbufl2hmcY\",\n\
        \"name\": \"Adele Anthony\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:5yUp79jSBSGdkbufl2hmcY\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/6HZ5IH5ksF7cs4mg0HQlSN\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/6HZ5IH5ksF7cs4mg0HQlSN\",\n\
        \"id\": \"6HZ5IH5ksF7cs4mg0HQlSN\",\n\
        \"name\": \"Adele Adkins\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:6HZ5IH5ksF7cs4mg0HQlSN\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/0UhoqhbYoPuORgj24VBUcp\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/0UhoqhbYoPuORgj24VBUcp\",\n\
        \"id\": \"0UhoqhbYoPuORgj24VBUcp\",\n\
        \"name\": \"Ad\u00e8le Anderson\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:0UhoqhbYoPuORgj24VBUcp\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/10UHmKyfLXudqVHU9PnHEZ\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/10UHmKyfLXudqVHU9PnHEZ\",\n\
        \"id\": \"10UHmKyfLXudqVHU9PnHEZ\",\n\
        \"name\": \"Laila Adele\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:10UHmKyfLXudqVHU9PnHEZ\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/06wuY3VLVdOEyRLGGpHIqK\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/06wuY3VLVdOEyRLGGpHIqK\",\n\
        \"id\": \"06wuY3VLVdOEyRLGGpHIqK\",\n\
        \"name\": \"Adele Harley\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:06wuY3VLVdOEyRLGGpHIqK\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/16JF4ZutZxatsEcaNRpHZq\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/16JF4ZutZxatsEcaNRpHZq\",\n\
        \"id\": \"16JF4ZutZxatsEcaNRpHZq\",\n\
        \"name\": \"Adele Lipuma\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:16JF4ZutZxatsEcaNRpHZq\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/5NPwf6OSjPQoYx28ON2Uho\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/5NPwf6OSjPQoYx28ON2Uho\",\n\
        \"id\": \"5NPwf6OSjPQoYx28ON2Uho\",\n\
        \"name\": \"Adele Taylor\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:5NPwf6OSjPQoYx28ON2Uho\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/7wm3zwQUO1hPk4m4sOUz1E\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/7wm3zwQUO1hPk4m4sOUz1E\",\n\
        \"id\": \"7wm3zwQUO1hPk4m4sOUz1E\",\n\
        \"name\": \"Ad\u00e8le Carlier\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:7wm3zwQUO1hPk4m4sOUz1E\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/5zEh5XsQAkg0iUY3vPNU0l\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/5zEh5XsQAkg0iUY3vPNU0l\",\n\
        \"id\": \"5zEh5XsQAkg0iUY3vPNU0l\",\n\
        \"name\": \"Ester Adele\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:5zEh5XsQAkg0iUY3vPNU0l\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/2PoFSrgZTu1YQ9kH5K3ytN\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/2PoFSrgZTu1YQ9kH5K3ytN\",\n\
        \"id\": \"2PoFSrgZTu1YQ9kH5K3ytN\",\n\
        \"name\": \"Adele Parker\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:2PoFSrgZTu1YQ9kH5K3ytN\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/0pNIifC8tolZOMkQi08w7L\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/0pNIifC8tolZOMkQi08w7L\",\n\
        \"id\": \"0pNIifC8tolZOMkQi08w7L\",\n\
        \"name\": \"Adele Bloemendaal\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:0pNIifC8tolZOMkQi08w7L\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/71gkxf3mxb8HEupKuGYMGm\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/71gkxf3mxb8HEupKuGYMGm\",\n\
        \"id\": \"71gkxf3mxb8HEupKuGYMGm\",\n\
        \"name\": \"Adele Erichsen\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:71gkxf3mxb8HEupKuGYMGm\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/24kWeAjsqbv89720WP1PDQ\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/24kWeAjsqbv89720WP1PDQ\",\n\
        \"id\": \"24kWeAjsqbv89720WP1PDQ\",\n\
        \"name\": \"Adele Stolte\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:24kWeAjsqbv89720WP1PDQ\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/0efwUZapTfJs8BJHoJKUke\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/0efwUZapTfJs8BJHoJKUke\",\n\
        \"id\": \"0efwUZapTfJs8BJHoJKUke\",\n\
        \"name\": \"Adele Addison\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:0efwUZapTfJs8BJHoJKUke\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/1qFXKR3CrYFV92FiOJ0b1W\"\n\
        },\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/1qFXKR3CrYFV92FiOJ0b1W\",\n\
        \"id\": \"1qFXKR3CrYFV92FiOJ0b1W\",\n\
        \"name\": \"Adele Astaire\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:1qFXKR3CrYFV92FiOJ0b1W\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/6Rs9w2G9aOpqSLL5Rlzrk7\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/6Rs9w2G9aOpqSLL5Rlzrk7\",\n\
        \"id\": \"6Rs9w2G9aOpqSLL5Rlzrk7\",\n\
        \"name\": \"Adele Wilson\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:6Rs9w2G9aOpqSLL5Rlzrk7\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/34wILuzvdC6Xs71niywAQs\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/34wILuzvdC6Xs71niywAQs\",\n\
        \"id\": \"34wILuzvdC6Xs71niywAQs\",\n\
        \"name\": \"Adele Morgan\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:34wILuzvdC6Xs71niywAQs\"\n\
      },\n\
      {\n\
        \"external_urls\": {\n\
          \"spotify\": \"https:\/\/open.spotify.com\/artist\/6s3tNdunANx1RAqd6Y5ix8\"\n\
        },\n\
        \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/6s3tNdunANx1RAqd6Y5ix8\",\n\
        \"id\": \"6s3tNdunANx1RAqd6Y5ix8\",\n\
        \"name\": \"Adele Red\",\n\
        \"type\": \"artist\",\n\
        \"uri\": \"spotify:artist:6s3tNdunANx1RAqd6Y5ix8\"\n\
      }\n\
    ],\n\
    \"limit\": 20,\n\
    \"next\": \"https:\/\/api.spotify.com\/v1\/search?query=adele&offset=20&limit=20&type=artist\",\n\
    \"offset\": 0,\n\
    \"previous\": null,\n\
    \"total\": 159\n\
  }\n\
}\
 "
});

document.getElementById("status").addEventListener("keypress", function(e){
  if (e.keyCode===13){
    if (document.getElementById("status-input").value==="4dpARuHxo51G3z768sgnrY") {
        document.getElementById("status-feedback").className = "alert alert-success";
        document.getElementById("status-feedback").innerHTML = "Yes! That is the correct artist ID.";
        document.getElementById("status-feedback").style.display="block";
        document.getElementById("stages").src = "./spotify_1.png";

        stepOneComplete = true;
    } else {
        document.getElementById("status-feedback").className = "alert alert-warning";
        document.getElementById("status-feedback").innerHTML = "Invalid Artist ID";
        document.getElementById("status-feedback").style.display="block";
        document.getElementById("stages").src = "./spotify_0.png";
        stepOneComplete = false;
    }
  }
});

document.getElementById("first-prev").addEventListener("click", function(e){
  if (true) {
    $('#myCarousel').carousel(0);
    document.getElementById("call-icon2").style.border="0px";
    document.getElementById("call-icon1").style.border="3px #333 solid";
    document.getElementById("call-icon1").style.borderRadius="25px";   
  }
});
document.getElementById("first-next").addEventListener("click", function(){
  if (stepOneComplete === true || document.getElementById("status-input").value==="4dpARuHxo51G3z768sgnrY") {
    $('#myCarousel').carousel(2);
    stepOneComplete = true;
    document.getElementById("call-icon2").style.opacity=1;
    document.getElementById("json-text").innerHTML="";
    document.getElementById("call-icon1").style.border="0px";
    document.getElementById("call-icon2").style.border="3px #333 solid";
    document.getElementById("call-icon2").style.borderRadius="25px";  
  } else {
    document.getElementById("status-feedback").className = "alert alert-warning";
    document.getElementById("status-feedback").innerHTML = "Invalid Artist ID";
    document.getElementById("status-feedback").style.display="block";
    document.getElementById("stages").src = "./spotify_0.png";
    stepOneComplete = false;
  }
}); 
/////////////////////////////////////////////////////////////////////////////


/// step 2 ///
var stepTwoComplete = false;

document.getElementById("api-call-input").addEventListener("keypress", function(e){
  if (e.keyCode===13){
    if (document.getElementById("api-call-input").value==="v1/artists/4dpARuHxo51G3z768sgnrY") {
        document.getElementById("api-call-feedback").className = "alert alert-success";
        document.getElementById("api-call-feedback").innerHTML = "Correct! You can view the response on the left.";
        document.getElementById("api-call-feedback").style.display="block";
        document.getElementById("stages").src = "./spotify_2.png";
        document.getElementById("json-text").innerHTML="jsonObject:\n\
\n\
{\n\
  \"external_urls\": {\n\
    \"spotify\": \"https:\/\/open.spotify.com\/artist\/4dpARuHxo51G3z768sgnrY\"\n\
  },\n\
  \"followers\": {\n\
    \"href\": null,\n\
    \"total\": 3457064\n\
  },\n\
  \"genres\": [\n\
    \"pop\"\n\
  ],\n\
  \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/4dpARuHxo51G3z768sgnrY\",\n\
  \"id\": \"4dpARuHxo51G3z768sgnrY\",\n\
  \"images\": [\n\
    {\
      \"height\": 1000,\n\
      \"url\": \"https:\/\/i.scdn.co\/image\/ccbe7b4fef679f821988c78dbd4734471834e3d9\",\n\
      \"width\": 1000\n\
    },\n\
    {\
      \"height\": 640,\n\
      \"url\": \"https:\/\/i.scdn.co\/image\/f8737f6fda048b45efe91f81c2bda2b601ae689c\",\n\
      \"width\": 640\n\
    },\n\
    {\n\
      \"height\": 200,\n\
      \"url\": \"https:\/\/i.scdn.co\/image\/df070ad127f62d682596e515ac69d5bef56e0897\",\n\
      \"width\": 200\n\
    },\n\
    {\n\
      \"height\": 64,\n\
      \"url\": \"https:\/\/i.scdn.co\/image\/cbbdfb209cc38b2999b1882f42ee642555316313\",\n\
      \"width\": 64\n\
    }\n\
  ],\n\
  \"name\": \"Adele\",\n\
  \"popularity\": 94,\n\
  \"type\": \"artist\",\n\
  \"uri\": \"spotify:artist:4dpARuHxo51G3z768sgnrY\"\n\
}"
        stepTwoComplete = true;
    
    } else {
        document.getElementById("api-call-feedback").className = "alert alert-warning";
        document.getElementById("api-call-feedback").innerHTML = "Invalid API Call. Check the Endpoint Reference above for correct format. Hint: There should be no \"{\" or \"}\"";
        document.getElementById("api-call-feedback").style.display="block";
        document.getElementById("stages").src = "./spotify_0.png";
        stepTwoComplete = false;
    }
  }
});


document.getElementById("second-prev").addEventListener("click", function(e){
  if (true) {
    $('#myCarousel').carousel(1);
    document.getElementById("call-icon2").style.border="0px";
    document.getElementById("call-icon1").style.border="3px #333 solid";
    document.getElementById("call-icon1").style.borderRadius="25px";   
  }
});
document.getElementById("second-next").addEventListener("click", function(){
  if (stepTwoComplete === true || document.getElementById("api-call-input").value==="v1/artists/4dpARuHxo51G3z768sgnrY") {
    stepTwoComplete = true;
    document.getElementById("json-text").innerHTML="jsonObject:\n\
\n\
{\n\
  \"external_urls\": {\n\
    \"spotify\": \"https:\/\/open.spotify.com\/artist\/4dpARuHxo51G3z768sgnrY\"\n\
  },\n\
  \"followers\": {\n\
    \"href\": null,\n\
    \"total\": 3457064\n\
  },\n\
  \"genres\": [\n\
    \"pop\"\n\
  ],\n\
  \"href\": \"https:\/\/api.spotify.com\/v1\/artists\/4dpARuHxo51G3z768sgnrY\",\n\
  \"id\": \"4dpARuHxo51G3z768sgnrY\",\n\
  \"images\": [\n\
    {\
      \"height\": 1000,\n\
      \"url\": \"https:\/\/i.scdn.co\/image\/ccbe7b4fef679f821988c78dbd4734471834e3d9\",\n\
      \"width\": 1000\n\
    },\n\
    {\
      \"height\": 640,\n\
      \"url\": \"https:\/\/i.scdn.co\/image\/f8737f6fda048b45efe91f81c2bda2b601ae689c\",\n\
      \"width\": 640\n\
    },\n\
    {\n\
      \"height\": 200,\n\
      \"url\": \"https:\/\/i.scdn.co\/image\/df070ad127f62d682596e515ac69d5bef56e0897\",\n\
      \"width\": 200\n\
    },\n\
    {\n\
      \"height\": 64,\n\
      \"url\": \"https:\/\/i.scdn.co\/image\/cbbdfb209cc38b2999b1882f42ee642555316313\",\n\
      \"width\": 64\n\
    }\n\
  ],\n\
  \"name\": \"Adele\",\n\
  \"popularity\": 94,\n\
  \"type\": \"artist\",\n\
  \"uri\": \"spotify:artist:4dpARuHxo51G3z768sgnrY\"\n\
}"
    $('#myCarousel').carousel(3);
    document.getElementById("parse-icon1").style.opacity=1;
    document.getElementById("call-icon2").style.border="0px";
    document.getElementById("parse-icon1").style.border="3px #333 solid";
    document.getElementById("parse-icon1").style.borderRadius="25px";     
  } else {
    document.getElementById("api-call-feedback").className = "alert alert-warning";
    document.getElementById("api-call-feedback").innerHTML = "Invalid API Call. Check the Endpoint Reference above for correct format. Hint: There should be no \"{\" or \"}\"";
    document.getElementById("api-call-feedback").style.display="block";
    document.getElementById("stages").src = "./spotify_0.png";
    stepTwoComplete = false;
  }
}); 

///////////////////////////////////////////////////////

/// step 3 /////

var stepThreeComplete = false;

document.getElementById("artist-name-input").addEventListener("keypress", function(e){
  if (e.keyCode===13){
    if (document.getElementById("artist-name-input").value==="jsonObject['name']") {
        document.getElementById("artist-name-feedback").className = "alert alert-success";
        document.getElementById("artist-name-feedback").innerHTML = "Yay!";
        document.getElementById("artist-name-feedback").style.display="block";
        //update image: Adele shows up
        document.getElementById("stages").src = "./spotify_3.png";
        stepThreeComplete = true;
    
    } else {
        document.getElementById("artist-name-feedback").className = "alert alert-warning";
        document.getElementById("artist-name-feedback").innerHTML = "Invalid Artist Name";
        document.getElementById("artist-name-feedback").style.display="block";
        document.getElementById("stages").src = "./spotify_0.png";
        stepThreeComplete = false;
    }
  }
});


document.getElementById("third-prev").addEventListener("click", function(e){
  if (true) {
    $('#myCarousel').carousel(2);
    document.getElementById("parse-icon1").style.border="0px";
    document.getElementById("call-icon2").style.border="3px #333 solid";
    document.getElementById("call-icon2").style.borderRadius="25px"; 
  }
});
document.getElementById("third-next").addEventListener("click", function(){
  if (stepThreeComplete === true || document.getElementById("artist-name-input").value==="jsonObject['name']") {
    stepThreeComplete = true;
    $('#myCarousel').carousel(4);
    document.getElementById("parse-icon2").style.opacity=1;
    document.getElementById("parse-icon1").style.border="0px";
    document.getElementById("parse-icon2").style.border="3px #333 solid";
    document.getElementById("parse-icon2").style.borderRadius="25px";         
  } else {
        document.getElementById("artist-name-feedback").className = "alert alert-warning";
        document.getElementById("artist-name-feedback").innerHTML = "Invalid Artist Name";
        document.getElementById("artist-name-feedback").style.display="block";
        document.getElementById("stages").src = "./spotify_0.png";
        stepThreeComplete = false;
  }
}); 

///////////////////////////////////////////////////////
var stepFourComplete = false;

document.getElementById("artist-popularity-input").addEventListener("keypress", function(e){
  if (e.keyCode===13){
    if (document.getElementById("artist-popularity-input").value==="jsonObject['popularity']") {
        document.getElementById("artist-popularity-feedback").className = "alert alert-success";
        document.getElementById("artist-popularity-feedback").innerHTML = "Yay!";
        document.getElementById("artist-popularity-feedback").style.display="block";
        //update image: crowd
        document.getElementById("stages").src = "./spotify_4.png";

        stepThreeComplete = true;
    
    } else {
        document.getElementById("artist-popularity-feedback").className = "alert alert-warning";
        document.getElementById("artist-popularity-feedback").innerHTML = "Invalid Artist Popularity";
        document.getElementById("artist-popularity-feedback").style.display="block";
        document.getElementById("stages").src = "./spotify_0.png";
        stepThreeComplete = false;
    }
  }
});

document.getElementById("fourth-prev").addEventListener("click", function(e){
  if (true) {
    $('#myCarousel').carousel(3);
    document.getElementById("parse-icon2").style.border="0px";
    document.getElementById("parse-icon1").style.border="3px #333 solid";
    document.getElementById("parse-icon1").style.borderRadius="25px";   
  }
});

document.getElementById("fourth-next").addEventListener("click", function(){
  if (stepThreeComplete === true || document.getElementById("artist-popularity-input").value==="jsonObject['popularity']") {
    stepThreeComplete = true;
    console.log('DONE!!!');
    document.getElementById("parse-icon2").style.border="0px";
  }
});




function StartOrStop(audioFile) {
    var audie = document.getElementById("myAudio");
    if (!audie.src || audie.src !== audioFile) audie.src = audioFile; // check if there's a src already and if the current src is not the same with the new one, change it. Or don't do anything.
    if (audie.paused == false)
        audie.pause();
    else
        audie.play();
}

