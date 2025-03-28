import { navigateWebPage } from './getOdds.js'
import { getGamesFromWeb } from './getGames.js';
import { getPlayersFromOdds } from './getStats.js'; 
import { setOddsWithStats } from './setIcons.js';

const url = "https://lexfitcode.github.io/dummieweb"
const date = 20250327

//await navigateWebPage(date, url);
//await getGamesFromWeb(date, gamesNumber, idGames)
//await getPlayersFromOdds(date)

await setOddsWithStats(date)
