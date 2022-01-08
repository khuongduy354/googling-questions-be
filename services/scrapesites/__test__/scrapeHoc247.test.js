const scrapeHoc247 = require("../scrapeHoc247");

test("Test scrape results for hoc247.com", () => {
  const testURL =
    "https://hoc247.net/cau-hoi-cam-ung-o-dong-vat-la--qid24113.html";
  explain =
    "Cảm ứng ở động vật là khả năng tiếp nhận kích thích và phản ứng lại các kích thích từ môi trường sống đảm báo cho sinh vật tồn tại và phát triển. ";
  correct = "D";
  options = {
    A: "Phản xạ có điều kiện",
    B: "Phản ứng của cơ thể thông qua hệ thần kinh trả lời lại kích thích bên ngoài hoặc bên trong cơ thể",
    C: "Phản xạ không điều kiện",
    D: "Khả năng tiếp nhận kích thích và phản ứng lại các kích thích từ môi trường sống đảm báo cho sinh vật tồn tại và phát triển",
  };
  expect(scrapeHoc247(testURL)).tobe({ explain, correct, options });
});
