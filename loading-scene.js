phina.define('MyLoadingScene', {
  // デフォルトのLoadingSceneを継承
  superClass: 'DisplayScene',
  // コンストラクタ
  init: function(option) {
    this.superInit(option)
    // メソッド上書き
    const people = option.people
    const loader = phina.asset.AssetLoader()
    const assets = { image: {} }
    people
      .filter(cur => cur.id || cur.url)
      .forEach((person, i) => {
        assets.image['face-' + i] = person.url
        people[i].asset = 'face-' + i
      })

    if (assets.image === {}) {
      this.exit({ people })
    } else {
      loader.load(assets)
      loader.onload = () => {
        console.log('loaded')
        this.exit({
          people
        })
      }
    }
  }
})
