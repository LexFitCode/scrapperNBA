import puppeteer from "puppeteer"
import fs from "fs/promises"

async function getDataFromGame(i){

        const awayTeam = await getDataFromAwayTeam(i)
        const homeTeam = await getDataFromHomeTeam(i)
        const gameInfo = { i, homeTeam, awayTeam}
        await fs.writeFile(
            "./scores/"+i+".json",
            JSON.stringify(gameInfo)
          );
    }
async function getDataFromAwayTeam(id){
    const browser = await puppeteer.launch({
    headless:false,
    //slowMo: 500
    })
    const page = await browser.newPage()
    let url = "https://www.espn.com.mx/basquetbol/nba/ficha/_/juegoId/"+id
    await page.goto(url)
    const result = await page.evaluate((id)=> {
        const table     =                       "#fittPageContainer > div.pageContent > div > div > div > div:nth-child(6) > div > div.PageLayout__Main > section > div > div > div > div:nth-child(1) > div > div.ResponsiveTable.ResponsiveTable--fixed-left.Boxscore.flex.flex-column > div > "
        const player    =                       "div > div.Table__Scroller > table > tbody > tr:nth-child"
        const awayTeamName = document.querySelector("#fittPageContainer > div.pageContent > div > div > div > div:nth-child(6) > div > div.PageLayout__Main > section > div > div > div > div:nth-child(1) > div > div.Boxscore__Title.flex.items-center.pt3.pb3.brdr-clr-gray-08 > div")?.innerHTML
        
        //del 2 al 6 titulares del 8  al ultimo cambios
        const playerOneName =   document.querySelector(table + "table > tbody > tr:nth-child(2) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
        const playerOneMin =    document.querySelector(table + player + "(2) > td:nth-child(1)")?.innerHTML
        const playerOneReb =    document.querySelector(table + player + "(2) > td:nth-child(7)")?.innerHTML
        const playerOneAst =    document.querySelector(table + player + "(2) > td:nth-child(8)")?.innerHTML
        const playerOnePts =    document.querySelector(table + player + "(2) > td:nth-child(14)")?.innerHTML

        const playerTwoName =   document.querySelector(table + "table > tbody > tr:nth-child(3) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
        const playerTwoMin =    document.querySelector(table + player + "(3) > td:nth-child(1)")?.innerHTML
        const playerTwoReb =    document.querySelector(table + player + "(3) > td:nth-child(7)")?.innerHTML
        const playerTwoAst =    document.querySelector(table + player + "(3) > td:nth-child(8)")?.innerHTML
        const playerTwoPts =    document.querySelector(table + player + "(3) > td:nth-child(14)")?.innerHTML

        const playerThreeName =   document.querySelector(table + "table > tbody > tr:nth-child(4) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
        const playerThreeMin =    document.querySelector(table + player + "(4) > td:nth-child(1)")?.innerHTML
        const playerThreeReb =    document.querySelector(table + player + "(4) > td:nth-child(7)")?.innerHTML
        const playerThreeAst =    document.querySelector(table + player + "(4) > td:nth-child(8)")?.innerHTML
        const playerThreePts =    document.querySelector(table + player + "(4) > td:nth-child(14)")?.innerHTML

        const playerFourName =   document.querySelector(table + "table > tbody > tr:nth-child(5) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
        const playerFourMin =    document.querySelector(table + player + "(5) > td:nth-child(1)")?.innerHTML
        const playerFourReb =    document.querySelector(table + player + "(5) > td:nth-child(7)")?.innerHTML
        const playerFourAst =    document.querySelector(table + player + "(5) > td:nth-child(8)")?.innerHTML
        const playerFourPts =    document.querySelector(table + player + "(5) > td:nth-child(14)")?.innerHTML

        const playerFiveName =   document.querySelector(table + "table > tbody > tr:nth-child(6) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
        const playerFiveMin =    document.querySelector(table + player + "(6) > td:nth-child(1)")?.innerHTML
        const playerFiveReb =    document.querySelector(table + player + "(6) > td:nth-child(7)")?.innerHTML
        const playerFiveAst =    document.querySelector(table + player + "(6) > td:nth-child(8)")?.innerHTML
        const playerFivePts =    document.querySelector(table + player + "(6) > td:nth-child(14)")?.innerHTML
        
        let playerSixName = ""
        let playerSixMin = ""
        let playerSixReb = ""
        let playerSixAst = ""
        let playerSixPts = ""
        let playerSevenName = ""
        let playerSevenMin = ""
        let playerSevenReb = ""
        let playerSevenAst = ""
        let playerSevenPts = ""
        let playerEightName = ""
        let playerEightMin = ""
        let playerEightReb = ""
        let playerEightAst = ""
        let playerEightPts = ""
        let playerNineName = ""
        let playerNineMin = ""
        let playerNineReb = ""
        let playerNineAst = ""
        let playerNinePts = ""
        let playerTenName = ""
        let playerTenMin = ""
        let playerTenReb = ""
        let playerTenAst = ""
        let playerTenPts = ""
        let playerElevenName = ""
        let playerElevenMin = ""
        let playerElevenReb = ""
        let playerElevenAst = ""
        let playerElevenPts = ""
        let playerTwelveName = ""
        let playerTwelveMin = ""
        let playerTwelveReb = ""
        let playerTwelveAst = ""
        let playerTwelvePts = ""
        let playerThirteenName = ""
        let playerThirteenMin = ""
        let playerThirteenReb = ""
        let playerThirteenAst = ""
        let playerThirteenPts = ""
        let playerFourteenName = ""
        let playerFourteenMin = ""
        let playerFourteenReb = ""
        let playerFourteenAst = ""
        let playerFourteenPts = ""
        let playerFifteenName = ""
        let playerFifteenMin = ""
        let playerFifteenReb = ""
        let playerFifteenAst = ""
        let playerFifteenPts = ""
        if (    document.querySelector( table + player + "(8) > td" ) !== null && 
document.querySelector( table + player + "(8) > td")  !== undefined &&
document.querySelector( table + "table > tbody > tr:nth-child(8) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(8) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
if(document.querySelector( table + player + "(8) > td" )?.innerHTML.includes('NJ')){
playerTenMin = "No jugo" 
playerTenReb =   "No jugo"
playerTenAst =   "No jugo"
playerTenPts =   "No jugo"
} else {
playerTenMin =    document.querySelector(table + player + "(8) > td:nth-child(1)")?.innerHTML
playerTenReb =    document.querySelector(table + player + "(8) > td:nth-child(7)")?.innerHTML
playerTenAst =    document.querySelector(table + player + "(8) > td:nth-child(8)")?.innerHTML
playerTenPts =    document.querySelector(table + player + "(8) > td:nth-child(8)")?.innerHTML
}
}
if (    document.querySelector( table + player + "(9) > td" ) !== null && 
document.querySelector( table + player + "(9) > td")  !== undefined &&
document.querySelector( table + "table > tbody > tr:nth-child(9) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(9) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
if(document.querySelector( table + player + "(9) > td" )?.innerHTML.includes('NJ')){
playerTenMin = "No jugo" 
playerTenReb =   "No jugo"
playerTenAst =   "No jugo"
playerTenPts =   "No jugo"
} else {
playerTenMin =    document.querySelector(table + player + "(9) > td:nth-child(1)")?.innerHTML
playerTenReb =    document.querySelector(table + player + "(9) > td:nth-child(7)")?.innerHTML
playerTenAst =    document.querySelector(table + player + "(9) > td:nth-child(8)")?.innerHTML
playerTenPts =    document.querySelector(table + player + "(9) > td:nth-child(9)")?.innerHTML
}
}
if (    document.querySelector( table + player + "(10) > td" ) !== null && 
document.querySelector( table + player + "(10) > td")  !== undefined &&
document.querySelector( table + "table > tbody > tr:nth-child(10) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(10) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
if(document.querySelector( table + player + "(10) > td" )?.innerHTML.includes('NJ')){
playerTenMin = "No jugo" 
playerTenReb =   "No jugo"
playerTenAst =   "No jugo"
playerTenPts =   "No jugo"
} else {
playerTenMin =    document.querySelector(table + player + "(10) > td:nth-child(1)")?.innerHTML
playerTenReb =    document.querySelector(table + player + "(10) > td:nth-child(7)")?.innerHTML
playerTenAst =    document.querySelector(table + player + "(10) > td:nth-child(10)")?.innerHTML
playerTenPts =    document.querySelector(table + player + "(10) > td:nth-child(10)")?.innerHTML
}
}
if (    document.querySelector( table + player + "(11) > td" ) !== null && 
document.querySelector( table + player + "(11) > td")  !== undefined &&
document.querySelector( table + "table > tbody > tr:nth-child(11) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(11) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
if(document.querySelector( table + player + "(11) > td" )?.innerHTML.includes('NJ')){
playerTenMin = "No jugo" 
playerTenReb =   "No jugo"
playerTenAst =   "No jugo"
playerTenPts =   "No jugo"
} else {
playerTenMin =    document.querySelector(table + player + "(11) > td:nth-child(1)")?.innerHTML
playerTenReb =    document.querySelector(table + player + "(11) > td:nth-child(7)")?.innerHTML
playerTenAst =    document.querySelector(table + player + "(11) > td:nth-child(10)")?.innerHTML
playerTenPts =    document.querySelector(table + player + "(11) > td:nth-child(11)")?.innerHTML
}
}
if (    document.querySelector( table + player + "(12) > td" ) !== null && 
document.querySelector( table + player + "(12) > td")  !== undefined &&
document.querySelector( table + "table > tbody > tr:nth-child(12) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(12) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
if(document.querySelector( table + player + "(12) > td" )?.innerHTML.includes('NJ')){
playerTenMin = "No jugo" 
playerTenReb =   "No jugo"
playerTenAst =   "No jugo"
playerTenPts =   "No jugo"
} else {
playerTenMin =    document.querySelector(table + player + "(12) > td:nth-child(1)")?.innerHTML
playerTenReb =    document.querySelector(table + player + "(12) > td:nth-child(7)")?.innerHTML
playerTenAst =    document.querySelector(table + player + "(12) > td:nth-child(12)")?.innerHTML
playerTenPts =    document.querySelector(table + player + "(12) > td:nth-child(12)")?.innerHTML
}
}
if (    document.querySelector( table + player + "(13) > td" ) !== null && 
document.querySelector( table + player + "(13) > td")  !== undefined &&
document.querySelector( table + "table > tbody > tr:nth-child(13) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(13) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
if(document.querySelector( table + player + "(13) > td" )?.innerHTML.includes('NJ')){
playerTenMin = "No jugo" 
playerTenReb =   "No jugo"
playerTenAst =   "No jugo"
playerTenPts =   "No jugo"
} else {
playerTenMin =    document.querySelector(table + player + "(13) > td:nth-child(1)")?.innerHTML
playerTenReb =    document.querySelector(table + player + "(13) > td:nth-child(7)")?.innerHTML
playerTenAst =    document.querySelector(table + player + "(13) > td:nth-child(12)")?.innerHTML
playerTenPts =    document.querySelector(table + player + "(13) > td:nth-child(13)")?.innerHTML
}
}
if (    document.querySelector( table + player + "(14) > td" ) !== null && 
document.querySelector( table + player + "(14) > td")  !== undefined &&
document.querySelector( table + "table > tbody > tr:nth-child(14) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(14) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
if(document.querySelector( table + player + "(14) > td" )?.innerHTML.includes('NJ')){
playerTenMin = "No jugo" 
playerTenReb =   "No jugo"
playerTenAst =   "No jugo"
playerTenPts =   "No jugo"
} else {
playerTenMin =    document.querySelector(table + player + "(14) > td:nth-child(1)")?.innerHTML
playerTenReb =    document.querySelector(table + player + "(14) > td:nth-child(7)")?.innerHTML
playerTenAst =    document.querySelector(table + player + "(14) > td:nth-child(14)")?.innerHTML
playerTenPts =    document.querySelector(table + player + "(14) > td:nth-child(14)")?.innerHTML
}
}
if (    document.querySelector( table + player + "(15) > td" ) !== null && 
document.querySelector( table + player + "(15) > td")  !== undefined &&
document.querySelector( table + "table > tbody > tr:nth-child(15) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(15) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
if(document.querySelector( table + player + "(15) > td" )?.innerHTML.includes('NJ')){
playerTenMin = "No jugo" 
playerTenReb =   "No jugo"
playerTenAst =   "No jugo"
playerTenPts =   "No jugo"
} else {
playerTenMin =    document.querySelector(table + player + "(15) > td:nth-child(1)")?.innerHTML
playerTenReb =    document.querySelector(table + player + "(15) > td:nth-child(7)")?.innerHTML
playerTenAst =    document.querySelector(table + player + "(15) > td:nth-child(14)")?.innerHTML
playerTenPts =    document.querySelector(table + player + "(15) > td:nth-child(15)")?.innerHTML
}
}
if (    document.querySelector( table + player + "(16) > td" ) !== null && 
document.querySelector( table + player + "(16) > td")  !== undefined &&
document.querySelector( table + "table > tbody > tr:nth-child(16) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(16) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
if(document.querySelector( table + player + "(16) > td" )?.innerHTML.includes('NJ')){
playerTenMin = "No jugo" 
playerTenReb =   "No jugo"
playerTenAst =   "No jugo"
playerTenPts =   "No jugo"
} else {
playerTenMin =    document.querySelector(table + player + "(16) > td:nth-child(1)")?.innerHTML
playerTenReb =    document.querySelector(table + player + "(16) > td:nth-child(7)")?.innerHTML
playerTenAst =    document.querySelector(table + player + "(16) > td:nth-child(8)")?.innerHTML
playerTenPts =    document.querySelector(table + player + "(16) > td:nth-child(16)")?.innerHTML
}
}
if (    document.querySelector( table + player + "(17) > td" ) !== null && 
document.querySelector( table + player + "(17) > td")  !== undefined &&
document.querySelector( table + "table > tbody > tr:nth-child(17) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(17) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
if(document.querySelector( table + player + "(17) > td" )?.innerHTML.includes('NJ')){
playerTenMin = "No jugo" 
playerTenReb =   "No jugo"
playerTenAst =   "No jugo"
playerTenPts =   "No jugo"
} else {
playerTenMin =    document.querySelector(table + player + "(17) > td:nth-child(1)")?.innerHTML
playerTenReb =    document.querySelector(table + player + "(17) > td:nth-child(7)")?.innerHTML
playerTenAst =    document.querySelector(table + player + "(17) > td:nth-child(8)")?.innerHTML
playerTenPts =    document.querySelector(table + player + "(17) > td:nth-child(17)")?.innerHTML
}
}
        const data = { 
                            name: awayTeamName,
                            roster  : {
                                playerOne: {  name: playerOneName, minutos :playerOneMin, rebotes :playerOneReb, asistencias :playerOneAst, puntos :playerOnePts  },
                                playerTwo: {  name: playerTwoName, minutos :playerTwoMin, rebotes :playerTwoReb, asistencias :playerTwoAst, puntos :playerTwoPts },
                                playerThree: {  name: playerThreeName, minutos :playerThreeMin, rebotes :playerThreeReb, asistencias :playerThreeAst, puntos :playerThreePts },
                                playerFour: {  name: playerFourName, minutos :playerFourMin, rebotes :playerFourReb, asistencias :playerFourAst, puntos :playerFourPts },
                                playerFive: {  name: playerFiveName, minutos :playerFiveMin, rebotes :playerFiveReb, asistencias :playerFiveAst, puntos :playerFivePts },
                                playerSix: {  name: playerSixName, minutos :playerSixMin, rebotes :playerSixReb, asistencias :playerSixAst, puntos :playerSixPts },
                                playerSeven: {  name: playerSevenName, minutos :playerSevenMin, rebotes :playerSevenReb, asistencias :playerSevenAst, puntos :playerSevenPts  },
                                playerEight: {  name: playerEightName, minutos :playerEightMin, rebotes :playerEightReb, asistencias :playerEightAst, puntos :playerEightPts },
                                playerNine: {  name: playerNineName, minutos :playerNineMin, rebotes :playerNineReb, asistencias :playerNineAst, puntos :playerNinePts },
                                playerTen: {  name: playerTenName, minutos :playerTenMin, rebotes :playerTenReb, asistencias :playerTenAst, puntos :playerTenPts },
                                playerEleven: {  name: playerElevenName, minutos :playerElevenMin, rebotes :playerElevenReb, asistencias :playerElevenAst, puntos :playerElevenPts },
                                playerTwelve: {  name: playerTwelveName, minutos :playerTwelveMin, rebotes :playerTwelveReb, asistencias :playerTwelveAst, puntos :playerTwelvePts },
                                playerThirteen: {  name: playerThirteenName, minutos :playerThirteenMin, rebotes :playerThirteenReb, asistencias :playerThirteenAst, puntos :playerThirteenPts  },
                                playerFourteen: {  name: playerFourteenName, minutos :playerFourteenMin, rebotes :playerFourteenReb, asistencias :playerFourteenAst, puntos :playerFourteenPts },
                                playerFifteen: {  name: playerFifteenName, minutos :playerFifteenMin, rebotes :playerFifteenReb, asistencias :playerFifteenAst, puntos :playerFifteenPts },
                            
                        }
        }
        return data
    }, id)
    await browser.close()
    return result
}
async function getDataFromHomeTeam(id){
    const browser = await puppeteer.launch({
    headless:false,
    //slowMo: 500
    })
    const page = await browser.newPage()
    let url = "https://www.espn.com.mx/basquetbol/nba/ficha/_/juegoId/"+id
    await page.goto(url)
    const result = await page.evaluate(()=> {
        const table     =  "#fittPageContainer > div.pageContent > div > div > div > div:nth-child(6) > div > div.PageLayout__Main > section > div > div > div > div:nth-child(2) > div.Boxscore.flex.flex-column > div.ResponsiveTable.ResponsiveTable--fixed-left.Boxscore.flex.flex-column > div > "
        const player    =      "div > div.Table__Scroller > table > tbody > tr:nth-child"
        const homeTeamName = document.querySelector("#fittPageContainer > div.pageContent > div > div > div > div:nth-child(6) > div > div.PageLayout__Main > section > div > div > div > div:nth-child(2) > div.Boxscore.flex.flex-column > div.Boxscore__Title.flex.items-center.pt3.pb3.brdr-clr-gray-08 > div")?.innerHTML
        
        //del 2 al 6 titulares del 8  al ultimo cambios
        const playerOneName =   document.querySelector(table +  "table > tbody > tr:nth-child(2) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
        const playerOneMin =    document.querySelector(table + player + "(2) > td:nth-child(1)")?.innerHTML
        const playerOneReb =    document.querySelector(table + player + "(2) > td:nth-child(7)")?.innerHTML
        const playerOneAst =    document.querySelector(table + player + "(2) > td:nth-child(8)")?.innerHTML
        const playerOnePts =    document.querySelector(table + player + "(2) > td:nth-child(14)")?.innerHTML

        const playerTwoName =   document.querySelector(table + "table > tbody > tr:nth-child(3) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
        const playerTwoMin =    document.querySelector(table + player + "(3) > td:nth-child(1)")?.innerHTML
        const playerTwoReb =    document.querySelector(table + player + "(3) > td:nth-child(7)")?.innerHTML
        const playerTwoAst =    document.querySelector(table + player + "(3) > td:nth-child(8)")?.innerHTML
        const playerTwoPts =    document.querySelector(table + player + "(3) > td:nth-child(14)")?.innerHTML

        const playerThreeName =   document.querySelector(table + "table > tbody > tr:nth-child(4) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
        const playerThreeMin =    document.querySelector(table + player + "(4) > td:nth-child(1)")?.innerHTML
        const playerThreeReb =    document.querySelector(table + player + "(4) > td:nth-child(7)")?.innerHTML
        const playerThreeAst =    document.querySelector(table + player + "(4) > td:nth-child(8)")?.innerHTML
        const playerThreePts =    document.querySelector(table + player + "(4) > td:nth-child(14)")?.innerHTML

        const playerFourName =   document.querySelector(table + "table > tbody > tr:nth-child(5) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
        const playerFourMin =    document.querySelector(table + player + "(5) > td:nth-child(1)")?.innerHTML
        const playerFourReb =    document.querySelector(table + player + "(5) > td:nth-child(7)")?.innerHTML
        const playerFourAst =    document.querySelector(table + player + "(5) > td:nth-child(8)")?.innerHTML
        const playerFourPts =    document.querySelector(table + player + "(5) > td:nth-child(14)")?.innerHTML

        const playerFiveName =   document.querySelector(table + "table > tbody > tr:nth-child(6) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
        const playerFiveMin =    document.querySelector(table + player + "(6) > td:nth-child(1)")?.innerHTML
        const playerFiveReb =    document.querySelector(table + player + "(6) > td:nth-child(7)")?.innerHTML
        const playerFiveAst =    document.querySelector(table + player + "(6) > td:nth-child(8)")?.innerHTML
        const playerFivePts =    document.querySelector(table + player + "(6) > td:nth-child(14)")?.innerHTML
        
        let playerSixName = ""
        let playerSixMin = ""
        let playerSixReb = ""
        let playerSixAst = ""
        let playerSixPts = ""
        let playerSevenName = ""
        let playerSevenMin = ""
        let playerSevenReb = ""
        let playerSevenAst = ""
        let playerSevenPts = ""
        let playerEightName = ""
        let playerEightMin = ""
        let playerEightReb = ""
        let playerEightAst = ""
        let playerEightPts = ""
        let playerNineName = ""
        let playerNineMin = ""
        let playerNineReb = ""
        let playerNineAst = ""
        let playerNinePts = ""
        let playerTenName = ""
        let playerTenMin = ""
        let playerTenReb = ""
        let playerTenAst = ""
        let playerTenPts = ""
        let playerElevenName = ""
        let playerElevenMin = ""
        let playerElevenReb = ""
        let playerElevenAst = ""
        let playerElevenPts = ""
        let playerTwelveName = ""
        let playerTwelveMin = ""
        let playerTwelveReb = ""
        let playerTwelveAst = ""
        let playerTwelvePts = ""
        let playerThirteenName = ""
        let playerThirteenMin = ""
        let playerThirteenReb = ""
        let playerThirteenAst = ""
        let playerThirteenPts = ""
        let playerFourteenName = ""
        let playerFourteenMin = ""
        let playerFourteenReb = ""
        let playerFourteenAst = ""
        let playerFourteenPts = ""
        let playerFifteenName = ""
        let playerFifteenMin = ""
        let playerFifteenReb = ""
        let playerFifteenAst = ""
        let playerFifteenPts = ""
        
        if (    document.querySelector( table + player + "(8) > td") !== null && 
                document.querySelector( table + "table > tbody > tr:nth-child(8) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long") !== null &&
                document.querySelector( table + player + "(8) > td") !== undefined   ){
            playerSixName =   document.querySelector(table + "table > tbody > tr:nth-child(8) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
            playerSixMin =    document.querySelector(table + player + "(8) > td:nth-child(1)")?.innerHTML
            playerSixReb =    document.querySelector(table + player + "(8) > td:nth-child(7)")?.innerHTML
            playerSixAst =    document.querySelector(table + player + "(8) > td:nth-child(8)")?.innerHTML
            playerSixPts =    document.querySelector(table + player + "(8) > td:nth-child(14)")?.innerHTML
        }
        if (    document.querySelector( table + player + "(9) > td") !== null && 
                document.querySelector( table + player + "(9) > td") !== undefined &&
                document.querySelector( table + "table > tbody > tr:nth-child(9) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
            playerSevenName =   document.querySelector(table + "table > tbody > tr:nth-child(9) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
            playerSevenMin =    document.querySelector(table + player + "(9) > td:nth-child(1)")?.innerHTML
            playerSevenReb =    document.querySelector(table + player + "(9) > td:nth-child(7)")?.innerHTML
            playerSevenAst =    document.querySelector(table + player + "(9) > td:nth-child(8)")?.innerHTML
            playerSevenPts =    document.querySelector(table + player + "(9) > td:nth-child(14)")?.innerHTML
        }
        if (    document.querySelector( table + player + "(10) > td") !== null && 
        document.querySelector( table + player + "(10) > td") !== undefined &&
        document.querySelector( table + "table > tbody > tr:nth-child(10) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long") !== null   ){
            playerEightName =   document.querySelector(table + "table > tbody > tr:nth-child(10) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
            playerEightMin =    document.querySelector(table + player + "(10) > td:nth-child(1)")?.innerHTML
            playerEightReb =    document.querySelector(table + player + "(10) > td:nth-child(7)")?.innerHTML
            playerEightAst =    document.querySelector(table + player + "(10) > td:nth-child(8)")?.innerHTML
            playerEightPts =    document.querySelector(table + player + "(10) > td:nth-child(14)")?.innerHTML
        }
        if (    document.querySelector( table + player + "(11) > td") !== null && 
        document.querySelector( table + player + "(11) > td") !== undefined &&
        document.querySelector( table + "table > tbody > tr:nth-child(11) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")  !== null  ){
         playerNineName =   document.querySelector(table + "table > tbody > tr:nth-child(11) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
         playerNineMin =    document.querySelector(table + player + "(11) > td:nth-child(1)")?.innerHTML
         playerNineReb =    document.querySelector(table + player + "(11) > td:nth-child(7)")?.innerHTML
         playerNineAst =    document.querySelector(table + player + "(11) > td:nth-child(8)")?.innerHTML
         playerNinePts =    document.querySelector(table + player + "(11) > td:nth-child(14)")?.innerHTML
        }
        if (    document.querySelector( table + player + "(12) > td" ) !== null && 
                document.querySelector( table + player + "(12) > td")  !== undefined &&
                document.querySelector( table + "table > tbody > tr:nth-child(12) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
         playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(12) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
         if(document.querySelector( table + player + "(12) > td" )?.innerHTML.includes('NJ')){
            playerTenMin = "No jugo" 
            playerTenReb =   "No jugo"
            playerTenAst =   "No jugo"
            playerTenPts =   "No jugo"
         } else {
             playerTenMin =    document.querySelector(table + player + "(12) > td:nth-child(1)")?.innerHTML
             playerTenReb =    document.querySelector(table + player + "(12) > td:nth-child(7)")?.innerHTML
             playerTenAst =    document.querySelector(table + player + "(12) > td:nth-child(8)")?.innerHTML
             playerTenPts =    document.querySelector(table + player + "(12) > td:nth-child(14)")?.innerHTML
         }
        }
        if (    document.querySelector( table + player + "(13) > td" ) !== null && 
        document.querySelector( table + player + "(13) > td")  !== undefined &&
        document.querySelector( table + "table > tbody > tr:nth-child(13) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
        playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(13) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
        if(document.querySelector( table + player + "(13) > td" )?.innerHTML.includes('NJ')){
        playerTenMin = "No jugo" 
        playerTenReb =   "No jugo"
        playerTenAst =   "No jugo"
        playerTenPts =   "No jugo"
        } else {
        playerTenMin =    document.querySelector(table + player + "(13) > td:nth-child(1)")?.innerHTML
        playerTenReb =    document.querySelector(table + player + "(13) > td:nth-child(7)")?.innerHTML
        playerTenAst =    document.querySelector(table + player + "(13) > td:nth-child(8)")?.innerHTML
        playerTenPts =    document.querySelector(table + player + "(13) > td:nth-child(14)")?.innerHTML
        }
    }
if (    document.querySelector( table + player + "(14) > td" ) !== null && 
document.querySelector( table + player + "(14) > td")  !== undefined &&
document.querySelector( table + "table > tbody > tr:nth-child(14) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(14) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
if(document.querySelector( table + player + "(14) > td" )?.innerHTML.includes('NJ')){
playerTenMin = "No jugo" 
playerTenReb =   "No jugo"
playerTenAst =   "No jugo"
playerTenPts =   "No jugo"
} else {
playerTenMin =    document.querySelector(table + player + "(14) > td:nth-child(1)")?.innerHTML
playerTenReb =    document.querySelector(table + player + "(14) > td:nth-child(7)")?.innerHTML
playerTenAst =    document.querySelector(table + player + "(14) > td:nth-child(8)")?.innerHTML
playerTenPts =    document.querySelector(table + player + "(14) > td:nth-child(14)")?.innerHTML
}
}
    if (    document.querySelector( table + player + "(15) > td" ) !== null && 
            document.querySelector( table + player + "(15) > td")  !== undefined &&
            document.querySelector( table + "table > tbody > tr:nth-child(15) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
                playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(15) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
                if(document.querySelector( table + player + "(15) > td" )?.innerHTML.includes('NJ')){
                    playerTenMin = "No jugo" 
                    playerTenReb = "No jugo"
                    playerTenAst = "No jugo"
                    playerTenPts = "No jugo"
                } else {
                    playerTenMin = document.querySelector(table + player + "(15) > td:nth-child(1)")?.innerHTML
                    playerTenReb = document.querySelector(table + player + "(15) > td:nth-child(7)")?.innerHTML
                    playerTenAst = document.querySelector(table + player + "(15) > td:nth-child(8)")?.innerHTML
                    playerTenPts = document.querySelector(table + player + "(15) > td:nth-child(15)")?.innerHTML
                }
                }
    if (    document.querySelector( table + player + "(16) > td" ) !== null && 
            document.querySelector( table + player + "(16) > td")  !== undefined &&
            document.querySelector( table + "table > tbody > tr:nth-child(16) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
            playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(16) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
            if(document.querySelector( table + player + "(16) > td" )?.innerHTML.includes('NJ')){
                playerTenMin = "No jugo" 
                playerTenReb =   "No jugo"
                playerTenAst =   "No jugo"
                playerTenPts =   "No jugo"
            } else {
            playerTenMin =    document.querySelector(table + player + "(16) > td:nth-child(1)")?.innerHTML
            playerTenReb =    document.querySelector(table + player + "(16) > td:nth-child(7)")?.innerHTML
            playerTenAst =    document.querySelector(table + player + "(16) > td:nth-child(8)")?.innerHTML
            playerTenPts =    document.querySelector(table + player + "(16) > td:nth-child(16)")?.innerHTML
            }
    }
    if (    document.querySelector( table + player + "(17) > td" ) !== null && 
            document.querySelector( table + player + "(17) > td")  !== undefined &&
            document.querySelector( table + "table > tbody > tr:nth-child(17) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")   !== null ){
            playerTenName =   document.querySelector(table + "table > tbody > tr:nth-child(17) > td > div > a > span.truncate.db.Boxscore__AthleteName.Boxscore__AthleteName--long")?.innerHTML
                if(document.querySelector( table + player + "(17) > td" )?.innerHTML.includes('NJ')){
                playerTenMin = "No jugo" 
                playerTenReb =   "No jugo"
                playerTenAst =   "No jugo"
                playerTenPts =   "No jugo"
                } else {
                playerTenMin =    document.querySelector(table + player + "(17) > td:nth-child(1)")?.innerHTML
                playerTenReb =    document.querySelector(table + player + "(17) > td:nth-child(7)")?.innerHTML
                playerTenAst =    document.querySelector(table + player + "(17) > td:nth-child(8)")?.innerHTML
                playerTenPts =    document.querySelector(table + player + "(17) > td:nth-child(17)")?.innerHTML
                }
    }
        const data = { 
                            name: homeTeamName,
                            roster  : {
                                playerOne: {  name: playerOneName, minutos :playerOneMin, rebotes :playerOneReb, asistencias :playerOneAst, puntos :playerOnePts  },
                                playerTwo: {  name: playerTwoName, minutos :playerTwoMin, rebotes :playerTwoReb, asistencias :playerTwoAst, puntos :playerTwoPts },
                                playerThree: {  name: playerThreeName, minutos :playerThreeMin, rebotes :playerThreeReb, asistencias :playerThreeAst, puntos :playerThreePts },
                                playerFour: {  name: playerFourName, minutos :playerFourMin, rebotes :playerFourReb, asistencias :playerFourAst, puntos :playerFourPts },
                                playerFive: {  name: playerFiveName, minutos :playerFiveMin, rebotes :playerFiveReb, asistencias :playerFiveAst, puntos :playerFivePts },
                                playerSix: {  name: playerSixName, minutos :playerSixMin, rebotes :playerSixReb, asistencias :playerSixAst, puntos :playerSixPts },
                                playerSeven: {  name: playerSevenName, minutos :playerSevenMin, rebotes :playerSevenReb, asistencias :playerSevenAst, puntos :playerSevenPts  },
                                playerEight: {  name: playerEightName, minutos :playerEightMin, rebotes :playerEightReb, asistencias :playerEightAst, puntos :playerEightPts },
                                playerNine: {  name: playerNineName, minutos :playerNineMin, rebotes :playerNineReb, asistencias :playerNineAst, puntos :playerNinePts },
                                playerTen: {  name: playerTenName, minutos :playerTenMin, rebotes :playerTenReb, asistencias :playerTenAst, puntos :playerTenPts },
                                playerEleven: {  name: playerElevenName, minutos :playerElevenMin, rebotes :playerElevenReb, asistencias :playerElevenAst, puntos :playerElevenPts },
                                playerTwelve: {  name: playerTwelveName, minutos :playerTwelveMin, rebotes :playerTwelveReb, asistencias :playerTwelveAst, puntos :playerTwelvePts },
                                playerThirteen: {  name: playerThirteenName, minutos :playerThirteenMin, rebotes :playerThirteenReb, asistencias :playerThirteenAst, puntos :playerThirteenPts  },
                                playerFourteen: {  name: playerFourteenName, minutos :playerFourteenMin, rebotes :playerFourteenReb, asistencias :playerFourteenAst, puntos :playerFourteenPts },
                                playerFifteen: {  name: playerFifteenName, minutos :playerFifteenMin, rebotes :playerFifteenReb, asistencias :playerFifteenAst, puntos :playerFifteenPts },
                    }

        }
        return data
    },id)

    await browser.close()
    return result
}


getDataFromGame(401705561)
