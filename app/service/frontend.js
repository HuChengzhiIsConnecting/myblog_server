const Service = require('egg').Service;
const qiniu = require('qiniu')
class FrontendService extends Service {
  async articleListByDate() {
    const { ctx } = this
    let result = await ctx.model.Article.findAll({
      where: {
        status: 1
      },
      order: [
        ['updated_at', 'desc']
      ],
      attributes: ['id', 'title','updated_at']
    });
   return result;
  }
  async articleDetail({id}) {
    const { ctx } = this
    let result = await ctx.model.Article.findOne({
      where: {
        id: id,
        status:1
      },
      attributes: ['id', 'title','content','cate_id','tags_group','updated_at','view_num']
    });
   return result;
  }
  async findCateName(cate_id) {
      //查询文章分类名称
    const { ctx } = this
    let result = await ctx.model.Cate.findOne({
      where: {
        id: cate_id,
        status:1
      },
      attributes: ['id', 'name']
    });
   return result;
  }
  async findTagsName(tags_group) {
    const { ctx } = this
    let result = await ctx.model.Tag.findAll({
      where: {
        id: tags_group,
        status:1
      },
      attributes: ['name']
    });
   return result;
  }
  async addViewNum({articleId}){
    const {ctx,app} = this
    let res = await ctx.model.Article.increment('view_num',
    {
      where:{
        id:articleId
      }
    })
    return res;
  }
}
module.exports = FrontendService
