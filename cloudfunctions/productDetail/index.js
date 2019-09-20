// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
//定义一个变量，这个变量可以调用数据库中的信息
const db = cloud.database()


// 云函数入口函数
exports.main = async (event, context) => {
 //id变量就是云函数传进来的参数变量，代表商品序号
  const id = event.id
  // 首先是异步请求，请求的是数据库中的内容。前面加了 await 是说等请求结束，返回一个 promise，再赋值给 productRes。
  //最后，我们将 promise 中的数据付给 product 变量，并返回该值
  const productRes = await db.collection('product').doc(id).get()
  const product = productRes.data
 

  const reviewCountRes = await db.collection('review').where({
    productId: id,
   
  }).count()
  product.reviewCount = reviewCountRes.total
  

  // 获取第一条评论信息
  const firstReviewRes = await db.collection('review').where({
    productId: id,
   
  }).limit(1).get()
  product.firstReview = firstReviewRes.data[0]
 

  return product
 


}