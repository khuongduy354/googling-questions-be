const scrapeableGoogling = require("./googling");
jest.setTimeout(13000);
test("Test if googling return 1 link", () => {
  const testSearchContent = "Cảm ứng ở động vật là";
  const resultLink =
    "https://hoc247.net/cau-hoi-cam-ung-o-dong-vat-la--qid24113.html";
  return scrapeableGoogling(testSearchContent).then((data) =>
    expect(data).toEqual(resultLink)
  );
});
