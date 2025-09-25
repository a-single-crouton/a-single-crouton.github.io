import {} from 'https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.7/lottie.min.js';

var attachmentAnimation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById("container-one"), // required
    path: "./lotties/attachment-blue.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Attachment Micro", // optional
  });

var emojiAnimation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById("container-two"), // required
    path: "./lotties/emoji-blue.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Emoji Micro", // optional
  });

  var mergeAnimation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById("container-three"), // required
    path: "./lotties/merge-blue.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Merge Micro", // optional
  });

  var signatureAnimation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById("container-four"), // required
    path: "./lotties/signature-blue.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Signature Micro", // optional
  });

  var templateAnimation = bodymovin.loadAnimation({
    // animationData: { /* ... */ },
    container: document.getElementById("container-five"), // required
    path: "./lotties/template-blue.json", // required
    renderer: "svg", // required
    loop: true, // optional
    autoplay: true, // optional
    name: "Template Micro", // optional
  });

