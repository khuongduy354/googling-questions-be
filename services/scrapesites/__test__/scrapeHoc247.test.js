const scrapeHoc247 = require("../scrapeHoc247");

test("Test scrape results for hoc247.com", () => {
  const testURL =
    "https://hoc247.net/cau-hoi-cam-ung-o-dong-vat-la--qid24113.html";
  explain =
    "Cảm ứng ở động vật là khả năng tiếp nhận kích thích và phản ứng lại các kích thích từ môi trường sống đảm báo cho sinh vật tồn tại và phát triển.";
  correct = "D";
  options = [
    "Phản xạ có điều kiện",
    "Phản ứng của cơ thể thông qua hệ thần kinh trả lời lại kích thích bên ngoài hoặc bên trong cơ thể",
    "Phản xạ không điều kiện",
    "Khả năng tiếp nhận kích thích và phản ứng lại các kích thích từ môi trường sống đảm báo cho sinh vật tồn tại và phát triển",
  ];
  scrapeHoc247(testURL).then((data) =>
    expect(data).toEqual({ correct, options, explain })
  );
});
