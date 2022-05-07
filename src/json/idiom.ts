import idioms from './idiom.json'

// random pick 200 words

const shuffle = (arr: any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
const result = shuffle(idioms as any[])
  .filter(item => item.word.length === 4)
  .slice(0, 1000)
  .map(item => item.word)
console.log(JSON.stringify(result))

const e = [
  '朝不保夕',
  '众星捧月',
  '拒人千里',
  '自讨没趣',
  '笙歌鼎沸',
  '夕阳西下',
  '小肚鸡肠',
  '手高眼低',
  '惩一儆百'
]
