import type { AppInfo } from '@/types/app'
export const APP_ID = `${process.env.NEXT_PUBLIC_APP_ID}`
export const API_KEY = `${process.env.NEXT_PUBLIC_APP_KEY}`
export const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`
export const APP_INFO: AppInfo = {
  title: '憨包助手',
  description: '来自科大讯飞的星火大模型 感谢云上月枫下叶的搭建',
  copyright: '云上月枫下叶',
  privacy_policy: '网络不是非法之地，劝你谨言慎行',
  default_language: 'zh-Hans',
}

export const isShowPrompt = true
export const promptTemplate = 'I want you to act as a javascript console.'

export const API_PREFIX = '/api'

export const LOCALE_COOKIE_NAME = 'locale'

export const DEFAULT_VALUE_MAX_LEN = 48
