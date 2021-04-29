phina.define('Person', {
  superClass: 'DisplayElement',
  init(option) {
    this.superInit(option)
    SoundManager.stopMusic()
    SoundManager.playMusic('game_bgm2')
    var personGroup = DisplayElement().addChildTo(this)
    var sprite = Sprite('faceback')
    var person = Sprite(option.asset)
    sprite.addChildTo(this)
    person.addChildTo(this)
    this.setScale(0.15, 0.15)
    this.alpha = 0
    this.tweener
      .to(
        {
          scaleX: 0.2,
          scaleY: 0.2,
          alpha: 1.0
        },
        200
      )
      .wait(3000)
      .scaleTo(0.8, 8000)
      .play()
  }
})
phina.define('MainScene', {
  superClass: 'DisplayScene',
  init(option) {
    // 親クラス初期化
    this.superInit(option)
    this.person = Person(option.people[0])
      .addChildTo(this)
      .setPosition(this.gridX.center(), this.gridY.center())
    Label({
      text: 'この方は',
      fontSize: 36,
      fill: 'black',
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'"
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 0.3, this.gridY.center() * 1.7)

    Label({
      text: 'さんです。',
      fontSize: 36,
      fill: 'black',
      fontFamily: "'Consolas', 'Monaco', 'あさご本丸ゴシックmini'"
    })
      .addChildTo(this)
      .setPosition(this.gridX.center() * 1.75, this.gridY.center() * 1.7)

    // 背景色を指定
    this.backgroundColor = '#EDF6F9'
    // 固定飾り女性
    Sprite('woman')
      .addChildTo(this)
      .setPosition(this.gridX.center() * 1.8, this.gridY.center() * 1.2)
      .setScale(0.16, 0.16)
    Sprite('man')
      .addChildTo(this)
      .setPosition(this.gridX.span(2), this.gridY.span(3))
      .setScale(0.16, 0.16)
      .setRotation(325)
    // Sprite('hukidashi')
    //   .addChildTo(this)
    //   .setPosition(this.gridX.center() * 1.5, this.gridY.span(2))
    //   .setScale(0.15, 0.15)
    this.input = this.createInput(400, 636, 426)
    this.people = option.people
    this.curIdx = 0
    // var typeback = Sprite('typeback')
    //   .addChildTo(this)
    //   .setPosition(this.gridX.center(), this.gridY.center(5.5))
    //   .setScale(0.18, 0.18)
  },
  update(app) {
    if (app.keyboard.getKeyDown('enter')) {
      if (this.input.value === this.people[this.curIdx].kanji_name) {
        // this.person.remove()
        ++this.curIdx
        console.log(this.curIdx)
        if (this.people.length === this.curIdx) {
          this.input.remove()
          this.exit({
            num: this.curIdx,
            max: this.people.length
          })
        } else {
          this.input.value = ''
          this.person.remove()
          this.person = Person(this.people[this.curIdx])
            .setPosition(this.gridX.center(), this.gridY.center())
            .addChildTo(this)
        }
      } else {
        this.input.value = ''
      }
    }
  },
  createInput(w, l, t) {
    // DOM操作
    let dom = this.baseDom
    // 回答用input要素生成
    let input = document.createElement('input')
    // input要素にtext属性付与
    input.getAttribute('text')
    // スタイルを設定
    let s = input.style
    s.width = `${w}px`
    s.height = '60px'
    s.position = 'absolute'
    s.margin = '8px'
    s.left = l + 'px'
    s.top = t + 'px'
    s.fontSize = '42px'
    s.backgroundColor = '#E29578'
    s.color = '#000'
    s.border = '2px solid #000'
    s.borderRadius = '30px'
    dom.appendChild(input)
    s.overflowY = 'hidden'

    // 参照のために返す
    return input
  }
})
