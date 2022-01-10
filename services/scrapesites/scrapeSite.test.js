const scrapeSite = require("./scrapeSite");
test("Test scrapeSite return solution list", () => {
  const questionList = [
    "Cảm ứng ở động vật là khả năng tiếp nhận kích thích và",
    "Hệ thần kinh của côn trùng có các loại hạch nào sau đây?",
    "Ở động vật có hệ thần kinh dạng ống, cấu trúc của não bộ gồm các bộ phận là:",
  ];
  scrapeSite(questionList).then((data) => console.log(data));
});
