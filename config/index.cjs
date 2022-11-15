/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd4522f48313bdbe2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '94c7ef8a51b5ef749576e6a809c536b5',

  PROVINCE: '山西',
  CITY: '太原',

  USERS: [
    {
      // 想要发送的人的名字
      name: 'ohwtR6TXNSTvt7ddvgW_S-4Iqx88,ohwtR6ZEaSkMUC7AcJVGs9E3acx8',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'wxd4522f48313bdbe2',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'BpjfSMGREzxQwu5O0X9qECtUhuy3aC0jXk--vvm6F74',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-19',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2002', date: '04-19',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小狗', year: '2002', date: '05-30',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '08-23',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-07-15' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'BpjfSMGREzxQwu5O0X9qECtUhuy3aC0jXk--vvm6F74',

  CALLBACK_USERS: [
    {
      name: 'wxd4522f48313bdbe2',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ohwtR6ZEaSkMUC7AcJVGs9E3acx8',
    }
  ],

}

module.exports = USER_CONFIG

