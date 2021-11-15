# 如何維護資財考古題系統
> 資財考古系統製作人: [吳宗叡](https://iceglitter632.github.io/AboutMe/)

---

### 關於資財考古題系統
此系統是用vue作為前端，express為後端。在一切都開始之前要先確認伺服器是否有設定好該用的dependencies:
1. 安裝 [Node.js](https://nodejs.org/en/)
2. `git clone https://github.com/Iceglitter632/NYCUIMF_test`
3. `cd <main directory>` 到 `package.json` 的位置(共兩個，一在Client，一在api)
4. 開啟shell執行`npm install`
5. 同樣在shell執行`npm start`可開始local development
---

### 前端架構
前端的部分寫在**Client**中，裡面的資料夾結構為:
* node_modules
* public
* src
* package.json
* 其他不太重要

在這些資料夾中，又以`src`最重要等等會重點講解。
#### 1. Public
先講 public，此資料夾可放一些放存在本機的照片、資料等。一般情況下放在本機的資料是不會被推上網路的，只有放在public裡面的資料可以。因此若要放自己畫的照片或自己從其他地方下載的照片都要放在這個資料夾裡面。

#### 2. package.json
`package.json`裡面儲存的是此個project需要下載的東西有哪些，在前面安裝時所下的`npm install`就是把`package.json`裡要求的東西載下來。
`package.json`就有點像是python的pip，在python中要用`pip install`來下載新的module，而在vue裡面就會存在`package.json`中

### node_modules
其實我也沒有很知道，有興趣自己想辦法

### src
**src**是裡面最重要的東西，點開後裡面又會有好幾個資料夾，一樣這邊在來簡介一下
* assets
* components*
* directives
* layout*
* plugins
* services*
* views*
* App.vue*
* main.js*
* Router.js*

後面有打 * 的表示這些檔案是比較重要的，下面只會有非常簡單的介紹，大致上以後如果要加其他的功能就按照分類寫進去吧。有問題都可以問喔。

#### 1. components
Components是vue裡面的基本，大概可以想像成一個頁面的小部分，由於本次project是利用[此模板](https://demos.creative-tim.com/vue-argon-design-system/documentation/)。裡面有很多components已經幫忙寫好了，記得import就可以使用了。基本上不用做甚麼修改，可以參考上述網頁的範例在自行修改。

#### 2. layout/views
Layout就是把上面的components結合起來的一個頁面，大多就是把前面的components結合起來加上一些自己的排版。

#### 3. services
Services是連結後端的部分，裡面寫的都是request後端的程式，包含下載檔案，抓取檔案等。若要寫連結後端的東西就寫在這邊吧。

#### 4. App.vue / main.js
基本上就是main function，裡面看起來極為精簡，大致上也不太需要動他。

#### 5. Router.js
Router.js很重要，裡面寫的是每個不同的url該呈現什麼網頁。一般網頁一般可以分成三個，header、body、footer。不像一般的html可以利用`<a href="xxx"><a>`來轉到其他檔案，`.vue`檔無法透過直接`href`來改變url，只好透過router來定義。(或是有其他方法，但我不會)

---
### 後端架構
