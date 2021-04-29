phina.define('MyResultScene', {
    superClass: 'DisplayScene',
    init(option) {
        this.superInit(option)

        //BGM追加
        SoundManager.stopMusic();
        SoundManager.playMusic('game_bgm1');
        // 背景色を指定
        this.backgroundColor = '#FFDDD2'
        // 画像
        Sprite('hirameki')
            .addChildTo(this)
            .setPosition(this.gridX.center() * 1.8, this.gridY.center() * 0.4)
            .setScale(0.2, 0.2)
        Sprite('hare')
            .addChildTo(this)
            .setPosition(this.gridX.center() * 0.2, this.gridY.center() * 1.7)
            .setScale(0.15, 0.15)

        // ラベル
        Label({
            text: 'あなたがこびをうれたのは、', //テキスト内容
            fontSize: 27, //文字サイズ
            fill: '#000000', //文字塗りつぶし色
            fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
        })
            .addChildTo(this)
            .setPosition(this.gridX.center() * 0.58, this.gridY.center() * 0.34)

        Label({
            text: '人です。', //テキスト内容
            fontSize: 27, //文字サイズ
            fill: '#000000', //文字塗りつぶし色
            fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
        })
            .addChildTo(this)
            .setPosition(this.gridX.center() * 1.8, this.gridY.center() * 1.2)

        var questionNum = 3
        var correctNum = 3
        Label({
            text: correctNum+'/'+questionNum, //テキスト内容
            fontSize: 64, //文字サイズ
            fill: '#000000', //文字塗りつぶし色
            fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
        })
            .addChildTo(this)
            .setPosition(this.gridX.center(), this.gridY.center() * 1.12)
        
        Label({
            text: 'これであなたも出世コース！', //テキスト内容
            fontSize: 27, //文字サイズ
            fill: '#000000', //文字塗りつぶし色
            fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'", //フォント
        })
            .addChildTo(this)
            .setPosition(this.gridX.center(), this.gridY.center() * 1.7)
    }
})