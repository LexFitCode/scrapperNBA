export function setLastFiveTriples(odds, last) {
    if(odds.triples !== undefined){
      odds.triples.stats = {};
      odds.triples.stats.game1 = {
        date: last.game1.date,
        min: parseInt(last.game1.min, 10),
        total: parseInt(last.game1.tpm, 10),
      };
      odds.triples.stats.game2 = {
        date: last.game2.date,
        min: parseInt(last.game2.min, 10),
        total: parseInt(last.game2.tpm, 10),
      };
      odds.triples.stats.game3 = {
        date: last.game3.date,
        min: parseInt(last.game3.min, 10),
        total: parseInt(last.game3.tpm, 10),
      };
      odds.triples.stats.game4 = {
        date: last.game4.date,
        min: parseInt(last.game4.min, 10),
        total: parseInt(last.game4.tpm, 10),
      };
      odds.triples.stats.game5 = {
        date: last.game5.date,
        min: parseInt(last.game5.min, 10),
        total: parseInt(last.game5.tpm, 10),
      };
    
      
    }
}
export function setLastFiveTriplesVs(odds, lsVs) {
        if(odds.triples !== undefined){
          odds.triples.statsVs = {};
          odds.triples.statsVs.game1 = {
            date: lsVs?.game1.date,
            min: parseInt(lsVs?.game1.min, 10),
            total: parseInt(lsVs?.game1.tpm, 10),
          };
          odds.triples.statsVs.game2 = {
            date: lsVs?.game2?.date,
            min: parseInt(lsVs?.game2?.min, 10),
            total: parseInt(lsVs?.game2?.tpm, 10),
          };
          odds.triples.statsVs.game3 = {
            date: lsVs?.game3?.date,
            min: parseInt(lsVs?.game3?.min, 10),
            total: parseInt(lsVs?.game3?.tpm, 10),
          };
          odds.triples.statsVs.game4 = {
            date: lsVs?.game4?.date,
            min: parseInt(lsVs?.game4?.min, 10),
            total: parseInt(lsVs?.game4?.tpm, 10),
          };
          odds.triples.statsVs.game5 = {
            date: lsVs?.game5?.date,
            min: parseInt(lsVs?.game5?.min, 10),
            total: parseInt(lsVs?.game5?.tpm, 10),
          };
          }
        }
        export function setCoverTriples(odds) {
          if(odds.triples !== undefined){
            odds.triples.stats.game1.total > parseFloat(odds.triples.line)
            ? (odds.triples.stats.game1.cover = true)
            : (odds.triples.stats.game1.cover = false);
            odds.triples.stats.game2.total > parseFloat(odds.triples.line)
            ? (odds.triples.stats.game2.cover = true)
            : (odds.triples.stats.game2.cover = false);
            odds.triples.stats.game3.total > parseFloat(odds.triples.line)
            ? (odds.triples.stats.game3.cover = true)
            : (odds.triples.stats.game3.cover = false);
            odds.triples.stats.game4.total > parseFloat(odds.triples.line)
            ? (odds.triples.stats.game4.cover = true)
            : (odds.triples.stats.game4.cover = false);
            odds.triples.stats.game5.total > parseFloat(odds.triples.line)
            ? (odds.triples.stats.game5.cover = true)
            : (odds.triples.stats.game5.cover = false);
            
            odds.triples.statsVs.game1.total > parseFloat(odds.triples.line)
            ? (odds.triples.statsVs.game1.cover = true)
            : (odds.triples.statsVs.game1.cover = false);
            odds.triples.statsVs.game2.total > parseFloat(odds.triples.line)
            ? (odds.triples.statsVs.game2.cover = true)
            : (odds.triples.statsVs.game2.cover = false);
            odds.triples.statsVs.game3.total > parseFloat(odds.triples.line)
            ? (odds.triples.statsVs.game3.cover = true)
            : (odds.triples.statsVs.game3.cover = false);
            odds.triples.statsVs.game4.total > parseFloat(odds.triples.line)
            ? (odds.triples.statsVs.game4.cover = true)
            : (odds.triples.statsVs.game4.cover = false);
            odds.triples.statsVs.game5.total > parseFloat(odds.triples.line)
            ? (odds.triples.statsVs.game5.cover = true)
            : (odds.triples.statsVs.game5.cover = false);
          }
          
          }