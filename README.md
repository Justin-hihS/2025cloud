# Docker Application Guide

## English Version

### Building the Docker Image

1. Make sure you have Docker installed on your system
2. Navigate to the project directory containing the Dockerfile
3. Run the following command to build the Docker image:
```bash
docker build -t myapp .
```

### Running the Docker Container

After building the image, you can run the container using:
```bash
docker run -p 3000:3000 myapp
```

The application will be accessible at `http://localhost:3000`

## 中文版本

### 使用 Docker 構建應用程式

1. 確保您的系統已安裝 Docker
2. 進入包含 Dockerfile 的專案目錄
3. 執行以下命令來構建 Docker 映像：
```bash
docker build -t myapp .
```

### 運行 Docker 容器

構建映像後，您可以使用以下命令運行容器：
```bash
docker run -p 3000:3000 myapp
```

應用程式將在 `http://localhost:3000` 上運行

### 參數說明

- `-t myapp`: 為映像指定名稱為 "myapp"
- `-p 3000:3000`: 將容器的 3000 端口映射到主機的 3000 端口
- `.`: 表示使用當前目錄的 Dockerfile

### 常用 Docker 命令

```bash
# 查看所有容器
docker ps -a

# 停止容器
docker stop <container_id>

# 刪除容器
docker rm <container_id>

# 查看所有映像
docker images

# 刪除映像
docker rmi myapp
```
