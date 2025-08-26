const notes = [
  "Start small, finish strong.",
  "Every task done is a step closer to your goals.",
  "Progress, not perfection.",
  "One thing at a time—focus wins.",
  "Your future self will thank you for today's effort.",
  "Break big tasks into small victories.",
  "Consistency beats intensity.",
  "Done is better than perfect.",
  "Celebrate every completed task.",
  "Keep moving forward, even if it's just a little.",
  "Small steps every day lead to big results.",
  "Stay positive and persistent.",
  "You are capable of amazing things.",
  "Focus on what you can control.",
  "Success is built on daily habits."
];

function displayNotes() {
  let count = 0;
  setInterval(() => {
    document.querySelector(".note").textContent = notes[count];
    count = (count + 1) % notes.length;
  }, 15000);
}
displayNotes();