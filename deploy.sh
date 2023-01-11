#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd dist

# deploy to github pages

if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:ahao430/metronome.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://ahao430:${GITHUB_TOKEN}@git@github.com:ahao430/metronome.git
  git config --global user.name "ahao430"
  git config --global user.email "ahao430@gmail.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl main:gh-pages # 推送到github gh-pages分支