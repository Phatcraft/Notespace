# Notespace

## Về Notespace
Notespace là 1 trang web cho phép bạn lưu trữ, quản lý các note của bạn. <br>
Bạn cũng có thể xem các public note của những người khác.

## Setup web server
  1. **Cài đặt `python` >= 3.8 và `mysql`**
  
  2. **Tải Notespace source file tại đây**
  
  3. **Tạo file `.env` và setup `.env`**
    ````bash
    # Bạn có thể đổi "0.0.0.0" thành địa chỉ IP bạn chọn
    SERVER_HOST="0.0.0.0"
    # Bạn có thể đổi cổng 3000 sang các số cổng khác
    SERVER_PORT=3000

    # Cấu hình Database
    SQL_HOST="localhost"   # Có thể thay đổi
    SQL_USER="root"        # Có thể thay đổi
    SQL_PASS=""            # Có thể thay đổi
    SQL_DATABASE="notespace"
    ````

  4. **Tạo các database & các bảng**
    ````bash
    ````

  5. **Setup môi trường python ảo**
    ````bash
    python -m venv .venv
    ````
  
  6. **Chạy môi trường ảo (Windows)**
    ````bash
    .venv\Scripts\activate
    ````

  7. **Cài đặt các module cần thiết**
    ````bash
    pip install -r requirements.txt
    ````

  8. **Chạy Notespace server**
    ````bash
    python server.py
    ````
