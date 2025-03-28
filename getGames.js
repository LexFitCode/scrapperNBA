import puppeteer from "puppeteer"
import fs from "fs/promises"
export async function getGamesFromWeb(date, number, id){
    const browser = await puppeteer.launch({
        headless:false,
        slowMo: 100
    })
    const page = await browser.newPage()
    const url = "https://www.espn.com/nba/scoreboard/_/date/"+date
    await page.goto(url)
   const result = await page.evaluate((number , id)=> {
    
        const gamesDay = []
        const idTag = "#\\34 0"
        const idNumber = id
        const idFinal = idNumber + number
        const list =        " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__"
        const awayTag =     "Item--away > div.ScoreCell__Team.ScoreCell__Team--scoreboard.flex-column.pr2.ScoreCell__Team--basketball > div.ScoreCell__Truncate.clr-gray-01.ScoreCell__Truncate--scoreboard.flex.items-center.h7.h5 > a > div"
        const homeTag =     "Item--home > div.ScoreCell__Team.ScoreCell__Team--scoreboard.flex-column.pr2.ScoreCell__Team--basketball > div.ScoreCell__Truncate.clr-gray-01.ScoreCell__Truncate--scoreboard.flex.items-center.h7.h5 > a > div"
        const awayLogoTag = "Item--away > a > img"
        const homeLogoTag = "Item--home > a > img"

        for (let i = idNumber; i < idFinal ; i++) {
            const hour = document.querySelector(idTag + i + " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > div > div.ScoreCell__Time.ScoreboardScoreCell__Time.h9.clr-gray-03") !== null ? document.querySelector(idTag + i + " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > div > div.ScoreCell__Time.ScoreboardScoreCell__Time.h9.clr-gray-03").innerHTML : "ya comenzo"
            const awayName  = document.querySelector(idTag + i + list + awayTag).innerHTML
            const awayLogo = document.querySelector(idTag + i + list + awayLogoTag).getAttribute("src")

            const homeName = document.querySelector(idTag + i + list + homeTag).innerHTML
            const homeLogo = document.querySelector(idTag + i + list + homeLogoTag).getAttribute("src")
            gamesDay.push({ hour, awayName, awayLogo, homeName, homeLogo})
        }
        
        
        
        return {gamesDay, idFinal}
    },number,id)
    if (date !== undefined){
        await fs.writeFile('appfolder/games.json', JSON.stringify(result.gamesDay))
        console.log("data guardada satisfactoriamente games " + date)
        await fs.writeFile("folder/"+ date + "/games.json", JSON.stringify(result.gamesDay))
        console.log("data guardada satisfactoriamente games " + date)
        await fs.writeFile("folder/"+ date + "/idFinal.json", JSON.stringify(result.idFinal))
        console.log("data guardada satisfactoriamente idFinal " + date)
    }
    await browser.close()
}


           