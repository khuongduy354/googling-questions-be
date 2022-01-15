# Google câu hỏi đề cương - Nodejs API

### Một công cụ đơn giản để search hàng loạt câu hỏi từ một file docx

<br>

# Usage

## Gửi file

```javascript
//Dùng Formdata để gửi file
const form = new FormData();
form.append("file", file);
//file lấy từ <input type="file"/>
form.append("keyword", keyword.current.value);
//từ khóa nhập vào: Câu, Question, ...
const header = { "Content-Type": "multipart/form-data" };
axios.post(url, form, header);
```

Có 2 endpoints:

## 1. Format docx

**Chuyển từ file docx có câu hỏi sang array of urls**
<br>

- Request:

```
http://localhost:8000/format-doc
POST
Parameters: keyword và file
```

- Response:

```json
{
  "questionList": [
    "https://google.com/search?q=question1",
    "https://google.com/search?q=question2",
    "https://google.com/search?q=question3",
    "https://google.com/search?q=question4"
  ]
}
```

<br>

## 2. Scrape từ file docx (EXPERIMENTAL)

**Chuyển từ file docx có câu hỏi sang một array gồm đáp án gợi ý từ những câu hỏi đó**
<br>

- Request:

```
http://localhost:8000/scrape-result
POST
Parameters: keyword và file
```

- Response:

```json
{
  "solutionList": [
    {
      "questionId": 0,
      "originalQuestion": "Hệ thần kinh của côn trùng có các loại hạch nào sau đây?",
      "scrapeLink": "https://hoc247.net/cau-hoi-he-than-kinh-cua-con-trung-co-cac-loai-hach-nao-sau-day-qid288806.html",
      "searchLink": "https://www.google.com/search?q=H%E1%BB%87%20th%E1%BA%A7n%20kinh%20c%E1%BB%A7a%20c%C3%B4n%20tr%C3%B9ng%20c%C3%B3%20c%C3%A1c%20lo%E1%BA%A1i%20h%E1%BA%A1ch%20n%C3%A0o%20sau%20%C4%91%C3%A2y?",
      "content": {
        "correct": "D",
        "options": [
          "hạch ngực, hạch lưng",
          "hạch thân, hạch lưng",
          "hạch bụng, hạch lưng",
          "hạch ngực, hạch bụng"
        ],
        "explain": "Hệ thần kinh của côn trùng gồm hạch đầu, hạch ngực, hạch bụng"
      }
    }
  ]
```

### Trong file .docx

<img src="https://i.ibb.co/w7mZV4F/image.png" alt="image">

### File đề cương sẽ có dạng:

Câu 1:...., Câu 2:..., hay Question 1:...,Question 2:...

- có dấu cách giữa "Câu" và số
- từ "Câu" có thể thay tùy ý (**keyword** trong request): "Question", "Sentence",... nhưng khuyến khích dùng từ nào mà không gặp lại trong câu hỏi và đáp án

**Lưu ý**

- Chỉ nhận file .docx
- Tính năng Auto Scrape đang thử nghiệm

# Bugs & Issues

- Nhảy vô hoc247 mà ko có trắc nghiệm đó (SCRAPE)
- Dính captcha khi scrape (SCRAPE)
- Không biết cách test file docx như nào
- Không hỗ trợ định dạng khác ngoài docx (kể cả doc)

# Dự định

- Reimplement scrapeSite for extendable scrape sites
- Redis
- Deploy
