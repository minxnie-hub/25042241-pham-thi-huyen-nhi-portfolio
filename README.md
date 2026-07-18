# Portfolio Phạm Thị Huyền Nhi

Portfolio tĩnh, responsive, triển khai trực tiếp bằng GitHub Pages.

## Chạy thử

```bash
python -m http.server 4173
```

Mở `http://localhost:4173`.

## Deploy GitHub Pages

1. Tạo repository mới và đưa toàn bộ thư mục này lên nhánh `main`.
2. Vào **Settings → Pages → Source**, chọn **GitHub Actions**.
3. Workflow `.github/workflows/pages.yml` sẽ tự triển khai.

## Cấu trúc

- `index.html`: trang chủ
- `bai-1/` ... `bai-6/`: nội dung chi tiết từng bài
- `assets/images/projects/`: ảnh minh chứng gốc được trích từ các file DOCX
- `design-system/`: định hướng UI/UX đã dùng

Giao diện dùng các pattern từ UI Main/shadcn (button, badge, dialog/lightbox, scroll area, table) nhưng được viết dependency-free để GitHub Pages chạy ổn định, không cần build.

## Typography refinement
- Vietnamese-safe system font stacks.
- Reduced project heading scale and simplified article hierarchy.
- Concise linked table of contents and semantic task overviews.
