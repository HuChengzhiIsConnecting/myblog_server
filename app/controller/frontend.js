'use strict';
const moment = require('moment')
const Controller = require('egg').Controller;

class FrontendController extends Controller {
  async index() {
    const { ctx } = this;
    await this.ctx.render('/frontend/index');

  }
  async addViewNum(){
    const { ctx } = this;
    let res = await ctx.service.frontend.addViewNum(ctx.request.body);
    console.log(res);
    ctx.body = {code:200,msg:'操作成功',data:res};
  }
  async articleListByDate() {
    const { ctx } = this;
    let mapData = new Map();
    let res = await ctx.service.frontend.articleListByDate(ctx.query);
    // console.log(res);
    if (!res.length) {
      return ctx.body = {
        code: 201,
        msg: "文章为空，请先添加文章",
        data: []
      }
    }
    res.forEach((item) => {
      let date = moment(item.updated_at).format("YYYY-MM-DD HH:mm:ss");
      let year = date.substring(0, 4);
      // console.log(year)
      // console.log(mapData.has(year))
      if (!mapData.has(year)) {
        mapData.set(year, [item]);
      } else {
        mapData.set(year, [...mapData.get(year), item]);
      }
    })
    ctx.body = {code:200,msg:'操作成功',data:[...mapData]};
  }
  async articleDetail(){
    const { ctx } = this;
    let res = await ctx.service.frontend.articleDetail(ctx.query);
    let cateRes="";
    let tagsRes=[];
    console.log(res);
    if(!res){
      return ctx.body={
        code:201,
        msg:"文章不存在",
        data:{}
      }
    }
    let data={id:res.id,title:res.title,content:res.content,updated_at:res.updated_at,view_num:res.view_num};
    let cate_id=res.cate_id;
    let tags_group=!!res.tags_group && res.tags_group.split(',');
    if(!!cate_id){
      //存在分类的话查询
      cateRes = await ctx.service.frontend.findCateName(cate_id);
      console.log("cateres:",cateRes)
      data['cate_name']=cateRes.name;
    }
    if(tags_group){
      //存在标签的话
      tags_group=tags_group.map((item)=>{
        return parseInt(item)
      })
      tagsRes = await ctx.service.frontend.findTagsName(tags_group);
      console.log("tags:",tagsRes);
      data['tags_name']=tagsRes.map((item)=>{
        return item.name
      });
    }
    ctx.body={
      code:200,
      msg:'success',
      data:data
    };
  }
}

module.exports = FrontendController;
