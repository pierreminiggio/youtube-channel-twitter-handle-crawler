import scraper from './src/scraper.js'

/**
 * @typedef {string} twitterHandle

 * @param {string} channelId 
 * 
 * @returns {Promise<twitterHandle>}
 */
export default function (channelId) {
    return new Promise(async (resolve, reject) => {
        try {
            const handle = await scraper(channelId, false)
            resolve(handle)
        } catch (e) {
            reject(e)
        }
    })
}
