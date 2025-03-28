export function setLastFivePuntos(odds, last) {
   
    odds.puntos.stats = {};
    odds.puntos.stats.game1 = {
      date: last.game1.date,
      min: parseInt(last.game1.min, 10),
      total: parseInt(last.game1.pts, 10),
    };
    odds.puntos.stats.game2 = {
      date: last.game2.date,
      min: parseInt(last.game2.min, 10),
      total: parseInt(last.game2.pts, 10),
    };
    odds.puntos.stats.game3 = {
      date: last.game3.date,
      min: parseInt(last.game3.min, 10),
      total: parseInt(last.game3.pts, 10),
    };
    odds.puntos.stats.game4 = {
      date: last.game4.date,
      min: parseInt(last.game4.min, 10),
      total: parseInt(last.game4.pts, 10),
    };
    odds.puntos.stats.game5 = {
      date: last.game5.date,
      min: parseInt(last.game5.min, 10),
      total: parseInt(last.game5.pts, 10),
    };
    
}
export function setLastFivePuntosVs(odds, lsVs) {
    odds.puntos.statsVs = {};
  
    odds.puntos.statsVs.game1 = {
      date: lsVs?.game1.date,
      min: parseInt(lsVs?.game1?.min, 10),
      total: parseInt(lsVs?.game1?.pts, 10),
    };
    odds.puntos.statsVs.game2 = {
      date: lsVs?.game2?.date,
      min: parseInt(lsVs?.game2?.min, 10),
      total: parseInt(lsVs?.game2?.pts, 10),
    };
    odds.puntos.statsVs.game3 = {
      date: lsVs?.game3?.date,
      min: parseInt(lsVs?.game3?.min, 10),
      total: parseInt(lsVs?.game3?.pts, 10),
    };
  
    odds.puntos.statsVs.game4 = {
      date: lsVs?.game4?.date,
      min: parseInt(lsVs?.game4?.min, 10),
      total: parseInt(lsVs?.game4?.pts, 10),
    };
    odds.puntos.statsVs.game5 = {
      date: lsVs?.game5?.date,
      min: parseInt(lsVs?.game5?.min, 10),
      total: parseInt(lsVs?.game5?.pts, 10),
    };
}
export function setCoverPuntos(odds) {
    odds.puntos.stats.game1.total > parseFloat(odds.puntos.line)
      ? (odds.puntos.stats.game1.cover = true)
      : (odds.puntos.stats.game1.cover = false);
    odds.puntos.stats.game2.total > parseFloat(odds.puntos.line)
      ? (odds.puntos.stats.game2.cover = true)
      : (odds.puntos.stats.game2.cover = false);
    odds.puntos.stats.game3.total > parseFloat(odds.puntos.line)
      ? (odds.puntos.stats.game3.cover = true)
      : (odds.puntos.stats.game3.cover = false);
    odds.puntos.stats.game4.total > parseFloat(odds.puntos.line)
      ? (odds.puntos.stats.game4.cover = true)
      : (odds.puntos.stats.game4.cover = false);
    odds.puntos.stats.game5.total > parseFloat(odds.puntos.line)
      ? (odds.puntos.stats.game5.cover = true)
      : (odds.puntos.stats.game5.cover = false);
  
    odds.puntos.statsVs.game1.total > parseFloat(odds.puntos.line)
      ? (odds.puntos.statsVs.game1.cover = true)
      : (odds.puntos.statsVs.game1.cover = false);
    odds.puntos.statsVs.game2.total > parseFloat(odds.puntos.line)
      ? (odds.puntos.statsVs.game2.cover = true)
      : (odds.puntos.statsVs.game2.cover = false);
    odds.puntos.statsVs.game3.total > parseFloat(odds.puntos.line)
      ? (odds.puntos.statsVs.game3.cover = true)
      : (odds.puntos.statsVs.game3.cover = false);
    odds.puntos.statsVs.game4.total > parseFloat(odds.puntos.line)
      ? (odds.puntos.statsVs.game4.cover = true)
      : (odds.puntos.statsVs.game4.cover = false);
    odds.puntos.statsVs.game5.total > parseFloat(odds.puntos.line)
      ? (odds.puntos.statsVs.game5.cover = true)
      : (odds.puntos.statsVs.game5.cover = false);
  }
export function setLastFiveMayorPuntos(odds) {
    odds.mayorPuntos.stats = {};
    odds.mayorPuntos.stats.game1 = {};
    odds.mayorPuntos.stats.game2 = {};
    odds.mayorPuntos.stats.game3 = {};
    odds.mayorPuntos.stats.game4 = {};
    odds.mayorPuntos.stats.game5 = {};
    
}
export function setLastFiveMayorPuntosVs(odds) {
    odds.mayorPuntos.statsVs = {};
  
    odds.mayorPuntos.statsVs.game1 = {};
    odds.mayorPuntos.statsVs.game2 = {};
    odds.mayorPuntos.statsVs.game3 = {};
    odds.mayorPuntos.statsVs.game4 = {};
    odds.mayorPuntos.statsVs.game5 = {};
}
export function setCoverMayorPuntos(odds) {
  odds.puntos?.stats.game1.total > parseFloat(odds.mayorPuntos.line)
    ? (odds.mayorPuntos.stats.game1.cover = true)
    : (odds.mayorPuntos.stats.game1.cover = false);
  odds.puntos?.stats.game2.total > parseFloat(odds.mayorPuntos.line)
    ? (odds.mayorPuntos.stats.game2.cover = true)
    : (odds.mayorPuntos.stats.game2.cover = false);
  odds.puntos?.stats.game3.total > parseFloat(odds.mayorPuntos.line)
    ? (odds.mayorPuntos.stats.game3.cover = true)
    : (odds.mayorPuntos.stats.game3.cover = false);
  odds.puntos?.stats.game4.total > parseFloat(odds.mayorPuntos.line)
    ? (odds.mayorPuntos.stats.game4.cover = true)
    : (odds.mayorPuntos.stats.game4.cover = false);
  odds.puntos?.stats.game5.total > parseFloat(odds.mayorPuntos.line)
    ? (odds.mayorPuntos.stats.game5.cover = true)
    : (odds.mayorPuntos.stats.game5.cover = false);
  
  odds.puntos?.statsVs.game1.total > parseFloat(odds.mayorPuntos.line)
    ? (odds.mayorPuntos.statsVs.game1.cover = true)
    : (odds.mayorPuntos.statsVs.game1.cover = false);
  odds.puntos?.statsVs.game2.total > parseFloat(odds.mayorPuntos.line)
    ? (odds.mayorPuntos.statsVs.game2.cover = true)
    : (odds.mayorPuntos.statsVs.game2.cover = false);
  odds.puntos?.statsVs.game3.total > parseFloat(odds.mayorPuntos.line)
    ? (odds.mayorPuntos.statsVs.game3.cover = true)
    : (odds.mayorPuntos.statsVs.game3.cover = false);
  odds.puntos?.statsVs.game4.total > parseFloat(odds.mayorPuntos.line)
    ? (odds.mayorPuntos.statsVs.game4.cover = true)
    : (odds.mayorPuntos.statsVs.game4.cover = false);
  odds.puntos?.statsVs.game5.total > parseFloat(odds.mayorPuntos.line)
    ? (odds.mayorPuntos.statsVs.game5.cover = true)
    : (odds.mayorPuntos.statsVs.game5.cover = false);
  }
  
export function setLastFiveMenorPuntos(odds) {
    odds.menorPuntos.stats = {};
    odds.menorPuntos.stats.game1 = {};
    odds.menorPuntos.stats.game2 = {};
    odds.menorPuntos.stats.game3 = {};
    odds.menorPuntos.stats.game4 = {};
    odds.menorPuntos.stats.game5 = {};
}
export function setLastFiveMenorPuntosVs(odds) {
    odds.menorPuntos.statsVs = {};
  
    odds.menorPuntos.statsVs.game1 = {};
    odds.menorPuntos.statsVs.game2 = {};
    odds.menorPuntos.statsVs.game3 = {};
    odds.menorPuntos.statsVs.game4 = {};
    odds.menorPuntos.statsVs.game5 = {};
}
export function setCoverMenorPuntos(odds) {
    odds.puntos?.stats.game1.total > parseFloat(odds.menorPuntos.line)
      ? (odds.menorPuntos.stats.game1.cover = true)
      : (odds.menorPuntos.stats.game1.cover = false);
    odds.puntos?.stats.game2.total > parseFloat(odds.menorPuntos.line)
      ? (odds.menorPuntos.stats.game2.cover = true)
      : (odds.menorPuntos.stats.game2.cover = false);
    odds.puntos?.stats.game3.total > parseFloat(odds.menorPuntos.line)
      ? (odds.menorPuntos.stats.game3.cover = true)
      : (odds.menorPuntos.stats.game3.cover = false);
    odds.puntos?.stats.game4.total > parseFloat(odds.menorPuntos.line)
      ? (odds.menorPuntos.stats.game4.cover = true)
      : (odds.menorPuntos.stats.game4.cover = false);
    odds.puntos?.stats.game5.total > parseFloat(odds.menorPuntos.line)
      ? (odds.menorPuntos.stats.game5.cover = true)
      : (odds.menorPuntos.stats.game5.cover = false);
  
    odds.puntos?.statsVs.game1.total > parseFloat(odds.menorPuntos.line)
      ? (odds.menorPuntos.statsVs.game1.cover = true)
      : (odds.menorPuntos.statsVs.game1.cover = false);
    odds.puntos?.statsVs.game2.total > parseFloat(odds.menorPuntos.line)
      ? (odds.menorPuntos.statsVs.game2.cover = true)
      : (odds.menorPuntos.statsVs.game2.cover = false);
    odds.puntos?.statsVs.game3.total > parseFloat(odds.menorPuntos.line)
      ? (odds.menorPuntos.statsVs.game3.cover = true)
      : (odds.menorPuntos.statsVs.game3.cover = false);
    odds.puntos?.statsVs.game4.total > parseFloat(odds.menorPuntos.line)
      ? (odds.menorPuntos.statsVs.game4.cover = true)
      : (odds.menorPuntos.statsVs.game4.cover = false);
    odds.puntos?.statsVs.game5.total > parseFloat(odds.menorPuntos.line)
      ? (odds.menorPuntos.statsVs.game5.cover = true)
      : (odds.menorPuntos.statsVs.game5.cover = false);
  }
  