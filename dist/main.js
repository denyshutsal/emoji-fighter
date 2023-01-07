let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];

let stageEl = document.getElementById("stage");
let fightBtn = document.getElementById("fightBtn");

fightBtn.addEventListener("click", function() {
  let randomEmojiIndex1 = Math.floor(Math.random() * fighters.length);
  let randomEmojiIndex2 = Math.floor(Math.random() * fighters.length);

  stageEl.textContent = fighters[randomEmojiIndex1] + " VS " + fighters[randomEmojiIndex2];
})