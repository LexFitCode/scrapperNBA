import { setName } from "./setNames.js"
import fs from "fs/promises"
import { setCoverMayorPuntos, setCoverMenorPuntos, setCoverPuntos, setLastFiveMayorPuntos, setLastFiveMayorPuntosVs, setLastFiveMenorPuntos, setLastFiveMenorPuntosVs, setLastFivePuntos, setLastFivePuntosVs} from "./setCover/puntos.js"
import { setCoverAsistencias, setLastFiveAsistencias, setLastFiveAsistenciasVs} from "./setCover/asistencias.js"
import { setCoverRebotes, setLastFiveRebotes, setLastFiveRebotesVs} from "./setCover/rebotes.js"
import { setCoverTriples, setLastFiveTriples, setLastFiveTriplesVs} from "./setCover/triples.js"
import * as odds from "./appfolder/playerOdds.json" with { type : "json"}
import * as players from "./appfolder/playerTeams.json" with { type : "json"}
import * as games from "./appfolder/games.json" with { type : "json"}
import * as lastFive from "./appfolder/playerStats.json" with { type : "json"}
import * as lastFiveVs from "./appfolder/playerStatsvs.json" with { type : "json"}
import { setlastFiveAsistenciasRebotes, setlastFivePuntosAsistencias, setlastFivePuntosAsistenciasRebotes, setlastFivePuntosRebotes } from "./setLastFive.js"
import { setCoverAsistenciasRebotes, setCoverPuntosAsistencias, setCoverPuntosAsistenciasRebotes, setCoverPuntosRebotes } from "./setCover.js"

let oddsWithStats = []
let asistenciasError = []


export async function setOddsWithStats(date){

    const gamesLocal = extractData(games)
    const gameslength = gamesLocal.length

    const playersLocal = extractData(players)
    const playerslength = playersLocal.length

    const oddsLocal = extractData(odds)
    const oddslength = oddsLocal.length

    const lastFiveLocal = extractData(lastFive)
    const lastFivelength = lastFiveLocal.length
    
    const lastFiveVsLocal = extractData(lastFiveVs)
    const lastFiveVslength = lastFiveVsLocal.length
    for (let i = 0 ; i < playerslength ; i++){
        const game = searchGame(playersLocal[i].team, gamesLocal, gameslength)
        const localName = setName(playersLocal[i].name)
        const lastFive          = searchStats(localName, lastFiveLocal, lastFivelength)
        const lastFiveVs        = searchStats(localName, lastFiveVsLocal, lastFiveVslength)
        const odds = searchOdds(localName, oddsLocal, oddslength)
        console.log(localName)
        if(odds.puntos !== undefined){
            setLastFivePuntos(odds, lastFive[0].stats)
            setLastFivePuntosVs(odds, lastFiveVs[0]?.stats)
            setCoverPuntos(odds)
        }
        if(odds.menorPuntos !== undefined){
            setLastFiveMenorPuntos(odds, lastFive[0].stats)
            setLastFiveMenorPuntosVs(odds, lastFiveVs[0]?.stats)
            setCoverMenorPuntos(odds)
        }
        if(odds.mayorPuntos !== undefined){
            setLastFiveMayorPuntos(odds)
            setLastFiveMayorPuntosVs(odds)
            setCoverMayorPuntos(odds)
        }

        if(odds.asistencias !== undefined){
            setLastFiveAsistencias(odds, lastFive[0].stats)
            setLastFiveAsistenciasVs(odds, lastFiveVs[0]?.stats)
            setCoverAsistencias(odds)
        }
        
        
        
        if(odds.rebotes !== undefined){
            setLastFiveRebotes(odds, lastFive[0].stats)
            setLastFiveRebotesVs(odds, lastFiveVs[0]?.stats)
            setCoverRebotes(odds)
        }
        if(odds.triples !== undefined){
            setLastFiveTriples(odds, lastFive[0].stats)
            setLastFiveTriplesVs(odds, lastFiveVs[0]?.stats)
            setCoverTriples(odds)
        }
        if(odds.puntosAsistenciasRebotes  !== undefined){
            setlastFivePuntosAsistenciasRebotes(odds)
            setCoverPuntosAsistenciasRebotes(odds)
        }
        if(odds.asitenciasRebotes !== undefined){
            setlastFiveAsistenciasRebotes(odds)
            setCoverAsistenciasRebotes(odds)
        }
        if(odds.puntosRebotes !== undefined){
            setlastFivePuntosRebotes(odds)
            setCoverPuntosRebotes(odds)
        }
        if(odds.puntosAsistencias){
            setlastFivePuntosAsistencias(odds)
            setCoverPuntosAsistencias(odds)
        }
        const asistencias = lastFiveVs[0]?.stats
        asistenciasError. push({localName, asistencias})
        oddsWithStats.push({name : playersLocal[i].name, team:playersLocal[i].team, game, odds } )
    }
    await fs.writeFile(
        "folder/"+ date + "/asistencias.json",
        JSON.stringify(asistenciasError)
      );
      await fs.writeFile(
        "folder/"+ date + "/icons.json",
        JSON.stringify(oddsWithStats)
      );
      await fs.writeFile(
        "appfolder/icons.json",
        JSON.stringify(oddsWithStats)
      );
      console.log("data guardada")
}

function searchOdds(name, stats, lenght){
    let odds = { }
    for(let i = 0 ; i < lenght ; i++){
        if(name === stats[i].finalName){
            switch(stats[i].market){
                case 'Puntos (+/-)':
                    odds.puntos =  stats[i]
                    break;
                case 'Menor cantidad de puntos':
                    odds.menorPuntos =  stats[i]
                    break;
                case 'Mayor cantidad de puntos':
                    odds.mayorPuntos =   stats[i]
                    break;
                case 'Asistencias (+/-)':
                    odds.asistencias  =   stats[i]
                    break
                case 'Rebotes (+/-)':
                    odds.rebotes =  stats[i]
                    break
                case 'Puntos, asistencias y rebotes (+/-)':
                    odds.puntosAsistenciasRebotes =   stats[i]
                    break
                case 'Asistencias y rebotes (+/-)':
                    odds.asitenciasRebotes = stats[i]
                    break
                case 'Puntos y rebotes (+/-)':
                    odds.puntosRebotes = stats[i]
                    break
                case 'Puntos y asistencias (+/-)':
                    odds.puntosAsistencias = stats[i]
                    break
                case 'Triples (+/-)':
                    odds.triples =  stats[i]
                    break
                default:
                    console.log('finalizo el set de' + name)
            }
        }
    }

    return odds
}

function searchGame(team, games, lenght, clon){
    let game = {}
    for(let i = 0 ; i < lenght ; i++){
        if(team.includes(games[i]?.homeName)){
            game.awayName = games[i]?.awayName
            game.homeName = games[i]?.homeName
        } else if(team.includes(games[i]?.awayName)){
            game.awayName = games[i]?.awayName
            game.homeName = games[i]?.homeName
        }
    }
    return game
}
function searchStats(name, stats, lenght){
    let nameb = setName(name)
    const a = []
    for(let i = 0 ; i < lenght ; i++){
        if(name !== null){
            if(nameb === stats[i]?.name){
                a.push(stats[i])
            }
        }
    }
    return a
}
function extractData(data){
    const dataLocal = Object.values(data)
    return  Object.values(dataLocal[0])
}
