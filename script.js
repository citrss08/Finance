/* ---------- Break-even chart ---------- */
const cv = document.getElementById("beChart");
const ctx = cv.getContext("2d");
const $ = (id) => document.getElementById(id);
const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

function drawChart() {
  const P = +$("sP").value, V = +$("sV").value, F = +$("sF").value;
  $("oP").textContent = P; $("oV").textContent = V; $("oF").textContent = F;

  const W = cv.width, H = cv.height, m = { l: 70, r: 20, t: 20, b: 45 };
  const maxQ = 12000;
  const maxY = Math.max(P * maxQ, F + V * maxQ);
  const x = (q) => m.l + (q / maxQ) * (W - m.l - m.r);
  const y = (v) => H - m.b - (v / maxY) * (H - m.t - m.b);

  ctx.clearRect(0, 0, W, H);
  ctx.font = "15px DM Sans, sans-serif";
  ctx.lineWidth = 1; ctx.strokeStyle = css("--line"); ctx.fillStyle = css("--muted");

  // grid + axis labels
  for (let i = 0; i <= 4; i++) {
    const v = (maxY / 4) * i;
    ctx.beginPath(); ctx.moveTo(m.l, y(v)); ctx.lineTo(W - m.r, y(v)); ctx.stroke();
    ctx.textAlign = "right"; ctx.fillText("$" + Math.round(v / 1000) + "k", m.l - 8, y(v) + 5);
  }
  ctx.textAlign = "center";
  for (let q = 0; q <= maxQ; q += 3000) ctx.fillText(q, x(q), H - m.b + 22);
  ctx.fillText("Output (units)", (W + m.l) / 2, H - 6);

  const line = (color, f, dash) => {
    ctx.beginPath(); ctx.setLineDash(dash || []); ctx.lineWidth = 3; ctx.strokeStyle = color;
    ctx.moveTo(x(0), y(f(0))); ctx.lineTo(x(maxQ), y(f(maxQ))); ctx.stroke(); ctx.setLineDash([]);
  };
  const gold = css("--gold"), berry = css("--berry"), sage = css("--sage");
  line(gold, () => F, [8, 6]);          // fixed costs
  line(berry, (q) => F + V * q);        // total costs
  line(sage, (q) => P * q);             // total revenue

  // legend
  ctx.textAlign = "left";
  [["Total revenue", sage], ["Total cost", berry], ["Fixed cost", gold]].forEach(([t, c], i) => {
    ctx.fillStyle = c; ctx.fillRect(m.l + 10 + i * 130, m.t + 4, 14, 14);
    ctx.fillStyle = css("--ink"); ctx.fillText(t, m.l + 30 + i * 130, m.t + 16);
  });

  const out = $("beText");
  if (P <= V) {
    out.textContent = "Price is not above variable cost, so this business never breaks even.";
    return;
  }
  const beq = F / (P - V);
  out.textContent = `Contribution = $${P - V} per unit. Break-even = ${F} ÷ ${P - V} = ${Math.ceil(beq).toLocaleString()} units.`;
  if (beq <= maxQ) {
    ctx.beginPath(); ctx.arc(x(beq), y(P * beq), 8, 0, 7);
    ctx.fillStyle = css("--ink"); ctx.fill();
    ctx.setLineDash([4, 4]); ctx.lineWidth = 1.5; ctx.strokeStyle = css("--ink");
    ctx.beginPath(); ctx.moveTo(x(beq), y(P * beq)); ctx.lineTo(x(beq), H - m.b); ctx.stroke(); ctx.setLineDash([]);
  }
}
["sP", "sV", "sF"].forEach((id) => $(id).addEventListener("input", drawChart));
drawChart();

/* ---------- Quiz ---------- */
const questions = [
  { q: "Fixed costs are $30,000, price is $15 and variable cost is $9 per unit. What is the break-even output?",
    o: ["2,000 units", "3,333 units", "5,000 units", "7,500 units"], a: 2,
    e: "Contribution = 15 − 9 = 6. Break-even = 30,000 ÷ 6 = 5,000 units." },
  { q: "Which of these is an internal source of finance?",
    o: ["Bank loan", "Retained profit", "Share issue", "Overdraft"], a: 1,
    e: "Retained profit comes from inside the business. The others are external." },
  { q: "Revenue is $80,000 and cost of goods sold is $50,000. What is gross profit?",
    o: ["$30,000", "$50,000", "$130,000", "$37,500"], a: 0,
    e: "Gross profit = revenue − cost of goods sold = 80,000 − 50,000." },
  { q: "Net profit is $12,000 on revenue of $150,000. What is the net profit margin?",
    o: ["12%", "8%", "1.25%", "18%"], a: 1,
    e: "12,000 ÷ 150,000 × 100 = 8%." },
  { q: "Current assets are $120,000, inventory is $40,000 and current liabilities are $80,000. What is the acid test ratio?",
    o: ["0.5", "1.0", "1.5", "2.0"], a: 1,
    e: "(120,000 − 40,000) ÷ 80,000 = 1.0." },
  { q: "A firm has an opening cash balance of $8,000 and a net cash flow of −$3,000. What is the closing balance?",
    o: ["$11,000", "−$3,000", "$5,000", "$8,000"], a: 2,
    e: "Closing = opening + net cash flow = 8,000 − 3,000 = 5,000." },
  { q: "A project costs $50,000 and returns $20,000 a year. What is the payback period?",
    o: ["2 years", "2.5 years", "3 years", "2.25 years"], a: 1,
    e: "After 2 years you have 40,000. The last 10,000 takes half of year 3, so 2.5 years." },
  { q: "Which is a limitation of break-even analysis?",
    o: ["It cannot show the margin of safety", "It assumes all output is sold at a constant price",
        "It ignores fixed costs", "It only works for large firms"], a: 1,
    e: "The model assumes straight-line costs and revenue, and that everything produced is sold." }
];

let answered = 0, correct = 0;
function renderQuiz() {
  answered = 0; correct = 0; $("score").textContent = "";
  const box = $("quizBox"); box.innerHTML = "";
  questions.forEach((item, qi) => {
    const wrap = document.createElement("div"); wrap.className = "q";
    wrap.innerHTML = `<p>${qi + 1}. ${item.q}</p>`;
    const why = document.createElement("p"); why.className = "why"; why.hidden = true; why.textContent = item.e;
    item.o.forEach((text, oi) => {
      const b = document.createElement("button"); b.className = "opt"; b.textContent = text;
      b.addEventListener("click", () => {
        wrap.querySelectorAll(".opt").forEach((x) => (x.disabled = true));
        const ok = oi === item.a;
        b.classList.add(ok ? "right" : "wrong");
        if (!ok) wrap.querySelectorAll(".opt")[item.a].classList.add("right");
        why.hidden = false; answered++; if (ok) correct++;
        if (answered === questions.length)
          $("score").textContent = `You scored ${correct} out of ${questions.length}.`;
      });
      wrap.appendChild(b);
    });
    wrap.appendChild(why); box.appendChild(wrap);
  });
}
$("reset").addEventListener("click", renderQuiz);
renderQuiz();
