import { RichText } from 'prismic-dom'

export function getProjectByNode(node: any) {
  return {
    title: node?.title,
    description: RichText.asText(node?.description),
    liveurl: node?.liveurl,
    giturl: node?.giturl,
    uid: node._meta?.uid,
    banner: node.banner?.url,
    images: node.images.map((image: any) => ({
      url: image.image.url,
      alt: image.image.alt
    }))
  }
}
