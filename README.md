<div align="center">

# RosieAVYTRIX Project Brief
### Ý tưởng tốt. Khởi đầu rõ ràng.

Công cụ tạo project brief dành cho cuộc trao đổi đầu tiên giữa chủ dự án và đối tác triển khai.

**[Dùng thử ngay](https://avytrix-project-brief.phuongleproea.chatgpt.site)** · [Đề xuất hợp tác](https://github.com/RosieAVYTRIX/RosieAVYTRIX/issues/new)

</div>

> Demo portfolio do RosieAVYTRIX khởi tạo, phát triển với sự hỗ trợ của Codex. Đây là bản thử nghiệm sản phẩm, chưa phải dự án khách hàng hoặc bằng chứng kết quả kinh doanh.

## Bài toán

Một ý tưởng ban đầu thường thiếu đối tượng sử dụng, phạm vi và tiêu chí nghiệm thu. Project Brief gom các quyết định này vào một trang có thể chỉnh sửa và chia sẻ, giúp hai bên bắt đầu cuộc trao đổi với cùng một đề bài.

## Dùng thử trong 60 giây

1. Chọn **Khám phá brief mẫu** để xem ví dụ.
2. Đổi tên dự án, mục tiêu, đối tượng sử dụng và phạm vi MVP.
3. Quan sát bản xem trước và lộ trình thay đổi ngay.
4. Chọn **Tải brief .md** hoặc **Sao chép** để chia sẻ với đối tác.

## Nhận diện thương hiệu

Tên giao diện, nội dung xuất và liên kết GitHub đã đồng bộ thành **RosieAVYTRIX**. URL hosting và khóa lưu nháp được giữ để các bản nháp hiện có tiếp tục sử dụng.

## Tính năng

- Xem trước trực tiếp, không cần tài khoản hoặc API key.
- Bốn loại dự án; khung thời gian 2, 4, 6 hoặc 8 tuần.
- Chọn phạm vi MVP và ghi tiêu chí nghiệm thu.
- Lộ trình gợi ý gồm khám phá, thiết kế, xây dựng và kiểm thử.
- Lưu nháp bằng localStorage; nạp lại khi quay lại cùng trình duyệt.
- Xuất Markdown, sao chép văn bản và bố cục in riêng.
- Giao diện responsive, nhãn biểu mẫu và thông báo trạng thái hỗ trợ công nghệ trợ giúp.

## Chạy trên máy

Yêu cầu Python 3; Node.js 18 trở lên chỉ cần cho kiểm tra tự động.

```bash
git clone https://github.com/RosieAVYTRIX/avytrix-project-brief.git
cd avytrix-project-brief
python3 -m http.server 4173 --directory dist
```

Mở http://localhost:4173. Không mở trực tiếp file HTML vì trình duyệt cần HTTP để tải ES modules.

```bash
npm test
```

Không cần `npm install`: ứng dụng và các kiểm tra không dùng thư viện JavaScript bên ngoài.

## Cấu trúc & quyết định kỹ thuật

```text
dist/
  index.html       Giao diện và cấu trúc nội dung
  style.css        Hệ thống thiết kế, responsive và bản in
  app.js           Tương tác, lưu nháp, tải và sao chép
  brief.js         Dữ liệu mẫu, lộ trình và xuất Markdown
tests/
  brief.test.js    Kiểm tra lộ trình và nội dung xuất
```

Dùng HTML/CSS/JavaScript thuần để bản demo gọn, dễ đọc và triển khai trên static hosting. Logic tạo brief tách riêng khỏi DOM để có thể kiểm tra độc lập. Nội dung người dùng được hiển thị qua textContent, không chèn HTML.

## Dữ liệu & giới hạn

- Nội dung biểu mẫu không gửi tới máy chủ; nháp lưu trên thiết bị, không đồng bộ giữa các máy.
- Font tải từ Google Fonts; khi không có mạng sẽ dùng font hệ thống.
- Xóa dữ liệu trình duyệt có thể làm mất nháp. Tải Markdown để giữ bản sao.
- Lộ trình là gợi ý dựa trên 5 ngày làm việc/tuần, chưa xét ngày lễ, nguồn lực, độ phức tạp hay phụ thuộc. Không phải báo giá hoặc cam kết thời hạn.
- Chưa có backend nhận lead, xác thực, cộng tác nhiều người hoặc AI sinh nội dung.
- Mẫu minh họa không đại diện khách hàng hoặc hợp đồng thực tế.

## Kiểm chứng

Ba kiểm tra tự động bao phủ lộ trình không bị hở ngày cho cả bốn thời lượng, xuất đầy đủ phạm vi/tiêu chí nghiệm thu và xử lý brief trống. Kiểm tra thủ công trên trình duyệt bao gồm nạp mẫu, chỉnh nội dung, lưu nháp sau tải lại, xuất Markdown.

### Kiểm tra giao diện v1.1

- Đã kiểm tra viewport 320, 360, 390, 430, 768 và 1280px bằng trình duyệt tích hợp. Không phát hiện cuộn ngang.
- Trên mobile: ô chọn xếp một cột, chữ nhập liệu 16px, vùng chạm của phạm vi/nút xuất/nút xóa tối thiểu 44px.
- Điều hướng nhanh giữa nhập nội dung và bản xem trước; lộ trình chia hai cột trên màn hình nhỏ.
- Đã xác minh nạp mẫu, đổi tên/thời lượng, chọn Dashboard, khôi phục nháp sau tải lại, sao chép đúng nội dung và tải tệp Markdown.
- Đây là kiểm tra viewport trên trình duyệt desktop; chưa thay thế kiểm tra Safari/iOS và Android trên thiết bị thật.

## Hướng phát triển

- Mẫu brief theo ngành và bản tiếng Anh.
- Nhập lại tệp Markdown hoặc JSON.
- Cộng tác và tiếp nhận yêu cầu phía máy chủ sau khi thống nhất cách xử lý dữ liệu.

## Hợp tác với RosieAVYTRIX

[Chia sẻ đề xuất hợp tác](https://github.com/RosieAVYTRIX/RosieAVYTRIX/issues/new): bài toán, người sử dụng, kết quả mong muốn và phạm vi bạn muốn thử nghiệm.
