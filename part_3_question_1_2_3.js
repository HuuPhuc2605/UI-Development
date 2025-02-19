// Hàm tính điểm trung bình của một đội
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
  }
  
  // Hàm xác định đội chiến thắng theo các quy tắc đã cho
  function determineWinner(dolphinsAvg, koalasAvg) {
    dolphinsAvg = dolphinsAvg.toFixed(2);
    koalasAvg = koalasAvg.toFixed(2);
  
    if (dolphinsAvg >= 100 || koalasAvg >= 100) {
      if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log(`🏆 Đội Dolphins giành cúp với điểm trung bình là ${dolphinsAvg}!`);
      } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log(`🏆 Đội Koalas giành cúp với điểm trung bình là ${koalasAvg}!`);
      } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log(`🤝 Trận đấu hòa! Cả hai đội đều có điểm trung bình là ${dolphinsAvg}.`);
      } else {
        console.log("❌ Không có đội nào giành cúp do điểm số không đủ.");
      }
    } else {
      console.log("❌ Không có đội nào giành cúp do điểm số không đủ.");
    }
  }
  
  // Dữ liệu kiểm tra 1
  console.log("📊 Dữ liệu kiểm tra 1:");
  let dolphinsAvg1 = calculateAverage(96, 108, 89);
  let koalasAvg1 = calculateAverage(88, 91, 110);
  determineWinner(dolphinsAvg1, koalasAvg1);
  
  // Dữ liệu kiểm tra bổ sung 1
  console.log("\n📊 Dữ liệu kiểm tra bổ sung 1:");
  let dolphinsAvgBonus1 = calculateAverage(97, 112, 101);
  let koalasAvgBonus1 = calculateAverage(109, 95, 123);
  determineWinner(dolphinsAvgBonus1, koalasAvgBonus1);
  
  // Dữ liệu kiểm tra bổ sung 2
  console.log("\n📊 Dữ liệu kiểm tra bổ sung 2:");
  let dolphinsAvgBonus2 = calculateAverage(97, 112, 101);
  let koalasAvgBonus2 = calculateAverage(109, 95, 106);
  determineWinner(dolphinsAvgBonus2, koalasAvgBonus2);
  