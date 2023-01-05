/** @format */

const siteURL = new URL(process.env.NEXT_PUBLIC_SITE_URL)

export const siteUrl = siteURL.href
export const generateRobotsTxt = true
export const exclude = []