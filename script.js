/* ---------- Tabs: built from each panel's data-title and data-c ---------- */
const panels = [...document.querySelectorAll(".panel")];
const tabs = document.getElementById("tabs");

function show(i) {
  panels.forEach((p, n) => {
    p.classList.toggle("on", n === i);
    tabs.children[n].setAttribute("aria-selected", n === i);
  });
  document.documentElement.style.setProperty("--c", panels[i].dataset.c);
  history.replaceState(null, "", "#" + i);
  if (panels[i].querySelector("#beChart")) drawChart();
  window.scrollTo({ top: 0 });
}

panels.forEach((p, i) => {
  p.style.setProperty("--c", p.dataset.c);
  const b = document.createElement("button");
  b.textContent = p.dataset.title;
  b.style.setProperty("--c", p.dataset.c);
  b.addEventListener("click", () => show(i));
  tabs.appendChild(b);
});

/* ---------- Break-even chart ---------- */
const $ = (id) => document.getElementById(id);
const cv = $("beChart"), ctx = cv.getContext("2d");

function drawChart() {
  const P = +$("sP").value, V = +$("sV").value, F = +$("sF").value;
  $("oP").textContent = P; $("oV").textContent = V; $("oF").textContent = F;
  const W = cv.width, H = cv.height, m = { l: 70, r: 20, t: 35, b: 45 }, maxQ = 12000;
  const maxY = Math.max(P * maxQ, F + V * maxQ);
  const x = (q) => m.l + (q / maxQ) * (W - m.l - m.r);
  const y = (v) => H - m.b - (v / maxY) * (H - m.t - m.b);
  ctx.clearRect(0, 0, W, H);
  ctx.font = "15px DM Sans, sans-serif"; ctx.lineWidth = 1; ctx.strokeStyle = "#EFE2D2";
  for (let i = 0; i <= 4; i++) {
    const v = (maxY / 4) * i;
    ctx.beginPath(); ctx.moveTo(m.l, y(v)); ctx.lineTo(W - m.r, y(v)); ctx.stroke();
    ctx.fillStyle = "#6E6275"; ctx.textAlign = "right"; ctx.fillText("$" + Math.round(v / 1000) + "k", m.l - 8, y(v) + 5);
  }
  ctx.textAlign = "center";
  for (let q = 0; q <= maxQ; q += 3000) ctx.fillText(q, x(q), H - m.b + 22);
  ctx.fillText("Output (units)", (W + m.l) / 2, H - 6);
  const line = (c, f, dash) => {
    ctx.beginPath(); ctx.setLineDash(dash || []); ctx.lineWidth = 3; ctx.strokeStyle = c;
    ctx.moveTo(x(0), y(f(0))); ctx.lineTo(x(maxQ), y(f(maxQ))); ctx.stroke(); ctx.setLineDash([]);
  };
  const cols = [["Revenue", "#10B981"], ["Total cost", "#FF5A5F"], ["Fixed cost", "#F59E0B"]];
  line(cols[0][1], (q) => P * q); line(cols[1][1], (q) => F + V * q); line(cols[2][1], () => F, [8, 6]);
  ctx.textAlign = "left";
  cols.forEach(([t, c], i) => { ctx.fillStyle = c; ctx.fillRect(m.l + i * 130, 10, 14, 14); ctx.fillStyle = "#2B2230"; ctx.fillText(t, m.l + 20 + i * 130, 22); });
  if (P <= V) { $("beText").textContent = "Price is not above variable cost, so there is no break-even point."; return; }
  const beq = F / (P - V);
  $("beText").textContent = `Contribution = $${P - V}. Break-even = ${F} ÷ ${P - V} = ${Math.ceil(beq).toLocaleString()} units.`;
  if (beq <= maxQ) { ctx.beginPath(); ctx.arc(x(beq), y(P * beq), 8, 0, 7); ctx.fillStyle = "#2B2230"; ctx.fill(); }
}
["sP", "sV", "sF"].forEach((id) => $(id).addEventListener("input", drawChart));

/* Open the topic from the link (#3 = fourth topic), else the first */
const start = parseInt(location.hash.slice(1), 10);
show(start >= 0 && start < panels.length ? start : 0);
