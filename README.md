# Notespace

## Về Notespace
Notespace là 1 trang web cho phép bạn lưu trữ, quản lý các note của bạn. <br>
Bạn cũng có thể xem các public note của những người khác.

## Setup web server
  1. **Cài đặt `node` >= 18 và `mysql`**
  
  2. **Tải Notespace source file tại đây**
  
  3. **Tạo file `.env` và setup `.env`**
    ````bash
    # Server infomation
    SERVER_HOST="<Địa chỉ IP>"
    SERVER_PORT=<Số cổng>
    ````

  4. **Cài đặt các module cần thiết**
    ````bash
    npm install
    ````

  5. **Chạy Notespace server**
    ````bash
    python server.py
    ````
