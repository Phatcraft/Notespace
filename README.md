# Notespace

## Về Notespace
Notespace là 1 trang web cho phép bạn lưu trữ, quản lý các note của bạn. <br>
Bạn cũng có thể xem các public note của những người khác.

## Setup web server
  + **Cài đặt `python` >= 3.8**
  
  + **Tải Notespace source file tại đây**
  
  + **Tạo file `.env` và setup `.env`**
    ````bash
    # Bạn có thể đổi "0.0.0.0" thành địa chỉ IP bạn chọn
    SERVER_HOST="0.0.0.0"
    # Bạn có thể đổi cổng 3000 sang các số cổng khác
    SERVER_PORT=3000
    ````

  + **Setup môi trường python ảo**
    ````bash
    python -m venv .venv
    ````
  
  + **Chạy môi trường ảo (Windows)**
    ````bash
    .venv\Scripts\activate
    ````

  + **Cài đặt các module cần thiết**
    ````bash
    pip install -r requirements.txt
    ````

  + **Chạy Notespace server**
    ````bash
    python server.py
    ````
