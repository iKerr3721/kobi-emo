// phina.js をグローバル領域に展開
phina.globalize()

//サイズ指定用の定数
var SCREEN_X = 640
var SCREEN_Y = 360

// メイン処理
phina.main(function() {
  // アプリケーション生成
  let dom = document.createElement('div')

  Scene.prototype.baseDom = dom
  var app = GameApp({
    startLabel: 'title',
    //screenのサイズ変更
    width: SCREEN_X,
    height: SCREEN_Y,
    assets: {
      image: {
        faceback: 'main_back.png',
        man: 'main_man.png',
        woman: 'main_woman.png',
        title1: 'buisiness_people.jpeg',
        title2: 'buildings.png',
        typeback: 'typing_back.png',
        hare: 'result_hare.png',
        hirameki: 'result_hirameki.png'
      },
      font: {
        あさご本丸ゴシックmini: 'あさご本丸ゴシックmini.otf'
      },
      sound: {
        push_sound: './push_sound.mp3',
        game_bgm1: './bgm1.mp3',
        game_bgm2: './bgm2.mp3',
      }
    },

    scenes: [
      {
        className: 'TitleScene',
        label: 'title',
        nextLabel: 'login'
      },
      {
        className: 'LoginScene',
        label: 'login',
        nextLabel: 'myloading'
      },
      {
        className: 'MyLoadingScene',
        label: 'myloading',
        nextLabel: 'main'
      },
      {
        className: 'MainScene',
        label: 'main',
        nextLabel: 'myresult'
      },
      {
        className: 'MyResultScene',
        label: 'myresult'
      }
    ]
  })

  app.domElement.addEventListener('touchend', function dummy() {
    var s = phina.asset.Sound()
    s.loadFromBuffer()
    s.play().stop()
    app.domElement.removeEventListener('touchend', dummy)
  })
  // アプリケーション実行
  app.run()
  app.domElement.parentNode.insertBefore(dom, app.domElement.nextSibling)
})
