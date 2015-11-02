
Vertex クライアントソフトウェア開発キット(SDK)
=========================================
(vertexSDK クライアント：pre-alpha v.0.1.0）
(Vertex 2.3.x API http://apiforvertex.appspot.com/)


当説明書はワイヤレス・グルーネットワークス（株）、ソフトウェア**Vertex v2.3.x**のREST型APIを活用するハイブリッドHTML5モバイルアプリの作成支援をする情報です。

WGN社**Vertex**は汎用イベント配信ソフトウェアであり、さらに、エネルギー管理や電力需要抑制・デマンドレスポンス（DR）をOpenADR2.0b[^stackedit]方式に沿ってデータ配信を行います。VertexはOpenADR2.0b試験・認証済みで、対応可能なOpenADR2.0b VTNにVertexはVENとして接続できます。ロゴ認証資格を継承するには、WGN社と商業ライセンスが必要です。VertexはWGN社固有のソフトウェアですが、当クライアントSDKは開発者向けにクライアントアプレイケーションを支援し、DR信号取得を可能にします。

目的
--------
開発者がVertex 2.3.x のAPIを活用出来る様にすることがvertexSDKの目的です。
機能はジャバスクリプト、HTML, CSSファイルを通じて単一ページアプリ（**SPA**)
を作成するのが基本です。このSDKはクライエントソフトウェアの開発紹介であり、
完全なソフトウェアを提供するのが目的ではありません。開発者は本SDKを介して独自の
クライアントソフトウェアを独自のユースケース分析により開発することが前提です。

開発者アクセス
-----------------
**Vertex** はユーザー・アクセス制限及ログイン・セッション管理が実装されています。  ユーザーは
３種類のクラス分けがされています：アドミニストレータ、オペレーター、及アカウント（顧客）。
Vertex APIを通じて３ユーザー階級全てに接続は可能ですが、当SDKではオペレーター及アカウント
ユーザー層のみにアクセスを制限しております。代表例として、オペレータ・ユーザーがサンプル
Vertex上予め準備されています。接続・利用にあたっての情報及評価ラインセンスは、
john@wirelessglue.comに連絡していただき、Vertex API利用権利であるオペレータ又は
アカウント・ユーザー情報を管理者から取得する必要があります。

基本特徴：　セッションなしサーバーとクライアントアプリ状態管理
-----------------------------------------------------
**Vertex** 機能はREST型APIを通じて、基本認証（ベーシック・オーセンティケーション）を普通の
HTTPメソッドを利用することで活用できます。開発者が上記email連絡先からユーザー・パスワード情報
を取得すると、バーチャル・ユーザーとしてAPIへ接続が可能になります。各API接続は
ユーザー・パスワードをHTTPヘッダーへ入れる事でトランズアクションが可能になり、HTTP レスポンス
が返信されます。そのため、Vertex はその都度トランスアクションを行い、状態情報は管理しません。

クライアント側アプリはユーザーが直接操作します。セキュリティー認証情報などはインプットされ、
管理・保存の対象になります。操作を終えるとその情報は削除されます。拠ってセッションの管理を行う事で、
vertexSDKのクアリアントアプリはログイン状態を管理します。アプリケーションがリセットされると、
ログアウト状態へ遷移します。ログイン状態にある場合、クライアントアプリはVertex APIと接続・データ
交換できます。

> **注意事項: **
<i class="icon-lock"></i>SSL 接続はVertex商業ラインセンスを取得し、ホスティングサービスを
利用することで可能です。

基本特徴：　AngularJS/Ionic Frameworkを用いたJAVASCRIPT MVC
=======================================================
vertexSDKはクライアントアプリケーションソフト開発を簡易化する為に、 Mode-View-Controller
(MVC)フレームワークにAngularJSを利用しています。更に、近代的なモバイルアプリのスタイリングを
実現するのにAngluarJSを活用したIonic Frameworkを利用しています。開発ツールには、お好みの
物を利用できます。ここでは前提としてブラウザーに**Firefox**とディバグに**Firebug**を使い、
プロキシ・サーバーに**Ionic Serve**を想定します。エディターには、**Atom**などが便利です
(https://atom.io/)。

３層メニュー構造
--------------------------
クライアントアプリのユーザー基本は左引き出しメニューの項目を選択します。*Function*を選択することで２層目のメニュ、Vertexの基本機能項目がリスト
形式に表示されます。*System Configuration*　を選択することで、３層目のVertex設定メニュー項目が表示されます。

メニュー構造は状態定義ファイル js/app.jsに記述されています。

Cross Origin Resource Sharing (CORS)
-----------------------------------
(参考：http://dev.classmethod.jp/etc/about-cors/)
ハイブリッドHTML5アプリを開発するにあたって、FirefoxやChromeブラウザーのCross Origin
Resource Sharing (CORS)方針機構に注意しなければなりません。通常ブラウザーは、HTMLページ
上では他のウェブサービスと直接ディープリンクを禁じており、サーバー側との交信のみを許可しています。
これは、悪質はコードが無断でローカルファイルやその他のリソースをアクセスできないようにする
セキュリティー方針機能です。

ハイブリッドHTML5アプリの開発環境は普段ブラウザー（**Firefox** **Firebug**など）を利用し、
試作品を検証します。もしコードが単一ページアプリ（single page applicaiton: SPA）である場合、
直接ウェブサービスへ接続しに行き、ブラウザーのCORS方針機能が動作しHTTPメソッドの動作が
阻害されます。実際SPAが独立アプリとしてビルド・パッケージされた場合、ブラウザーの外で動作する
為CORSが問題にはなりません。しかし開発段階ではブラウザーを活用して施策することが最も効率的な
ことから、対策が必要です。

ブラウザーCORSの解決策としてIonic Frameworkの指令・コマンド・ライン・インストラクション(Command
Line Instruction: CLI) **IONIC SERVE**を活用することで、簡易的にプロキシ・サーバーを
立ち上げ、そのサーバーを利用して外部ウェブリソースへ接続できます。Ionic プロジェクトの
ルートディレクトリーに_ionic.project_ファイルを用意し、プロキシ・サーバーURLを記載し、CLI
を発行することで、プロキシ・サーバーが起動し、_ionic.project_ファイルから情報を取得、外部
ウェブリソースへの接続を可能にするアクセスルートを確立します。vertexSDKコード内ではlocalhost:8100
を外部ウェブリソースとして指定することで、プロキシ・サーバーを利用します。

基本特徴：　プロジェクト構造
-----------------------
プロジェクトは、AngularJSのディレクトリー構造とIonic Frameworkを利用します。

###Root
: #####**/www** : Parent directory
	: ######**/css** : Custom Cascading Style Sheets
	: #####**/img** : jpeg or png image resouces
	: #####**/js**  : application logic, controllers, and services
	: #####**/lib** : javascript framework and other tools
	: #####**/templates** : HTML pages
	: ######index.html


対象ユースケース
=============
vertexSDKクライアントアプリケーションは下記の基本操作を行います：

1)　クライアントアプリケーションのログオン
2)　Vertexからデータを引き出す
		a-過去、現在、進行中のイベント
		b-イベントを選択し詳細を見る

クライアントアプリケーションは自動的にVertexをポールし、イベント情報を取得します。イベントリスト
はVertex上の情報と同期します。

クライアントアプリケーションはアクティブのイベントを監視し、状態をディスプレイします。

クライアントアプリケーションはイベントのオプトイン・オプトアウトできます。


/img　の画像はここからです：  http://www.freeimages.com/




Vertex Software Development Kit for Client Single Page Applications
=========================================
(vertexSDK client app: pre-alpha  v.0.1.0 )
(Vertex 2.3.x API http://apiforvertex.appspot.com/)



This document is a primer to facilitate development of hybrid HTML5 based mobile application to access Wireless Glue Networks, Inc.'s (WGN) **Vertex v2.3.x** software REST API.

WGN's **Vertex** is a generic event notification software with specific functionality geared to enable energy management and electrical demand response (DR) OpenADR2.0b[^stackedit] signal handling; it is OpenADR 2.0b certified and works with corresponding OpenADR2.0b Virtual Top Nodes (VTN), whereby Vertex functions as the Virtual End Node (VEN).  If one desires to inherit a certified status, a commercial license with Wireless Glue Networks will be necessary for Vertex software.  Vertex is a proprietary software of WGN; however, this client SDK is open sourced to enable developers to create client applications to receive and utilize the DR information.

Purpose
----------
vertexSDK is aimed at introducing the developer to access the API of Vertex 2.3.x.  As such, basic interaction is provided in javascript, HTML, and CSS files in a Single Page Application (**SPA**) structure.  This SDK is to serve as a primer and not meant as a complete client software, and developers should develop their own use cases and features based on the foundations provided by this SDK.  


Developer Access
---------------------
**Vertex** has user levels and session log-ons.  Users belong to three possible classes:  Administrator, Operator, or Account.  While the Vertex API allows interaction with all three user levels, the SDK provides access information to Operator and Account level users only.  A sample Operator user is prepared and provided on the hosted sample Vertex server, so that client application developers may test and interact with a Vertex instance.  In order to obtain the credentials needed to interact with the Vertex API as an Operator or Account and relevant evaluation license, contact john@wirelessglue.com.

Basic Feature:  Session-less Server and Client Application States
-----------------------------------------------
**Vertex** functionality is served through a RESTful API using standard HTTP methods, under Basic Authentication.  Once a developer is issued a username and password, those credentials can be used to access the API as a virtual user through this API.  Each API request is authorized with the Basic Authentication credentials in the HTTP header, and the transaction is complete with a HTTP Response.  **Vertex** therefore does not maintain any session status for each API user.

In contrast, a client application interacts with a user; credentials and other information are inputted, maintained, and persisted; once the human user finishes with the client application, certain credentials and information may be deleted once the interaction is over.  Hence, a local client application session management is appropriate.  Therefore, the vertexSDK client models a usage where the client application maintains human user log-in status; this status is released once the client application is reset.  As long as the human user has logged on in a session, the logged session is maintained and the client application can interact freely with the permitted API level of Vertex.

> **Note: **
<i class="icon-lock"></i>SSL connections are supported only on commercial hosting licensing of Vertex


Basic Feature:  AngularJS/Ionic JAVASCRIPT MVC FRAMEWORK
=======================================
The vertexSDK client application uses AngularJS as the Mode-View-Controller (MVC) framework to facilitate a simpler application development.  Furthermore, Ionic Framework is employed to simplify stylistic elements to give the app a "modern" look and feel.  Various editing and testing tools can be used; here, the assumption is to use **Firefox**  **Firebug** debugging tool along with **Ionic Serve** proxy server, and a suitable text editor such as **Atom** (https://atom.io/).

Three level menu structure
--------------------------
Basic user functions are represented in the left-side slide-out menu.  The *Functions* menu display available main functions of Vertex.  Furthermore, *System Configuration* displays further menu items to configure Vertex itself.

The menu structure is driven by the state definitions in js/app.js.

Cross Origin Resource Sharing (CORS)
---------------------------------------------
Developing an hybrid HTML5 application requires care to handle the Cross Origin Resource Sharing (CORS) policy mechanism embedded in modern browser applications such as Firefox and Chrome.  Typically browsers do not allow HTML pages to deep link with web resources other than of the immediate resource location that the server is providing.  This is in place to prevent malicious code to access local files or other resource locations, and thus create a security hazard.

The development environment of HTML5 hybrid applications more often than not enlist a browser (such as **Firefox Firebug**) to prototype and render the code.  If that code is acting as a single page application (**SPA**), and independently accesses a web-based API, the CORS policy of the browser environment will kick-in, and prevent a typical HTTP method to function and retrieve data.  In actuality, an independently packaged SPA will not encounter such a problem, because it will operate outside of a browser environment.  However in the development phase, it is often efficient and useful for the developer to use browsers.

To circumvent this problem, makers of the Ionic Framework provides a quick and easy proxy server, the invoked by the command line instruction (CLI) **>IONIC SERVE** in the root directory of the ionic project.  To utilize proxy server, the _ionic.project_ file.  A proxy server URL is defined with the file; once the CLI is issued, the proxy server will examine the contents of the _ionic.project_ file and run a server to serve as the front to the external web resource.  Within the code itself, the URL used shall be the localhost:8100, the location of the proxy server.

Basic Feature:  Project structure
--------------------------------------
The structure of the project follows AngularJS directory organization, and utilizes Ionic Framework resources.

###Root
: #####**/www** : Parent directory
	: ######**/css** : Custom Cascading Style Sheets
	: #####**/img** : jpeg or png image resouces
	: #####**/js**  : application logic, controllers, and services
	: #####**/lib** : javascript framework and other tools
	: #####**/templates** : HTML pages
	: ######index.html



Featured Use Case
===============
vertexSDK client application covers the following basic interaction:

1) User log-on to the client application
2) Pull data from Vertex
    a- Pending, current, and past events
    b- Select an event to read the details

Client application automatically polls Vertex and pulls event information, synchronizing the event list with the event state of Vertex.

Client application monitors the active event and displays a modal to indicate the status

Client application can opt in or out of the event


Images in /img from:  http://www.freeimages.com/
