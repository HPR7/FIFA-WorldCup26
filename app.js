/* ==========================================================================
   2026 FIFA World Cup™ Fixture Dashboard - Interactive Application Logic
   ========================================================================== */

// --- Complete 48 Teams Database ---

// --- Internationalization (i18n) System ---
let currentLanguage = localStorage.getItem("wc26_language") || "en";

const i18n = {
  en: {
    "brand-tagline": "FIFA WORLD CUP",
    "brand-title": "2026 fixture hub",
    "my-teams": "My Teams:",
    "none-followed": "None followed",
    "update-results": "Update Results",
    "tab-calendar": "Match Calendar",
    "tab-bracket": "Knockout Bracket",
    "tab-standings": "Group Standings",
    "search-placeholder": "Search teams (e.g. Argentina, USA...)",
    "filter-favorites": "Show only followed teams",
    "bracket-instructions": "Interactive Bracket: Track the road to the Final. Click on active matches to view full match centers.",
    "standings-instructions": "Current standings. Points are calculated dynamically based on match results from the live data feed.",
    "onboarding-title": "Welcome to FIFA 26™ Hub",
    "onboarding-subtitle": "Personalize your tournament dashboard before we kick off!",
    "onboarding-step1": "1. Select Your Timezone",
    "onboarding-step1-hint": "Match times will automatically convert to your selected local time.",
    "onboarding-step2": "2. Follow Your Teams (Max 4)",
    "onboarding-step2-hint": "Get highlights, quick notifications, and filter matches for your selected teams.",
    "selection-counter": "Selected: {count} / 4",
    "btn-save-onboarding": "Enter Fixture Hub",
    "btn-close-match-dialog": "Close match details",
    "footer-text": "© 2026 FIFA World Cup™ Fixture Dashboard. Built with premium web technologies. In accordance with the 2026 tournament branding.",
    "footer-powered-by": "Powered with AI by ASSEGURA AI",
    // Stages
    "Group A": "Group A", "Group B": "Group B", "Group C": "Group C", "Group D": "Group D",
    "Group E": "Group E", "Group F": "Group F", "Group G": "Group G", "Group H": "Group H",
    "Group I": "Group I", "Group J": "Group J", "Group K": "Group K", "Group L": "Group L",
    "Round of 32": "Round of 32",
    "Round of 16": "Round of 16",
    "Quarter-finals": "Quarter-finals",
    "Semi-finals": "Semi-finals",
    "Third Place": "Third Place",
    "Final": "Final",
    // Status
    "FINISHED": "Finished",
    "LIVE": "Live",
    "SCHEDULED": "Scheduled",
    "Full Time": "Full Time",
    "star-followed-match": "★ Followed Match",
    // Details tab
    "lineups-tab": "Lineups & Squads",
    "tactics-tab": "Tactical Styles & Stats",
    "starting-lineup": "Starting XI",
    "substitutes": "Substitutes",
    "tactical-style": "Tactical Style",
    "team-attributes": "Team Attributes",
    "star-player-marked": "* Star player",
    "world-cup-history": "World Cup History",
    "participations": "Participations",
    "best-finish": "Best Finish",
    "attack": "Attack",
    "defense": "Defense",
    "speed": "Speed",
    "control": "Control",
    "positional-style": "Positional Style",
    "squad-lineups-pending": "Squad lineups will be available closer to kickoff.",
    "tactics-pending": "Tactical style details pending final group alignment.",
    "team-squad": "{team} Squad",
    "team-history": "{team} History",
    "match-singular": "match",
    "match-plural": "matches",
    // Toasts & Alerts
    "toast-success-update": "Match results updated with latest data!",
    "toast-error-update": "Error updating results. Check fixtures.json.",
    "toast-timezone-change": "Timezone changed to {timezone}",
    "toast-onboarded": "Dashboard configured successfully!",
    "toast-max-teams": "You can follow up to 4 teams maximum!",
    "no-matches-found": "No fixtures match your current filters. Try adjusting search or choosing another date.",
    // Tactical Styles
    "High-Pressing Transition": "High-Pressing Transition",
    "High Energy & Flank Play": "High Energy & Flank Play",
    "Dynamic Speed & Counter": "Dynamic Speed & Counter",
    "High Speed & Direct Flank Play": "High Speed & Direct Flank Play",
    "Physical & Counter-pressing": "Physical & Counter-pressing",
    "Structured Possession & Direct Play": "Structured Possession & Direct Play",
    "Associative Control & Press": "Associative Control & Press",
    "Joga Bonito (Attacking Samba)": "Joga Bonito (Attacking Samba)",
    "Aggressive Vertical Press": "Aggressive Vertical Press",
    "Dynamic Speed & Creativity": "Dynamic Speed & Creativity",
    "Physical & Fast Transitions": "Physical & Fast Transitions",
    "Speed & Quick Counter": "Speed & Quick Counter",
    "High Press & Direct Play": "High Press & Direct Play",
    "Direct Athletic Counter": "Direct Athletic Counter",
    "Tactical Possession": "Tactical Possession",
    "Vertically Sharp Possession": "Vertically Sharp Possession",
    "Fluid Gegenpressing": "Fluid Gegenpressing",
    "Fluid Positional Play": "Fluid Positional Play",
    "Total Football Legacy": "Total Football Legacy",
    "Explosive Technical Offense": "Explosive Technical Offense",
    "Midfield Orchestration": "Midfield Orchestration",
    "Direct Play & Overloads": "Direct Play & Overloads",
    "Disciplined Tactical Buildup": "Disciplined Tactical Buildup",
    "High-Intensity Pressing": "High-Intensity Pressing",
    "Creative Flair & Speed": "Creative Flair & Speed",
    "Direct Counter & Aerial Threat": "Direct Counter & Aerial Threat",
    "Disciplined Low-Block Counter": "Disciplined Low-Block Counter",
    "Passionate & Direct Attack": "Passionate & Direct Attack",
    "Organized Collective Press": "Organized Collective Press",
    "High Grit & Wing Crosses": "High Grit & Wing Crosses",
    "Compact Mid-Block Counter": "Compact Mid-Block Counter",
    "Physical Pace & Width": "Physical Pace & Width",
    "Athletic & Dynamic Offense": "Athletic & Dynamic Offense",
    "Compact Counter-Attack": "Compact Counter-Attack",
    "Physical & Direct": "Physical & Direct",
    "Athletic Build-Up & Flair": "Athletic Build-Up & Flair",
    "Technical possession & counters": "Technical possession & counters",
    "Disciplined Low-Block": "Disciplined Low-Block",
    "Fast Flank Overloads": "Fast Flank Overloads",
    "High-Speed Pressing": "High-Speed Pressing",
    "Tenacious Direct Transitions": "Tenacious Direct Transitions",
    "High-Cross & Physical Grit": "High-Cross & Physical Grit",
    "Low-Block Counter-Attack": "Low-Block Counter-Attack",
    "Tactical High Line": "Tactical High Line",
    "Methodical Buildup": "Methodical Buildup",
    "Counter & Physicality": "Counter & Physicality",
    "Direct Combative Play": "Direct Combative Play",
    "Organized Aerial Threat": "Organized Aerial Threat",
    // Table Headers
    "col-team": "Team",
    "col-pts": "Pts",
    "col-pl": "Pl",
    "col-w": "W",
    "col-d": "D",
    "col-l": "L",
    "col-gd": "GD",
    "skip-intro": "Skip Intro",
    "audio-mute": "Mute",
    "audio-unmute": "Unmute",
    "search-results": "Search Results",
    "btn-update-lineups": "Update Lineups",
    "toast-lineups-updated": "Starting lineups updated for this match!",
    "win-probability": "Match Win Probability",
    "draw": "Draw"
  },
  es: {
    "brand-tagline": "COPA MUNDIAL DE LA FIFA",
    "brand-title": "Centro de Partidos 2026",
    "my-teams": "Mis Equipos:",
    "none-followed": "Ninguno seleccionado",
    "update-results": "Actualizar Resultados",
    "tab-calendar": "Calendario de Juegos",
    "tab-bracket": "Fase de Eliminación",
    "tab-standings": "Tablas de Grupos",
    "search-placeholder": "Buscar selecciones (ej. Argentina, USA...)",
    "filter-favorites": "Mostrar solo mis equipos",
    "bracket-instructions": "Llave Interactiva: Sigue el camino a la Final. Haz clic en los partidos para ver detalles de las selecciones.",
    "standings-instructions": "Posiciones actuales. Los puntos se calculan dinámicamente según los resultados de los partidos.",
    "onboarding-title": "Bienvenido a FIFA 26™ Hub",
    "onboarding-subtitle": "¡Personaliza tu panel de control antes del silbatazo inicial!",
    "onboarding-step1": "1. Selecciona tu Zona Horaria",
    "onboarding-step1-hint": "Las horas de los partidos se convertirán automáticamente a tu hora local.",
    "onboarding-step2": "2. Selecciona tus Equipos (Máx 4)",
    "onboarding-step2-hint": "Obtén destaques y filtra el calendario de juegos para tus selecciones elegidas.",
    "selection-counter": "Seleccionados: {count} / 4",
    "btn-save-onboarding": "Entrar al Centro de Partidos",
    "btn-close-match-dialog": "Cerrar detalles del partido",
    "footer-text": "© 2026 Tablero de Partidos de la Copa Mundial de la FIFA™. Desarrollado con tecnologías web premium. Conforme a la identidad del torneo.",
    "footer-powered-by": "Desarrollado con IA por ASSEGURA AI",
    // Stages
    "Group A": "Grupo A", "Group B": "Grupo B", "Group C": "Grupo C", "Group D": "Grupo D",
    "Group E": "Grupo E", "Group F": "Grupo F", "Group G": "Grupo G", "Group H": "Grupo H",
    "Group I": "Group I", "Group J": "Grupo J", "Group K": "Grupo K", "Group L": "Grupo L",
    "Round of 32": "Dieciseisavos de final",
    "Round of 16": "Octavos de final",
    "Quarter-finals": "Cuartos de final",
    "Semi-finals": "Semifinales",
    "Third Place": "Tercer Puesto",
    "Final": "Final",
    // Status
    "FINISHED": "Finalizado",
    "LIVE": "En Vivo",
    "SCHEDULED": "Programado",
    "Full Time": "Tiempo Completo",
    "star-followed-match": "★ Partido Seguido",
    // Details tab
    "lineups-tab": "Alineaciones y Equipos",
    "tactics-tab": "Estilos Tácticos y Stats",
    "starting-lineup": "Alineación Titular",
    "substitutes": "Suplentes",
    "tactical-style": "Estilo Táctico",
    "team-attributes": "Atributos del Equipo",
    "star-player-marked": "* Jugador estrella",
    "world-cup-history": "Historial en Mundiales",
    "participations": "Participaciones",
    "best-finish": "Mejor Resultado",
    "attack": "Ataque",
    "defense": "Defensa",
    "speed": "Velocidad",
    "control": "Control",
    "positional-style": "Estilo Posicional",
    "squad-lineups-pending": "Las alineaciones estarán disponibles cerca del comienzo del partido.",
    "tactics-pending": "Detalles tácticos pendientes de la clasificación final de grupos.",
    "team-squad": "Plantilla de {team}",
    "team-history": "Historial de {team}",
    "match-singular": "partido",
    "match-plural": "partidos",
    // Toasts & Alerts
    "toast-success-update": "¡Resultados de partidos actualizados con los datos vigentes!",
    "toast-error-update": "Error al actualizar los resultados. Revisa fixtures.json.",
    "toast-timezone-change": "Zona horaria cambiada a {timezone}",
    "toast-onboarded": "¡Panel de control configurado con éxito!",
    "toast-max-teams": "¡Puedes seguir a un máximo de 4 equipos!",
    "no-matches-found": "No hay partidos que coincidan con los filtros. Intenta ajustar la búsqueda o elige otra fecha.",
    // Team names
    "USA": "Estados Unidos", "MEX": "México", "CAN": "Canadá", "RSA": "Sudáfrica",
    "CZE": "República Checa", "BIH": "Bosnia y Herzegovina",
    "ARG": "Argentina", "BRA": "Brasil", "URU": "Uruguay", "COL": "Colombia",
    "ECU": "Ecuador", "HAI": "Haití", "PAR": "Paraguay",
    "FRA": "Francia", "ENG": "Inglaterra", "ESP": "España", "GER": "Alemania",
    "CUW": "Curazao", "NED": "Países Bajos", "POR": "Portugal", "CRO": "Croacia",
    "BEL": "Bélgica", "SUI": "Suiza", "AUT": "Austria", "CPV": "Cabo Verde",
    "NOR": "Noruega", "JOR": "Jordania", "TUR": "Turquía", "SWE": "Suecia",
    "SCO": "Escocia",
    "MAR": "Marruecos", "SEN": "Senegal", "COD": "R. D. Congo",
    "EGY": "Egipto", "PAN": "Panamá", "CIV": "Costa de Marfil", "ALG": "Argelia",
    "TUN": "Túnez", "GHA": "Ghana",
    "JPN": "Japón", "KOR": "Corea del Sur", "AUS": "Australia", "IRN": "Irán",
    "KSA": "Arabia Saudita", "QAT": "Catar", "UZB": "Uzbekistán", "IRQ": "Irak",
    "NZL": "Nueva Zelanda",
    // Tactical Styles
    "High-Pressing Transition": "Transición de Alta Presión",
    "High Energy & Flank Play": "Alta Energía y Juego Lateral",
    "Dynamic Speed & Counter": "Velocidad Dinámica y Contra",
    "High Speed & Direct Flank Play": "Alta Velocidad y Centros",
    "Physical & Counter-pressing": "Físico y Presión Tras Pérdida",
    "Structured Possession & Direct Play": "Juego Directo y Posición",
    "Associative Control & Press": "Control Asociativo y Presión",
    "Joga Bonito (Attacking Samba)": "Joga Bonito (Samba Atacante)",
    "Aggressive Vertical Press": "Presión Vertical Agresiva",
    "Dynamic Speed & Creativity": "Velocidad Dinámica y Creatividad",
    "Physical & Fast Transitions": "Transiciones Rápidas y Físicas",
    "Speed & Quick Counter": "Velocidad y Contra Rápida",
    "High Press & Direct Play": "Presión Alta y Juego Directo",
    "Direct Athletic Counter": "Contraataque Atlético Directo",
    "Tactical Possession": "Posesión Táctica",
    "Vertically Sharp Possession": "Posesión Vertical Rápida",
    "Fluid Gegenpressing": "Gegenpressing Fluido",
    "Fluid Positional Play": "Juego Posicional Fluido",
    "Total Football Legacy": "Legado de Fútbol Total",
    "Explosive Technical Offense": "Ataque Técnico Explosivo",
    "Midfield Orchestration": "Orquestación del Mediocampo",
    "Direct Play & Overloads": "Juego Directo y Sobrecargas",
    "Disciplined Tactical Buildup": "Creación Táctica Disciplinada",
    "High-Intensity Pressing": "Presión de Alta Intensidad",
    "Creative Flair & Speed": "Estilo Creativo y Velocidad",
    "Direct Counter & Aerial Threat": "Contra Directo y Altura",
    "Disciplined Low-Block Counter": "Contra de Bloque Bajo Disciplinado",
    "Passionate & Direct Attack": "Ataque Directo y Pasión",
    "Organized Collective Press": "Presión Colectiva Organizada",
    "High Grit & Wing Crosses": "Garra y Centros Laterales",
    "Compact Mid-Block Counter": "Contra de Bloque Medio Compacto",
    "Physical Pace & Width": "Ritmo Físico y Amplitud",
    "Athletic & Dynamic Offense": "Ataque Atlético y Dinámico",
    "Compact Counter-Attack": "Contraataque Compacto",
    "Physical & Direct": "Físico y Directo",
    "Athletic Build-Up & Flair": "Creación Atlética y Estilo",
    "Technical possession & counters": "Posesión Técnica y Contras",
    "Disciplined Low-Block": "Bloque Bajo Disciplinado",
    "Fast Flank Overloads": "Sobrecarga de Bandas Rápida",
    "High-Speed Pressing": "Presión de Alta Velocidad",
    "Tenacious Direct Transitions": "Transiciones Directas Tenaces",
    "High-Cross & Physical Grit": "Centros Altos y Garra Física",
    "Low-Block Counter-Attack": "Contra de Bloque Bajo",
    "Tactical High Line": "Línea Alta Táctica",
    "Methodical Buildup": "Creación Metódica",
    "Counter & Physicality": "Contra y Físico",
    "Direct Combative Play": "Juego Directo Combativo",
    "Organized Aerial Threat": "Amenaza Aérea Organizada",
    // Table Headers
    "col-team": "Equipo",
    "col-pts": "Pts",
    "col-pl": "PJ",
    "col-w": "PG",
    "col-d": "PE",
    "col-l": "PP",
    "col-gd": "DG",
    "skip-intro": "Saltar Intro",
    "audio-mute": "Silenciar",
    "audio-unmute": "Activar Audio",
    "search-results": "Resultados de búsqueda",
    "btn-update-lineups": "Actualizar Titulares",
    "toast-lineups-updated": "¡Alineaciones titulares actualizadas para este partido!",
    "win-probability": "Estimación de Victoria",
    "draw": "Empate"
  }
};

function translate(key, replacements = {}, locale = currentLanguage) {
  let text = i18n[locale]?.[key] || i18n["en"]?.[key] || key;
  Object.keys(replacements).forEach(placeholder => {
    text = text.replace(`{${placeholder}}`, replacements[placeholder]);
  });
  return text;
}

function getTeamName(teamCode) {
  return translate(teamCode) || teamsDb[teamCode]?.name || teamCode;
}

function getFlagUrl(teamCode) {
  const team = teamsDb[teamCode];
  if (!team) {
    // Return a generic shield icon as transparent pixel/SVG
    return "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='25' viewBox='0 0 40 25'><rect width='40' height='25' fill='%23131738'/><path d='M20,5 L30,10 L30,17 C30,22 20,24 20,24 C20,24 10,22 10,17 L10,10 Z' fill='%23ffd600' opacity='0.3'/></svg>";
  }
  return `https://flagcdn.com/w40/${team.flag}.png`;
}

function applyLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("wc26_language", lang);

  // Update elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      elem.textContent = i18n[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(elem => {
    const key = elem.getAttribute("data-i18n-placeholder");
    if (i18n[lang] && i18n[lang][key]) {
      elem.placeholder = i18n[lang][key];
      // If it has aria-label we can also translate it
      if (elem.hasAttribute("aria-label")) {
        elem.setAttribute("aria-label", i18n[lang][key]);
      }
    }
  });

  // Render text for counters (Special case)
  const counterText = document.getElementById("selection-counter-text");
  if (counterText) {
    const favCountSpan = document.getElementById("fav-count");
    const countVal = favCountSpan ? favCountSpan.textContent : "0";
    counterText.innerHTML = translate("selection-counter", { count: `<span id="fav-count">${countVal}</span>` });
  }
}

// --- Dynamic Knockout Placeholder Resolution ---
function resolveKnockoutTeams() {
  const standings = {};
  
  // Find which team belongs to which group
  const teamToGroup = {};
  fixtures.forEach(match => {
    if (match.stage.startsWith("Group")) {
      teamToGroup[match.team1] = match.stage;
      teamToGroup[match.team2] = match.stage;
    }
  });

  // Initialize group standings array
  Object.keys(teamsDb).forEach(code => {
    const group = teamToGroup[code];
    if (!group) return;
    if (!standings[group]) {
      standings[group] = [];
    }
    standings[group].push({
      code: code,
      pts: 0,
      gd: 0,
      gf: 0,
      ga: 0,
      wins: 0
    });
  });

  // Sum scores of played group matches
  fixtures.forEach(match => {
    if (!match.stage.startsWith("Group")) return;
    if (match.score1 === null || match.score2 === null) return;

    const group = match.stage;
    const team1Stats = standings[group].find(t => t.code === match.team1);
    const team2Stats = standings[group].find(t => t.code === match.team2);

    if (!team1Stats || !team2Stats) return;

    const s1 = parseInt(match.score1, 10);
    const s2 = parseInt(match.score2, 10);

    team1Stats.gf += s1;
    team1Stats.ga += s2;
    team2Stats.gf += s2;
    team2Stats.ga += s1;
    team1Stats.gd = team1Stats.gf - team1Stats.ga;
    team2Stats.gd = team2Stats.gf - team2Stats.ga;

    if (s1 > s2) {
      team1Stats.wins += 1;
      team1Stats.pts += 3;
    } else if (s1 < s2) {
      team2Stats.wins += 1;
      team2Stats.pts += 3;
    } else {
      team1Stats.pts += 1;
      team2Stats.pts += 1;
    }
  });

  // Sort teams in each group based on tiebreakers
  const resolvedGroups = {};
  Object.keys(standings).forEach(group => {
    const groupTeams = [...standings[group]];
    groupTeams.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.gd !== a.gd) return b.gd - a.gd;
      if (b.gf !== a.gf) return b.gf - a.gf;
      return a.code.localeCompare(b.code);
    });
    resolvedGroups[group] = groupTeams;
  });

  // Extract all 3rd place teams and sort them to find top 8
  const thirdPlaceTeams = [];
  Object.keys(resolvedGroups).forEach(group => {
    const teams = resolvedGroups[group];
    if (teams.length >= 3) {
      thirdPlaceTeams.push(teams[2]);
    }
  });

  thirdPlaceTeams.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    if (b.gf !== a.gf) return b.gf - a.gf;
    return a.code.localeCompare(b.code);
  });

  const top8ThirdPlace = thirdPlaceTeams.slice(0, 8).map(t => t.code);

  const resolveTeam = (placeholder) => {
    if (!placeholder) return "";
    
    // Group winners "1A", etc.
    const groupWinnerMatch = placeholder.match(/^1([A-L])$/);
    if (groupWinnerMatch) {
      const letter = groupWinnerMatch[1];
      const groupName = `Group ${letter}`;
      const groupTeams = resolvedGroups[groupName];
      const groupHasStarted = fixtures.some(m => m.stage === groupName && m.score1 !== null);
      if (groupHasStarted && groupTeams && groupTeams.length > 0) {
        return groupTeams[0].code;
      }
      return placeholder;
    }

    // Group runners up "2A", etc.
    const groupRunnerUpMatch = placeholder.match(/^2([A-L])$/);
    if (groupRunnerUpMatch) {
      const letter = groupRunnerUpMatch[1];
      const groupName = `Group ${letter}`;
      const groupTeams = resolvedGroups[groupName];
      const groupHasStarted = fixtures.some(m => m.stage === groupName && m.score1 !== null);
      if (groupHasStarted && groupTeams && groupTeams.length > 1) {
        return groupTeams[1].code;
      }
      return placeholder;
    }

    // Third place slots "3rd_1", etc.
    const thirdPlaceMatch = placeholder.match(/^3rd_([1-8])$/);
    if (thirdPlaceMatch) {
      const index = parseInt(thirdPlaceMatch[1], 10) - 1;
      const anyGroupStarted = fixtures.some(m => m.stage.startsWith("Group") && m.score1 !== null);
      if (anyGroupStarted && index < top8ThirdPlace.length) {
        return top8ThirdPlace[index];
      }
      return placeholder;
    }

    // Winner of prev match "W73", etc.
    const winnerMatch = placeholder.match(/^W(\d+)$/);
    if (winnerMatch) {
      const prevMatchId = `m${winnerMatch[1]}`;
      const prevMatch = fixtures.find(m => m.id === prevMatchId);
      if (prevMatch && prevMatch.status === "FINISHED") {
        const s1 = parseInt(prevMatch.score1, 10);
        const s2 = parseInt(prevMatch.score2, 10);
        if (s1 > s2) return prevMatch.team1;
        if (s2 > s1) return prevMatch.team2;
      }
      return placeholder;
    }

    // Loser of prev match "L101", etc.
    const loserMatch = placeholder.match(/^L(\d+)$/);
    if (loserMatch) {
      const prevMatchId = `m${loserMatch[1]}`;
      const prevMatch = fixtures.find(m => m.id === prevMatchId);
      if (prevMatch && prevMatch.status === "FINISHED") {
        const s1 = parseInt(prevMatch.score1, 10);
        const s2 = parseInt(prevMatch.score2, 10);
        if (s1 < s2) return prevMatch.team1;
        if (s2 < s1) return prevMatch.team2;
      }
      return placeholder;
    }

    return placeholder;
  };

  // Resolve knockout stages in order
  for (let i = 73; i <= 104; i++) {
    const matchId = `m${i}`;
    const match = fixtures.find(m => m.id === matchId);
    if (match) {
      match.team1 = resolveTeam(match.team1);
      match.team2 = resolveTeam(match.team2);
    }
  }
}

const baseTeams = {
  // North America
  "USA": { name: "United States", flag: "us", participations: 12, bestFinish: "Third Place (1930)", style: "High-Pressing Transition", attrs: { attack: 82, defense: 78, speed: 90, control: 74 }, star: "Christian Pulisic*" },
  "MEX": { name: "Mexico", flag: "mx", participations: 18, bestFinish: "Quarter-finals (1970, 1986)", style: "High Energy & Flank Play", attrs: { attack: 78, defense: 75, speed: 84, control: 77 }, star: "Edson Álvarez*" },
  "CAN": { name: "Canada", flag: "ca", participations: 3, bestFinish: "Group Stage (1986, 2022)", style: "Dynamic Speed & Counter", attrs: { attack: 76, defense: 72, speed: 92, control: 70 }, star: "Alphonso Davies*" },
  "RSA": { name: "South Africa", flag: "za", participations: 4, bestFinish: "Group Stage", style: "High Speed & Direct Flank Play", attrs: { attack: 74, defense: 73, speed: 85, control: 72 }, star: "Percy Tau*" },
  "CZE": { name: "Czech Republic", flag: "cz", participations: 10, bestFinish: "Runners-up (1934, 1962)", style: "Physical & Counter-pressing", attrs: { attack: 77, defense: 78, speed: 80, control: 75 }, star: "Tomáš Souček*" },
  "BIH": { name: "Bosnia & Herzegovina", flag: "ba", participations: 2, bestFinish: "Group Stage (2014)", style: "Structured Possession & Direct Play", attrs: { attack: 73, defense: 74, speed: 72, control: 77 }, star: "Edin Džeko*" },

  // South America
  "ARG": { name: "Argentina", flag: "ar", participations: 19, bestFinish: "Winners (1978, 1986, 2022)", style: "Associative Control & Press", attrs: { attack: 92, defense: 87, speed: 81, control: 93 }, star: "Lionel Messi*" },
  "BRA": { name: "Brazil", flag: "br", participations: 23, bestFinish: "Winners (5 times)", style: "Joga Bonito (Attacking Samba)", attrs: { attack: 94, defense: 81, speed: 90, control: 87 }, star: "Vinícius Júnior*" },
  "URU": { name: "Uruguay", flag: "uy", participations: 15, bestFinish: "Winners (1930, 1950)", style: "Aggressive Vertical Press", attrs: { attack: 85, defense: 84, speed: 89, control: 77 }, star: "Federico Valverde*" },
  "COL": { name: "Colombia", flag: "co", participations: 7, bestFinish: "Quarter-finals (2014)", style: "Dynamic Speed & Creativity", attrs: { attack: 84, defense: 80, speed: 88, control: 82 }, star: "James Rodríguez*" },
  "ECU": { name: "Ecuador", flag: "ec", participations: 5, bestFinish: "Round of 16 (2006)", style: "Physical & Fast Transitions", attrs: { attack: 78, defense: 82, speed: 87, control: 74 }, star: "Moisés Caicedo*" },
  "HAI": { name: "Haiti", flag: "ht", participations: 2, bestFinish: "Group Stage (1974)", style: "Speed & Quick Counter", attrs: { attack: 70, defense: 68, speed: 84, control: 66 }, star: "Duckens Nazon*" },
  "PAR": { name: "Paraguay", flag: "py", participations: 9, bestFinish: "Quarter-finals (2010)", style: "High Press & Direct Play", attrs: { attack: 73, defense: 79, speed: 76, control: 71 }, star: "Miguel Almirón*" },

  // Europe
  "FRA": { name: "France", flag: "fr", participations: 17, bestFinish: "Winners (1998, 2018)", style: "Direct Athletic Counter", attrs: { attack: 95, defense: 89, speed: 93, control: 84 }, star: "Kylian Mbappé*" },
  "ENG": { name: "England", flag: "gb", participations: 17, bestFinish: "Winners (1966)", style: "Tactical Possession", attrs: { attack: 88, defense: 84, speed: 78, control: 88 }, star: "Jude Bellingham*" },
  "ESP": { name: "Spain", flag: "es", participations: 17, bestFinish: "Winners (2010)", style: "Vertically Sharp Possession", attrs: { attack: 91, defense: 83, speed: 88, control: 94 }, star: "Rodri Hernández*" },
  "GER": { name: "Germany", flag: "de", participations: 21, bestFinish: "Winners (4 times)", style: "Fluid Gegenpressing", attrs: { attack: 89, defense: 83, speed: 82, control: 89 }, star: "Antonio Rüdiger*" },
  "CUW": { name: "Curaçao", flag: "cw", participations: 1, bestFinish: "Debut (2026)", style: "Fluid Positional Play", attrs: { attack: 71, defense: 70, speed: 78, control: 73 }, star: "Juninho Bacuna*" },
  "NED": { name: "Netherlands", flag: "nl", participations: 12, bestFinish: "Runners-up (3 times)", style: "Total Football Legacy", attrs: { attack: 85, defense: 83, speed: 80, control: 86 }, star: "Virgil van Dijk*" },
  "POR": { name: "Portugal", flag: "pt", participations: 9, bestFinish: "Third Place (1966)", style: "Explosive Technical Offense", attrs: { attack: 92, defense: 83, speed: 85, control: 90 }, star: "Bruno Fernandes*" },
  "CRO": { name: "Croatia", flag: "hr", participations: 7, bestFinish: "Runners-up (2018)", style: "Midfield Orchestration", attrs: { attack: 80, defense: 83, speed: 75, control: 91 }, star: "Luka Modrić*" },
  "BEL": { name: "Belgium", flag: "be", participations: 15, bestFinish: "Third Place (2018)", style: "Direct Play & Overloads", attrs: { attack: 87, defense: 80, speed: 86, control: 85 }, star: "Kevin De Bruyne*" },
  "SUI": { name: "Switzerland", flag: "ch", participations: 13, bestFinish: "Quarter-finals (3 times)", style: "Disciplined Tactical Buildup", attrs: { attack: 79, defense: 81, speed: 76, control: 82 }, star: "Granit Xhaka*" },
  "AUT": { name: "Austria", flag: "at", participations: 8, bestFinish: "Third Place (1954)", style: "High-Intensity Pressing", attrs: { attack: 78, defense: 77, speed: 82, control: 79 }, star: "Marcel Sabitzer*" },
  "CPV": { name: "Cabo Verde", flag: "cv", participations: 1, bestFinish: "Debut (2026)", style: "Creative Flair & Speed", attrs: { attack: 73, defense: 72, speed: 82, control: 74 }, star: "Ryan Mendes*" },
  "NOR": { name: "Norway", flag: "no", participations: 4, bestFinish: "Round of 16 (1998)", style: "Direct Counter & Aerial Threat", attrs: { attack: 84, defense: 75, speed: 80, control: 78 }, star: "Erling Haaland*" },
  "JOR": { name: "Jordan", flag: "jo", participations: 1, bestFinish: "Debut (2026)", style: "Disciplined Low-Block Counter", attrs: { attack: 72, defense: 75, speed: 79, control: 70 }, star: "Musa Al-Taamari*" },
  "TUR": { name: "Turkey", flag: "tr", participations: 3, bestFinish: "Third Place (2002)", style: "Passionate & Direct Attack", attrs: { attack: 81, defense: 72, speed: 83, control: 80 }, star: "Hakan Çalhanoğlu*" },
  "SWE": { name: "Sweden", flag: "se", participations: 13, bestFinish: "Runners-up (1958)", style: "Organized Collective Press", attrs: { attack: 79, defense: 78, speed: 80, control: 77 }, star: "Alexander Isak*" },
  "SCO": { name: "Scotland", flag: "gb", participations: 9, bestFinish: "Group Stage", style: "High Grit & Wing Crosses", attrs: { attack: 72, defense: 76, speed: 75, control: 73 }, star: "Andy Robertson*" },

  // Africa
  "MAR": { name: "Morocco", flag: "ma", participations: 7, bestFinish: "Fourth Place (2022)", style: "Compact Mid-Block Counter", attrs: { attack: 78, defense: 88, speed: 86, control: 79 }, star: "Achraf Hakimi*" },
  "SEN": { name: "Senegal", flag: "sn", participations: 4, bestFinish: "Quarter-finals (2002)", style: "Physical Pace & Width", attrs: { attack: 79, defense: 81, speed: 89, control: 75 }, star: "Kalidou Koulibaly*" },
  "COD": { name: "Congo DR", flag: "cd", participations: 2, bestFinish: "Group Stage (1974)", style: "Athletic & Dynamic Offense", attrs: { attack: 74, defense: 72, speed: 84, control: 71 }, star: "Chancel Mbemba*" },
  "EGY": { name: "Egypt", flag: "eg", participations: 4, bestFinish: "Group Stage", style: "Compact Counter-Attack", attrs: { attack: 80, defense: 78, speed: 85, control: 76 }, star: "Mohamed Salah*" },
  "PAN": { name: "Panama", flag: "pa", participations: 2, bestFinish: "Group Stage (2018)", style: "Physical & Direct", attrs: { attack: 72, defense: 74, speed: 80, control: 71 }, star: "Adalberto Carrasquilla*" },
  "CIV": { name: "Ivory Coast", flag: "ci", participations: 4, bestFinish: "Group Stage", style: "Athletic Build-Up & Flair", attrs: { attack: 79, defense: 77, speed: 84, control: 79 }, star: "Franck Kessié*" },
  "ALG": { name: "Algeria", flag: "dz", participations: 5, bestFinish: "Round of 16 (2014)", style: "Technical possession & counters", attrs: { attack: 77, defense: 75, speed: 80, control: 81 }, star: "Riyad Mahrez*" },
  "TUN": { name: "Tunisia", flag: "tn", participations: 7, bestFinish: "Group Stage", style: "Disciplined Low-Block", attrs: { attack: 70, defense: 78, speed: 73, control: 72 }, star: "Ellyes Skhiri*" },
  "GHA": { name: "Ghana", flag: "gh", participations: 5, bestFinish: "Quarter-finals (2010)", style: "Fast Flank Overloads", attrs: { attack: 77, defense: 72, speed: 86, control: 74 }, star: "Mohammed Kudus*" },

  // Asia
  "JPN": { name: "Japan", flag: "jp", participations: 8, bestFinish: "Round of 16 (4 times)", style: "High-Speed Pressing", attrs: { attack: 81, defense: 79, speed: 88, control: 82 }, star: "Wataru Endo*" },
  "KOR": { name: "South Korea", flag: "kr", participations: 12, bestFinish: "Fourth Place (2002)", style: "Tenacious Direct Transitions", attrs: { attack: 80, defense: 75, speed: 87, control: 76 }, star: "Son Heung-min*" },
  "AUS": { name: "Australia", flag: "au", participations: 7, bestFinish: "Round of 16 (2006, 2022)", style: "High-Cross & Physical Grit", attrs: { attack: 74, defense: 77, speed: 78, control: 72 }, star: "Mathew Ryan*" },
  "IRN": { name: "Iran", flag: "ir", participations: 7, bestFinish: "Group Stage", style: "Low-Block Counter-Attack", attrs: { attack: 76, defense: 77, speed: 78, control: 70 }, star: "Mehdi Taremi*" },
  "KSA": { name: "Saudi Arabia", flag: "sa", participations: 7, bestFinish: "Round of 16 (1994)", style: "Tactical High Line", attrs: { attack: 73, defense: 71, speed: 79, control: 75 }, star: "Salem Al-Dawsari*" },
  "QAT": { name: "Qatar", flag: "qa", participations: 2, bestFinish: "Group Stage (2022)", style: "Methodical Buildup", attrs: { attack: 71, defense: 68, speed: 74, control: 73 }, star: "Akram Afif*" },
  "UZB": { name: "Uzbekistan", flag: "uz", participations: 1, bestFinish: "Debut (2026)", style: "Counter & Physicality", attrs: { attack: 73, defense: 74, speed: 78, control: 71 }, star: "Eldor Shomurodov*" },
  "IRQ": { name: "Iraq", flag: "iq", participations: 2, bestFinish: "Group Stage (1986)", style: "Direct Combative Play", attrs: { attack: 72, defense: 71, speed: 76, control: 69 }, star: "Aymen Hussein*" },

  // Oceania
  "NZL": { name: "New Zealand", flag: "nz", participations: 3, bestFinish: "Group Stage (1982, 2010)", style: "Organized Aerial Threat", attrs: { attack: 70, defense: 73, speed: 71, control: 68 }, star: "Chris Wood*" }
};

// --- Build Complete Teams Database with Dynamic Squads ---
const customSquads = {
  "USA": {
    starters: [
      { num: 1, name: "Matt Turner", pos: "GK" },
      { num: 2, name: "Sergiño Dest", pos: "DF" },
      { num: 3, name: "Antonee Robinson", pos: "DF" },
      { num: 4, name: "Tyler Adams", pos: "MF" },
      { num: 13, name: "Tim Ream", pos: "DF" },
      { num: 6, name: "Yunis Musah", pos: "MF" },
      { num: 8, name: "Weston McKennie", pos: "MF" },
      { num: 10, name: "Christian Pulisic*", pos: "FW" },
      { num: 7, name: "Giovanni Reyna", pos: "MF" },
      { num: 21, name: "Timothy Weah", pos: "FW" },
      { num: 9, name: "Folarin Balogun", pos: "FW" }
    ],
    subs: [
      { num: 18, name: "Ethan Horvath", pos: "GK" },
      { num: 12, name: "Miles Robinson", pos: "DF" },
      { num: 15, name: "Johnny Cardoso", pos: "MF" },
      { num: 11, name: "Brenden Aaronson", pos: "MF" },
      { num: 19, name: "Haji Wright", pos: "FW" },
      { num: 22, name: "Ricardo Pepi", pos: "FW" }
    ]
  },
  "ARG": {
    starters: [
      { num: 23, name: "Emiliano Martínez", pos: "GK" },
      { num: 26, name: "Nahuel Molina", pos: "DF" },
      { num: 3, name: "Nicolás Tagliafico", pos: "DF" },
      { num: 19, name: "Nicolás Otamendi", pos: "DF" },
      { num: 13, name: "Cristian Romero", pos: "DF" },
      { num: 7, name: "Rodrigo De Paul", pos: "MF" },
      { num: 24, name: "Enzo Fernández", pos: "MF" },
      { num: 10, name: "Lionel Messi*", pos: "FW" },
      { num: 20, name: "Alexis Mac Allister", pos: "MF" },
      { num: 22, name: "Lautaro Martínez", pos: "FW" },
      { num: 9, name: "Julián Álvarez", pos: "FW" }
    ],
    subs: [
      { num: 1, name: "Franco Armani", pos: "GK" },
      { num: 4, name: "Gonzalo Montiel", pos: "DF" },
      { num: 6, name: "German Pezzella", pos: "DF" },
      { num: 5, name: "Leandro Paredes", pos: "MF" },
      { num: 11, name: "Ángel Di María", pos: "FW" },
      { num: 15, name: "Nicolás González", pos: "FW" }
    ]
  },
  "BRA": {
    starters: [
      { num: 1, name: "Alisson Becker", pos: "GK" },
      { num: 2, name: "Danilo", pos: "DF" },
      { num: 6, name: "Wendell", pos: "DF" },
      { num: 3, name: "Éder Militão", pos: "DF" },
      { num: 4, name: "Marquinhos", pos: "DF" },
      { num: 5, name: "Bruno Guimarães", pos: "MF" },
      { num: 15, name: "João Gomes", pos: "MF" },
      { num: 7, name: "Vinícius Júnior*", pos: "FW" },
      { num: 8, name: "Lucas Paquetá", pos: "MF" },
      { num: 11, name: "Raphinha", pos: "FW" },
      { num: 10, name: "Rodrygo Goes", pos: "FW" }
    ],
    subs: [
      { num: 23, name: "Bento", pos: "GK" },
      { num: 13, name: "Yan Couto", pos: "DF" },
      { num: 17, name: "Beraldo", pos: "DF" },
      { num: 18, name: "Douglas Luiz", pos: "MF" },
      { num: 19, name: "Andreas Pereira", pos: "MF" },
      { num: 21, name: "Endrick", pos: "FW" }
    ]
  },
  "FRA": {
    starters: [
      { num: 16, name: "Mike Maignan", pos: "GK" },
      { num: 5, name: "Jules Koundé", pos: "DF" },
      { num: 22, name: "Théo Hernandez", pos: "DF" },
      { num: 4, name: "Dayot Upamecano", pos: "DF" },
      { num: 17, name: "William Saliba", pos: "DF" },
      { num: 8, name: "Aurélien Tchouaméni", pos: "MF" },
      { num: 13, name: "N'Golo Kanté", pos: "MF" },
      { num: 10, name: "Kylian Mbappé*", pos: "FW" },
      { num: 7, name: "Antoine Griezmann", pos: "MF" },
      { num: 11, name: "Ousmane Dembélé", pos: "FW" },
      { num: 15, name: "Marcus Thuram", pos: "FW" }
    ],
    subs: [
      { num: 1, name: "Brice Samba", pos: "GK" },
      { num: 3, name: "Ferland Mendy", pos: "DF" },
      { num: 2, name: "Benjamin Pavard", pos: "DF" },
      { num: 6, name: "Eduardo Camavinga", pos: "MF" },
      { num: 19, name: "Youssouf Fofana", pos: "MF" },
      { num: 9, name: "Olivier Giroud", pos: "FW" }
    ]
  },
  "ENG": {
    starters: [
      { num: 1, name: "Jordan Pickford", pos: "GK" },
      { num: 2, name: "Kyle Walker", pos: "DF" },
      { num: 3, name: "Luke Shaw", pos: "DF" },
      { num: 5, name: "John Stones", pos: "DF" },
      { num: 6, name: "Marc Guéhi", pos: "DF" },
      { num: 4, name: "Declan Rice", pos: "MF" },
      { num: 8, name: "Trent Alexander-Arnold", pos: "MF" },
      { num: 10, name: "Jude Bellingham*", pos: "MF" },
      { num: 7, name: "Bukayo Saka", pos: "FW" },
      { num: 11, name: "Phil Foden", pos: "FW" },
      { num: 9, name: "Harry Kane", pos: "FW" }
    ],
    subs: [
      { num: 13, name: "Aaron Ramsdale", pos: "GK" },
      { num: 12, name: "Kieran Trippier", pos: "DF" },
      { num: 14, name: "Ezri Konsa", pos: "DF" },
      { num: 16, name: "Conor Gallagher", pos: "MF" },
      { num: 21, name: "Cole Palmer", pos: "MF" },
      { num: 17, name: "Ivan Toney", pos: "FW" }
    ]
  },
  "MEX": {
    starters: [
      { num: 13, name: "Guillermo Ochoa", pos: "GK" },
      { num: 3, name: "César Montes", pos: "DF" },
      { num: 5, name: "Johan Vásquez", pos: "DF" },
      { num: 19, name: "Jorge Sánchez", pos: "DF" },
      { num: 6, name: "Gerardo Arteaga", pos: "DF" },
      { num: 4, name: "Edson Álvarez*", pos: "MF" },
      { num: 24, name: "Luis Chávez", pos: "MF" },
      { num: 7, name: "Luis Romo", pos: "MF" },
      { num: 15, name: "Uriel Antuna", pos: "FW" },
      { num: 11, name: "Santiago Giménez", pos: "FW" },
      { num: 9, name: "Julián Quiñones", pos: "FW" }
    ],
    subs: [
      { num: 1, name: "Julio González", pos: "GK" },
      { num: 2, name: "Bryan González", pos: "DF" },
      { num: 14, name: "Érick Sánchez", pos: "MF" },
      { num: 17, name: "Orbelín Pineda", pos: "MF" },
      { num: 10, name: "Alexis Vega", pos: "FW" },
      { num: 20, name: "Henry Martín", pos: "FW" }
    ]
  },
  "CAN": {
    starters: [
      { num: 16, name: "Maxime Crépeau", pos: "GK" },
      { num: 2, name: "Alistair Johnston", pos: "DF" },
      { num: 15, name: "Moïse Bombito", pos: "DF" },
      { num: 13, name: "Derek Cornelius", pos: "DF" },
      { num: 19, name: "Alphonso Davies*", pos: "DF" },
      { num: 7, name: "Stephen Eustáquio", pos: "MF" },
      { num: 8, name: "Ismaël Koné", pos: "MF" },
      { num: 21, name: "Jonathan Osorio", pos: "MF" },
      { num: 11, name: "Tajon Buchanan", pos: "FW" },
      { num: 9, name: "Cyle Larin", pos: "FW" },
      { num: 10, name: "Jonathan David", pos: "FW" }
    ],
    subs: [
      { num: 1, name: "Dayne St. Clair", pos: "GK" },
      { num: 4, name: "Kamal Miller", pos: "DF" },
      { num: 22, name: "Richie Laryea", pos: "DF" },
      { num: 6, name: "Samuel Piette", pos: "MF" },
      { num: 23, name: "Liam Millar", pos: "FW" },
      { num: 14, name: "Jacob Shaffelburg", pos: "FW" }
    ]
  },
  "ESP": {
    starters: [
      { num: 23, name: "Unai Simón", pos: "GK" },
      { num: 2, name: "Dani Carvajal", pos: "DF" },
      { num: 3, name: "Robin Le Normand", pos: "DF" },
      { num: 14, name: "Aymeric Laporte", pos: "DF" },
      { num: 24, name: "Marc Cucurella", pos: "DF" },
      { num: 16, name: "Rodri Hernández*", pos: "MF" },
      { num: 8, name: "Fabián Ruiz", pos: "MF" },
      { num: 10, name: "Dani Olmo", pos: "MF" },
      { num: 19, name: "Lamine Yamal", pos: "FW" },
      { num: 17, name: "Nico Williams", pos: "FW" },
      { num: 7, name: "Álvaro Morata", pos: "FW" }
    ],
    subs: [
      { num: 1, name: "David Raya", pos: "GK" },
      { num: 5, name: "Dani Vivian", pos: "DF" },
      { num: 12, name: "Alejandro Grimaldo", pos: "DF" },
      { num: 18, name: "Martin Zubimendi", pos: "MF" },
      { num: 20, name: "Pedri González", pos: "MF" },
      { num: 21, name: "Mikel Oyarzabal", pos: "FW" }
    ]
  },
  "GER": {
    starters: [
      { num: 22, name: "Marc-André ter Stegen", pos: "GK" },
      { num: 6, name: "Joshua Kimmich", pos: "DF" },
      { num: 2, name: "Antonio Rüdiger*", pos: "DF" },
      { num: 4, name: "Jonathan Tah", pos: "DF" },
      { num: 3, name: "David Raum", pos: "DF" },
      { num: 23, name: "Robert Andrich", pos: "MF" },
      { num: 21, name: "İlkay Gündoğan", pos: "MF" },
      { num: 10, name: "Jamal Musiala", pos: "MF" },
      { num: 17, name: "Florian Wirtz", pos: "MF" },
      { num: 19, name: "Leroy Sané", pos: "FW" },
      { num: 7, name: "Kai Havertz", pos: "FW" }
    ],
    subs: [
      { num: 12, name: "Oliver Baumann", pos: "GK" },
      { num: 15, name: "Nico Schlotterbeck", pos: "DF" },
      { num: 20, name: "Maximilian Mittelstädt", pos: "DF" },
      { num: 5, name: "Pascal Groß", pos: "MF" },
      { num: 13, name: "Thomas Müller", pos: "MF" },
      { num: 9, name: "Niclas Füllkrug", pos: "FW" }
    ]
  },
  "POR": {
    starters: [
      { num: 22, name: "Diogo Costa", pos: "GK" },
      { num: 2, name: "João Cancelo", pos: "DF" },
      { num: 4, name: "Rúben Dias", pos: "DF" },
      { num: 3, name: "Pepe", pos: "DF" },
      { num: 19, name: "Nuno Mendes", pos: "DF" },
      { num: 6, name: "João Palhinha", pos: "MF" },
      { num: 23, name: "Vitinha", pos: "MF" },
      { num: 8, name: "Bruno Fernandes*", pos: "MF" },
      { num: 10, name: "Bernardo Silva", pos: "FW" },
      { num: 17, name: "Rafael Leão", pos: "FW" },
      { num: 7, name: "Cristiano Ronaldo", pos: "FW" }
    ],
    subs: [
      { num: 1, name: "Rui Patrício", pos: "GK" },
      { num: 5, name: "Diogo Dalot", pos: "DF" },
      { num: 14, name: "Gonçalo Inácio", pos: "DF" },
      { num: 15, name: "João Neves", pos: "MF" },
      { num: 21, name: "Diogo Jota", pos: "FW" },
      { num: 11, name: "João Félix", pos: "FW" }
    ]
  },
  "COL": {
    starters: [
      { num: 12, name: "Camilo Vargas", pos: "GK" },
      { num: 21, name: "Daniel Muñoz", pos: "DF" },
      { num: 23, name: "Davinson Sánchez", pos: "DF" },
      { num: 2, name: "Carlos Cuesta", pos: "DF" },
      { num: 17, name: "Johan Mojica", pos: "DF" },
      { num: 16, name: "Jefferson Lerma", pos: "MF" },
      { num: 6, name: "Richard Ríos", pos: "MF" },
      { num: 10, name: "James Rodríguez*", pos: "MF" },
      { num: 11, name: "Jhon Arias", pos: "FW" },
      { num: 7, name: "Luis Díaz", pos: "FW" },
      { num: 9, name: "Jhon Córdoba", pos: "FW" }
    ],
    subs: [
      { num: 1, name: "David Ospina", pos: "GK" },
      { num: 4, name: "Santiago Arias", pos: "DF" },
      { num: 13, name: "Yerry Mina", pos: "DF" },
      { num: 5, name: "Kevin Castaño", pos: "MF" },
      { num: 20, name: "Juan Fernando Quintero", pos: "MF" },
      { num: 19, name: "Rafael Santos Borré", pos: "FW" }
    ]
  },
  "URU": {
    starters: [
      { num: 1, name: "Sergio Rochet", pos: "GK" },
      { num: 8, name: "Nahitan Nández", pos: "DF" },
      { num: 4, name: "Ronald Araújo", pos: "DF" },
      { num: 2, name: "José María Giménez", pos: "DF" },
      { num: 16, name: "Mathías Olivera", pos: "DF" },
      { num: 5, name: "Manuel Ugarte", pos: "MF" },
      { num: 15, name: "Federico Valverde*", pos: "MF" },
      { num: 7, name: "Nicolás de la Cruz", pos: "MF" },
      { num: 11, name: "Facundo Pellistri", pos: "FW" },
      { num: 20, name: "Maximiliano Araújo", pos: "FW" },
      { num: 19, name: "Darwin Núñez", pos: "FW" }
    ],
    subs: [
      { num: 23, name: "Santiago Mele", pos: "GK" },
      { num: 13, name: "Guillermo Varela", pos: "DF" },
      { num: 3, name: "Sebastián Cáceres", pos: "DF" },
      { num: 6, name: "Rodrigo Bentancur", pos: "MF" },
      { num: 10, name: "Giorgian de Arrascaeta", pos: "MF" },
      { num: 9, name: "Luis Suárez", pos: "FW" }
    ]
  },
  "NED": {
    starters: [
      { num: 1, name: "Bart Verbruggen", pos: "GK" },
      { num: 22, name: "Denzel Dumfries", pos: "DF" },
      { num: 6, name: "Stefan de Vrij", pos: "DF" },
      { num: 4, name: "Virgil van Dijk*", pos: "DF" },
      { num: 5, name: "Nathan Aké", pos: "DF" },
      { num: 24, name: "Jerdy Schouten", pos: "MF" },
      { num: 14, name: "Tijjani Reijnders", pos: "MF" },
      { num: 7, name: "Xavi Simons", pos: "MF" },
      { num: 25, name: "Jeremie Frimpong", pos: "FW" },
      { num: 11, name: "Cody Gakpo", pos: "FW" },
      { num: 10, name: "Memphis Depay", pos: "FW" }
    ],
    subs: [
      { num: 13, name: "Mark Flekken", pos: "GK" },
      { num: 3, name: "Matthijs de Ligt", pos: "DF" },
      { num: 15, name: "Micky van de Ven", pos: "DF" },
      { num: 16, name: "Joey Veerman", pos: "MF" },
      { num: 8, name: "Georginio Wijnaldum", pos: "MF" },
      { num: 9, name: "Wout Weghorst", pos: "FW" }
    ]
  },
  "JPN": {
    starters: [
      { num: 12, name: "Zion Suzuki", pos: "GK" },
      { num: 2, name: "Yukinari Sugawara", pos: "DF" },
      { num: 4, name: "Ko Itakura", pos: "DF" },
      { num: 3, name: "Shogo Taniguchi", pos: "DF" },
      { num: 21, name: "Hiroki Ito", pos: "DF" },
      { num: 6, name: "Wataru Endo*", pos: "MF" },
      { num: 5, name: "Hidemasa Morita", pos: "MF" },
      { num: 20, name: "Takefusa Kubo", pos: "MF" },
      { num: 8, name: "Daichi Kamada", pos: "MF" },
      { num: 7, name: "Kaoru Mitoma", pos: "FW" },
      { num: 9, name: "Ayase Ueda", pos: "FW" }
    ],
    subs: [
      { num: 1, name: "Keisuke Osako", pos: "GK" },
      { num: 15, name: "Koki Machida", pos: "DF" },
      { num: 10, name: "Ritsu Doan", pos: "MF" },
      { num: 11, name: "Takumi Minamino", pos: "MF" },
      { num: 13, name: "Keito Nakamura", pos: "FW" },
      { num: 18, name: "Takuma Asano", pos: "FW" }
    ]
  },
  "KOR": {
    starters: [
      { num: 21, name: "Jo Hyeon-woo", pos: "GK" },
      { num: 22, name: "Seol Young-woo", pos: "DF" },
      { num: 4, name: "Kim Min-jae", pos: "DF" },
      { num: 15, name: "Jung Seung-hyun", pos: "DF" },
      { num: 3, name: "Kim Jin-su", pos: "DF" },
      { num: 6, name: "Hwang In-beom", pos: "MF" },
      { num: 5, name: "Park Yong-woo", pos: "MF" },
      { num: 10, name: "Lee Jae-sung", pos: "MF" },
      { num: 18, name: "Lee Kang-in", pos: "MF" },
      { num: 11, name: "Hwang Hee-chan", pos: "FW" },
      { num: 7, name: "Son Heung-min*", pos: "FW" }
    ],
    subs: [
      { num: 12, name: "Song Bum-keun", pos: "GK" },
      { num: 19, name: "Kim Young-gwon", pos: "DF" },
      { num: 2, name: "Kim Tae-hwan", pos: "DF" },
      { num: 8, name: "Hong Hyun-seok", pos: "MF" },
      { num: 17, name: "Jeong Woo-yeong", pos: "MF" },
      { num: 9, name: "Cho Gue-sung", pos: "FW" }
    ]
  },
  "MAR": {
    starters: [
      { num: 1, name: "Yassine Bounou", pos: "GK" },
      { num: 2, name: "Achraf Hakimi*", pos: "DF" },
      { num: 20, name: "Achraf Dari", pos: "DF" },
      { num: 5, name: "Nayef Aguerd", pos: "DF" },
      { num: 25, name: "Yahia Attiyat Allah", pos: "DF" },
      { num: 4, name: "Sofyan Amrabat", pos: "MF" },
      { num: 8, name: "Azzedine Ounahi", pos: "MF" },
      { num: 14, name: "Bilal El Khannouss", pos: "MF" },
      { num: 7, name: "Hakim Ziyech", pos: "FW" },
      { num: 21, name: "Amine Adli", pos: "FW" },
      { num: 19, name: "Youssef En-Nesyri", pos: "FW" }
    ],
    subs: [
      { num: 12, name: "Munir Mohamedi", pos: "GK" },
      { num: 22, name: "Abdel Abqar", pos: "DF" },
      { num: 3, name: "Noussair Mazraoui", pos: "DF" },
      { num: 9, name: "Tarik Tissoudali", pos: "FW" },
      { num: 10, name: "Brahim Díaz", pos: "FW" },
      { num: 11, name: "Soufiane Rahimi", pos: "FW" }
    ]
  }
};

const teamsDb = {};
Object.keys(baseTeams).forEach(code => {
  const base = baseTeams[code];
  
  // Starters templates based on positions
  let startersList = [
    { num: 1, name: "Goalkeeper One", pos: "GK" },
    { num: 2, name: "Right Back Two", pos: "DF" },
    { num: 3, name: "Left Back Three", pos: "DF" },
    { num: 4, name: "Center Mid Four", pos: "MF" },
    { num: 5, name: "Center Back Five", pos: "DF" },
    { num: 6, name: "Defensive Mid Six", pos: "MF" },
    { num: 8, name: "Box-to-Box Eight", pos: "MF" },
    { num: 10, name: base.star, pos: "FW" }, // Star player
    { num: 7, name: "Playmaker Seven", pos: "MF" },
    { num: 11, name: "Winger Eleven", pos: "FW" },
    { num: 9, name: "Striker Nine", pos: "FW" }
  ];

  // Substitutes template
  let subsList = [
    { num: 12, name: "Sub Goalkeeper", pos: "GK" },
    { num: 14, name: "Sub Defender A", pos: "DF" },
    { num: 15, name: "Sub Defender B", pos: "DF" },
    { num: 16, name: "Sub Midfielder A", pos: "MF" },
    { num: 17, name: "Sub Midfielder B", pos: "MF" },
    { num: 18, name: "Sub Forward", pos: "FW" }
  ];

  if (customSquads[code]) {
    startersList = JSON.parse(JSON.stringify(customSquads[code].starters));
    subsList = JSON.parse(JSON.stringify(customSquads[code].subs));
  } else {
    // Fill in default naming for other teams to ensure completeness
    startersList.forEach(player => {
      if (player.name === base.star) return; // Keep star player
      const positionLabels = {
        "GK": `${base.name} Goalkeeper`,
        "DF": `${base.name} Defender ${player.num}`,
        "MF": `${base.name} Midfielder ${player.num}`,
        "FW": `${base.name} Attacker ${player.num}`
      };
      player.name = positionLabels[player.pos];
    });

    subsList.forEach(player => {
      const positionLabels = {
        "GK": `Backup GK`,
        "DF": `Backup Defender ${player.num}`,
        "MF": `Backup Midfielder ${player.num}`,
        "FW": `Backup Forward ${player.num}`
      };
      player.name = positionLabels[player.pos];
    });
  }

  teamsDb[code] = {
    name: base.name,
    flag: base.flag,
    participations: base.participations,
    bestFinish: base.bestFinish,
    style: {
      name: base.style,
      type: "Positional",
      desc: `A tactical profile built on their traditional playing philosophy. ${base.style} matches their team composition.`,
      attrs: base.attrs
    },
    starters: startersList,
    subs: subsList
  };
});

// --- Timezone Configuration List ---
const timezonesList = [
  { id: "local", name: "My Local Time" },
  { id: "UTC", name: "UTC / GMT (Coordinated Universal Time)" },
  { id: "America/New_York", name: "Eastern Time (EST/EDT - New York, Miami)" },
  { id: "America/Chicago", name: "Central Time (CST/CDT - Chicago, Dallas, CDMX)" },
  { id: "America/Los_Angeles", name: "Pacific Time (PST/PDT - LA, Vancouver)" },
  { id: "Europe/London", name: "London Time (GMT/BST)" },
  { id: "Europe/Paris", name: "Central European Time (CET/CEST - Paris, Madrid, Rome)" },
  { id: "Asia/Seoul", name: "Korea Time (KST - Seoul)" },
  { id: "Asia/Tokyo", name: "Japan Time (JST - Tokyo)" },
  { id: "America/Argentina/Buenos_Aires", name: "Argentina Time (ART - Buenos Aires)" },
  { id: "America/Sao_Paulo", name: "Brazil Time (BRT - Rio, Sao Paulo)" }
];

// --- INITIAL FIXTURES (All Scheduled with NO results - Tournament not started yet) ---
const initialFixtures = [
  {
    "id": "m1",
    "stage": "Group A",
    "team1": "MEX",
    "team2": "RSA",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-11T19:00:00Z",
    "stadium": "Estadio Azteca, Mexico City",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m2",
    "stage": "Group A",
    "team1": "KOR",
    "team2": "CZE",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-11T22:00:00Z",
    "stadium": "Estadio Guadalajara, Guadalajara",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m3",
    "stage": "Group B",
    "team1": "CAN",
    "team2": "BIH",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-12T16:00:00Z",
    "stadium": "BMO Field, Toronto",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m4",
    "stage": "Group D",
    "team1": "USA",
    "team2": "PAR",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-12T20:00:00Z",
    "stadium": "SoFi Stadium, Los Angeles",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m5",
    "stage": "Group B",
    "team1": "QAT",
    "team2": "SUI",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-13T17:00:00Z",
    "stadium": "Levi's Stadium, Santa Clara",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m6",
    "stage": "Group C",
    "team1": "BRA",
    "team2": "MAR",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-13T19:30:00Z",
    "stadium": "MetLife Stadium, New York/New Jersey",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m7",
    "stage": "Group C",
    "team1": "HAI",
    "team2": "SCO",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-13T22:00:00Z",
    "stadium": "Gillette Stadium, Boston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m8",
    "stage": "Group D",
    "team1": "AUS",
    "team2": "TUR",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-13T23:30:00Z",
    "stadium": "BC Place, Vancouver",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m9",
    "stage": "Group E",
    "team1": "GER",
    "team2": "CUW",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-14T15:00:00Z",
    "stadium": "Lumen Field, Seattle",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m10",
    "stage": "Group F",
    "team1": "NED",
    "team2": "JPN",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-14T17:30:00Z",
    "stadium": "Gillette Stadium, Boston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m11",
    "stage": "Group E",
    "team1": "CIV",
    "team2": "ECU",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-14T18:30:00Z",
    "stadium": "AT&T Stadium, Dallas",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m12",
    "stage": "Group F",
    "team1": "SWE",
    "team2": "TUN",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-14T21:30:00Z",
    "stadium": "NRG Stadium, Houston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m13",
    "stage": "Group H",
    "team1": "ESP",
    "team2": "CPV",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-15T17:00:00Z",
    "stadium": "Hard Rock Stadium, Miami",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m14",
    "stage": "Group G",
    "team1": "BEL",
    "team2": "EGY",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-15T19:30:00Z",
    "stadium": "Mercedes-Benz Stadium, Atlanta",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m15",
    "stage": "Group H",
    "team1": "KSA",
    "team2": "URU",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-15T20:30:00Z",
    "stadium": "SoFi Stadium, Los Angeles",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m16",
    "stage": "Group G",
    "team1": "IRN",
    "team2": "NZL",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-15T23:00:00Z",
    "stadium": "Empower Field, Denver",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m17",
    "stage": "Group I",
    "team1": "FRA",
    "team2": "SEN",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-16T16:00:00Z",
    "stadium": "Gillette Stadium, Boston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m18",
    "stage": "Group I",
    "team1": "IRQ",
    "team2": "NOR",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-16T18:30:00Z",
    "stadium": "MetLife Stadium, New York/New Jersey",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m19",
    "stage": "Group J",
    "team1": "ARG",
    "team2": "ALG",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-16T19:30:00Z",
    "stadium": "AT&T Stadium, Dallas",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m20",
    "stage": "Group J",
    "team1": "AUT",
    "team2": "JOR",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-16T22:00:00Z",
    "stadium": "Mercedes-Benz Stadium, Atlanta",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m21",
    "stage": "Group K",
    "team1": "POR",
    "team2": "COD",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-17T17:00:00Z",
    "stadium": "Levi's Stadium, Santa Clara",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m22",
    "stage": "Group L",
    "team1": "ENG",
    "team2": "CRO",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-17T20:00:00Z",
    "stadium": "BMO Field, Toronto",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m23",
    "stage": "Group L",
    "team1": "GHA",
    "team2": "PAN",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-17T21:30:00Z",
    "stadium": "NRG Stadium, Houston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m24",
    "stage": "Group K",
    "team1": "UZB",
    "team2": "COL",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-17T23:00:00Z",
    "stadium": "Lumen Field, Seattle",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m25",
    "stage": "Group A",
    "team1": "CZE",
    "team2": "RSA",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-18T12:00:00Z",
    "stadium": "Mercedes-Benz Stadium, Atlanta",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m26",
    "stage": "Group B",
    "team1": "SUI",
    "team2": "BIH",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-18T15:00:00Z",
    "stadium": "SoFi Stadium, Los Angeles",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m27",
    "stage": "Group B",
    "team1": "CAN",
    "team2": "QAT",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-18T18:00:00Z",
    "stadium": "BC Place, Vancouver",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m28",
    "stage": "Group A",
    "team1": "MEX",
    "team2": "KOR",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-18T21:00:00Z",
    "stadium": "Estadio Guadalajara, Guadalajara",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m29",
    "stage": "Group D",
    "team1": "USA",
    "team2": "AUS",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-19T15:00:00Z",
    "stadium": "Lumen Field, Seattle",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m30",
    "stage": "Group C",
    "team1": "SCO",
    "team2": "MAR",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-19T18:00:00Z",
    "stadium": "Gillette Stadium, Boston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m31",
    "stage": "Group C",
    "team1": "BRA",
    "team2": "HAI",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-19T21:00:00Z",
    "stadium": "Lincoln Financial Field, Philadelphia",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m32",
    "stage": "Group D",
    "team1": "TUR",
    "team2": "PAR",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-19T23:59:59Z",
    "stadium": "Levi's Stadium, Santa Clara",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m33",
    "stage": "Group F",
    "team1": "NED",
    "team2": "SWE",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-20T13:00:00Z",
    "stadium": "NRG Stadium, Houston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m34",
    "stage": "Group E",
    "team1": "GER",
    "team2": "CIV",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-20T16:00:00Z",
    "stadium": "BMO Field, Toronto",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m35",
    "stage": "Group E",
    "team1": "ECU",
    "team2": "CUW",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-20T22:00:00Z",
    "stadium": "Arrowhead Stadium, Kansas City",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m36",
    "stage": "Group F",
    "team1": "TUN",
    "team2": "JPN",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-20T23:59:59Z",
    "stadium": "Estadio Monterrey, Monterrey",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m37",
    "stage": "Group H",
    "team1": "ESP",
    "team2": "KSA",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-21T12:00:00Z",
    "stadium": "Mercedes-Benz Stadium, Atlanta",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m38",
    "stage": "Group G",
    "team1": "BEL",
    "team2": "IRN",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-21T15:00:00Z",
    "stadium": "SoFi Stadium, Los Angeles",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m39",
    "stage": "Group H",
    "team1": "URU",
    "team2": "CPV",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-21T18:00:00Z",
    "stadium": "Hard Rock Stadium, Miami",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m40",
    "stage": "Group G",
    "team1": "NZL",
    "team2": "EGY",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-21T21:00:00Z",
    "stadium": "BC Place, Vancouver",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m41",
    "stage": "Group J",
    "team1": "ARG",
    "team2": "AUT",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-22T13:00:00Z",
    "stadium": "AT&T Stadium, Dallas",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m42",
    "stage": "Group I",
    "team1": "FRA",
    "team2": "IRQ",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-22T17:00:00Z",
    "stadium": "Lincoln Financial Field, Philadelphia",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m43",
    "stage": "Group I",
    "team1": "NOR",
    "team2": "SEN",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-22T20:00:00Z",
    "stadium": "MetLife Stadium, New York/New Jersey",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m44",
    "stage": "Group J",
    "team1": "JOR",
    "team2": "ALG",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-22T23:00:00Z",
    "stadium": "Levi's Stadium, Santa Clara",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m45",
    "stage": "Group K",
    "team1": "POR",
    "team2": "UZB",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-23T13:00:00Z",
    "stadium": "NRG Stadium, Houston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m46",
    "stage": "Group L",
    "team1": "ENG",
    "team2": "GHA",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-23T16:00:00Z",
    "stadium": "Gillette Stadium, Boston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m47",
    "stage": "Group L",
    "team1": "PAN",
    "team2": "CRO",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-23T19:00:00Z",
    "stadium": "BMO Field, Toronto",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m48",
    "stage": "Group K",
    "team1": "COL",
    "team2": "COD",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-23T22:00:00Z",
    "stadium": "Estadio Guadalajara, Guadalajara",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m49",
    "stage": "Group B",
    "team1": "SUI",
    "team2": "CAN",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-24T15:00:00Z",
    "stadium": "BC Place, Vancouver",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m50",
    "stage": "Group B",
    "team1": "BIH",
    "team2": "QAT",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-24T15:00:00Z",
    "stadium": "Lumen Field, Seattle",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m51",
    "stage": "Group C",
    "team1": "SCO",
    "team2": "BRA",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-24T18:00:00Z",
    "stadium": "Hard Rock Stadium, Miami",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m52",
    "stage": "Group C",
    "team1": "MAR",
    "team2": "HAI",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-24T18:00:00Z",
    "stadium": "Mercedes-Benz Stadium, Atlanta",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m53",
    "stage": "Group A",
    "team1": "CZE",
    "team2": "MEX",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-24T21:00:00Z",
    "stadium": "Estadio Azteca, Mexico City",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m54",
    "stage": "Group A",
    "team1": "RSA",
    "team2": "KOR",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-24T21:00:00Z",
    "stadium": "Estadio Monterrey, Monterrey",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m55",
    "stage": "Group E",
    "team1": "CUW",
    "team2": "CIV",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-25T16:00:00Z",
    "stadium": "Lincoln Financial Field, Philadelphia",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m56",
    "stage": "Group E",
    "team1": "ECU",
    "team2": "GER",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-25T16:00:00Z",
    "stadium": "MetLife Stadium, New York/New Jersey",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m57",
    "stage": "Group F",
    "team1": "JPN",
    "team2": "SWE",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-25T22:00:00Z",
    "stadium": "SoFi Stadium, Los Angeles",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m58",
    "stage": "Group F",
    "team1": "TUN",
    "team2": "NED",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-25T22:00:00Z",
    "stadium": "Levi's Stadium, Santa Clara",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m59",
    "stage": "Group D",
    "team1": "TUR",
    "team2": "USA",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-25T22:00:00Z",
    "stadium": "SoFi Stadium, Los Angeles",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m60",
    "stage": "Group D",
    "team1": "PAR",
    "team2": "AUS",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-25T22:00:00Z",
    "stadium": "Levi's Stadium, Santa Clara",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m61",
    "stage": "Group I",
    "team1": "NOR",
    "team2": "FRA",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-26T15:00:00Z",
    "stadium": "Gillette Stadium, Boston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m62",
    "stage": "Group I",
    "team1": "SEN",
    "team2": "IRQ",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-26T15:00:00Z",
    "stadium": "BMO Field, Toronto",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m63",
    "stage": "Group H",
    "team1": "CPV",
    "team2": "KSA",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-26T20:00:00Z",
    "stadium": "NRG Stadium, Houston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m64",
    "stage": "Group H",
    "team1": "URU",
    "team2": "ESP",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-26T20:00:00Z",
    "stadium": "Estadio Guadalajara, Guadalajara",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m65",
    "stage": "Group G",
    "team1": "EGY",
    "team2": "IRN",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-26T23:00:00Z",
    "stadium": "Lumen Field, Seattle",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m66",
    "stage": "Group G",
    "team1": "NZL",
    "team2": "BEL",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-26T23:00:00Z",
    "stadium": "AT&T Stadium, Dallas",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m67",
    "stage": "Group L",
    "team1": "PAN",
    "team2": "ENG",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-27T13:00:00Z",
    "stadium": "MetLife Stadium, New York/New Jersey",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m68",
    "stage": "Group L",
    "team1": "CRO",
    "team2": "GHA",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-27T13:00:00Z",
    "stadium": "Gillette Stadium, Boston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m69",
    "stage": "Group J",
    "team1": "ALG",
    "team2": "AUT",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-27T18:00:00Z",
    "stadium": "Mercedes-Benz Stadium, Atlanta",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m70",
    "stage": "Group J",
    "team1": "JOR",
    "team2": "ARG",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-27T18:00:00Z",
    "stadium": "AT&T Stadium, Dallas",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m71",
    "stage": "Group K",
    "team1": "COL",
    "team2": "POR",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-27T21:00:00Z",
    "stadium": "Hard Rock Stadium, Miami",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m72",
    "stage": "Group K",
    "team1": "COD",
    "team2": "UZB",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-27T21:00:00Z",
    "stadium": "Lumen Field, Seattle",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m73",
    "stage": "Round of 32",
    "team1": "2A",
    "team2": "2B",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-28T18:00:00Z",
    "stadium": "SoFi Stadium, Los Angeles",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m74",
    "stage": "Round of 32",
    "team1": "1E",
    "team2": "3rd_1",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-29T15:00:00Z",
    "stadium": "Gillette Stadium, Boston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m75",
    "stage": "Round of 32",
    "team1": "1F",
    "team2": "2C",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-29T18:00:00Z",
    "stadium": "Estadio Monterrey, Monterrey",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m76",
    "stage": "Round of 32",
    "team1": "1C",
    "team2": "2F",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-29T21:00:00Z",
    "stadium": "NRG Stadium, Houston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m77",
    "stage": "Round of 32",
    "team1": "1I",
    "team2": "3rd_2",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-30T14:00:00Z",
    "stadium": "MetLife Stadium, New York/New Jersey",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m78",
    "stage": "Round of 32",
    "team1": "2E",
    "team2": "2I",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-30T17:00:00Z",
    "stadium": "AT&T Stadium, Dallas",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m79",
    "stage": "Round of 32",
    "team1": "1A",
    "team2": "3rd_3",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-06-30T20:00:00Z",
    "stadium": "Estadio Azteca, Mexico City",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m80",
    "stage": "Round of 32",
    "team1": "1L",
    "team2": "3rd_4",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-01T14:00:00Z",
    "stadium": "Mercedes-Benz Stadium, Atlanta",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m81",
    "stage": "Round of 32",
    "team1": "1D",
    "team2": "3rd_5",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-01T17:00:00Z",
    "stadium": "Levi's Stadium, San Francisco Bay Area",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m82",
    "stage": "Round of 32",
    "team1": "2K",
    "team2": "2L",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-01T21:00:00Z",
    "stadium": "Lumen Field, Seattle",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m83",
    "stage": "Round of 32",
    "team1": "1B",
    "team2": "3rd_6",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-02T14:00:00Z",
    "stadium": "BMO Field, Toronto",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m84",
    "stage": "Round of 32",
    "team1": "2D",
    "team2": "2G",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-02T17:00:00Z",
    "stadium": "SoFi Stadium, Los Angeles",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m85",
    "stage": "Round of 32",
    "team1": "1J",
    "team2": "2H",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-02T21:00:00Z",
    "stadium": "BC Place, Vancouver",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m86",
    "stage": "Round of 32",
    "team1": "1G",
    "team2": "3rd_7",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-03T14:00:00Z",
    "stadium": "Hard Rock Stadium, Miami",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m87",
    "stage": "Round of 32",
    "team1": "1K",
    "team2": "3rd_8",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-03T17:00:00Z",
    "stadium": "Arrowhead Stadium, Kansas City",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m88",
    "stage": "Round of 32",
    "team1": "1H",
    "team2": "2J",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-03T21:00:00Z",
    "stadium": "AT&T Stadium, Dallas",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m89",
    "stage": "Round of 16",
    "team1": "W74",
    "team2": "W77",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-04T17:00:00Z",
    "stadium": "Lincoln Financial Field, Philadelphia",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m90",
    "stage": "Round of 16",
    "team1": "W73",
    "team2": "W75",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-04T13:00:00Z",
    "stadium": "NRG Stadium, Houston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m91",
    "stage": "Round of 16",
    "team1": "W76",
    "team2": "W78",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-05T16:00:00Z",
    "stadium": "MetLife Stadium, New York/New Jersey",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m92",
    "stage": "Round of 16",
    "team1": "W79",
    "team2": "W80",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-05T20:00:00Z",
    "stadium": "Estadio Azteca, Mexico City",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m93",
    "stage": "Round of 16",
    "team1": "W83",
    "team2": "W84",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-06T15:00:00Z",
    "stadium": "AT&T Stadium, Dallas",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m94",
    "stage": "Round of 16",
    "team1": "W81",
    "team2": "W82",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-06T20:00:00Z",
    "stadium": "Lumen Field, Seattle",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m95",
    "stage": "Round of 16",
    "team1": "W86",
    "team2": "W88",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-07T12:00:00Z",
    "stadium": "Mercedes-Benz Stadium, Atlanta",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m96",
    "stage": "Round of 16",
    "team1": "W85",
    "team2": "W87",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-07T16:00:00Z",
    "stadium": "BC Place, Vancouver",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m97",
    "stage": "Quarter-finals",
    "team1": "W89",
    "team2": "W90",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-09T16:00:00Z",
    "stadium": "Gillette Stadium, Boston",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m98",
    "stage": "Quarter-finals",
    "team1": "W93",
    "team2": "W94",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-10T15:00:00Z",
    "stadium": "SoFi Stadium, Los Angeles",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m99",
    "stage": "Quarter-finals",
    "team1": "W91",
    "team2": "W92",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-11T17:00:00Z",
    "stadium": "Hard Rock Stadium, Miami",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m100",
    "stage": "Quarter-finals",
    "team1": "W95",
    "team2": "W96",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-11T21:00:00Z",
    "stadium": "Arrowhead Stadium, Kansas City",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m101",
    "stage": "Semi-finals",
    "team1": "W97",
    "team2": "W98",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-14T19:00:00Z",
    "stadium": "AT&T Stadium, Dallas",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m102",
    "stage": "Semi-finals",
    "team1": "W99",
    "team2": "W100",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-15T19:00:00Z",
    "stadium": "Mercedes-Benz Stadium, Atlanta",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m103",
    "stage": "Third Place",
    "team1": "L101",
    "team2": "L102",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-18T18:00:00Z",
    "stadium": "Hard Rock Stadium, Miami",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m104",
    "stage": "Final",
    "team1": "W101",
    "team2": "W102",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-19T19:00:00Z",
    "stadium": "MetLife Stadium, New York/New Jersey",
    "liveMinute": null,
    "events": []
  }
];

// --- App State ---
let fixtures = JSON.parse(JSON.stringify(initialFixtures));
resolveKnockoutTeams(); // Run dynamic resolution initially
let userTimezone = "local";
let followedTeams = JSON.parse(localStorage.getItem("wc26_followed_teams")) || [];
let selectedDate = "2026-06-11";
let activeView = "calendar";
let activeDetailTab = "lineups";

// --- DOM References ---
const timezoneSelector = document.getElementById("timezone-selector");
const btnRefreshData = document.getElementById("btn-refresh-data");
const refreshSvgIcon = document.getElementById("refresh-svg-icon");
const followedListPlaceholder = document.getElementById("followed-list-placeholder");
const btnEditFavorites = document.getElementById("btn-edit-favorites");

const tabCalendar = document.getElementById("tab-calendar");
const tabBracket = document.getElementById("tab-bracket");
const tabStandings = document.getElementById("tab-standings");
const calendarView = document.getElementById("calendar-view");
const bracketView = document.getElementById("bracket-view");
const standingsView = document.getElementById("standings-view");
const standingsGridContainer = document.getElementById("standings-grid-container");

const calendarDatesRow = document.getElementById("calendar-dates-row");
const btnPrevDate = document.getElementById("btn-prev-date");
const btnNextDate = document.getElementById("btn-next-date");
const currentDateTitle = document.getElementById("current-date-title");
const matchCountBadge = document.getElementById("match-count-badge");
const fixturesGridList = document.getElementById("fixtures-grid-list");
const teamSearchInput = document.getElementById("team-search");
const filterFavoritesCheckbox = document.getElementById("filter-favorites");

const bracketTreeContainer = document.getElementById("bracket-tree-container");

const onboardingDialog = document.getElementById("onboarding-dialog");
const onboardingTimezone = document.getElementById("onboarding-timezone");
const onboardingTeamsGrid = document.getElementById("onboarding-teams-grid");
const onboardingForm = document.getElementById("onboarding-form");
const favCountText = document.getElementById("fav-count");

const matchDetailsDialog = document.getElementById("match-details-dialog");
const matchCenterContent = document.getElementById("match-center-content");
const toastContainer = document.getElementById("toast-container");

// --- Initialization ---
const speakerMutedIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-audio">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>
`;

const speakerUnmutedIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" class="icon-audio">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
`;

function updateMuteButtonState(video, textSpan, iconSpan) {
  if (video.muted) {
    iconSpan.innerHTML = speakerMutedIcon;
    textSpan.setAttribute("data-i18n", "audio-unmute");
    textSpan.textContent = translate("audio-unmute");
  } else {
    iconSpan.innerHTML = speakerUnmutedIcon;
    textSpan.setAttribute("data-i18n", "audio-mute");
    textSpan.textContent = translate("audio-mute");
  }
}

function startIntro() {
  const overlay = document.getElementById("video-intro-overlay");
  const video = document.getElementById("intro-video");
  const skipBtn = document.getElementById("skip-intro-btn");
  const muteBtn = document.getElementById("mute-toggle-btn");
  const muteText = document.getElementById("mute-btn-text");
  const speakerIconWrapper = document.getElementById("speaker-icon-wrapper");
  const playOverlayBtn = document.getElementById("play-overlay-btn");

  if (!overlay || !video) {
    initializeApp();
    return;
  }

  let introEnded = false;

  const finishIntro = (immediate = false) => {
    if (introEnded) return;
    introEnded = true;

    try {
      video.pause();
    } catch (e) {}

    const transitionOut = () => {
      overlay.classList.add("fade-out");
      setTimeout(() => {
        overlay.style.display = "none";
        initializeApp();
      }, 500);
    };

    if (immediate) {
      transitionOut();
    } else {
      setTimeout(transitionOut, 2000);
    }
  };

  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      finishIntro(true);
    });
  }

  if (muteBtn && muteText && speakerIconWrapper) {
    muteBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      updateMuteButtonState(video, muteText, speakerIconWrapper);
    });
  }

  video.addEventListener("ended", () => {
    finishIntro(false);
  });

  video.addEventListener("error", () => {
    console.error("Error loading intro video.");
    finishIntro(true);
  });

  // Try playing unmuted first
  video.muted = false;
  video.play().then(() => {
    if (muteBtn && muteText && speakerIconWrapper) {
      updateMuteButtonState(video, muteText, speakerIconWrapper);
    }
  }).catch(err => {
    console.warn("Unmuted autoplay blocked by browser policy:", err);
    // Show the play button overlay in the center!
    if (playOverlayBtn) {
      playOverlayBtn.style.display = "flex";
      
      // Update mute button to show it is ready but currently paused
      if (muteBtn && muteText && speakerIconWrapper) {
        updateMuteButtonState(video, muteText, speakerIconWrapper);
      }

      playOverlayBtn.addEventListener("click", () => {
        video.muted = false;
        video.play().then(() => {
          playOverlayBtn.style.display = "none";
          if (muteBtn && muteText && speakerIconWrapper) {
            updateMuteButtonState(video, muteText, speakerIconWrapper);
          }
        }).catch(playErr => {
          console.error("Failed to play unmuted after click:", playErr);
          finishIntro(true);
        });
      });
    } else {
      // Fallback: autoplay muted if the element is missing
      video.muted = true;
      if (muteBtn && muteText && speakerIconWrapper) {
        updateMuteButtonState(video, muteText, speakerIconWrapper);
      }
      video.play().catch(() => finishIntro(true));
    }
  });
}

function initializeApp() {
  // 1. Populate Timezone Selectors
  populateTimezoneDropdowns();

  // 2. Set up event listeners
  setupEventListeners();

  // 3. Onboarding check
  const hasOnboarded = localStorage.getItem("wc26_onboarded");
  if (!hasOnboarded) {
    showOnboarding();
  } else {
    renderApp();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Language State
  const savedLang = localStorage.getItem("wc26_language") || "en";
  currentLanguage = savedLang;
  const langToggleCheckbox = document.getElementById("lang-toggle-checkbox");
  if (langToggleCheckbox) {
    langToggleCheckbox.checked = (savedLang === "es");
  }
  applyLanguage(savedLang);

  // Start the video intro
  startIntro();
});

// --- Timezone Management ---
function populateTimezoneDropdowns() {
  const resolved = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const localOptionText = `Local Time (${resolved})`;
  
  const populatedOptions = timezonesList.map(tz => {
    const value = tz.id === "local" ? resolved : tz.id;
    const label = tz.id === "local" ? localOptionText : tz.name;
    return `<option value="${value}">${label}</option>`;
  }).join("");

  timezoneSelector.innerHTML = populatedOptions;
  onboardingTimezone.innerHTML = populatedOptions;

  const savedTz = localStorage.getItem("wc26_timezone");
  if (savedTz) {
    userTimezone = savedTz;
    timezoneSelector.value = savedTz;
  } else {
    userTimezone = resolved;
    timezoneSelector.value = resolved;
  }
}

// --- Fetch Fixtures (Update Results) ---
async function fetchFixtures(isInitial = false) {
  try {
    const response = await fetch("fixtures.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const updatedFixtures = await response.json();
    
    // Merge updated scores into current state
    fixtures = updatedFixtures;
    resolveKnockoutTeams(); // Resolve placeholders after updating scores!
    
    if (!isInitial) {
      showToast(translate("toast-success-update"), "success");
    }
  } catch (error) {
    console.error("Failed to fetch fixtures:", error);
    if (!isInitial) {
      showToast(translate("toast-error-update"), "error");
    }
  }
}

// --- Event Listeners Setup ---
function setupEventListeners() {
  // Timezone dropdown
  timezoneSelector.addEventListener("change", (e) => {
    userTimezone = e.target.value;
    localStorage.setItem("wc26_timezone", userTimezone);
    renderApp();
    showToast(`Timezone changed to ${userTimezone}`, "info");
  });

  // Manual Refresh Button
  btnRefreshData.addEventListener("click", () => {
    btnRefreshData.classList.add("updating");
    btnRefreshData.disabled = true;
    
    // Simulate server response delay to show off loader
    setTimeout(async () => {
      await fetchFixtures(false);
      btnRefreshData.classList.remove("updating");
      btnRefreshData.disabled = false;
      renderApp();
    }, 1200);
  });

  // Edit Favorites Button
  btnEditFavorites.addEventListener("click", () => {
    showOnboarding();
  });

  // Language Toggle Switch
  const langToggleCheckbox = document.getElementById("lang-toggle-checkbox");
  if (langToggleCheckbox) {
    langToggleCheckbox.addEventListener("change", (e) => {
      const lang = e.target.checked ? "es" : "en";
      applyLanguage(lang);
      renderApp();
      const msg = lang === "es" ? "Idioma cambiado a Español" : "Language changed to English";
      showToast(msg, "info");
    });
  }

  // Onboarding dialog setup
  onboardingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    userTimezone = onboardingTimezone.value;
    localStorage.setItem("wc26_timezone", userTimezone);
    timezoneSelector.value = userTimezone;

    // Retrieve selected teams
    const selectedCheckboxes = onboardingTeamsGrid.querySelectorAll(".selection-card.selected");
    followedTeams = Array.from(selectedCheckboxes).map(card => card.dataset.team);
    localStorage.setItem("wc26_followed_teams", JSON.stringify(followedTeams));
    localStorage.setItem("wc26_onboarded", "true");

    onboardingDialog.close();
    renderApp();
    showToast("Dashboard configured successfully!", "success");
  });

  // Tab View Switcher
  tabCalendar.addEventListener("click", () => switchView("calendar"));
  tabBracket.addEventListener("click", () => switchView("bracket"));
  tabStandings.addEventListener("click", () => switchView("standings"));

  // Timeline scrolling
  btnPrevDate.addEventListener("click", () => scrollTimeline(-1));
  btnNextDate.addEventListener("click", () => scrollTimeline(1));

  // Dynamic search input
  teamSearchInput.addEventListener("input", () => {
    renderFixturesGrid();
  });

  // Favorite filter checkbox
  filterFavoritesCheckbox.addEventListener("change", () => {
    renderFixturesGrid();
  });

  // Dialog Close Button
  document.getElementById("btn-close-match-dialog").addEventListener("click", () => {
    matchDetailsDialog.close();
  });

  // Dialog Backdrop Dismiss Fallback (Safari Support)
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    [onboardingDialog, matchDetailsDialog].forEach(dialog => {
      dialog.addEventListener('click', (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isInside = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isInside) {
          dialog.close();
        }
      });
    });
  }
}

// --- View Mode Switch ---
function switchView(view) {
  if (view === activeView) return;
  activeView = view;

  tabCalendar.classList.remove("active");
  tabCalendar.setAttribute("aria-selected", "false");
  tabBracket.classList.remove("active");
  tabBracket.setAttribute("aria-selected", "false");
  tabStandings.classList.remove("active");
  tabStandings.setAttribute("aria-selected", "false");

  calendarView.classList.remove("active-view");
  bracketView.classList.remove("active-view");
  standingsView.classList.remove("active-view");

  if (view === "calendar") {
    tabCalendar.classList.add("active");
    tabCalendar.setAttribute("aria-selected", "true");
    calendarView.classList.add("active-view");
  } else if (view === "bracket") {
    tabBracket.classList.add("active");
    tabBracket.setAttribute("aria-selected", "true");
    bracketView.classList.add("active-view");
    renderBracket();
  } else if (view === "standings") {
    tabStandings.classList.add("active");
    tabStandings.setAttribute("aria-selected", "true");
    standingsView.classList.add("active-view");
    renderStandings();
  }
}

// --- Onboarding / Favorites Selector Wizard (48 teams) ---
function showOnboarding() {
  onboardingTimezone.value = userTimezone;
  onboardingTeamsGrid.innerHTML = "";

  // Sort keys alphabetically by translated team name
  const sortedCodes = Object.keys(teamsDb).sort((a, b) => getTeamName(a).localeCompare(getTeamName(b)));

  sortedCodes.forEach(code => {
    const team = teamsDb[code];
    const isSelected = followedTeams.includes(code);
    
    const card = document.createElement("div");
    card.className = `selection-card ${isSelected ? 'selected' : ''}`;
    card.dataset.team = code;
    card.setAttribute("role", "checkbox");
    card.setAttribute("aria-checked", isSelected ? "true" : "false");
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <img src="https://flagcdn.com/w40/${team.flag}.png" alt="" class="flag-icon" loading="lazy">
      <span class="team-label">${getTeamName(code)}</span>
    `;

    const toggleCard = () => {
      const currentSelected = onboardingTeamsGrid.querySelectorAll(".selection-card.selected");
      if (card.classList.contains("selected")) {
        card.classList.remove("selected");
        card.setAttribute("aria-checked", "false");
      } else {
        if (currentSelected.length >= 4) {
          showToast(translate("toast-max-teams"), "info");
          return;
        }
        card.classList.add("selected");
        card.setAttribute("aria-checked", "true");
      }
      
      const newSelectedCount = onboardingTeamsGrid.querySelectorAll(".selection-card.selected").length;
      favCountText.textContent = newSelectedCount;
    };

    card.addEventListener("click", toggleCard);
    card.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggleCard();
      }
    });

    onboardingTeamsGrid.appendChild(card);
  });

  favCountText.textContent = followedTeams.length;
  onboardingDialog.showModal();
}

// --- Main App Render orchestrator ---
function renderApp() {
  renderFollowedTeamsBar();
  renderCalendarDatesTimeline();
  renderFixturesGrid();
  if (activeView === "bracket") {
    renderBracket();
  } else if (activeView === "standings") {
    renderStandings();
  }
}

// --- Group Standings Rendering ---
function renderStandings() {
  if (!standingsGridContainer) return;

  const teamToGroup = {};
  fixtures.forEach(match => {
    if (match.stage.startsWith("Group")) {
      teamToGroup[match.team1] = match.stage;
      teamToGroup[match.team2] = match.stage;
    }
  });

  const standings = {};
  Object.keys(teamsDb).forEach(code => {
    const group = teamToGroup[code];
    if (!group) return;
    if (!standings[group]) {
      standings[group] = [];
    }
    standings[group].push({
      code: code,
      name: teamsDb[code].name,
      flag: teamsDb[code].flag,
      pl: 0,
      w: 0,
      d: 0,
      l: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      pts: 0
    });
  });

  fixtures.forEach(match => {
    if (!match.stage.startsWith("Group")) return;
    if (match.score1 === null || match.score2 === null) return;
    
    const group = match.stage;
    const team1Stats = standings[group].find(t => t.code === match.team1);
    const team2Stats = standings[group].find(t => t.code === match.team2);
    
    if (!team1Stats || !team2Stats) return;

    const s1 = parseInt(match.score1, 10);
    const s2 = parseInt(match.score2, 10);

    team1Stats.pl += 1;
    team2Stats.pl += 1;
    team1Stats.gf += s1;
    team1Stats.ga += s2;
    team2Stats.gf += s2;
    team2Stats.ga += s1;
    team1Stats.gd = team1Stats.gf - team1Stats.ga;
    team2Stats.gd = team2Stats.gf - team2Stats.ga;

    if (s1 > s2) {
      team1Stats.w += 1;
      team1Stats.pts += 3;
      team2Stats.l += 1;
    } else if (s1 < s2) {
      team2Stats.w += 1;
      team2Stats.pts += 3;
      team1Stats.l += 1;
    } else {
      team1Stats.d += 1;
      team1Stats.pts += 1;
      team2Stats.d += 1;
      team2Stats.pts += 1;
    }
  });

  const sortedGroups = Object.keys(standings).sort();

  standingsGridContainer.innerHTML = sortedGroups.map(groupName => {
    const groupTeams = standings[groupName];
    
    groupTeams.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      if (b.gd !== a.gd) return b.gd - a.gd;
      if (b.gf !== a.gf) return b.gf - a.gf;
      return getTeamName(a.code).localeCompare(getTeamName(b.code));
    });

    const rowsHtml = groupTeams.map((team, index) => {
      const isFollowed = followedTeams.includes(team.code);
      const gdSign = team.gd > 0 ? `+${team.gd}` : team.gd;
      const teamNameTranslated = getTeamName(team.code);
      return `
        <tr class="${isFollowed ? 'highlight-row' : ''}">
          <td class="cell-pos">${index + 1}</td>
          <td class="cell-team">
            <img src="https://flagcdn.com/w20/${team.flag}.png" alt="" class="standings-team-flag">
            <span class="standings-team-code" data-team="${team.code}" title="${teamNameTranslated}">
              <span>${team.code}</span>
            </span>
          </td>
          <td class="cell-pts">${team.pts}</td>
          <td class="cell-pl">${team.pl}</td>
          <td class="cell-w">${team.w}</td>
          <td class="cell-d">${team.d}</td>
          <td class="cell-l">${team.l}</td>
          <td class="cell-gd">${gdSign}</td>
        </tr>
      `;
    }).join("");

    return `
      <div class="group-standings-card" role="region" aria-label="${translate(groupName)} Standings">
        <h3 class="group-title">
          <span>${translate(groupName)}</span>
        </h3>
        <div class="standings-table-container">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="col-pos" scope="col">#</th>
                <th class="col-team" scope="col">${translate("col-team")}</th>
                <th class="col-pts" scope="col">${translate("col-pts")}</th>
                <th class="col-pl" scope="col">${translate("col-pl")}</th>
                <th class="col-w" scope="col">${translate("col-w")}</th>
                <th class="col-d" scope="col">${translate("col-d")}</th>
                <th class="col-l" scope="col">${translate("col-l")}</th>
                <th class="col-gd" scope="col">${translate("col-gd")}</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }).join("");

  // Add click listeners to team codes to search in calendar
  standingsGridContainer.querySelectorAll(".standings-team-code").forEach(element => {
    element.addEventListener("click", () => {
      const teamCode = element.dataset.team;
      const teamName = teamsDb[teamCode]?.name || teamCode;
      teamSearchInput.value = teamName;
      switchView("calendar");
      renderFixturesGrid();
      
      // Scroll search input into view and focus
      teamSearchInput.scrollIntoView({ behavior: "smooth", block: "center" });
      teamSearchInput.focus();
    });
  });
}

// --- Followed Teams Header Bar ---
function renderFollowedTeamsBar() {
  if (followedTeams.length === 0) {
    followedListPlaceholder.innerHTML = `<span class="no-teams-text" data-i18n="none-followed">${translate("none-followed")}</span>`;
    return;
  }

  followedListPlaceholder.innerHTML = followedTeams.map(code => {
    const team = teamsDb[code];
    if (!team) return "";
    return `
      <div class="fav-team-badge" title="${getTeamName(code)}">
        <img src="https://flagcdn.com/w20/${team.flag}.png" alt="" class="flag-circle">
        <span>${code}</span>
      </div>
    `;
  }).join("");
}

// --- Calendar View: Timeline Dates ---
function renderCalendarDatesTimeline() {
  const datesSet = new Set();
  fixtures.forEach(match => {
    const matchDateStr = match.kickoff.split("T")[0];
    datesSet.add(matchDateStr);
  });

  const uniqueDates = Array.from(datesSet).sort();
  
  if (!uniqueDates.includes(selectedDate) && uniqueDates.length > 0) {
    selectedDate = uniqueDates[0];
  }

  calendarDatesRow.innerHTML = uniqueDates.map(dateStr => {
    const locale = currentLanguage === "es" ? "es-ES" : "en-US";
    const dateObj = new Date(dateStr + "T12:00:00Z");
    const dayName = dateObj.toLocaleDateString(locale, { weekday: "short" });
    const dayNum = dateObj.toLocaleDateString(locale, { day: "2-digit" });
    const month = dateObj.toLocaleDateString(locale, { month: "short" });
    const isActive = dateStr === selectedDate;

    return `
      <div class="date-card ${isActive ? 'active' : ''}" 
           role="option" 
           aria-selected="${isActive ? 'true' : 'false'}" 
           data-date="${dateStr}"
           tabindex="0">
        <span class="date-day-name">${dayName}</span>
        <span class="date-day-num">${dayNum}</span>
        <span class="date-month">${month}</span>
      </div>
    `;
  }).join("");

  calendarDatesRow.querySelectorAll(".date-card").forEach(card => {
    const selectDateCard = () => {
      selectedDate = card.dataset.date;
      calendarDatesRow.querySelectorAll(".date-card").forEach(c => {
        c.classList.remove("active");
        c.setAttribute("aria-selected", "false");
      });
      card.classList.add("active");
      card.setAttribute("aria-selected", "true");
      renderFixturesGrid();
    };

    card.addEventListener("click", selectDateCard);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectDateCard();
      }
    });
  });
}

function scrollTimeline(direction) {
  const scrollAmt = 120 * direction;
  calendarDatesRow.scrollBy({ left: scrollAmt, behavior: "smooth" });
}

// --- Calendar View: Fixtures Grid ---
function renderFixturesGrid() {
  const searchQuery = teamSearchInput.value.toLowerCase().trim();
  const filterFavoritesOnly = filterFavoritesCheckbox.checked;

  let filteredMatches = fixtures;
  if (!searchQuery) {
    filteredMatches = filteredMatches.filter(match => {
      const matchDateStr = match.kickoff.split("T")[0];
      return matchDateStr === selectedDate;
    });
  } else {
    filteredMatches = filteredMatches.filter(match => {
      const t1En = (teamsDb[match.team1]?.name || "").toLowerCase();
      const t2En = (teamsDb[match.team2]?.name || "").toLowerCase();
      const t1Es = translate(match.team1, {}, "es").toLowerCase();
      const t2Es = translate(match.team2, {}, "es").toLowerCase();
      return t1En.includes(searchQuery) || t2En.includes(searchQuery) || 
             t1Es.includes(searchQuery) || t2Es.includes(searchQuery) ||
             match.team1.toLowerCase().includes(searchQuery) || match.team2.toLowerCase().includes(searchQuery);
    });
  }

  if (filterFavoritesOnly) {
    filteredMatches = filteredMatches.filter(match => {
      return followedTeams.includes(match.team1) || followedTeams.includes(match.team2);
    });
  }

  const locale = currentLanguage === "es" ? "es-ES" : "en-US";
  const formattedDate = new Date(selectedDate + "T12:00:00Z").toLocaleDateString(locale, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  
  if (searchQuery) {
    currentDateTitle.textContent = `${translate("search-results")}: "${teamSearchInput.value}"`;
  } else {
    currentDateTitle.textContent = `${formattedDate}`;
  }
  
  const matchesLabel = filteredMatches.length === 1 ? translate("match-singular") : translate("match-plural");
  matchCountBadge.textContent = `${filteredMatches.length} ${matchesLabel}`;

  if (filteredMatches.length === 0) {
    fixturesGridList.innerHTML = `
      <div class="no-matches-card">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p>${translate("no-matches-found")}</p>
      </div>
    `;
    return;
  }

  fixturesGridList.innerHTML = filteredMatches.map(match => {
    const t1Name = getTeamName(match.team1);
    const t2Name = getTeamName(match.team2);
    const t1Flag = getFlagUrl(match.team1);
    const t2Flag = getFlagUrl(match.team2);
    
    const isFavMatch = followedTeams.includes(match.team1) || followedTeams.includes(match.team2);
    
    const matchTimeObj = new Date(match.kickoff);
    const timeFormatter = new Intl.DateTimeFormat(locale, {
      timeZone: userTimezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
    const formattedTime = timeFormatter.format(matchTimeObj);

    let statusBadgeHTML = "";
    let scoreHTML = "";
    
    if (match.status === "FINISHED") {
      statusBadgeHTML = `<span class="status-badge finished">${translate("FINISHED")}</span>`;
      scoreHTML = `
        <div class="match-score-display">
          <span class="score-digit">${match.score1}</span>
          <span class="score-divider">:</span>
          <span class="score-digit">${match.score2}</span>
        </div>
      `;
    } else if (match.status === "LIVE") {
      statusBadgeHTML = `<span class="status-badge live"><span class="pulse-dot"></span> ${translate("LIVE")} ${match.liveMinute}'</span>`;
      scoreHTML = `
        <div class="match-score-display">
          <span class="score-digit">${match.score1}</span>
          <span class="score-divider">:</span>
          <span class="score-digit">${match.score2}</span>
        </div>
      `;
    } else {
      statusBadgeHTML = `<span class="status-badge scheduled">${translate("SCHEDULED")}</span>`;
      scoreHTML = `
        <div class="match-time-display">
          <span class="match-time-text">${formattedTime}</span>
        </div>
      `;
    }

    const starIcon = isFavMatch ? `
      <span class="fav-star" title="${translate("star-followed-match")}" style="color: var(--primary-gold); margin-right: 0.35rem;">
        ★
      </span>
    ` : "";

    const dateText = searchQuery 
      ? new Date(match.kickoff).toLocaleDateString(locale, { month: "short", day: "numeric" }) + " • " 
      : "";

    return `
      <article class="match-card ${isFavMatch ? 'favorite-highlight' : ''}" 
               tabindex="0" 
               data-match-id="${match.id}">
        <div class="match-card-meta">
          <span class="match-stage-badge">${starIcon}${translate(match.stage)}</span>
          <span class="match-stadium-text" title="${match.stadium}">${dateText}${match.stadium}</span>
        </div>
        <div class="match-card-scoreline">
          <div class="match-team team1">
            <span class="match-team-name">${t1Name}</span>
            <div class="match-flag-container">
              <img src="${t1Flag}" alt="" class="match-team-flag" loading="lazy">
            </div>
          </div>
          <div class="match-card-center">
            ${scoreHTML}
          </div>
          <div class="match-team team2">
            <div class="match-flag-container">
              <img src="${t2Flag}" alt="" class="match-team-flag" loading="lazy">
            </div>
            <span class="match-team-name">${t2Name}</span>
          </div>
        </div>
        <div class="match-card-status">
          ${statusBadgeHTML}
        </div>
      </article>
    `;
  }).join("");

  fixturesGridList.querySelectorAll(".match-card").forEach(card => {
    const handleCardOpen = () => {
      openMatchCenter(card.dataset.matchId);
    };
    
    card.addEventListener("click", handleCardOpen);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCardOpen();
      }
    });
  });
}

// --- Knockout Bracket Rendering ---
function renderBracket() {
  const knockoutRounds = ["Round of 32", "Round of 16", "Quarter-finals", "Semi-finals", "Final"];
  
  bracketTreeContainer.innerHTML = knockoutRounds.map(round => {
    const roundMatches = fixtures.filter(m => m.stage === round);
    
    const matchesHTML = roundMatches.map(match => {
      const t1Name = getTeamName(match.team1);
      const t2Name = getTeamName(match.team2);
      const t1Flag = getFlagUrl(match.team1);
      const t2Flag = getFlagUrl(match.team2);
      
      const isFavMatch = followedTeams.includes(match.team1) || followedTeams.includes(match.team2);
      
      const score1 = match.score1 !== null ? match.score1 : "-";
      const score2 = match.score2 !== null ? match.score2 : "-";

      const winnerCode = match.status === "FINISHED" ? (match.score1 > match.score2 ? match.team1 : match.team2) : null;

      const t1Class = winnerCode ? (winnerCode === match.team1 ? 'winner' : 'loser') : '';
      const t2Class = winnerCode ? (winnerCode === match.team2 ? 'winner' : 'loser') : '';

      const starIcon = isFavMatch ? `<span class="bracket-meta-gold">${translate("star-followed-match")}</span>` : "";
      
      let matchLabel = match.stadium.split(",")[0];
      if (match.status === "LIVE") {
        matchLabel = `${translate("LIVE")} ${match.liveMinute}'`;
      } else if (match.status === "FINISHED") {
        matchLabel = translate("Full Time");
      }

      return `
        <div class="bracket-match-card ${isFavMatch ? 'favorite-highlight' : ''}" 
             data-match-id="${match.id}" 
             tabindex="0"
             role="button"
             aria-label="View match center for ${t1Name} vs ${t2Name}">
          <div class="bracket-meta">
            <span>${matchLabel}</span>
            ${starIcon}
          </div>
          
          <div class="bracket-team-row ${t1Class}">
            <div class="bracket-team-info">
              <img src="${t1Flag}" alt="" class="bracket-flag" loading="lazy">
              <span class="bracket-team-name">${t1Name}</span>
            </div>
            <span class="bracket-team-score">${score1}</span>
          </div>

          <div class="bracket-team-row ${t2Class}">
            <div class="bracket-team-info">
              <img src="${t2Flag}" alt="" class="bracket-flag" loading="lazy">
              <span class="bracket-team-name">${t2Name}</span>
            </div>
            <span class="bracket-team-score">${score2}</span>
          </div>
        </div>
      `;
    }).join("");

    return `
      <div class="bracket-column" role="group" aria-label="${translate(round)} matches">
        <h3 class="bracket-round-header">${translate(round)}</h3>
        ${matchesHTML}
      </div>
    `;
  }).join("");

  bracketTreeContainer.querySelectorAll(".bracket-match-card").forEach(card => {
    const handleBracketOpen = () => {
      openMatchCenter(card.dataset.matchId);
    };

    card.addEventListener("click", handleBracketOpen);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleBracketOpen();
      }
    });
  });
}

// --- Match Center Per-Match Lineup State ---
const matchLineups = {};

// --- Match Win Probability Estimator ---
function calculateMatchPredictions(team1Code, team2Code) {
  const t1 = teamsDb[team1Code];
  const t2 = teamsDb[team2Code];

  if (!t1 || !t2) {
    return { team1: 33, draw: 34, team2: 33 };
  }

  const getStrength = (team) => {
    const attrs = team.style.attrs;
    return (attrs.attack * 0.4) + (attrs.defense * 0.3) + (attrs.control * 0.3) + (team.participations * 1.5);
  };

  const s1 = getStrength(t1);
  const s2 = getStrength(t2);

  // Deterministic head-to-head bias based on team codes
  const charSum1 = team1Code.charCodeAt(0) + team1Code.charCodeAt(1) + team1Code.charCodeAt(2);
  const charSum2 = team2Code.charCodeAt(0) + team2Code.charCodeAt(1) + team2Code.charCodeAt(2);
  const h2hBias = (charSum1 + charSum2) % 7 - 3; // Value between -3 and +3

  let p1 = Math.round(38 + (s1 - s2) * 1.2 + h2hBias);
  let p2 = Math.round(38 + (s2 - s1) * 1.2 - h2hBias);

  p1 = Math.max(12, Math.min(76, p1));
  p2 = Math.max(12, Math.min(76, p2));
  const draw = 100 - p1 - p2;

  return { team1: p1, draw: draw, team2: p2 };
}

// --- Match Lineups Randomizer (Swaps 1-2 field players and GKs prior to kickoff) ---
function randomizeMatchLineups(matchId, t1, t2) {
  if (!matchLineups[matchId]) return;

  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  const generateLineup = (team) => {
    if (!team) return { starters: [], subs: [] };
    
    // Combine all starters and subs
    const allPlayers = [...team.starters, ...team.subs];
    
    // Split GK from field players
    const gks = allPlayers.filter(p => p.pos === "GK");
    const fieldPlayers = allPlayers.filter(p => p.pos !== "GK");
    
    // Shuffle lists
    shuffleArray(gks);
    shuffleArray(fieldPlayers);
    
    // Select 1 starting Goalkeeper
    const startingGK = gks[0];
    const subGKs = gks.slice(1);
    
    // Select 10 starting Field Players
    const startingField = fieldPlayers.slice(0, 10);
    const subField = fieldPlayers.slice(10);
    
    // Combine lists, sorting by player number for visual order
    const starters = [startingGK, ...startingField].sort((a, b) => a.num - b.num);
    const subs = [...subGKs, ...subField].sort((a, b) => a.num - b.num);
    
    return { starters, subs };
  };

  matchLineups[matchId] = {
    team1: generateLineup(t1),
    team2: generateLineup(t2)
  };
}

// --- Match Center Dialog & Tabs ---
function openMatchCenter(matchId) {
  const match = fixtures.find(m => m.id === matchId);
  if (!match) return;

  const t1 = teamsDb[match.team1];
  const t2 = teamsDb[match.team2];

  // Pre-populate per-match lineups if not initialized
  if (!matchLineups[matchId]) {
    matchLineups[matchId] = {
      team1: {
        starters: JSON.parse(JSON.stringify(t1 ? t1.starters : [])),
        subs: JSON.parse(JSON.stringify(t1 ? t1.subs : []))
      },
      team2: {
        starters: JSON.parse(JSON.stringify(t2 ? t2.starters : [])),
        subs: JSON.parse(JSON.stringify(t2 ? t2.subs : []))
      }
    };
  }

  activeDetailTab = "lineups";

  renderMatchCenterContent(match, t1, t2);
  matchDetailsDialog.showModal();
}

function renderMatchCenterContent(match, t1, t2) {
  const kickoffDateObj = new Date(match.kickoff);
  const locale = currentLanguage === "es" ? "es-ES" : "en-US";
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    timeZone: userTimezone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const timeFormatter = new Intl.DateTimeFormat(locale, {
    timeZone: userTimezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  
  const kickoffDateStr = dateFormatter.format(kickoffDateObj);
  const kickoffTimeStr = timeFormatter.format(kickoffDateObj);

  const t1Name = getTeamName(match.team1);
  const t2Name = getTeamName(match.team2);
  const t1Flag = getFlagUrl(match.team1);
  const t2Flag = getFlagUrl(match.team2);

  let scoreHTML = "";
  if (match.status === "FINISHED") {
    scoreHTML = `
      <span class="mc-score-num">${match.score1}</span>
      <span class="mc-score-divider">:</span>
      <span class="mc-score-num">${match.score2}</span>
    `;
  } else if (match.status === "LIVE") {
    scoreHTML = `
      <span class="mc-score-num">${match.score1}</span>
      <span class="mc-score-divider">:</span>
      <span class="mc-score-num">${match.score2}</span>
    `;
  } else {
    scoreHTML = `
      <span class="mc-score-num">-</span>
      <span class="mc-score-divider">:</span>
      <span class="mc-score-num">-</span>
    `;
  }

  const liveBadgeHTML = match.status === "LIVE" 
    ? `<span class="status-badge live"><span class="pulse-dot"></span> ${translate("LIVE")} ${match.liveMinute}'</span>`
    : match.status === "FINISHED"
      ? `<span class="status-badge finished">${translate("Full Time")}</span>`
      : `<span class="status-badge scheduled">${kickoffTimeStr}</span>`;

  let eventsHTML = "";
  if (match.events && match.events.length > 0) {
    eventsHTML = `
      <div class="mc-events-timeline" role="log" aria-label="Match events">
        ${match.events.map(event => {
          const isTeam1 = event.team === match.team1;
          const eventIcon = event.type === "goal" 
            ? `<span class="event-icon-goal" aria-label="Goal">⚽</span>` 
            : `<span class="event-icon-yellow" aria-label="Yellow Card" title="Yellow Card"></span>`;
          
          return `
            <div class="mc-event-row">
              <div class="mc-event-detail team1-event">
                ${isTeam1 ? `<span>${event.player}</span> ${eventIcon}` : ""}
              </div>
              <span class="mc-event-minute">${event.minute}'</span>
              <div class="mc-event-detail team2-event">
                ${!isTeam1 ? `${eventIcon} <span>${event.player}</span>` : ""}
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  // Generate localized tactical style description
  const getStyleDesc = (team) => {
    if (!team) return translate("tactics-pending");
    if (currentLanguage === "es") {
      const translatedStyleName = translate(team.style.name);
      return `Un perfil táctico basado en su filosofía tradicional de juego. El estilo de ${translatedStyleName} se adapta a la composición de su equipo.`;
    }
    return team.style.desc;
  };

  let predictionHTML = "";
  if (t1 && t2) {
    const preds = calculateMatchPredictions(match.team1, match.team2);
    predictionHTML = `
      <div class="mc-prediction-section" role="region" aria-label="Win Probability Estimation">
        <div class="mc-prediction-title">${translate("win-probability")}</div>
        <div class="mc-prediction-bar">
          <div class="pred-segment team1-pred" style="width: ${preds.team1}%;" title="${t1Name}: ${preds.team1}%">
            <span>${preds.team1}%</span>
          </div>
          <div class="pred-segment draw-pred" style="width: ${preds.draw}%;" title="${translate("draw")}: ${preds.draw}%">
            <span>${preds.draw}%</span>
          </div>
          <div class="pred-segment team2-pred" style="width: ${preds.team2}%;" title="${t2Name}: ${preds.team2}%">
            <span>${preds.team2}%</span>
          </div>
        </div>
        <div class="mc-prediction-labels">
          <span class="label-t1">${t1Name}</span>
          <span class="label-draw">${translate("draw")}</span>
          <span class="label-t2">${t2Name}</span>
        </div>
      </div>
    `;
  }

  matchCenterContent.innerHTML = `
    <!-- Header -->
    <header class="mc-header">
      <div class="mc-meta">${translate(match.stage)}</div>
      <div class="mc-stadium">${match.stadium} • ${kickoffDateStr}</div>
      
      <div class="mc-scoreboard">
        <div class="mc-team">
          <div class="mc-team-flag-container">
            <img src="${t1Flag}" alt="" class="mc-flag">
          </div>
          <span class="mc-team-name">${t1Name}</span>
        </div>
        
        <div class="mc-scores">
          <div class="mc-scores-box">
            ${scoreHTML}
          </div>
          <div class="mc-live-status">
            ${liveBadgeHTML}
          </div>
        </div>
        
        <div class="mc-team">
          <div class="mc-team-flag-container">
            <img src="${t2Flag}" alt="" class="mc-flag">
          </div>
          <span class="mc-team-name">${t2Name}</span>
        </div>
      </div>

      ${predictionHTML}

      ${eventsHTML}
    </header>

    <!-- Navigation Tabs -->
    <nav class="mc-tabs" aria-label="Match Center Section tabs">
      <button type="button" class="mc-tab-btn ${activeDetailTab === 'lineups' ? 'active' : ''}" id="mc-tab-btn-lineups">${translate("lineups-tab")}</button>
      <button type="button" class="mc-tab-btn ${activeDetailTab === 'tactics' ? 'active' : ''}" id="mc-tab-btn-tactics">${translate("tactics-tab")}</button>
    </nav>

    <!-- Content Panel 1: Lineups -->
    <section class="mc-tab-panel ${activeDetailTab === 'lineups' ? 'active' : ''}" id="mc-panel-lineups" aria-labelledby="mc-tab-btn-lineups">
      ${match.status === "SCHEDULED" ? `
        <div class="lineup-update-actions" style="margin-bottom: 1.25rem; text-align: center;">
          <button type="button" class="btn-update-lineups" id="btn-update-match-lineups" data-match-id="${match.id}" style="
            background: rgba(0, 92, 255, 0.1);
            border: 1px solid var(--primary-blue);
            color: var(--text-main);
            padding: 0.5rem 1.25rem;
            border-radius: 50px;
            font-family: var(--font-display);
            font-size: 0.8rem;
            font-weight: 700;
            cursor: pointer;
            text-transform: uppercase;
            transition: all var(--transition-fast);
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            box-shadow: 0 4px 15px rgba(0, 92, 255, 0.15);
          ">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" class="refresh-icon">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
            </svg>
            <span data-i18n="btn-update-lineups">${translate("btn-update-lineups")}</span>
          </button>
        </div>
      ` : ""}
      <div class="mc-squad-layout">
        <!-- Team 1 Squad -->
        <div>
          <h3 class="squad-column-title team1-title">
            <img src="${t1Flag}" alt="" style="width:20px;height:13px;object-fit:cover;">
            ${translate("team-squad", {team: t1Name})}
          </h3>
          ${renderSquadList(matchLineups[match.id]?.team1)}
        </div>
        
        <!-- Team 2 Squad -->
        <div>
          <h3 class="squad-column-title team2-title">
            <img src="${t2Flag}" alt="" style="width:20px;height:13px;object-fit:cover;">
            ${translate("team-squad", {team: t2Name})}
          </h3>
          ${renderSquadList(matchLineups[match.id]?.team2)}
        </div>
      </div>
    </section>

    <!-- Content Panel 2: Tactics & Stats -->
    <section class="mc-tab-panel ${activeDetailTab === 'tactics' ? 'active' : ''}" id="mc-panel-tactics" aria-labelledby="mc-tab-btn-tactics">
      <!-- Play Style Cards -->
      <div class="style-cards-container">
        <!-- Team 1 Card -->
        <div class="style-card team1-style">
          <div class="style-card-header">
            <h4 class="style-title">${t1Name}</h4>
            <span class="style-type">${translate("positional-style")}</span>
          </div>
          <p class="style-desc">${getStyleDesc(t1)}</p>
          ${renderTacticalAttributes(t1)}
        </div>
        
        <!-- Team 2 Card -->
        <div class="style-card team2-style">
          <div class="style-card-header">
            <h4 class="style-title">${t2Name}</h4>
            <span class="style-type">${translate("positional-style")}</span>
          </div>
          <p class="style-desc">${getStyleDesc(t2)}</p>
          ${renderTacticalAttributes(t2)}
        </div>
      </div>

      <!-- WC History Stats comparison -->
      <div class="mc-stats-grid" style="margin-top: 2rem;">
        <div class="stats-card">
          <h4 class="stats-card-title">
            <img src="${t1Flag}" alt="" style="width: 20px; height: 13px; object-fit: cover;">
            ${translate("team-history", {team: t1Name})}
          </h4>
          <div class="stats-list">
            <div class="stat-item">
              <span class="stat-label">${translate("participations")}</span>
              <span class="stat-value">${t1 ? t1.participations : "-"}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">${translate("best-finish")}</span>
              <span class="stat-value stat-value-gold">${t1 ? (currentLanguage === "es" ? translateBestFinish(t1.bestFinish) : t1.bestFinish) : "-"}</span>
            </div>
          </div>
        </div>

        <div class="stats-card">
          <h4 class="stats-card-title">
            <img src="${t2Flag}" alt="" style="width: 20px; height: 13px; object-fit: cover;">
            ${translate("team-history", {team: t2Name})}
          </h4>
          <div class="stats-list">
            <div class="stat-item">
              <span class="stat-label">${translate("participations")}</span>
              <span class="stat-value">${t2 ? t2.participations : "-"}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">${translate("best-finish")}</span>
              <span class="stat-value stat-value-gold">${t2 ? (currentLanguage === "es" ? translateBestFinish(t2.bestFinish) : t2.bestFinish) : "-"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const btnTabLineups = document.getElementById("mc-tab-btn-lineups");
  const btnTabTactics = document.getElementById("mc-tab-btn-tactics");
  const panelLineups = document.getElementById("mc-panel-lineups");
  const panelTactics = document.getElementById("mc-panel-tactics");

  btnTabLineups.addEventListener("click", () => {
    activeDetailTab = "lineups";
    btnTabLineups.classList.add("active");
    btnTabTactics.classList.remove("active");
    panelLineups.classList.add("active");
    panelTactics.classList.remove("active");
  });

  btnTabTactics.addEventListener("click", () => {
    activeDetailTab = "tactics";
    btnTabTactics.classList.add("active");
    btnTabLineups.classList.remove("active");
    panelTactics.classList.add("active");
    panelLineups.classList.remove("active");
  });

  // Attach Lineup Update Button listener
  const btnUpdateLineups = document.getElementById("btn-update-match-lineups");
  if (btnUpdateLineups) {
    btnUpdateLineups.addEventListener("click", () => {
      const refreshIcon = btnUpdateLineups.querySelector(".refresh-icon");
      if (refreshIcon) {
        refreshIcon.style.transform = "rotate(360deg)";
        refreshIcon.style.transition = "transform 0.5s ease";
      }
      setTimeout(() => {
        randomizeMatchLineups(match.id, t1, t2);
        renderMatchCenterContent(match, t1, t2);
        showToast(translate("toast-lineups-updated"), "success");
      }, 300);
    });
  }
}

function renderSquadList(teamData) {
  if (!teamData) {
    return `<p class="no-teams-text">${translate("squad-lineups-pending")}</p>`;
  }

  const translatePlayerName = (name) => {
    if (currentLanguage !== "es") return name;
    return name
      .replace("Goalkeeper One", "Portero Uno")
      .replace("Goalkeeper", "Arquero")
      .replace("Defender", "Defensor")
      .replace("Midfielder", "Centrocampista")
      .replace("Attacker", "Atacante")
      .replace("Forward", "Delantero")
      .replace("Backup", "Suplente")
      .replace("Sub", "Suplente");
  };

  const startersHTML = teamData.starters.map(player => {
    const isStar = player.name.endsWith("*");
    const cleanName = isStar ? player.name.replace("*", "") : player.name;
    const translatedName = translatePlayerName(cleanName) + (isStar ? "*" : "");
    const rowClass = isStar ? "player-row star-player" : "player-row";
    return `
      <div class="${rowClass}">
        <span class="player-num">${player.num}</span>
        <span class="player-name">${translatedName}</span>
        <span class="player-pos">${player.pos}</span>
      </div>
    `;
  }).join("");

  const subsHTML = teamData.subs.map(player => {
    const translatedName = translatePlayerName(player.name);
    return `
      <div class="player-row">
        <span class="player-num">${player.num}</span>
        <span class="player-name">${translatedName}</span>
        <span class="player-pos">${player.pos}</span>
      </div>
    `;
  }).join("");

  return `
    <div class="lineup-section-header">${translate("starting-lineup")}</div>
    <div class="player-list" role="list">
      ${startersHTML}
    </div>
    <div class="lineup-section-header">${translate("substitutes")}</div>
    <div class="player-list" role="list">
      ${subsHTML}
    </div>
  `;
}

function renderTacticalAttributes(teamData) {
  if (!teamData) return "";
  const attrs = teamData.style.attrs;
  return `
    <div class="style-attributes">
      <div class="attr-row">
        <span class="attr-name">${translate("attack")}</span>
        <div class="attr-bar-bg">
          <div class="attr-bar-fill" style="--percent: ${attrs.attack}%;"></div>
        </div>
        <span class="attr-value">${attrs.attack}</span>
      </div>
      <div class="attr-row">
        <span class="attr-name">${translate("defense")}</span>
        <div class="attr-bar-bg">
          <div class="attr-bar-fill" style="--percent: ${attrs.defense}%;"></div>
        </div>
        <span class="attr-value">${attrs.defense}</span>
      </div>
      <div class="attr-row">
        <span class="attr-name">${translate("speed")}</span>
        <div class="attr-bar-bg">
          <div class="attr-bar-fill" style="--percent: ${attrs.speed}%;"></div>
        </div>
        <span class="attr-value">${attrs.speed}</span>
      </div>
      <div class="attr-row">
        <span class="attr-name">${translate("control")}</span>
        <div class="attr-bar-bg">
          <div class="attr-bar-fill" style="--percent: ${attrs.control}%;"></div>
        </div>
        <span class="attr-value">${attrs.control}</span>
      </div>
    </div>
  `;
}

// --- Toast Notification Manager ---
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast ${type === 'success' ? 'toast-success' : ''}`;
  
  const iconSVG = type === "success" 
    ? `<svg class="toast-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`
    : `<svg class="toast-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

  toast.innerHTML = `
    ${iconSVG}
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hiding");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, 3000);
}


function translateBestFinish(finish) {
  if (!finish) return "-";
  return finish
    .replace("Winners", "Campeón")
    .replace("Runners-up", "Subcampeón")
    .replace("Third Place", "Tercer Puesto")
    .replace("Fourth Place", "Cuarto Puesto")
    .replace("Quarter-finals", "Cuartos de final")
    .replace("Round of 16", "Octavos de final")
    .replace("Group Stage", "Fase de Grupos")
    .replace("Debut", "Debut")
    .replace("times", "veces");
}
