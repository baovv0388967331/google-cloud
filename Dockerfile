# Sử dụng Node.js làm image cơ sở
FROM node:18

# Thiết lập thư mục làm việc
WORKDIR /usr/src/app

# Sao chép package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các dependency
RUN npm install --production

# Install TypeScript globally
RUN npm install -g typescript

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Chỉ định cổng mà ứng dụng sẽ lắng nghe
EXPOSE 8080

# Chạy ứng dụng
CMD [ "npm", "run", "start-cloud-run" ]