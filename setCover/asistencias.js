export function setLastFiveAsistencias(odds, last) {
    console.log(last?.game1.ast, "ast 2")
    odds.asistencias.stats = {};
    odds.asistencias.stats.game1 = {
      date: last?.game1?.date,
      min: parseInt(last?.game1.min, 10),
      total: parseInt(last?.game1.ast, 10),
    };
    odds.asistencias.stats.game2 = {
      date: last?.game2?.date,
      min: parseInt(last?.game2.min, 10),
      total: parseInt(last?.game2.ast, 10),
    };
    odds.asistencias.stats.game3 = {
      date: last?.game3.date,
      min: parseInt(last?.game3.min, 10),
      total: parseInt(last?.game3.ast, 10),
    };
    odds.asistencias.stats.game4 = {
      date: last?.game4.date,
      min: parseInt(last?.game4.min, 10),
      total: parseInt(last?.game4.ast, 10),
    };
    odds.asistencias.stats.game5 = {
      date: last?.game5.date,
      min: parseInt(last?.game5.min, 10),
      total: parseInt(last?.game5.ast, 10),
    };
  }
  export function setLastFiveAsistenciasVs(odds, lsVs) {
    
    odds.asistencias.statsVs = {};
    odds.asistencias.statsVs.game1 = {
      date: lsVs?.game1.date,
      min: parseInt(lsVs?.game1.min, 10),
      total: parseInt(lsVs?.game1.ast, 10),
    };
    odds.asistencias.statsVs.game2 = {
      date: lsVs?.game2?.date,
      min: parseInt(lsVs?.game2?.min, 10),
      total: parseInt(lsVs?.game2?.ast, 10),
    };
    odds.asistencias.statsVs.game3 = {
      date: lsVs?.game3?.date,
      min: parseInt(lsVs?.game3?.min, 10),
      total: parseInt(lsVs?.game3?.ast, 10),
    };
    odds.asistencias.statsVs.game4 = {
      date: lsVs?.game4?.date,
      min: parseInt(lsVs?.game4?.min, 10),
      total: parseInt(lsVs?.game4?.ast, 10),
    };
    odds.asistencias.statsVs.game5 = {
      date: lsVs?.game5?.date,
      min: parseInt(lsVs?.game5?.min, 10),
      total: parseInt(lsVs?.game5?.ast, 10),
    };
  }
  export function setCoverAsistencias(odds) {
    odds.asistencias.stats.game1.total > parseFloat(odds.asistencias.line)
      ? (odds.asistencias.stats.game1.cover = true)
      : (odds.asistencias.stats.game1.cover = false);
    odds.asistencias.stats.game2.total > parseFloat(odds.asistencias.line)
      ? (odds.asistencias.stats.game2.cover = true)
      : (odds.asistencias.stats.game2.cover = false);
    odds.asistencias.stats.game3.total > parseFloat(odds.asistencias.line)
      ? (odds.asistencias.stats.game3.cover = true)
      : (odds.asistencias.stats.game3.cover = false);
    odds.asistencias.stats.game4.total > parseFloat(odds.asistencias.line)
      ? (odds.asistencias.stats.game4.cover = true)
      : (odds.asistencias.stats.game4.cover = false);
    odds.asistencias.stats.game5.total > parseFloat(odds.asistencias.line)
      ? (odds.asistencias.stats.game5.cover = true)
      : (odds.asistencias.stats.game5.cover = false);
  
    odds.asistencias.statsVs.game1.total > parseFloat(odds.asistencias.line)
      ? (odds.asistencias.statsVs.game1.cover = true)
      : (odds.asistencias.statsVs.game1.cover = false);
    odds.asistencias.statsVs.game2.total > parseFloat(odds.asistencias.line)
      ? (odds.asistencias.statsVs.game2.cover = true)
      : (odds.asistencias.statsVs.game2.cover = false);
    odds.asistencias.statsVs.game3.total > parseFloat(odds.asistencias.line)
      ? (odds.asistencias.statsVs.game3.cover = true)
      : (odds.asistencias.statsVs.game3.cover = false);
    odds.asistencias.statsVs.game4.total > parseFloat(odds.asistencias.line)
      ? (odds.asistencias.statsVs.game4.cover = true)
      : (odds.asistencias.statsVs.game4.cover = false);
    odds.asistencias.statsVs.game5.total > parseFloat(odds.asistencias.line)
      ? (odds.asistencias.statsVs.game5.cover = true)
      : (odds.asistencias.statsVs.game5.cover = false); 
  }