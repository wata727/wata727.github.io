# CodeBuildのコンテナをいっぱい使う

@wata727  
[JAWS-UG コンテナ支部 #8](https://jawsug-container.connpass.com/event/55568/)

---

![wata727](profile.jpeg)

Kazuma Watanabe (@wata727) 

* Actcat, Inc ([SideCI](https://sideci.com))
* [Twitter](https://twitter.com/wata727_), [GitHub](https://github.com/wata727)

---

## 「欲しいときに欲しいだけすぐに起動できて、好きにカスタマイズできる実行環境が欲しい。でも自前ホストしたくないです」

---

# AWS CodeBuild

- 欲しいときに欲しいだけすぐに起動できて
  - ビルド数に応じて、自動的にスケーリング
- 好きにカスタマイズできる
  - Docker imageが使える
- 自前ホストしたくない
  - 完全マネージド

---

# これこそ欲しかったものでは！？

---

# Drunker

[https://github.com/wata727/drunker](https://github.com/wata727/drunker)

- CodeBuildでコマンドを分散実行するためのCLI
- 手元のソースコードをS3にアップロードしてCodeBuild上で分散実行
- 実行結果をS3から収集して出力

---

# Usage

Docker imageとコマンドを指定するだけ

```
$ drunker run application:latest rspec
```

concurrencyを設定すれば並列で実行

```
$ drunker run --concurrency=3 application:latest rspec FILES
```

---

# DEMO

<video src="drunker-demo.mov" autoplay></video>

---

# 知見

- CodeBuildとても便利
- デフォルトだと20並列が限界なので注意
- 力こそパワー💪
