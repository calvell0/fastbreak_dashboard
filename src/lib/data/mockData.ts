export interface Player {
  id: number;
  name: string;
  position: string;
  number: string;
  stats: {
    ppg: number;    // Points per game
    rpg: number;    // Rebounds per game
    apg: number;    // Assists per game
    fg: string;     // Field goal percentage
    mpg: number; 
    efficiency?: number;   // Minutes per game
  };
}

export const mockPlayers: Player[] = [
  {
    id: 1,
    name: "LaMelo Ball",
    position: "PG",
    number: "1",
    stats: {
      ppg: 23.9,
      rpg: 6.4,
      apg: 8.2,
      fg: "44.2%",
      mpg: 33.6
    }
  },
  {
    id: 2,
    name: "Brandon Miller",
    position: "SF",
    number: "24",
    stats: {
      ppg: 16.8,
      rpg: 4.2,
      apg: 2.4,
      fg: "43.1%",
      mpg: 32.8
    }
  },
  {
    id: 3,
    name: "Miles Bridges",
    position: "PF",
    number: "0",
    stats: {
      ppg: 21.2,
      rpg: 7.5,
      apg: 3.4,
      fg: "45.7%",
      mpg: 35.2
    }
  },
  {
    id: 4,
    name: "Gordon Hayward",
    position: "SF",
    number: "20",
    stats: {
      ppg: 14.7,
      rpg: 4.9,
      apg: 4.6,
      fg: "46.8%",
      mpg: 31.5
    }
  },
  {
    id: 5,
    name: "Nick Richards",
    position: "C",
    number: "4",
    stats: {
      ppg: 9.4,
      rpg: 8.2,
      apg: 0.8,
      fg: "68.3%",
      mpg: 27.4
    }
  },
  {
    id: 6,
    name: "Grant Williams",
    position: "PF",
    number: "12",
    stats: {
      ppg: 12.5,
      rpg: 4.8,
      apg: 1.8,
      fg: "44.5%",
      mpg: 28.9
    }
  },
  {
    id: 7,
    name: "Seth Curry",
    position: "SG",
    number: "30",
    stats: {
      ppg: 9.8,
      rpg: 1.8,
      apg: 2.4,
      fg: "43.8%",
      mpg: 22.5
    }
  },
  {
    id: 8,
    name: "Tre Mann",
    position: "PG",
    number: "23",
    stats: {
      ppg: 8.2,
      rpg: 2.1,
      apg: 3.1,
      fg: "41.2%",
      mpg: 18.6
    }
  },
  {
    id: 9,
    name: "Davis Bertans",
    position: "PF",
    number: "9",
    stats: {
      ppg: 7.4,
      rpg: 2.8,
      apg: 0.9,
      fg: "42.9%",
      mpg: 15.8
    }
  },
  {
    id: 10,
    name: "Cody Martin",
    position: "SF",
    number: "11",
    stats: {
      ppg: 5.2,
      rpg: 3.4,
      apg: 1.8,
      fg: "44.1%",
      mpg: 16.7
    }
  },
  {
    id: 11,
    name: "JT Thor",
    position: "PF",
    number: "21",
    stats: {
      ppg: 4.8,
      rpg: 2.9,
      apg: 0.6,
      fg: "43.5%",
      mpg: 14.2
    }
  },
  {
    id: 12,
    name: "Bryce McGowens",
    position: "SG",
    number: "7",
    stats: {
      ppg: 5.9,
      rpg: 1.8,
      apg: 1.2,
      fg: "40.8%",
      mpg: 15.4
    }
  },
  {
    id: 13,
    name: "Vasa Micic",
    position: "PG",
    number: "22",
    stats: {
      ppg: 7.8,
      rpg: 1.6,
      apg: 4.2,
      fg: "42.3%",
      mpg: 19.8
    }
  },
  {
    id: 14,
    name: "Nathan Mensah",
    position: "C",
    number: "31",
    stats: {
      ppg: 2.4,
      rpg: 2.8,
      apg: 0.3,
      fg: "52.1%",
      mpg: 8.6
    }
  }
]; 