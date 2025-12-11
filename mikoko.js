const matchesContainer = document.getElementById("matches");
const addMatchForm = document.getElementById("addMatchForm");

async function fetchMatches() {
  const res = await fetch("http://localhost:3000/api/matches?league=mikoko");
  const matches = await res.json();
  
  matchesContainer.innerHTML = matches.map(m => `
    <div class="match-card">
      ${m.home_team} ${m.score || "-"} ${m.away_team} - ${m.date}
    </div>
  `).join('');
}

addMatchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    home_team: e.target.home_team.value,
    away_team: e.target.away_team.value,
    score: e.target.score.value,
    date: e.target.date.value,
    league: "mikoko"
  };
  
  await fetch("http://localhost:3000/api/matches", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  fetchMatches();
  addMatchForm.reset();
});

fetchMatches();
