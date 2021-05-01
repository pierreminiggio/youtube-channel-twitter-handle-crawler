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
            const twitterBaseUris = [
                'https://www.twitter.com/',
                'http://www.twitter.com/',
                'https://twitter.com/',
                'http://twitter.com/',
                'https://www.Twitter.com/',
                'http://www.Twitter.com/',
                'https://Twitter.com/',
                'http://Twitter.com/'
            ]
            twitterBaseUris.forEach(twitterBaseUri => {
                links.forEach(link => {
                    if (link.includes(twitterBaseUri)) {
                        resolve(
                            link.split(
                                twitterBaseUri
                            )[1].replace(
                                '#!\/',
                                ''
                            ).split(
                                '?'
                            )[0]
                        )
                        return
                    }
                })
            })

            resolve(null)
        } catch (e) {
            reject(e)
        }
    })
}
