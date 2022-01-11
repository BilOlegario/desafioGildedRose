class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
    updateQuality() {
      let subSellIn = (num, sellIn) => sellIn - num
      let subQuality = (num, quality) => quality - num
      let addQuality = (num, quality) => quality + num
      const minSellIn = 0
      const minQuality = 0
      const maxQuality = 50
      const qualitySulfuras = 80

      for (var i = 0; i < this.items.length; i++) {

        if(this.items[i].name === "Sulfuras, Hand of Ragnaros") {
          this.items[i].quality = qualitySulfuras
          this.items[i].sellIn = minSellIn
          continue
        }
      
        if(this.items[i].sellIn > 0)  {
          this.items[i].sellIn = subSellIn(1, this.items[i].sellIn)
        }
        
        if(this.items[i].name === "Aged Brie") {
          this.items[i].quality = addQuality(1, this.items[i].quality)
          if (this.items[i].quality > 50) {
            this.items[i].quality = maxQuality
          }
          continue
        }
        
      
        if(this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
          if (this.items[i].sellIn > 10) {
            this.items[i].quality = addQuality(1, this.items[i].quality)
          } else if (this.items[i].sellIn > 5) {
            this.items[i].quality = addQuality(2, this.items[i].quality)
          } else if (this.items[i].sellIn > 0) {
            this.items[i].quality = addQuality(3, this.items[i].quality)
          } else if (this.items[i].sellIn < 1 ) {
            this.items[i].quality = minQuality
          }
          if (this.items[i].quality > 50) {
            this.items[i].quality = maxQuality
          }
          continue
        }
      
        if(this.items[i].name.toLowerCase().includes('conjured')){
          if (this.items[i].sellIn > 0) {
            this.items[i].quality = subQuality(2, this.items[i].quality)
          } else if (this.items[i].sellIn === 0){
            this.items[i].quality = subQuality(4, this.items[i].quality)    
          }
          if (this.items[i].quality < 1 ) {
            this.items[i].quality = minQuality
          }
          continue
        }
      
        if (this.items[i].sellIn > 0) {
          this.items[i].quality = subQuality(1, this.items[i].quality)
        } else if (this.items[i].sellIn === 0) {
          this.items[i].quality = subQuality(2, this.items[i].quality)
        }
        
        if (this.items[i].quality < 0) {
          this.items[i].quality = minQuality
        }
      }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}