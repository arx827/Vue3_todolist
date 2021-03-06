# 動畫demo 部署檔

#!/usr/bin/env sh
# 當發生錯誤時終止腳本運行
set -e
# 打包
npm run github
# 移動至到打包後的dist目錄 
cd dist/github
git init
git add -A
git commit -m 'deploy'
# 部署到 https://github.com/arx827/Vue3_todolist.git 分支為 gh-pages
git push -f https://github.com/arx827/Vue3_todolist.git master:gh-pages
cd -

# 執行指令 sh deploy.sh