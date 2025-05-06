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

### Automated Container Image Build Process

The project uses GitHub Actions for automated container image builds. Here's how it works:

1. **Trigger Conditions**:
   - Push to main branch
   - Pull request to main branch
   - Manual workflow dispatch

2. **Build Process**:
   ```mermaid
   graph TD
   A[Code Push/PR] --> B[GitHub Actions Trigger]
   B --> C[Build Docker Image]
   C --> D[Push to Container Registry]
   D --> E[Deploy if needed]
   ```

3. **Image Tagging Strategy**:
   - Latest tag: `latest`
   - Version tag: `v{major}.{minor}.{patch}`
   - Commit tag: `{short-sha}`
   - Branch tag: `{branch-name}`

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
ad
### 自動化容器映像生成流程

本專案使用 GitHub Actions 進行自動化容器映像構建。以下是詳細說明：

1. **觸發條件**：
   - 推送到主分支
   - 向主分支發起 Pull Request
   - 手動觸發工作流程

2. **構建流程**：
   ```mermaid
   graph TD
   A[代碼推送/PR] --> B[GitHub Actions 觸發]
   B --> C[構建 Docker 映像]
   C --> D[推送到容器倉庫]
   D --> E[需要時部署]
   ```

3. **映像標籤策略**：
   - 最新版本：`latest`
   - 版本標籤：`v{major}.{minor}.{patch}`
   - 提交標籤：`{short-sha}`
   - 分支標籤：`{branch-name}`

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
