function encodeBase64(str){
    return btoa(str);
  }

  function decodeBase64(str){
    return atob(str);
  }

  const originalURL = "https://arsenicv.github.io/test-repo/Untitled.mp4";

  const encodedURL = encodeBase64(originalURL);
  console.log("Encoded URL:", encodedURL);


  document.getElementById("back-vid").src = decodeBase64(encodedURL);

  document.getElementById("back-vid").addEventListener("contextmenu",function (e){
    e.preventDefault();
  });