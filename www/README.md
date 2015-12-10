Vertex クライアントアプリ
====================

紹介
--------------
このアプリケーションは、OpenADR2.0b バーチャルエンドノード（VEN）であるソフト「Vertex」の一部機能を紹介するもので、Vertexのクライアントアプリです。このアプリ自身は OpenADR 2.0b VENではありません。予めご了承願います。

![HomeScreen](https://lh3.googleusercontent.com/-4oAHXsa_4R0/VmeGxZs5_mI/AAAAAAAAI8k/ttSdT5kbl08/s0/HomeScreen.png "HomeScreen.png")

ホームスクリーンがアプリの紹介画面です。ユーザーがサインインすることでVertexの情報をモバイル端末から取得できます。この場合、既にVertex内のユーザーがオペレーター又はアドミニストレータが登録を完了している必要があります。

![SideMenu](https://lh3.googleusercontent.com/-iI8b36UvJyI/VmeIbZkLq6I/AAAAAAAAI9Y/ZE4Qh3AIC9k/s0/SIdeMenuScreen.png "SIdeMenuScreen.png")

アプリは左スライダーメニューを用意しています。メニューは様々な機能を提供し、Vertexの情報を取得することができます。七つのメニュー項目を用意しております。最後の項目はログイン状態を示します。最初の項目はホームスクリーンに戻ります。

このアプリはユーザーログイン状態を管理します。ログイン状態に有る場合のみVertexへの情報を取得できます。これは、その都度Vertexへ問い合わせする場合、ユーザー名及びパスワードがAPIで利用されるからです。「Sign In」メニューからユーザー名・パスワード記入ページへ誘導します。「Sign Off」はその情報を削除します。

「Settings」項目にはVertexが起動するドメイン名を記入します。「Functions」項目は下位メニューへ続き、Vertexデーター取得の具体的項目を選択できるメニューへ誘導します。

「Sample Event」はOpenADR2.0bイベントの参考スキーマに沿ったデータを取得します。

![SignInScreen](https://lh3.googleusercontent.com/-Bf767Pt3byA/VmeIA2ldTWI/AAAAAAAAI80/4aka4myGmb0/s0/SignInScreen.png "SignInScreen.png")

このページには４項目がありますい：Eメール、ユーザー名、パスワード、パスワード確認。　これらの項目を記入することで、Vertex API経由でデータ取得ができます。APIアクセスは登録ユーザーのみに可能です。各VertexへのリクエストはHTTP基本認証を通じて各問い合わせにユーザー名及びパスワードが使われます。このページに記入することで直ちにVertexへ問い合わせされるのではないですが、パスワードとパスワード確認項目は比較されます。


![Settings](https://lh3.googleusercontent.com/-VGv27i9YlQU/VmeIK-CKCZI/AAAAAAAAI9A/Ks4flO2PveI/s0/SettingsScreen.png "SettingsScreen.png")

「Setting」ページには３項目を記入する箇所があります。最初はVertexのアドレスです。ディフォルト値はローカルサーバーとポート８１００です。評価サーバーはvtx__.wgn.jpにあり、別途登録が必要です。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　

次の項目はプログラム名であり、これはDR信号の契約体型に依存します。三番目の項目は任意情報になります。

![SampleEventSettings](https://lh3.googleusercontent.com/-Hxxli6K4v8o/VmeISaqQLXI/AAAAAAAAI9M/fEC8jLa9wug/s0/SampleEventScreen.png "SampleEventScreen.png")

参考用OpenADR2.0b　DRイベント信号の取得ができます。この信号はシンプルレベル型の信号スキーマに準拠しています。

![SecondaryMenu](https://lh3.googleusercontent.com/-SrC2uqCA420/VmeIhsNbfbI/AAAAAAAAI9k/8QldEYU3oSE/s0/SecondaryMenuScreen.png "SecondaryMenuScreen.png")

When the user selects the "Functions" menu item, it guides him/her to the next level of menu items.  Here again the first item is Home, and will take the user back to the landing page.  The other three items retrieves specific data from Vertex.


![EventList](https://lh3.googleusercontent.com/-Cd_L1Wg5hxY/VmeIpHKjLlI/AAAAAAAAI9w/ivl7apO4eR0/s0/EventListScreen.png "EventListScreen.png")

When the user selects "Events" from the second level of menus, the application makes a call to Vertex using the user name and password.  If an event exists, the data is retrieved.  In the above example, three events are retrieved and listed.   Only some of the schema field items are shown.

![AccountList](https://lh3.googleusercontent.com/-bZf4l33gJKU/VmeIvqcjNxI/AAAAAAAAI98/LAelApmG3tE/s0/AccountListScreen.png "AccountListScreen.png")

Vertex recognizes that users can belong to customer groups, namely "Accounts".  Therefore, when a user selects the "Accounts" menu item, the application goes and retrieves existing customer accounts info.  Within Vertex, Accounts are associated to DR programs.

![ProgramList](https://lh3.googleusercontent.com/-muWoiXvMsq0/VmeI8MWil_I/AAAAAAAAI-U/Tdg2y765D44/s0/ProgramListScreen.png "ProgramListScreen.png")

The last piece of data retrieval in this reference sample application is "Programs".  When the user selects the "Programs" menu item, the application proceeds to retrieve available DR program information on Vertex.

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

Ionic　サーバー　プロキシー機能バグとNode JS Local-Web-Server代行利用について
--------------------------------------
**>IONIC SERVE**のプロキシーURLは**ionic.project**ファイル内に定義ができます。利用時には、現在プロキシーにバグがあり、不要な'/'がHTTPリクエストに添付されます。その結果、リモートのAPIサーバーは404エラー（見つかりません）を発生させる可能性があり、開発の妨げになります。一つの解決方法として、全く別のプロキシーサーバーを設置することができます。

Node JSのパッケージ、「Local-Web-Server」を利用すれば、IONIC SERVEのプロキシーサーバーバグを回避できます。このパッケージをインスタールするには下記の手順を使います。

>sudo npm install -g Local-Web-Server

インスタール後、プロジシーを行うURLをしていします。

ws --rewrite '/event -> http://vtx00.wgn.jp/event'

上記の例はSPAをローカルブラウザーで起動した際、リモートAPIの/eventを取得する際利用します。これはVertex2.3.x機能メニュー、「Events」で使われます。

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


Vertex Client Application
====================

Introduction
--------------
This is a simple reference application to demonstrate some of the key features of Vertex, the OpenADR 2.0b client virtual end node software.  This application is a client connecting to Vertex and not to be confused with the client virtual end node for OpenADR2.0b.  The purpose of this application is educational:  it serves to instruct a software developer and product manager to imagine new ways to use electrical demand response information within the mobile device and home gateway settings.

![HomeScreen](https://lh3.googleusercontent.com/-4oAHXsa_4R0/VmeGxZs5_mI/AAAAAAAAI8k/ttSdT5kbl08/s0/HomeScreen.png "HomeScreen.png")

The Home Screen is the landing page of the application.  It enables sign-in of users wishing to access information on Vertex but in an easy-to-use, mobile platform.  It is assumed that a user has already been created on the Vertex application by an Operator or Administrator.

![SideMenu](https://lh3.googleusercontent.com/-iI8b36UvJyI/VmeIbZkLq6I/AAAAAAAAI9Y/ZE4Qh3AIC9k/s0/SIdeMenuScreen.png "SIdeMenuScreen.png")

The application implements a left side menu system; the menu items give access to various functions that ultimately enable access to Vertex information.  There are tentatively 7 menu items; the last is just a informational status item; the first "Home" enables return to the landing page.

This application maintains its own user log-on state; this state information is used to interact with Vertex as a registered user, and provides user name and password information to each API request onto Vertex.  "Sign In" menu item guides the user to the user name / password entry page; Sign off clears that information.

"Settings" navigates the user to the input for Vertex domain name entry.  "Functions" menu item leads the user to another menu level; this level provides for the requests to access Vertex data.

Lastly, "Sample Event" shows an example DR event data, according to OpenADR2.0b schema.

![SignInScreen](https://lh3.googleusercontent.com/-Bf767Pt3byA/VmeIA2ldTWI/AAAAAAAAI80/4aka4myGmb0/s0/SignInScreen.png "SignInScreen.png")

This page has four entry fields:  Email, User Name, Password, and Password confirmation.  The entry into this field is used to access the Vertex API; that API is only accessible to registered users; each request call to Vertex requires user name and password as part of the Basic Authentication process for HTTP requests.  The entry is not checked immediately against the registered user on Vertex side; only password entry is checked for erroneous entries against the confirmation field.

![Settings](https://lh3.googleusercontent.com/-VGv27i9YlQU/VmeIK-CKCZI/AAAAAAAAI9A/Ks4flO2PveI/s0/SettingsScreen.png "SettingsScreen.png")

The settings page has three fields related to Vertex.  The first is the "Vertex Address".  Default is set to the local server and port number, if available.  Evaluation servers are available on vtx__.wgn.jp and access is granted through a out-of-band registration process.

The second field is the Program Name; this is the contract to which the presumed user has contracted with the Demand Response signal provider.  The third field, Generic2 is used for miscellaneous information.  

![SampleEventSettings](https://lh3.googleusercontent.com/-Hxxli6K4v8o/VmeISaqQLXI/AAAAAAAAI9M/fEC8jLa9wug/s0/SampleEventScreen.png "SampleEventScreen.png")

A sample OpenADR2.0b event is prepared, to show an example data of a DR signal.  This particular signal schema is according to the SIMPLE LEVEL type of signal.

![SecondaryMenu](https://lh3.googleusercontent.com/-SrC2uqCA420/VmeIhsNbfbI/AAAAAAAAI9k/8QldEYU3oSE/s0/SecondaryMenuScreen.png "SecondaryMenuScreen.png")

When the user selects the "Functions" menu item, it guides him/her to the next level of menu items.  Here again the first item is Home, and will take the user back to the landing page.  The other three items retrieves specific data from Vertex.

![EventList](https://lh3.googleusercontent.com/-Cd_L1Wg5hxY/VmeIpHKjLlI/AAAAAAAAI9w/ivl7apO4eR0/s0/EventListScreen.png "EventListScreen.png")

When the user selects "Events" from the second level of menus, the application makes a call to Vertex using the user name and password.  If an event exists, the data is retrieved.  In the above example, three events are retrieved and listed.   Only some of the schema field items are shown.

![AccountList](https://lh3.googleusercontent.com/-bZf4l33gJKU/VmeIvqcjNxI/AAAAAAAAI98/LAelApmG3tE/s0/AccountListScreen.png "AccountListScreen.png")

Vertex recognizes that users can belong to customer groups, namely "Accounts".  Therefore, when a user selects the "Accounts" menu item, the application goes and retrieves existing customer accounts info.  Within Vertex, Accounts are associated to DR programs.

![ProgramList](https://lh3.googleusercontent.com/-muWoiXvMsq0/VmeI8MWil_I/AAAAAAAAI-U/Tdg2y765D44/s0/ProgramListScreen.png "ProgramListScreen.png")

The last piece of data retrieval in this reference sample application is "Programs".  When the user selects the "Programs" menu item, the application proceeds to retrieve available DR program information on Vertex.

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

Ionic Server Proxy Bug and on the use of Node JS Local-Web-Server
---------------------------------------------
The **>IONIC SERVE** proxy URL can be defined within the **ionic.project** file.  However, in actual use, a bug causes the proxy server to append the proxied URL with a "/".  This often causes the external API server to reject any request with an unknown URL (404).  Such a bug greatly affects productivity to develop a SPA.  Therefore a solution is to run a completely separate proxy server.

To this end, Node JS package "Local-Web-Server" serves the purpose.  Install the package such as below in the global installation case:

>sudo npm install -g Local-Web-Server

This the, after installation will enable specifying and running of a proxy server.
For example,

>ws --rewrite '/event -> http://vtx00.wgn.jp/event'

will direct the SPA local instance to access the /event API, the function available under the Vertex2.3.x Functions menu, under "Events".


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
