function typeWriter() {
    const text = "I'm Sashko Milushev, a passionate software developer who enjoys learning new technologies, creating innovative solutions and dive into solving problems. I'm excited to collaborate with like-minded individuals and take on new challenges in the world of software development.";
    const typingText = document.getElementById("typing-text");
    let i = 0;
    const speed = 45;
  
    const intervalId = setInterval(function () {
      if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(intervalId);
        const halfwayIndex = Math.ceil(text.length / 2);
        typingText.innerHTML = typingText.innerHTML.slice(0, halfwayIndex) + '<br>' + typingText.innerHTML.slice(halfwayIndex);
        const buttons = document.getElementById("buttons");
        buttons.style.display = "block";
      }
    }, speed);
  }
  
  typeWriter();
