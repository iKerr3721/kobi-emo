phina.define('TitleScene', {
  superClass: 'DisplayScene',
  init(option) {
    this.superInit(option)
    //BGM再生
    SoundManager.setVolume(0.5)
    SoundManager.stopMusic()
    SoundManager.playMusic('game_bgm1')
    // 背景色を指定
    this.backgroundColor = '#EDF6F9'
    // 画像作成
    Sprite('title1')
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
      .setScale(0.2, 0.2)
    Sprite('title2')
      .addChildTo(this)
      .setPosition(this.gridX.center() * 1.7, this.gridY.center() * 1.2)
      .setScale(0.2, 0.25)

    // ラベルを生成
    //文字を緑色にする
    Label({
      text: 'こびうり', //テキスト内容
      fontSize: 50, //文字サイズ
      fill: '#E29578', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 0.44, this.gridY.center() * 0.34)
      .setRotation(340)


    Label({
      text: 'こびうり', //テキスト内容
      fontSize: 50, //文字サイズ
      fill: '#FFDDD2', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 0.45, this.gridY.center() * 0.35)
      .setRotation(340)


    Label({
      text: 'メモリアル', //テキスト内容
      fontSize: 50, //文字サイズ
      fill: '#E29578', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 0.49, this.gridY.center() * 0.64)
      .setRotation(340)

    Label({
      text: 'メモリアル', //テキスト内容
      fontSize: 50, //文字サイズ
      fill: '#FFDDD2', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 0.5, this.gridY.center() * 0.65)
      .setRotation(340)

    Label({
      text: '・\t\t・', //テキスト内容
      fontSize: 30, //文字サイズ
      fill: '#83C5BE',　//文字塗りつぶし色
    }).addChildTo(this).setPosition(this.gridX.center() * 0.26, this.gridY.center() * 0.27).setRotation(340)

    Label({
      text: '・\t\t・', //テキスト内容
      fontSize: 30, //文字サイズ
      fill: '#83C5BE',　//文字塗りつぶし色
    }).addChildTo(this).setPosition(this.gridX.center() * 0.25, this.gridY.center() * 0.62).setRotation(340)


    //ボタンの設定
    let button = Button({
      width: 200, // 横サイズ
      height: 35, // 縦サイズ
      text: '\t\t\tこびをうる', // 表示文字
      fontSize: 18, // 文字サイズ
      fontColor: 'black', // 文字色
      cornerRadius: 15, // 角丸み
      fill: '#FFDDD2', // ボタン色
      stroke: 'black', // 枠色
      strokeWidth: 3, // 枠太さ
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント

    }).addChildTo(this).setPosition(this.gridX.center(), this.gridY.center() * 1.75)

    Label({
      text: '▶️', //テキスト内容
      fontSize: 20, //文字サイズ
      fill: '#e29578', //文字塗りつぶし色
      fontFamily: "'Consolas', 'Monaco', ''", //フォント
      stroke: 'black',
      strokeWidth: 4
    }).addChildTo(this).setPosition(this.gridX.center() * 0.8, this.gridY.center() * 1.76)

    //ボタンが押された時の処理
    button.onpointend = () => {
      SoundManager.setVolume(0.5)
      SoundManager.play('push_sound')
      this.exit()
    }
  }
})