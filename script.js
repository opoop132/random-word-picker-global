function pickRandom() {
  const input = document.getElementById("wordInput").value;
  const words = input.split(/[\n,]+/).map(w => w.trim()).filter(w => w);
  
  if (words.length === 0) {
    document.getElementById("result").innerText = "❌ Please enter at least one word.";
    return;
  }

  const randomIndex = Math.floor(Math.random() * words.length);
  document.getElementById("result").innerText = `🎯 ${words[randomIndex]}`;
}
