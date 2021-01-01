import crawler from '@pierreminiggio/youtube-channel-links-crawler'

/**
 * @param {string} channelId 
 * 
 * @returns {Promise<string>}
 */
export default function (channelId) {
    return new Promise(async (resolve, reject) => {
        try {
            const links = await crawler(channelId)
            const twitterBaseUri = 'https://twitter.com/'
            links.forEach(link => {
                if (link.includes(twitterBaseUri)) {
                    resolve(link.split(twitterBaseUri)[1])
                }
            })

            resolve(null)
        } catch (e) {
            reject(e)
        }
    })
}
