export const translations = {
  es: {
    title: "Pachanga - Organiza tus partidos",
    addPlayers: "Añadir Jugadores",
    playerName: "Nombre del jugador",
    add: "Añadir",
    players: "Jugadores",
    divideTeams: "Dividir Equipos",
    teamA: "Equipo A",
    teamB: "Equipo B"
  },
  en: {
    title: "Pachanga - Organize your matches",
    addPlayers: "Add Players",
    playerName: "Player name",
    add: "Add",
    players: "Players",
    divideTeams: "Divide Teams",
    teamA: "Team A",
    teamB: "Team B"
  }
};

export function t(key: string, lang: string = 'es') {
  return translations[lang]?.[key] || key;
}
