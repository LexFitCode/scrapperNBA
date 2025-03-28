export function setCoverPuntosAsistenciasRebotes(odds) {
  odds.puntosAsistenciasRebotes.stats.game1.total = odds.puntos?.stats?.game1?.total + odds.asistencias?.stats?.game1?.total + odds.rebotes?.stats?.game1?.total
  odds.puntosAsistenciasRebotes.stats.game1.total > parseFloat(odds.puntosAsistenciasRebotes.line)?
  odds.puntosAsistenciasRebotes.stats.game1.cover = true :
  odds.puntosAsistenciasRebotes.stats.game1.cover = false

  odds.puntosAsistenciasRebotes.stats.game2.total = odds.puntos?.stats.game2.total + odds.asistencias?.stats?.game2?.total + odds.rebotes?.stats?.game2?.total
  odds.puntosAsistenciasRebotes.stats.game2.total > parseFloat(odds.puntosAsistenciasRebotes.line)?
  odds.puntosAsistenciasRebotes.stats.game2.cover = true :
  odds.puntosAsistenciasRebotes.stats.game2.cover = false
  
  odds.puntosAsistenciasRebotes.stats.game3.total = odds.puntos?.stats.game3.total + odds.asistencias?.stats?.game3?.total + odds.rebotes?.stats?.game3?.total
  odds.puntosAsistenciasRebotes.stats.game3.total > parseFloat(odds.puntosAsistenciasRebotes.line)?
  odds.puntosAsistenciasRebotes.stats.game3.cover = true :
  odds.puntosAsistenciasRebotes.stats.game3.cover = false

  odds.puntosAsistenciasRebotes.stats.game4.total = odds.puntos?.stats?.game4.total + odds.asistencias?.stats?.game4.total + odds.rebotes?.stats?.game4.total
odds.puntosAsistenciasRebotes.stats.game4.total > parseFloat(odds.puntosAsistenciasRebotes.line)?
odds.puntosAsistenciasRebotes.stats.game4.cover = true :
odds.puntosAsistenciasRebotes.stats.game4.cover = false

odds.puntosAsistenciasRebotes.stats.game5.total = odds.puntos?.stats?.game5.total + odds.asistencias?.stats?.game5.total + odds.rebotes?.stats?.game5.total
odds.puntosAsistenciasRebotes.stats.game5.total > parseFloat(odds.puntosAsistenciasRebotes.line)?
odds.puntosAsistenciasRebotes.stats.game5.cover = true :
odds.puntosAsistenciasRebotes.stats.game5.cover = false

odds.puntosAsistenciasRebotes.statsVs.game1.total = odds.puntos?.statsVs?.game1.total + odds.asistencias?.statsVs?.game1.total + odds.rebotes?.statsVs?.game1.total
odds.puntosAsistenciasRebotes.statsVs.game1.total > parseFloat(odds.puntosAsistenciasRebotes.line)?
odds.puntosAsistenciasRebotes.statsVs.game1.cover = true :
odds.puntosAsistenciasRebotes.statsVs.game1.cover = false

odds.puntosAsistenciasRebotes.statsVs.game2.total = odds.puntos?.statsVs?.game2.total + odds.asistencias?.statsVs?.game2.total + odds.rebotes?.statsVs?.game2.total
odds.puntosAsistenciasRebotes.statsVs.game2.total > parseFloat(odds.puntosAsistenciasRebotes.line)?
odds.puntosAsistenciasRebotes.statsVs.game2.cover = true :
odds.puntosAsistenciasRebotes.statsVs.game2.cover = false

odds.puntosAsistenciasRebotes.statsVs.game3.total = odds.puntos?.statsVs?.game3.total + odds.asistencias?.statsVs?.game3.total + odds.rebotes?.statsVs?.game3.total
odds.puntosAsistenciasRebotes.statsVs.game3.total > parseFloat(odds.puntosAsistenciasRebotes.line)?
odds.puntosAsistenciasRebotes.statsVs.game3.cover = true :
odds.puntosAsistenciasRebotes.statsVs.game3.cover = false

odds.puntosAsistenciasRebotes.statsVs.game4.total = odds.puntos?.statsVs?.game4.total + odds.asistencias?.statsVs?.game4.total + odds.rebotes?.statsVs?.game4.total
odds.puntosAsistenciasRebotes.statsVs.game4.total > parseFloat(odds.puntosAsistenciasRebotes.line)?
odds.puntosAsistenciasRebotes.statsVs.game4.cover = true :
odds.puntosAsistenciasRebotes.statsVs.game4.cover = false

odds.puntosAsistenciasRebotes.statsVs.game5.total = odds.puntos?.statsVs?.game5.total + odds.asistencias?.statsVs?.game5.total + odds.rebotes?.statsVs?.game5.total
odds.puntosAsistenciasRebotes.statsVs.game5.total > parseFloat(odds.puntosAsistenciasRebotes.line)?
odds.puntosAsistenciasRebotes.statsVs.game5.cover = true :
odds.puntosAsistenciasRebotes.statsVs.game5.cover = false


}
export function setCoverPuntosRebotes(odds){

odds.puntosRebotes.stats.game1.total = odds.puntos?.stats?.game1.total + odds.rebotes?.stats?.game1.total
odds.puntosRebotes.stats.game1.total > parseFloat(odds.puntosRebotes.line)?
odds.puntosRebotes.stats.game1.cover = true :
odds.puntosRebotes.stats.game1.cover = false

odds.puntosRebotes.stats.game2.total = odds.puntos?.stats?.game2.total + odds.rebotes?.stats?.game2.total
odds.puntosRebotes.stats.game2.total > parseFloat(odds.puntosRebotes.line)?
odds.puntosRebotes.stats.game2.cover = true :
odds.puntosRebotes.stats.game2.cover = false

odds.puntosRebotes.stats.game3.total = odds.puntos?.stats?.game3.total + odds.rebotes?.stats?.game3.total
odds.puntosRebotes.stats.game3.total > parseFloat(odds.puntosRebotes.line)?
odds.puntosRebotes.stats.game3.cover = true :
odds.puntosRebotes.stats.game3.cover = false

odds.puntosRebotes.stats.game4.total = odds.puntos?.stats?.game4.total + odds.rebotes?.stats?.game4.total
odds.puntosRebotes.stats.game4.total > parseFloat(odds.puntosRebotes.line)?
odds.puntosRebotes.stats.game4.cover = true :
odds.puntosRebotes.stats.game4.cover = false

odds.puntosRebotes.stats.game5.total = odds.puntos?.stats?.game5.total + odds.rebotes?.stats?.game5.total
odds.puntosRebotes.stats.game5.total > parseFloat(odds.puntosRebotes.line)?
odds.puntosRebotes.stats.game5.cover = true :
odds.puntosRebotes.stats.game5.cover = false

odds.puntosRebotes.statsVs.game1.total = odds.puntos?.statsVs?.game1.total + odds.rebotes?.statsVs?.game1.total
odds.puntosRebotes.statsVs.game1.total > parseFloat(odds.puntosRebotes.line)?
odds.puntosRebotes.statsVs.game1.cover = true :
odds.puntosRebotes.statsVs.game1.cover = false

odds.puntosRebotes.statsVs.game2.total = odds.puntos?.statsVs?.game2.total + odds.rebotes?.statsVs?.game2.total
odds.puntosRebotes.statsVs.game2.total > parseFloat(odds.puntosRebotes.line)?
odds.puntosRebotes.statsVs.game2.cover = true :
odds.puntosRebotes.statsVs.game2.cover = false

odds.puntosRebotes.statsVs.game3.total = odds.puntos?.statsVs?.game3.total + odds.rebotes?.statsVs?.game3.total
odds.puntosRebotes.statsVs.game3.total > parseFloat(odds.puntosRebotes.line)?
odds.puntosRebotes.statsVs.game3.cover = true :
odds.puntosRebotes.statsVs.game3.cover = false

odds.puntosRebotes.statsVs.game4.total = odds.puntos?.statsVs?.game4.total + odds.rebotes?.statsVs?.game4.total
odds.puntosRebotes.statsVs.game4.total > parseFloat(odds.puntosRebotes.line)?
odds.puntosRebotes.statsVs.game4.cover = true :
odds.puntosRebotes.statsVs.game4.cover = false

odds.puntosRebotes.statsVs.game5.total = odds.puntos?.statsVs?.game5.total + odds.rebotes?.statsVs?.game5.total
odds.puntosRebotes.statsVs.game5.total > parseFloat(odds.puntosRebotes.line)?
odds.puntosRebotes.statsVs.game5.cover = true :
odds.puntosRebotes.statsVs.game5.cover = false
}
export function setCoverAsistenciasRebotes(odds){
  odds.asitenciasRebotes.stats.game1.total = odds.asistencias?.stats.game1.total + odds.rebotes?.stats?.game1.total
odds.asitenciasRebotes.stats.game1.total > parseFloat(odds.asitenciasRebotes.line)?
odds.asitenciasRebotes.stats.game1.cover = true :
odds.asitenciasRebotes.stats.game1.cover = false

odds.asitenciasRebotes.stats.game2.total = odds.asistencias?.stats?.game2.total + odds.rebotes?.stats?.game2.total
odds.asitenciasRebotes.stats.game2.total > parseFloat(odds.asitenciasRebotes.line)?
odds.asitenciasRebotes.stats.game2.cover = true :
odds.asitenciasRebotes.stats.game2.cover = false

odds.asitenciasRebotes.stats.game3.total = odds.asistencias?.stats?.game3.total + odds.rebotes?.stats?.game3.total
odds.asitenciasRebotes.stats.game3.total > parseFloat(odds.asitenciasRebotes.line)?
odds.asitenciasRebotes.stats.game3.cover = true :
odds.asitenciasRebotes.stats.game3.cover = false

odds.asitenciasRebotes.stats.game4.total = odds.asistencias?.stats?.game4.total + odds.rebotes?.stats?.game4.total
odds.asitenciasRebotes.stats.game4.total > parseFloat(odds.asitenciasRebotes.line)?
odds.asitenciasRebotes.stats.game4.cover = true :
odds.asitenciasRebotes.stats.game4.cover = false

odds.asitenciasRebotes.stats.game5.total = odds.asistencias?.stats?.game5.total + odds.rebotes?.stats?.game5.total
odds.asitenciasRebotes.stats.game5.total > parseFloat(odds.asitenciasRebotes.line)?
odds.asitenciasRebotes.stats.game5.cover = true :
odds.asitenciasRebotes.stats.game5.cover = false

odds.asitenciasRebotes.statsVs.game1.total = odds.asistencias?.statsVs?.game1.total + odds.rebotes?.statsVs?.game1.total
odds.asitenciasRebotes.statsVs.game1.total > parseFloat(odds.asitenciasRebotes.line)?
odds.asitenciasRebotes.statsVs.game1.cover = true :
odds.asitenciasRebotes.statsVs.game1.cover = false

odds.asitenciasRebotes.statsVs.game2.total = odds.asistencias?.statsVs?.game2.total + odds.rebotes?.statsVs?.game2.total
odds.asitenciasRebotes.statsVs.game2.total > parseFloat(odds.asitenciasRebotes.line)?
odds.asitenciasRebotes.statsVs.game2.cover = true :
odds.asitenciasRebotes.statsVs.game2.cover = false

odds.asitenciasRebotes.statsVs.game3.total = odds.asistencias?.statsVs?.game3.total + odds.rebotes?.statsVs?.game3.total
odds.asitenciasRebotes.statsVs.game3.total > parseFloat(odds.asitenciasRebotes.line)?
odds.asitenciasRebotes.statsVs.game3.cover = true :
odds.asitenciasRebotes.statsVs.game3.cover = false

odds.asitenciasRebotes.statsVs.game4.total = odds.asistencias?.statsVs?.game4.total + odds.rebotes?.statsVs?.game4.total
odds.asitenciasRebotes.statsVs.game4.total > parseFloat(odds.asitenciasRebotes.line)?
odds.asitenciasRebotes.statsVs.game4.cover = true :
odds.asitenciasRebotes.statsVs.game4.cover = false

odds.asitenciasRebotes.statsVs.game5.total = odds.asistencias?.statsVs?.game5.total + odds.rebotes?.statsVs?.game5.total
odds.asitenciasRebotes.statsVs.game5.total > parseFloat(odds.asitenciasRebotes.line)?
odds.asitenciasRebotes.statsVs.game5.cover = true :
odds.asitenciasRebotes.statsVs.game5.cover = false
}
export function setCoverPuntosAsistencias(odds){
odds.puntosAsistencias.stats.game1.total = odds.puntos?.stats?.game1.total + odds.asistencias?.stats?.game1.total
odds.puntosAsistencias.stats.game1.total > parseFloat(odds.puntosAsistencias.line)?
odds.puntosAsistencias.stats.game1.cover = true :
odds.puntosAsistencias.stats.game1.cover = false

odds.puntosAsistencias.stats.game2.total = odds.puntos?.stats?.game2.total + odds.asistencias?.stats?.game2.total
odds.puntosAsistencias.stats.game2.total > parseFloat(odds.puntosAsistencias.line)?
odds.puntosAsistencias.stats.game2.cover = true :
odds.puntosAsistencias.stats.game2.cover = false

odds.puntosAsistencias.stats.game3.total = odds.puntos?.stats?.game3.total + odds.asistencias?.stats?.game3.total
odds.puntosAsistencias.stats.game3.total > parseFloat(odds.puntosAsistencias.line)?
odds.puntosAsistencias.stats.game3.cover = true :
odds.puntosAsistencias.stats.game3.cover = false

odds.puntosAsistencias.stats.game4.total = odds.puntos?.stats?.game4.total + odds.asistencias?.stats?.game4.total
odds.puntosAsistencias.stats.game4.total > parseFloat(odds.puntosAsistencias.line)?
odds.puntosAsistencias.stats.game4.cover = true :
odds.puntosAsistencias.stats.game4.cover = false

odds.puntosAsistencias.stats.game5.total = odds.puntos?.stats?.game5.total + odds.asistencias?.stats?.game5.total
odds.puntosAsistencias.stats.game5.total > parseFloat(odds.puntosAsistencias.line)?
odds.puntosAsistencias.stats.game5.cover = true :
odds.puntosAsistencias.stats.game5.cover = false

odds.puntosAsistencias.statsVs.game1.total = odds.puntos?.statsVs?.game1.total + odds.asistencias?.statsVs?.game1.total
odds.puntosAsistencias.statsVs.game1.total > parseFloat(odds.puntosAsistencias.line)?
odds.puntosAsistencias.statsVs.game1.cover = true :
odds.puntosAsistencias.statsVs.game1.cover = false

odds.puntosAsistencias.statsVs.game2.total = odds.puntos?.statsVs?.game2.total + odds.asistencias?.statsVs?.game2.total
odds.puntosAsistencias.statsVs.game2.total > parseFloat(odds.puntosAsistencias.line)?
odds.puntosAsistencias.statsVs.game2.cover = true :
odds.puntosAsistencias.statsVs.game2.cover = false

odds.puntosAsistencias.statsVs.game3.total = odds.puntos?.statsVs?.game3.total + odds.asistencias?.statsVs?.game3.total
odds.puntosAsistencias.statsVs.game3.total > parseFloat(odds.puntosAsistencias.line)?
odds.puntosAsistencias.statsVs.game3.cover = true :
odds.puntosAsistencias.statsVs.game3.cover = false

odds.puntosAsistencias.statsVs.game4.total = odds.puntos?.statsVs?.game4.total + odds.asistencias?.statsVs?.game4.total
odds.puntosAsistencias.statsVs.game4.total > parseFloat(odds.puntosAsistencias.line)?
odds.puntosAsistencias.statsVs.game4.cover = true :
odds.puntosAsistencias.statsVs.game4.cover = false

odds.puntosAsistencias.statsVs.game5.total = odds.puntos?.statsVs?.game5.total + odds.asistencias?.statsVs?.game5.total
odds.puntosAsistencias.statsVs.game5.total > parseFloat(odds.puntosAsistencias.line)?
odds.puntosAsistencias.statsVs.game5.cover = true :
odds.puntosAsistencias.statsVs.game5.cover = false
}

