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
            const links = await scraper(channelId, false)
            resolve(links)
        } catch (e) {
            reject(e)
        }
    })
}
