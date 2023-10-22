module.exports = {
  getGlobalIndexTableDatas:
    { query: "SELECT    USD_KRW as 'USD/KRW', \
                        CNY_KRW as 'CNY/KRW', \
                        HKD_KRW as 'HKD/KRW', \
                        SGD_KRW as 'SGD/KRW', \
                        BRKR    as 'Basis (KR)', \
                        BRUS    as 'Basis (US)', \
                        SPX     as 'S&P 500', \
                        DJI     as 'DOW JONES', \
                        KOSPI, NASDAQ \
              FROM      Global_Index_Table \
              ORDER BY  Date" },
  getBalanceSheetPerYear:
    { query: "SELECT    Y, \
                        CshEqv, StInvst, CshEqv+StInvst AS CAst, NCAst, CshEqv+StInvst+NCAst AS TAst, \
                        CLbt, NCLbt, CLbt+NCLbt AS TLbt, \
                        Cptl, RE, AccmComp, Cptl+RE+AccmComp AS TEqt, \
                        CLbt+NCLbt+Cptl+RE+AccmComp AS SumLbtEqt \
              FROM      Balance_Sheet_Table \
              WHERE     (Y < ? AND Y > ? AND Q = 4) OR (Y = ? AND Q = ?) \
              ORDER BY  Y DESC" },
  getBalanceSheetPerQuarter: 
    { query: "SELECT    Q, \
                        CshEqv, StInvst, CshEqv+StInvst AS CAst, NCAst, CshEqv+StInvst+NCAst AS TAst, \
                        CLbt, NCLbt, CLbt+NCLbt AS TLbt, \
                        Cptl, RE, AccmComp, Cptl+RE+AccmComp AS TEqt, \
                        CLbt+NCLbt+Cptl+RE+AccmComp AS SumLbtEqt \
              FROM      Balance_Sheet_Table \
              WHERE     Y = ? \
              ORDER BY  Q DESC" }

}