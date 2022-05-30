window.onload = () => {
  const myInput = document.getElementById("dummyKeyboard");
  myInput.onpaste = (e) => e.preventDefault();
};
const COMMANDS = {
  help: 'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">acknowledges</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm Fazalu Rahman. I’m 18 yr old Ethical Hacker and Bug bounty hunter also interested in programming.",
  skills:
    '<span class="code">Skill:</span> Ethical Hacking, Pen-Testing, Bug Hunting,..<br>',
  education:
    "Doing BCA Degree + Diploma In IT and Cyber Defense + CEH at RedTeam Hacker Academy",
  resume:
    "<p>click the text</p><a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "No Experience😥",
  acknowledges: "No acknowledges😥 ",
  contact:
    "You can contact me on any of following links:<br> <a href='https://www.instagram.com/fazaluuuu' class='success link'>Instagram</a>, <a href='https://www.twitter.com/f4z41u/' class='success link'>Twitter</a>",
};

const userInput = document.getElementById("userInput");
const terminalOutput = document.getElementById("terminalOutput");
const inputfield = document.getElementById("dummyKeyboard");

inputfield.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let input = e.target.value;
    input = input.toLowerCase();
    if (input.length === 0) {
      return;
    }
    let output;
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">no such command: ${input}</div>`;
      console.log("Oops! no such command");
    } else {
      output += COMMANDS[input];
    }
    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
    e.target.value = "";
  }
});
