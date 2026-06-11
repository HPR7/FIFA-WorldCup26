/* ==========================================================================
   2026 FIFA World Cup™ Fixture Dashboard - Interactive Application Logic
   ========================================================================== */

// --- Complete 48 Teams Database ---
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
const teamsDb = {};
Object.keys(baseTeams).forEach(code => {
  const base = baseTeams[code];
  
  // Starters templates based on positions
  const startersList = [
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

  // Specific starters customization for top teams to look realistic
  if (code === "USA") {
    startersList[0].name = "Matt Turner";
    startersList[1].name = "Sergiño Dest"; startersList[1].num = 2;
    startersList[2].name = "Antonee Robinson"; startersList[2].num = 3;
    startersList[3].name = "Tyler Adams"; startersList[3].num = 4;
    startersList[4].name = "Tim Ream"; startersList[4].num = 13;
    startersList[5].name = "Yunis Musah"; startersList[5].num = 6;
    startersList[6].name = "Weston McKennie"; startersList[6].num = 8;
    startersList[7].name = "Christian Pulisic*"; startersList[7].num = 10;
    startersList[8].name = "Giovanni Reyna"; startersList[8].num = 7;
    startersList[9].name = "Timothy Weah"; startersList[9].num = 21;
    startersList[10].name = "Folarin Balogun"; startersList[10].num = 9;
  } else if (code === "ARG") {
    startersList[0].name = "Emiliano Martínez"; startersList[0].num = 23;
    startersList[1].name = "Nahuel Molina"; startersList[1].num = 26;
    startersList[2].name = "Nicolás Tagliafico"; startersList[2].num = 3;
    startersList[3].name = "Nicolás Otamendi"; startersList[3].num = 19;
    startersList[4].name = "Cristian Romero"; startersList[4].num = 13;
    startersList[5].name = "Rodrigo De Paul"; startersList[5].num = 7;
    startersList[6].name = "Enzo Fernández"; startersList[6].num = 24;
    startersList[7].name = "Lionel Messi*"; startersList[7].num = 10;
    startersList[8].name = "Alexis Mac Allister"; startersList[8].num = 20;
    startersList[9].name = "Lautaro Martínez"; startersList[9].num = 22;
    startersList[10].name = "Julián Álvarez"; startersList[10].num = 9;
  } else if (code === "BRA") {
    startersList[0].name = "Alisson Becker"; startersList[0].num = 1;
    startersList[1].name = "Danilo"; startersList[1].num = 2;
    startersList[2].name = "Wendell"; startersList[2].num = 6;
    startersList[3].name = "Éder Militão"; startersList[3].num = 3;
    startersList[4].name = "Marquinhos"; startersList[4].num = 4;
    startersList[5].name = "Bruno Guimarães"; startersList[5].num = 5;
    startersList[6].name = "João Gomes"; startersList[6].num = 15;
    startersList[7].name = "Vinícius Júnior*"; startersList[7].num = 7;
    startersList[8].name = "Lucas Paquetá"; startersList[8].num = 8;
    startersList[9].name = "Raphinha"; startersList[9].num = 11;
    startersList[10].name = "Rodrygo Goes"; startersList[10].num = 10;
  } else if (code === "FRA") {
    startersList[0].name = "Mike Maignan"; startersList[0].num = 16;
    startersList[1].name = "Jules Koundé"; startersList[1].num = 5;
    startersList[2].name = "Théo Hernandez"; startersList[2].num = 22;
    startersList[3].name = "Dayot Upamecano"; startersList[3].num = 4;
    startersList[4].name = "William Saliba"; startersList[4].num = 17;
    startersList[5].name = "Aurélien Tchouaméni"; startersList[5].num = 8;
    startersList[6].name = "N'Golo Kanté"; startersList[6].num = 13;
    startersList[7].name = "Kylian Mbappé*"; startersList[7].num = 10;
    startersList[8].name = "Antoine Griezmann"; startersList[8].num = 7;
    startersList[9].name = "Ousmane Dembélé"; startersList[9].num = 11;
    startersList[10].name = "Marcus Thuram"; startersList[10].num = 15;
  } else if (code === "ENG") {
    startersList[0].name = "Jordan Pickford"; startersList[0].num = 1;
    startersList[1].name = "Kyle Walker"; startersList[1].num = 2;
    startersList[2].name = "Luke Shaw"; startersList[2].num = 3;
    startersList[3].name = "John Stones"; startersList[3].num = 5;
    startersList[4].name = "Marc Guéhi"; startersList[4].num = 6;
    startersList[5].name = "Declan Rice"; startersList[5].num = 4;
    startersList[6].name = "Trent Alexander-Arnold"; startersList[6].num = 8;
    startersList[7].name = "Jude Bellingham*"; startersList[7].num = 10;
    startersList[8].name = "Bukayo Saka"; startersList[8].num = 7;
    startersList[9].name = "Phil Foden"; startersList[9].num = 11;
    startersList[10].name = "Harry Kane"; startersList[10].num = 9;
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
  }

  // Substitutes template
  const subsList = [
    { num: 12, name: "Sub Goalkeeper", pos: "GK" },
    { num: 14, name: "Sub Defender A", pos: "DF" },
    { num: 15, name: "Sub Defender B", pos: "DF" },
    { num: 16, name: "Sub Midfielder A", pos: "MF" },
    { num: 17, name: "Sub Midfielder B", pos: "MF" },
    { num: 18, name: "Sub Forward", pos: "FW" }
  ];

  // Specific subs customization for top teams
  if (code === "USA") {
    subsList[0].name = "Ethan Horvath"; subsList[0].num = 18;
    subsList[1].name = "Miles Robinson"; subsList[1].num = 12;
    subsList[2].name = "Johnny Cardoso"; subsList[2].num = 15;
    subsList[3].name = "Brenden Aaronson"; subsList[3].num = 11;
    subsList[4].name = "Haji Wright"; subsList[4].num = 19;
    subsList[5].name = "Ricardo Pepi"; subsList[5].num = 22;
  } else if (code === "ARG") {
    subsList[0].name = "Franco Armani"; subsList[0].num = 1;
    subsList[1].name = "Gonzalo Montiel"; subsList[1].num = 4;
    subsList[2].name = "German Pezzella"; subsList[2].num = 6;
    subsList[3].name = "Leandro Paredes"; subsList[3].num = 5;
    subsList[4].name = "Ángel Di María"; subsList[4].num = 11;
    subsList[5].name = "Nicolás González"; subsList[5].num = 15;
  } else {
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
  // --- ROUND 1 OF GROUP STAGE ---
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

  // --- ROUND 2 OF GROUP STAGE ---
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

  // --- ROUND 3 OF GROUP STAGE ---
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

  // --- KNOCKOUT BRACKET STAGES ---
  {
    "id": "m73",
    "stage": "Round of 32",
    "team1": "1A",
    "team2": "2B",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-01T18:00:00Z",
    "stadium": "MetLife Stadium, New York/New Jersey",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m74",
    "stage": "Round of 32",
    "team1": "1C",
    "team2": "2D",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-02T20:00:00Z",
    "stadium": "Estadio Azteca, Mexico City",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m75",
    "stage": "Round of 16",
    "team1": "W73",
    "team2": "2F",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-05T18:00:00Z",
    "stadium": "SoFi Stadium, Los Angeles",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m76",
    "stage": "Round of 16",
    "team1": "W74",
    "team2": "2H",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-06T20:00:00Z",
    "stadium": "AT&T Stadium, Dallas",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m77",
    "stage": "Quarter-finals",
    "team1": "W75",
    "team2": "W_Q1",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-10T18:00:00Z",
    "stadium": "Mercedes-Benz Stadium, Atlanta",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m78",
    "stage": "Quarter-finals",
    "team1": "W76",
    "team2": "W_Q2",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-11T20:00:00Z",
    "stadium": "Hard Rock Stadium, Miami",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m79",
    "stage": "Semi-finals",
    "team1": "W77",
    "team2": "W_S1",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-14T19:00:00Z",
    "stadium": "AT&T Stadium, Dallas",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m80",
    "stage": "Semi-finals",
    "team1": "W78",
    "team2": "W_S2",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-15T19:00:00Z",
    "stadium": "Mercedes-Benz Stadium, Atlanta",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m81",
    "stage": "Third Place",
    "team1": "L79",
    "team2": "L80",
    "score1": null,
    "score2": null,
    "status": "SCHEDULED",
    "kickoff": "2026-07-18T18:00:00Z",
    "stadium": "Hard Rock Stadium, Miami",
    "liveMinute": null,
    "events": []
  },
  {
    "id": "m82",
    "stage": "Final",
    "team1": "W79",
    "team2": "W80",
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
let fixtures = JSON.parse(JSON.stringify(initialFixtures)); // Copy initial state (No results yet)
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
document.addEventListener("DOMContentLoaded", () => {
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
    
    if (!isInitial) {
      showToast("Match results updated with latest data!", "success");
    }
  } catch (error) {
    console.error("Failed to fetch fixtures:", error);
    if (!isInitial) {
      showToast("Error updating results. Check fixtures.json.", "error");
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

  // Sort keys alphabetically by team name
  const sortedCodes = Object.keys(teamsDb).sort((a, b) => teamsDb[a].name.localeCompare(teamsDb[b].name));

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
      <span class="team-label">${team.name}</span>
    `;

    const toggleCard = () => {
      const currentSelected = onboardingTeamsGrid.querySelectorAll(".selection-card.selected");
      if (card.classList.contains("selected")) {
        card.classList.remove("selected");
        card.setAttribute("aria-checked", "false");
      } else {
        if (currentSelected.length >= 4) {
          showToast("You can follow up to 4 teams maximum!", "info");
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
      return a.name.localeCompare(b.name);
    });

    const rowsHtml = groupTeams.map((team, index) => {
      const isFollowed = followedTeams.includes(team.code);
      const gdSign = team.gd > 0 ? `+${team.gd}` : team.gd;
      return `
        <tr class="${isFollowed ? 'highlight-row' : ''}">
          <td class="cell-pos">${index + 1}</td>
          <td class="cell-team">
            <img src="https://flagcdn.com/w20/${team.flag}.png" alt="" class="standings-team-flag">
            <span class="standings-team-code" data-team="${team.code}" title="${team.name}">
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
      <div class="group-standings-card" role="region" aria-label="${groupName} Standings">
        <h3 class="group-title">
          <span>${groupName}</span>
        </h3>
        <div class="standings-table-container">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="col-pos" scope="col">#</th>
                <th class="col-team" scope="col">Team</th>
                <th class="col-pts" scope="col">Pts</th>
                <th class="col-pl" scope="col">Pl</th>
                <th class="col-w" scope="col">W</th>
                <th class="col-d" scope="col">D</th>
                <th class="col-l" scope="col">L</th>
                <th class="col-gd" scope="col">GD</th>
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
    followedListPlaceholder.innerHTML = `<span class="no-teams-text">None followed</span>`;
    return;
  }

  followedListPlaceholder.innerHTML = followedTeams.map(code => {
    const team = teamsDb[code];
    if (!team) return "";
    return `
      <div class="fav-team-badge" title="${team.name}">
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
    if (!match.stage.startsWith("Group")) return;
    const matchDateStr = match.kickoff.split("T")[0];
    datesSet.add(matchDateStr);
  });

  const uniqueDates = Array.from(datesSet).sort();
  
  if (!uniqueDates.includes(selectedDate) && uniqueDates.length > 0) {
    selectedDate = uniqueDates[0];
  }

  calendarDatesRow.innerHTML = uniqueDates.map(dateStr => {
    const dateObj = new Date(dateStr + "T12:00:00Z");
    const dayName = dateObj.toLocaleDateString("en-US", { weekday: "short" });
    const dayNum = dateObj.toLocaleDateString("en-US", { day: "2-digit" });
    const month = dateObj.toLocaleDateString("en-US", { month: "short" });
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

  let filteredMatches = fixtures.filter(match => {
    const matchDateStr = match.kickoff.split("T")[0];
    return match.stage.startsWith("Group") && matchDateStr === selectedDate;
  });

  if (searchQuery) {
    filteredMatches = filteredMatches.filter(match => {
      const t1 = (teamsDb[match.team1]?.name || match.team1).toLowerCase();
      const t2 = (teamsDb[match.team2]?.name || match.team2).toLowerCase();
      return t1.includes(searchQuery) || t2.includes(searchQuery);
    });
  }

  if (filterFavoritesOnly) {
    filteredMatches = filteredMatches.filter(match => {
      return followedTeams.includes(match.team1) || followedTeams.includes(match.team2);
    });
  }

  const formattedDate = new Date(selectedDate + "T12:00:00Z").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  currentDateTitle.textContent = `${formattedDate}`;
  matchCountBadge.textContent = `${filteredMatches.length} matches`;

  if (filteredMatches.length === 0) {
    fixturesGridList.innerHTML = `
      <div class="no-matches-card">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
        <p>No fixtures match your current filters. Try adjusting search or choosing another date.</p>
      </div>
    `;
    return;
  }

  fixturesGridList.innerHTML = filteredMatches.map(match => {
    const t1 = teamsDb[match.team1] || { name: match.team1, flag: "un" };
    const t2 = teamsDb[match.team2] || { name: match.team2, flag: "un" };
    
    const isFavMatch = followedTeams.includes(match.team1) || followedTeams.includes(match.team2);
    
    const matchTimeObj = new Date(match.kickoff);
    const timeFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: userTimezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
    const formattedTime = timeFormatter.format(matchTimeObj);

    let statusBadgeHTML = "";
    let scoreHTML = "";
    
    if (match.status === "FINISHED") {
      statusBadgeHTML = `<span class="status-badge finished">Finished</span>`;
      scoreHTML = `
        <div class="match-score-display">
          <span class="score-digit">${match.score1}</span>
          <span class="score-divider">:</span>
          <span class="score-digit">${match.score2}</span>
        </div>
      `;
    } else if (match.status === "LIVE") {
      statusBadgeHTML = `<span class="status-badge live"><span class="pulse-dot"></span> LIVE ${match.liveMinute}'</span>`;
      scoreHTML = `
        <div class="match-score-display">
          <span class="score-digit">${match.score1}</span>
          <span class="score-divider">:</span>
          <span class="score-digit">${match.score2}</span>
        </div>
      `;
    } else {
      statusBadgeHTML = `<span class="status-badge scheduled">Scheduled</span>`;
      scoreHTML = `
        <div class="match-time-display">
          <span class="match-time-text">${formattedTime}</span>
        </div>
      `;
    }

    const starIcon = isFavMatch ? `
      <span class="fav-star" title="Followed Match" style="color: var(--primary-gold); margin-right: 0.35rem;">
        ★
      </span>
    ` : "";

    return `
      <article class="match-card ${isFavMatch ? 'favorite-highlight' : ''}" 
               tabindex="0" 
               data-match-id="${match.id}">
        <div class="match-card-meta">
          <span class="match-stage-badge">${starIcon}${match.stage}</span>
          <span class="match-stadium-text" title="${match.stadium}">${match.stadium}</span>
        </div>
        <div class="match-card-scoreline">
          <div class="match-team team1">
            <span class="match-team-name">${match.team1}</span>
            <div class="match-flag-container">
              <img src="https://flagcdn.com/w40/${t1.flag}.png" alt="" class="match-team-flag" loading="lazy">
            </div>
          </div>
          <div class="match-card-center">
            ${scoreHTML}
          </div>
          <div class="match-team team2">
            <div class="match-flag-container">
              <img src="https://flagcdn.com/w40/${t2.flag}.png" alt="" class="match-team-flag" loading="lazy">
            </div>
            <span class="match-team-name">${match.team2}</span>
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
      const t1 = teamsDb[match.team1] || null;
      const t2 = teamsDb[match.team2] || null;
      
      const isFavMatch = followedTeams.includes(match.team1) || followedTeams.includes(match.team2);
      
      const score1 = match.score1 !== null ? match.score1 : "-";
      const score2 = match.score2 !== null ? match.score2 : "-";

      const winnerCode = match.status === "FINISHED" ? (match.score1 > match.score2 ? match.team1 : match.team2) : null;

      const t1Class = winnerCode ? (winnerCode === match.team1 ? 'winner' : 'loser') : '';
      const t2Class = winnerCode ? (winnerCode === match.team2 ? 'winner' : 'loser') : '';

      const t1Flag = t1 ? `https://flagcdn.com/w40/${t1.flag}.png` : "";
      const t2Flag = t2 ? `https://flagcdn.com/w40/${t2.flag}.png` : "";

      const starIcon = isFavMatch ? `<span class="bracket-meta-gold">★ Followed Match</span>` : "";
      
      let matchLabel = match.stadium.split(",")[0];
      if (match.status === "LIVE") {
        matchLabel = `LIVE ${match.liveMinute}'`;
      } else if (match.status === "FINISHED") {
        matchLabel = "Full Time";
      }

      return `
        <div class="bracket-match-card ${isFavMatch ? 'favorite-highlight' : ''}" 
             data-match-id="${match.id}" 
             tabindex="0"
             role="button"
             aria-label="View match center for ${match.team1} vs ${match.team2}">
          <div class="bracket-meta">
            <span>${matchLabel}</span>
            ${starIcon}
          </div>
          
          <div class="bracket-team-row ${t1Class}">
            <div class="bracket-team-info">
              ${t1 ? `<img src="${t1Flag}" alt="" class="bracket-flag" loading="lazy">` : ""}
              <span class="bracket-team-name">${match.team1}</span>
            </div>
            <span class="bracket-team-score">${score1}</span>
          </div>

          <div class="bracket-team-row ${t2Class}">
            <div class="bracket-team-info">
              ${t2 ? `<img src="${t2Flag}" alt="" class="bracket-flag" loading="lazy">` : ""}
              <span class="bracket-team-name">${match.team2}</span>
            </div>
            <span class="bracket-team-score">${score2}</span>
          </div>
        </div>
      `;
    }).join("");

    return `
      <div class="bracket-column" role="group" aria-label="${round} matches">
        <h3 class="bracket-round-header">${round}</h3>
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

// --- Match Center Dialog & Tabs ---
function openMatchCenter(matchId) {
  const match = fixtures.find(m => m.id === matchId);
  if (!match) return;

  const t1 = teamsDb[match.team1];
  const t2 = teamsDb[match.team2];

  activeDetailTab = "lineups";

  renderMatchCenterContent(match, t1, t2);
  matchDetailsDialog.showModal();
}

function renderMatchCenterContent(match, t1, t2) {
  const kickoffDateObj = new Date(match.kickoff);
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: userTimezone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: userTimezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  
  const kickoffDateStr = dateFormatter.format(kickoffDateObj);
  const kickoffTimeStr = timeFormatter.format(kickoffDateObj);

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
    ? `<span class="status-badge live"><span class="pulse-dot"></span> LIVE ${match.liveMinute}'</span>`
    : match.status === "FINISHED"
      ? `<span class="status-badge finished">Full Time</span>`
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

  matchCenterContent.innerHTML = `
    <!-- Header -->
    <header class="mc-header">
      <div class="mc-meta">${match.stage}</div>
      <div class="mc-stadium">${match.stadium} • ${kickoffDateStr}</div>
      
      <div class="mc-scoreboard">
        <div class="mc-team">
          <div class="mc-team-flag-container">
            ${t1 ? `<img src="https://flagcdn.com/w80/${t1.flag}.png" alt="" class="mc-flag">` : ""}
          </div>
          <span class="mc-team-name">${match.team1}</span>
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
            ${t2 ? `<img src="https://flagcdn.com/w80/${t2.flag}.png" alt="" class="mc-flag">` : ""}
          </div>
          <span class="mc-team-name">${match.team2}</span>
        </div>
      </div>

      ${eventsHTML}
    </header>

    <!-- Navigation Tabs -->
    <nav class="mc-tabs" aria-label="Match Center Section tabs">
      <button type="button" class="mc-tab-btn ${activeDetailTab === 'lineups' ? 'active' : ''}" id="mc-tab-btn-lineups">Lineups & Squads</button>
      <button type="button" class="mc-tab-btn ${activeDetailTab === 'tactics' ? 'active' : ''}" id="mc-tab-btn-tactics">Tactical Styles & Stats</button>
    </nav>

    <!-- Content Panel 1: Lineups -->
    <section class="mc-tab-panel ${activeDetailTab === 'lineups' ? 'active' : ''}" id="mc-panel-lineups" aria-labelledby="mc-tab-btn-lineups">
      <div class="mc-squad-layout">
        <!-- Team 1 Squad -->
        <div>
          <h3 class="squad-column-title team1-title">
            ${t1 ? `<img src="https://flagcdn.com/w20/${t1.flag}.png" alt="">` : ""}
            ${match.team1} Squad
          </h3>
          ${renderSquadList(t1)}
        </div>
        
        <!-- Team 2 Squad -->
        <div>
          <h3 class="squad-column-title team2-title">
            ${t2 ? `<img src="https://flagcdn.com/w20/${t2.flag}.png" alt="">` : ""}
            ${match.team2} Squad
          </h3>
          ${renderSquadList(t2)}
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
            <h4 class="style-title">${match.team1}</h4>
            <span class="style-type">Positional Style</span>
          </div>
          <p class="style-desc">${t1 ? t1.style.desc : "Tactical style details pending final group alignment."}</p>
          ${renderTacticalAttributes(t1)}
        </div>
        
        <!-- Team 2 Card -->
        <div class="style-card team2-style">
          <div class="style-card-header">
            <h4 class="style-title">${match.team2}</h4>
            <span class="style-type">Positional Style</span>
          </div>
          <p class="style-desc">${t2 ? t2.style.desc : "Tactical style details pending final group alignment."}</p>
          ${renderTacticalAttributes(t2)}
        </div>
      </div>

      <!-- WC History Stats comparison -->
      <div class="mc-stats-grid" style="margin-top: 2rem;">
        <div class="stats-card">
          <h4 class="stats-card-title">
            ${t1 ? `<img src="https://flagcdn.com/w20/${t1.flag}.png" alt="" style="width: 20px; height: 13px; object-fit: cover;">` : ""}
            ${match.team1} History
          </h4>
          <div class="stats-list">
            <div class="stat-item">
              <span class="stat-label">WC Participations</span>
              <span class="stat-value">${t1 ? t1.participations : "-"}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Best Finish</span>
              <span class="stat-value stat-value-gold">${t1 ? t1.bestFinish : "-"}</span>
            </div>
          </div>
        </div>

        <div class="stats-card">
          <h4 class="stats-card-title">
            ${t2 ? `<img src="https://flagcdn.com/w20/${t2.flag}.png" alt="" style="width: 20px; height: 13px; object-fit: cover;">` : ""}
            ${match.team2} History
          </h4>
          <div class="stats-list">
            <div class="stat-item">
              <span class="stat-label">WC Participations</span>
              <span class="stat-value">${t2 ? t2.participations : "-"}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Best Finish</span>
              <span class="stat-value stat-value-gold">${t2 ? t2.bestFinish : "-"}</span>
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
}

function renderSquadList(teamData) {
  if (!teamData) {
    return `<p class="no-teams-text">Squad lineups will be available closer to kickoff.</p>`;
  }

  const startersHTML = teamData.starters.map(player => {
    const isStar = player.name.endsWith("*");
    const formattedName = isStar ? player.name.replace("*", "") : player.name;
    const rowClass = isStar ? "player-row star-player" : "player-row";
    return `
      <div class="${rowClass}">
        <span class="player-num">${player.num}</span>
        <span class="player-name">${formattedName}</span>
        <span class="player-pos">${player.pos}</span>
      </div>
    `;
  }).join("");

  const subsHTML = teamData.subs.map(player => {
    return `
      <div class="player-row">
        <span class="player-num">${player.num}</span>
        <span class="player-name">${player.name}</span>
        <span class="player-pos">${player.pos}</span>
      </div>
    `;
  }).join("");

  return `
    <div class="lineup-section-header">Starting XI</div>
    <div class="player-list" role="list">
      ${startersHTML}
    </div>
    <div class="lineup-section-header">Substitutes</div>
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
        <span class="attr-name">Attack</span>
        <div class="attr-bar-bg">
          <div class="attr-bar-fill" style="--percent: ${attrs.attack}%;"></div>
        </div>
        <span class="attr-value">${attrs.attack}</span>
      </div>
      <div class="attr-row">
        <span class="attr-name">Defense</span>
        <div class="attr-bar-bg">
          <div class="attr-bar-fill" style="--percent: ${attrs.defense}%;"></div>
        </div>
        <span class="attr-value">${attrs.defense}</span>
      </div>
      <div class="attr-row">
        <span class="attr-name">Speed</span>
        <div class="attr-bar-bg">
          <div class="attr-bar-fill" style="--percent: ${attrs.speed}%;"></div>
        </div>
        <span class="attr-value">${attrs.speed}</span>
      </div>
      <div class="attr-row">
        <span class="attr-name">Control</span>
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
