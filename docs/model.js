import { proxy } from "./horseless.0.5.2.min.esm.js";

const Izzy = "Izzy";
const Ella = "Ella";
const Audrey = "Audrey";
const Owen = "Owen";
const Barrett = "Barrett";
const Sofia = "Sofia";
const Tyler = "Tyler";

const Holiday = "Holiday";
export const TBD = "TBD";

export const model = (window.model = proxy({
  rules: {
    [Izzy]: {
      skipDates: [
        "April 12 2021",
        "April 13 2021",
        "April 14 2021",
        "April 15 2021",
        "April 16 2021",

        "April 19 2021"
      ]
    },
    [Ella]: {
      skipDays: [1, 2, 3, 5]
    },
    [Owen]: {
      skipDays: [1, 2, 4, 5]
    },
    [Barrett]: {
      skipDays: [1, 2, 3, 4]
    },
    [Sofia]: {
      skipDays: [1, 3, 4, 5]
    },
    [Tyler]: {
      skipDays: [2, 3, 4, 5]
    }
  },
  history: {
    2020: {
      august: {
        10: Ella,
        11: Audrey,
        12: Ella,
        13: Ella,
        14: Izzy,

        17: Ella,
        18: Ella,
        19: Ella,
        20: Ella,
        21: Barrett,

        24: Owen,
        25: Owen,
        26: Owen,
        27: Owen,
        28: Owen,

        31: Izzy
      },
      september: {
        1: Barrett,
        2: Izzy,
        3: Izzy,
        4: Sofia,

        7: Holiday,
        8: Audrey,
        9: Izzy,
        10: Izzy,
        11: Barrett,

        14: Tyler,
        15: Tyler,
        16: Tyler,
        17: Tyler,
        18: Barrett,

        21: Owen,
        22: Owen,
        23: Owen,
        24: Owen,
        25: Izzy,

        28: Tyler,
        29: Tyler,
        30: Tyler
      },
      october: {
        1: Tyler,
        2: Barrett,

        5: Sofia,
        6: Audrey,
        7: Izzy,
        8: Izzy,
        9: Barrett,

        12: Holiday,
        13: Sofia,
        14: Sofia,
        15: Sofia,
        16: Barrett,

        19: Owen,
        20: Audrey,
        21: Owen,
        22: Owen,
        23: Owen,

        26: Ella,
        27: Ella,
        28: Holiday,
        29: Ella,
        30: Barrett
      },
      november: {
        2: Sofia,
        3: Audrey,
        4: Sofia,
        5: Sofia,
        6: Barrett,

        9: Sofia,
        10: Sofia,
        11: Holiday,
        12: Tyler,
        13: Barrett,

        16: Owen,
        17: Audrey,
        18: Owen,
        19: Owen,
        20: Owen,

        23: Holiday,
        24: Holiday,
        25: Holiday,
        26: Holiday,
        27: Holiday,

        30: Izzy
      },
      december: {
        1: Audrey,
        2: Izzy,
        3: Audrey,
        4: Sofia,

        7: Tyler,
        8: Audrey,
        9: Tyler,
        10: Tyler,
        11: Barrett,

        14: Barrett,
        15: Audrey,
        16: Tyler,
        17: Barrett,
        18: Sofia,

        21: Holiday,
        22: Holiday,
        23: Holiday,
        24: Holiday,
        25: Holiday,

        28: Holiday,
        29: Holiday,
        30: Holiday,
        31: Holiday
      }
    },
    2021: {
      january: {
        1: Holiday,

        4: Sofia,
        5: Audrey,
        6: Sofia,
        7: Sofia,
        8: Barrett,

        11: Ella,
        12: Ella,
        13: Ella,
        14: Ella,
        15: Barrett,

        18: Holiday,
        19: Izzy,
        20: Tyler,
        21: Tyler,
        22: Barrett,

        25: Owen,
        26: Audrey,
        27: Tyler,
        28: Owen,
        29: Barrett
      },
      february: {
        1: Sofia,
        2: Audrey,
        3: Sofia,
        4: Sofia,
        5: Barrett,

        8: Izzy,
        9: Audrey,
        10: Sofia,
        11: Sofia,
        12: Barrett,

        15: Holiday,
        16: Audrey,
        17: Tyler,
        18: Tyler,
        19: Barrett,

        22: [Tyler, Owen],
        23: Audrey,
        24: Owen,
        25: Owen,
        26: Barrett
      },
      march: {
        1: Ella,
        2: Ella,
        3: Ella,
        4: Ella,
        5: Barrett,

        8: Sofia,
        9: Izzy,
        10: Izzy,
        11: Izzy,
        12: Barrett,

        15: Izzy,
        16: TBD,
        17: Owen,
        18: Ella,
        19: Barrett,

        22: Tyler,
        23: TBD,
        24: TBD,
        25: Ella,
        26: TBD,

        29: Tyler,
        30: TBD,
        31: TBD
      },
      april: {
        1: TBD,
        2: TBD,

        5: Holiday,
        6: Holiday,
        7: Holiday,
        8: Holiday,
        9: Holiday,

        12: TBD,
        13: TBD,
        14: TBD,
        15: TBD,
        16: TBD,

        19: TBD,
        20: TBD,
        21: Tyler,
        22: TBD,
        23: TBD,

        26: Tyler,
        27: TBD,
        28: TBD,
        29: TBD,
        30: TBD
      },
      may: {
        3: TBD,
        4: TBD,
        5: TBD,
        6: TBD,
        7: TBD,

        10: Izzy,
        11: TBD,
        12: TBD,
        13: TBD,
        14: TBD,

        17: TBD,
        18: TBD,
        19: TBD,
        20: TBD,
        21: TBD,

        24: TBD,
        25: TBD,
        26: TBD,
        27: TBD,
        28: Barrett
      }
    }
  }
}));
