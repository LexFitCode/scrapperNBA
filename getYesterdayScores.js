import puppeteer from "puppeteer"
import fs from "fs/promises"
async function getYesterdayScores(date){
    const browser = await puppeteer.launch({
        headless:false,
        slowMo: 100
    })
    const page = await browser.newPage()
    
    const url       = "https://www.espn.com/nba/scoreboard/_/date/"+date
    await page.goto(url)
    
   const result = await page.evaluate(()=> {
        const gamesDay = []
        const idTag = "#\\34 0"
        const idNumber = 1705510
        const idFinal = idNumber + 5
        const postId =          " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--"

        const awayLoser ="away.ScoreboardScoreCell__Item--loser "
        const awayWinner = "away.ScoreboardScoreCell__Item--winner "
        const homeLoser = "home.ScoreboardScoreCell__Item--winner "
        const homeWinner = "home.ScoreboardScoreCell__Item--loser "

        const postResult =      "> div.ScoreCell__Team.ScoreCell__Team--scoreboard.flex-column.pr2.ScoreCell__Team--basketball > div.ScoreCell__Truncate.clr-gray-01.ScoreCell__Truncate--scoreboard.flex.items-center.h7.h5 > a > div"
        const generalWinner = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--away.ScoreboardScoreCell__Item--winner > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child"
        const generalLoser = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--away.ScoreboardScoreCell__Item--loser > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child"
        const awayTag = postId + awayLoser + postResult
        const awayTagOther = postId + awayWinner + postResult
        const homeTag = postId + homeWinner + postResult
        const homeTagOther = postId + homeLoser + postResult
        const awayScoreFirstQuarterWinner =     generalWinner + "(1)"
        const awayScoreFirstQuarterLoser =      generalLoser + "(1)"
        const awayScoreSecondQuarterWinner =    generalWinner + "(2)"
        const awayScoreSecondQuarterLoser =     generalLoser + "(2)"
        const awayScoreThirdQuarterWinner =     generalWinner + "(3)"
        const awayScoreThirdQuarterLoser =      generalLoser + "(3)"
        const awayScoreFourthQuarterWinner =    generalWinner + "(4)"
        const awayScoreFourthQuarterLoser =     generalLoser + "(4)"
        const awayScoreOtQuarterWinner =        " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--away.ScoreboardScoreCell__Item--winner > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(1)"
        const awayScoreOtQuarterLoser =         " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--away.ScoreboardScoreCell__Item--loser > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(1)"
        const awayScoreFinalWinner =            " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--away.ScoreboardScoreCell__Item--winner > div.ScoreCell__Score.h4.clr-gray-01.fw-heavy.tar.ScoreCell_Score--scoreboard.pl2"
        const awayScoreFinalLoser =             " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--away.ScoreboardScoreCell__Item--loser > div.ScoreCell__Score.h4.clr-gray-01.fw-heavy.tar.ScoreCell_Score--scoreboard.pl2"
        
        const homeScoreFirstQuarterWinner = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--winner > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(1)"
        const homeScoreFirstQuarterLoser = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--loser > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(1)"
        const homeScoreSecondQuarterWinner = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--winner > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(2)"
        const homeScoreSecondQuarterLoser = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--loser > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(2)"
        const homeScoreThirdQuarterWinner = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--winner > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(3)"
        const homeScoreThirdQuarterLoser = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--loser > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(3)"
        const homeScoreFourthQuarterWinner = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--winner > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(4)"
        const homeScoreFourthQuarterLoser = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--loser > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(4)"
        const homeScoreOtQuarterWinner = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--winner > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(1)"
        const homeScoreOtQuarterLoser = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--loser > div.ScoreboardScoreCell_Linescores.basketball.flex.justify-end > div:nth-child(1)"
        const homeScoreFinalWinner = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--winner > div.ScoreCell__Score.h4.clr-gray-01.fw-heavy.tar.ScoreCell_Score--scoreboard.pl2"
        const homeScoreFinalLoser = " > div.Scoreboard__RowContainer.flex.flex-column.flex-auto > div > div.Scoreboard__Column.flex-auto.Scoreboard__Column--1.Scoreboard__Column--Score.Scoreboard__Column--Score--basketball > section > div > div > ul > li.ScoreboardScoreCell__Item.flex.items-center.relative.pb2.ScoreboardScoreCell__Item--home.ScoreboardScoreCell__Item--loser > div.ScoreCell__Score.h4.clr-gray-01.fw-heavy.tar.ScoreCell_Score--scoreboard.pl2"
        

        for (let i = idNumber; i < idFinal ; i++) {
            const awayName  = document.querySelector(idTag + i + awayTag)  === null ? document.querySelector(idTag + i + awayTagOther).innerText : document.querySelector(idTag + i + awayTag).innerText
            const homeName = document.querySelector(idTag + i + homeTag)  === null ? document.querySelector(idTag + i + homeTagOther).innerText : document.querySelector(idTag + i + homeTag).innerText
            const awayScoreFirtsQ = document.querySelector(idTag + i + awayScoreFirstQuarterWinner) === null ? document.querySelector(idTag + i + awayScoreFirstQuarterLoser).innerText : document.querySelector(idTag + i + awayScoreFirstQuarterWinner).innerText
            const awayScoreSecondQ = document.querySelector(idTag + i + awayScoreSecondQuarterWinner) === null ? document.querySelector(idTag + i + awayScoreSecondQuarterLoser).innerText : document.querySelector(idTag + i + awayScoreSecondQuarterWinner).innerText
            const awayScoreThirdQ = document.querySelector(idTag + i + awayScoreThirdQuarterWinner) === null ? document.querySelector(idTag + i + awayScoreThirdQuarterLoser).innerText : document.querySelector(idTag + i + awayScoreThirdQuarterWinner).innerText
            const awayScoreFourthQ = document.querySelector(idTag + i + awayScoreFourthQuarterWinner) === null ? document.querySelector(idTag + i + awayScoreFourthQuarterLoser).innerText : document.querySelector(idTag + i + awayScoreFourthQuarterWinner).innerText
            const awayScoreFinal = document.querySelector(idTag + i + awayScoreFinalWinner) === null ? document.querySelector(idTag + i + awayScoreFinalLoser).innerText : document.querySelector(idTag + i + awayScoreFinalWinner).innerText
            const homeScoreFirtsQ = document.querySelector(idTag + i + homeScoreFirstQuarterWinner) === null ? document.querySelector(idTag + i + homeScoreFirstQuarterLoser).innerText : document.querySelector(idTag + i + homeScoreFirstQuarterWinner).innerText
            const homeScoreSecondQ = document.querySelector(idTag + i + homeScoreSecondQuarterWinner) === null ? document.querySelector(idTag + i + homeScoreSecondQuarterLoser).innerText : document.querySelector(idTag + i + homeScoreSecondQuarterWinner).innerText
            const homeScoreThirdQ = document.querySelector(idTag + i + homeScoreThirdQuarterWinner) === null ? document.querySelector(idTag + i + homeScoreThirdQuarterLoser).innerText : document.querySelector(idTag + i + homeScoreThirdQuarterWinner).innerText
            const homeScoreFourthQ = document.querySelector(idTag + i + homeScoreFourthQuarterWinner) === null ? document.querySelector(idTag + i + homeScoreFourthQuarterLoser).innerText : document.querySelector(idTag + i + homeScoreFourthQuarterWinner).innerText
            const homeScoreFinal = document.querySelector(idTag + i + homeScoreFinalWinner) === null ? document.querySelector(idTag + i + homeScoreFinalLoser).innerText : document.querySelector(idTag + i + homeScoreFinalWinner).innerText
            
            if((idTag + i + homeScoreOtQuarterWinner) !== null || (idTag + i + homeScoreOtQuarterLoser) !== null){
                const awayScoreOtQ = document.querySelector(idTag + i + awayScoreOtQuarterWinner) === null ? document.querySelector(idTag + i + awayScoreOtQuarterLoser).innerText : document.querySelector(idTag + i + awayScoreOtQuarterWinner).innerText
                const homeScoreOtQ = document.querySelector(idTag + i + homeScoreOtQuarterWinner) === null ? document.querySelector(idTag + i + homeScoreOtQuarterLoser).innerText : document.querySelector(idTag + i + homeScoreOtQuarterWinner).innerText
            

            gamesDay.push({awayName, homeName, awayScoreFirtsQ, awayScoreSecondQ, awayScoreThirdQ, awayScoreFourthQ,awayScoreOtQ, awayScoreFinal,
                homeScoreFirtsQ, homeScoreSecondQ, homeScoreThirdQ, homeScoreFourthQ, homeScoreOtQ ,homeScoreFinal})
            } 
            else {
                
            gamesDay.push({awayName, homeName, awayScoreFirtsQ, awayScoreSecondQ, awayScoreThirdQ, awayScoreFourthQ, awayScoreFinal,
                homeScoreFirtsQ, homeScoreSecondQ, homeScoreThirdQ, homeScoreFourthQ, homeScoreFinal})                
            }


        }
        
        
        return gamesDay
    })
    if (date !== undefined){
        const fileName = "scores/" + date + ".json"
        await fs.writeFile(fileName, JSON.stringify(result))
        console.log("data guardada satisfactoriamente en scores")
    }

    await browser.close()
}

getYesterdayScores(20250306)

           