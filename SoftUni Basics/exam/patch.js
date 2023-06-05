const axios = require("axios").default;
const player = require("play-sound")((opts = {}));

const colors = require("./colors");
const { negative, positive } = require("./patchResponses");
const previousPatchTimes = require("./previousPatchDates");

const url = "https://www.dota2.com/datafeed/patchnoteslist";
const existingPatches = 71;
const LOADING_TIME = 1500;
const TIMELINE_LENGTH = 200;
const testing = process.env.test == "true";

async function go() {
  process.stdout.write(colors.ClearConsole);
  displayTimeline();

  console.log(colors.FgRed, rn(18) + " PATCH STATUS: LOADING");

  const res = await Promise.all([axios.get(url), fakeLoading()]);
  process.stdout.write(colors.ClearConsole);
  displayTimeline();

  var patches = res[0].data.patches;
  var sortedByDate = patches.sort(
    (a, b) => b.patch_timestamp - a.patch_timestamp
  );
  var threeLatest = sortedByDate.slice(0, 3).reverse();
  console.log(threeLatest);
  console.log("");

  if (patches.length > existingPatches || testing) {
    displayPatchFound();
  } else {
    displayPatchNotFound();
  }
}

function fakeLoading() {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(), LOADING_TIME);
  });
}

const rn = (num) => new Array(num).fill("\n").join("");
const r = (num, letter) => new Array(num).fill(letter).join("");

function displayPatchFound() {
  console.log(colors.FgGreen, `PATCH STATUS: ${positive}`);
  console.log(" " + new Date(Date.now()));
  console.log("");
  player.play("./files/clip.mp3");
  clearInterval(interval);
}

function displayPatchNotFound() {
  console.log(colors.FgRed, `PATCH STATUS: ${negativePatchMessage()} `);
}

function displayTimeline() {
  const date = new Date();
  const nowInMinutes = date.getHours() * 60 + date.getMinutes();
  const nextPatches = previousPatchTimes.patches
    .sort((a, b) => a.t - b.t)
    .filter((x) => x.t > nowInMinutes);

  const timeline = new Array(nextPatches[nextPatches.length - 1].t + 10)
    .fill("-")
    .map((_, i) => (nextPatches.find((x) => x.t == i) ? "|" : "-"));

  let next = "";
  const timelineSubtitle = new Array(nextPatches[nextPatches.length - 1].t + 10)
    .fill(" ")
    .map((_, i) => {
      const res = nextPatches.find((x) => x.t == i);
      let nextChar = " ";

      if (res != undefined) {
        next = res.p;
      }

      if (next.length > 0) {
        nextChar = next[0];
        next = next.slice(1);
      }

      return nextChar;
    });

  let currentSnapshot =
    "|" + timeline.slice(nowInMinutes, nowInMinutes + TIMELINE_LENGTH).join("");

  let currentSnapshotSubtitle = timelineSubtitle
    .slice(nowInMinutes, nowInMinutes + TIMELINE_LENGTH + 2)
    .join("");

  if (!currentSnapshotSubtitle.includes("7.")) {
    currentSnapshot = currentSnapshot.slice(0, -2) + "~|";
    currentSnapshotSubtitle =
      currentSnapshotSubtitle.slice(0, -2) + nextPatches[0].p;
  }

  console.log(rn(2));
  console.log(colors.FgWhite, "TIMELINE");
  console.log("");
  console.log(currentSnapshotSubtitle);
  console.log(currentSnapshot);
  console.log("^ now");

  console.log(rn(1), "Release time of historic patches:");

  for (const i in nextPatches) {
    console.log(
      r(20, " "),
      nextPatches[i].p,
      "in",
      minutesToHourAndMinutes(nextPatches[i].t - nowInMinutes)
    );
  }
  console.log(rn(2));
}

function negativePatchMessage() {
  return random(negative);
}

function random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

go();
let interval = setInterval(() => {
  go();
}, 10 * 1000);

function minutesToHourAndMinutes(minutes) {
  if (minutes < 60) return minutes + " minutes";

  return Math.floor(minutes / 60) + " hours, " + (minutes % 60) + " minutes";
}
module.exports = {
    patches: [
      { p: "7.32", t: 1360 },
      { p: "7.31", t: 1416 },
      { p: "7.30", t: 1583 },
      { p: "7.29", t: 1260 },
      { p: "7.28", t: 1292 },
      { p: "7.27", t: 1459 },
      { p: "7.26", t: 1297 },
      { p: "7.25", t: 1100 },
      { p: "7.24", t: 1286 },
      { p: "7.23", t: 1075 },
    ]
  };
  
  // V now             7.23      7.24
  // |------------------|--------|-------|--------|--
  
  /*
    "7.30": "02:23",
    "7.29": "21:00",
    "7.28": "21:30",
    "7.27": "00:20",
    "7.26": "21:30",
    "7.25": "18:20",
    "7.24": "21:30",
    "7.23": "18:00",
  */