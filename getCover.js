import puppeteer from "puppeteer"
import fs from "fs/promises"
export async function getPlayersAndOdds(date){
    const browser = await puppeteer.launch({
    headless:false,
    slowMo: 100
    })
    const page = await browser.newPage()
    
    await page.goto('https://stats.sportschatplace.com/player-props/basketball/nba')
    
    const result = await page.evaluate(()=> {
                        const players = document.querySelectorAll(".item")
                        const data = [... players].map( player =>{
                            const date = player.querySelector('.match-time')?.innerText
                            const name = player.querySelector('.widget-player-name')?.innerText
                            const record = player.querySelector('.pp-player-record')?.innerText
                            const market = player.querySelector('H6.point-label')?.innerText
                            const line = player.querySelector('.odds-btn-points span')?.innerText
                            const odds = player.querySelector('.odds-btn-points strong')?.innerText
                            const cover = player.querySelector('.pp-player-cover')?.innerText
                            return {date,name, record, market, line, odds, cover, }
                            })
                            return data
                        })
    const uniquePlayer = []
    result.forEach((element)=>{
        const elementData = uniquePlayer.includes(element.name) ? "" : element.name.trim()
        if(elementData !== ""){
            uniquePlayer.push({name : elementData})
        }    
    })
if (date !== undefined){
    const fileNameStats = "onePlayer/playersForStats" + date + ".json" 
    await fs.writeFile(fileNameStats, JSON.stringify(uniquePlayer))
    const fileNamePlayers = "odds/playersOdds" + date + ".json" 
    await fs.writeFile(fileNamePlayers, JSON.stringify(result))
    await fs.writeFile("appfolder/playersOdds.json", JSON.stringify(result))
}

    await browser.close()
}

getPlayersAndOdds(20250318)