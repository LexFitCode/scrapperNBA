export function setLastFiveRebotes(odds, last) {
    odds.rebotes.stats = {};
    odds.rebotes.stats.game1 = {
      date: last.game1.date,
      min: parseInt(last.game1.min, 10),
      total: parseInt(last.game1.reb, 10),
    };
    odds.rebotes.stats.game2 = {
      date: last.game2.date,
      min: parseInt(last.game2.min, 10),
      total: parseInt(last.game2.reb, 10),
    };
    odds.rebotes.stats.game3 = {
      date: last.game3.date,
      min: parseInt(last.game3.min, 10),
      total: parseInt(last.game3.reb, 10),
    };
    odds.rebotes.stats.game4 = {
      date: last.game4.date,
      min: parseInt(last.game4.min, 10),
      total: parseInt(last.game4.reb, 10),
    };
    odds.rebotes.stats.game5 = {
      date: last.game5.date,
      min: parseInt(last.game5.min, 10),
      total: parseInt(last.game5.reb, 10),
    };
  }
  export function setLastFiveRebotesVs(odds, lsVs) {
    odds.rebotes.statsVs = {};
    odds.rebotes.statsVs.game1 = {
      date: lsVs?.game1.date,
      min: parseInt(lsVs?.game1.min, 10),
      total: parseInt(lsVs?.game1.reb, 10),
    };
    odds.rebotes.statsVs.game2 = {
      date: lsVs?.game2?.date,
      min: parseInt(lsVs?.game2?.min, 10),
      total: parseInt(lsVs?.game2?.reb, 10),
    };
    odds.rebotes.statsVs.game3 = {
      date: lsVs?.game3?.date,
      min: parseInt(lsVs?.game3?.min, 10),
      total: parseInt(lsVs?.game3?.reb, 10),
    };
    odds.rebotes.statsVs.game4 = {
      date: lsVs?.game4?.date,
      min: parseInt(lsVs?.game4?.min, 10),
      total: parseInt(lsVs?.game4?.reb, 10),
    };
    odds.rebotes.statsVs.game5 = {
      date: lsVs?.game5?.date,
      min: parseInt(lsVs?.game5?.min, 10),
      total: parseInt(lsVs?.game5?.reb, 10),
    };
  
  }

  export function setCoverRebotes(odds) {
    odds.rebotes.stats.game1.total > parseFloat(odds.rebotes.line)
      ? (odds.rebotes.stats.game1.cover = true)
      : (odds.rebotes.stats.game1.cover = false);
    odds.rebotes.stats.game2.total > parseFloat(odds.rebotes.line)
      ? (odds.rebotes.stats.game2.cover = true)
      : (odds.rebotes.stats.game2.cover = false);
    odds.rebotes.stats.game3.total > parseFloat(odds.rebotes.line)
      ? (odds.rebotes.stats.game3.cover = true)
      : (odds.rebotes.stats.game3.cover = false);
    odds.rebotes.stats.game4.total > parseFloat(odds.rebotes.line)
      ? (odds.rebotes.stats.game4.cover = true)
      : (odds.rebotes.stats.game4.cover = false);
    odds.rebotes.stats.game5.total > parseFloat(odds.rebotes.line)
      ? (odds.rebotes.stats.game5.cover = true)
      : (odds.rebotes.stats.game5.cover = false);
  
    odds.rebotes.statsVs.game1.total > parseFloat(odds.rebotes.line)
      ? (odds.rebotes.statsVs.game1.cover = true)
      : (odds.rebotes.statsVs.game1.cover = false);
    odds.rebotes.statsVs.game2.total > parseFloat(odds.rebotes.line)
      ? (odds.rebotes.statsVs.game2.cover = true)
      : (odds.rebotes.statsVs.game2.cover = false);
    odds.rebotes.statsVs.game3.total > parseFloat(odds.rebotes.line)
      ? (odds.rebotes.statsVs.game3.cover = true)
      : (odds.rebotes.statsVs.game3.cover = false);
    odds.rebotes.statsVs.game4.total > parseFloat(odds.rebotes.line)
      ? (odds.rebotes.statsVs.game4.cover = true)
      : (odds.rebotes.statsVs.game4.cover = false);
    odds.rebotes.statsVs.game5.total > parseFloat(odds.rebotes.line)
      ? (odds.rebotes.statsVs.game5.cover = true)
      : (odds.rebotes.statsVs.game5.cover = false)
  }