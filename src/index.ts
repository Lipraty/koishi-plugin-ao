import { Context, Schema, h } from 'koishi'

export const name = 'ao'

export interface Config { probability: number }

export const Config: Schema<Config> = Schema.object({ probability: Schema.number().role('slider').min(1).max(100).step(1).default(30).description('吃掉的概率！') })

export function apply(ctx: Context, cfg: Config) {
    ctx.i18n.define('zh', require('./locales/zh.yaml'))
    ctx.before('send', (session) => {
        if (Math.ceil(Math.random() * 100) <= cfg.probability) session.elements = [h('', [session.text('ao.swallow')])] 
    })
}
