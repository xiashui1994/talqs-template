/**
 * 默认的试题显示组件
 * 遍历配置对象的 question 字段，插入子模板
 * 详情参见 config/template.js
 */

import { stylePrefix } from '../config/style';

import { question } from '../config/template';

export default
`<div class="${stylePrefix}">
  {{ each config.templates['${question}'] }}
    {{include $value}}
  {{/each}}
</div>
`
