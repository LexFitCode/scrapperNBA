import { navigateWebPage } from './getOdds.js'
import { getGamesFromWeb } from './getGames.js';
import { getPlayersFromOdds } from './getStats.js'; 
import { setOddsWithStats } from './setIcons.js';

const url = "https://lexfitcode.github.io/dummieweb"
const date = 20250402

await navigateWebPage(date, url);
await getPlayersFromOdds(date)

//await setOddsWithStats(date)
